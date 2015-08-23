var express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next) {
    res.json({status: 200});
});

module.exports = router;
