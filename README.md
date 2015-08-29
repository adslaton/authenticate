# Authenticate

A basic authentication service built with:

- [Node.js][node]
- [Express][express]
- [Mongo][mongo]
- [Passport][passport]

## Setup

- Define environment variables to be used in the configuration file (config.js)
```
module.exports = {
    email: process.env.EMAIL || false,
    mongo: process.env.MONGO_URL,
    port: process.env.PORT || 5800,
    sendMail: {
        from: '',
        subject: ''
    }
};
```

## Assumptions

- If email is enabled, it is assumed that smpt is listening on port 25


[node]: https://nodejs.org
[express]: http://expressjs.com/
[mongo]: https://www.mongodb.org/
[passport]: http://passportjs.org/
