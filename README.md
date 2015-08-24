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
    mongo: 'YOUR_MONGO_URL',
    port: process.env.PORT || 5800
};
```


[node]: https://nodejs.org
[express]: http://expressjs.com/
[mongo]: https://www.mongodb.org/
[passport]: http://passportjs.org/
