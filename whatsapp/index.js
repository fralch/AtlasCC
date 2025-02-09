const express = require('express');
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const client = new Client();

client.on('qr', (qr) => {
    // Genera y muestra el código QR en la terminal
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Cliente listo!');
});

client.on('message', async (msg) => {
    if (msg.body.toLowerCase() === 'confirmar') {
        await msg.reply('Cita confirmada');
    }
});

client.initialize();

app.post('/send-message', async (req, res) => {
    const { numero, mensaje } = req.body;

    console.log('Enviando mensaje:', numero, mensaje);

    if (!numero || !mensaje) {
        return res.status(400).json({ error: 'Se requiere número y mensaje' });
    }

    try {
        await client.sendMessage(`${numero}@c.us`, mensaje);
        res.status(200).json({ message: 'Mensaje enviado' });
    } catch (err) {
        console.error('Error al enviar el mensaje:', err);
        res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
