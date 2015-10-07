module.exports = {
    email: process.env.EMAIL || false,
    mongo: process.env.MONGO_URL,
    port: process.env.PORT || 5800,
    sendMail: {
        from: process.env.EMAIL_FROM,
        bcc: process.env.EMAIL_BCC,
        subject: process.env.EMAIL_SUBJECT
    }
};
