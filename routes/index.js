'use strict';

var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    Account = require('../models/account');

router.get('/_hc', function (req, res, next) {
    res.status(200).json({status: 200});
});

router.get('/fail', function (req, res) {
    res.json({authenticate: false});
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/authenticate/fail'
}));

router.get('/logout', function (req, res) {
    req.logout();
    res.json({
        status: 200,
        authenticate: false,
        username: req.body.username,
        message: 'logout'
    });
});

router.post('/register', function (req, res) {
    Account.register(new Account({username: req.body.username}), req.body.password, function (err, account) {
        if (err) {
            return res.json(500, {status: 500, account: account});
        }

        passport.authenticate('local')(req, res, function () {
            return res.json({
                status: 200,
                authenticate: true,
                username: req.body.username,
                message: 'register'
            });
        });
    });
});

router.post('/reset', function (req, res) {
    var username = req.body.username;

    Account.findOne({username: username}, function (findError, account) {
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



router.post('/update/:id', function (req, res, next) {
    var id = req.params.id,
        body = req.body;

    res.status(200).json({status: 200, id: id, data: body});
});

module.exports = router;
