module.exports = {
	email: true,
    mongo: 'mongodb://copaair:accounts@ds035643.mongolab.com:35643/copa-accounts',
    port: process.env.PORT || 5800,
    sendMail: {
    	from: 'seguridad@copaair.com',
    	subject: 'Copaair Portal account'
    }
};