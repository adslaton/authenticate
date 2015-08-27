# Authenticate

A basic authentication service built with:

- [Node.js][node]
- [Express][express]
- [Mongo][mongo]
- [Passport][passport]

## Setup

- Create config.js in the root
- Define config.js
```
module.exports = {
	email: true
    mongo: 'YOUR_MONGO_URL',
    port: process.env.PORT || 5800,
    sendMail: {
        from: 'SENDERS_EMAIL',
        subject: 'SUBJECT LINE'
    }
};
```

## Assumptions

- If email is enabled, it is assumed that smpt is listening on port 25


[node]: https://nodejs.org
[express]: http://expressjs.com/
[mongo]: https://www.mongodb.org/
[passport]: http://passportjs.org/
