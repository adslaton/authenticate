'use strict';

var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    Account = require('../models/account'),
    nodemailer = require('nodemailer'),
    config = require('../config.js'),
    transporter;

if (config.email) {
    transporter = nodemailer.createTransport();
}

/**
 * Sends an email to a user so they can retreive their password
 */ 
function sendMail (req) {
    transporter.sendMail({
        from: config.sendMail.from,
        to: req.body.username,
        subject: config.sendMail.subject,
        text: 'Username: ' + req.body.username + ' Password: ' + req.body.password
    });
}

router.get('/_hc', function (req, res, next) {
    res.json({
        status: 200,
        name: 'authenticate'
    });
});

router.post('/login', function (req, res, next) {
    Account.findOne(new Account({username: req.body.username}), req.body.password, function (err, account) {
        if (err) {
            return res.json({authenticate: false, login: false, error: err.message});
        }

        passport.authenticate('local', function(err, user, info) {
            if (err) {
                return res.json({authenticate: false, login: false, message: err.message});
            }
            if (!user) { 
                return res.json({authenticate: false, login: false});
            }
            return res.json({authenticate: true, login: true});
        })(req, res, next);
    });
});

router.get('/logout', function (req, res) {
    req.logout();
    res.json({
        status: 200,
        authenticate: false,
        username: req.body.username,
        message: 'logout'
    });
});

router.post('/register', function (req, res, next) {
    Account.register(new Account({username: req.body.username}), req.body.password, function (err, account) {
        if (err) {
            return res.json({authenticate: false, register: false, error: err.message});
        }

        passport.authenticate('local', function(err, user, info) {
            if (err) {
                return res.json({authenticate: false, register: false, message: err.message});
            }
            if (!user) { 
                return res.json({authenticate: false, register: false});
            }
            if (config.email) {
                sendMail(req);
            }
            return res.json({authenticate: true, register: true});
        })(req, res, next);
    });
});

router.post('/reset', function (req, res) {
    var username = req.body.username,
        passphrase = req.body.passphrase;

    Account.findOne({username: username, passphrase: passphrase}, function (findError, account) {
        if (findError) {
            return res.status(500).json({
                status: 500,
                message: findError
            });
        }
        account.setPassword(req.body.password, function (resetError, resetAccount) {
            if (resetError) {
                return res.status(500).json({
                    status: 500,
                    authenticate: false,
                    username: username,
                    message: resetError
                });
            }
            account.save(function (saveError) {
                if (saveError) {
                    return res.status(500).json({
                        status: 500,
                        authenticate: true,
                        username: username,
                        message: saveError
                    });
                }
                if (config.email) {
                    sendMail(req);
                }
                return res.json({
                    status: 200,
                    authenticate: true,
                    username: username,
                    message: 'reset'
                });
            });
        });
    });
});


module.exports = router;
