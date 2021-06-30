const nodemailer = require('nodemailer');
require('dotenv').config();
const mail = {
    user: process.env.USER,
    pass: process.env.PASS
}
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: mail.user, // generated ethereal user
        pass: mail.pass, // generated ethereal password
    },
});

const sendEmail = async (email, subject, html) => {
    try {
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `<${mail.user}>`, // sender address
            to: email, // list of receivers
            subject, // Subject line
            text: "Hola verifca tu correo", // plain text body
            html, // html body
        });
    } catch (error) {
        console.log('Error con el correo ', error)
    }
}

const getTemplate = (name, token) => {
    return `
    <head>
    <style>
        * {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        
        p {
            text-align: justify;
        }
        
        .logo {
            background-color: black;
            color: white;
            padding: 5px;
            text-align: center;
        }
        
        .content {
            padding: 0px 10px;
            border: 1px solid black;
        }
    </style>
</head>

<div id="email___content" class="contenedor">
    <div class="logo">
        <h2>${process.env.NAME_APP}</h2>
    </div>
    <div class="content">
        <p>Hola, ${name}</p>
        <p>
            Te damos la bienvenida a ${process.env.NAME_APP}. Para garantizar la seguridad de tu cuenta, verifica tu dirección de correo electrónico en el siguiente elace
            <a href="http://localhost:4000/user/confirm/${token}" target="_blank">App count confirm</a
      >. Desde ahora tendrás acceso a multitud de servicios, como:
    </p>
    <ul>
      <li>
      ${process.env.SERVICE1}
      </li>
      <li>
      ${process.env.SERVICE2}
      </li>
      <li>
      ${process.env.SERVICE3}
      </li>
    </ul>
    <p>Saludos.</p>
  </div>
</div>
    `
}
module.exports = {
    sendEmail
    , getTemplate
}