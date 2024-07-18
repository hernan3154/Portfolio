const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Asegúrate de que tu archivo HTML esté en una carpeta llamada 'public'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    //secure: false, // true para el puerto 465, falso para otros puertos
    auth: {
       
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.post('/send-email', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).json({ message: `Error al enviar el correo: ${error}` });
           
        }
      
        res.status(200).json({ message: 'Correo enviado exitosamente' });
        alert(info)
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
