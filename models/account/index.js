var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose'),
    Account = new Schema({
        username: {type: String, required: true, unique: true},
        passphrase: {type: String}
    });

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
