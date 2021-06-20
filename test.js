var nodemailer=require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cryptxsadh@gmail.com',
        pass: 'sarthak01'
    }
});
const mailOptions = {
        from: 'cryptxsadh@gmail.com', // sender address
        to: 'aakashsangwan024@gmail.com', // list of receivers
        subject: 'New Test Released', // Subject line
        html: `abcd`// plain text body
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });