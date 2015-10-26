module.exports = {
    email: {
        enabled: process.env.EMAIL_ENABLED || false,
        enableSMTP: process.env.EMAIL_SMTP || false,
        transporter: {
            host: process.env.TRANSPORTER_HOST,
            port: process.env.TRANSPORTER_PORT,
            auth: {
                user: process.env.TRANSPORTER_AUTH_USER,
                pass: process.env.TRANSPORTER_AUTH_PASS
            }
        },
        sendMail: {
            from: process.env.EMAIL_FROM,
            replyTo: process.env.EMAIL_REPLYTO,
            bcc: process.env.EMAIL_BCC,
            subject: process.env.EMAIL_SUBJECT
        }
    },
    mongo: process.env.MONGO_URL,
    port: process.env.PORT || 5800
};
