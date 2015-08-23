'use strict';

var express = require('express'),
    router = express.Router();

router.get('/_hc', function (req, res, next) {
    res.json({status: 200});
});

router.get('/login', function (req, res, next) {
    res.json({status: 200, type: 'login'});
});

router.post('/signup', function (req, res, next) {
    var body = req.body;
    
    res.json({status: 200, data: body}); 
});

router.post('/update/:id', function (req, res, next) {
    var id = req.params.id,
        body = req.body;
    
    res.json({status: 200, id: id, data: body});
})

module.exports = router;
