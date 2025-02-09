const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    // Genera y muestra el código QR en la terminal
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Cliente listo!');

    // Envía un mensaje a un número específico
    const numero = '51907222338'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
    const mensaje = 'Hola, este es un mensaje de prueba!';

    // Envía el mensaje
    client.sendMessage(numero + '@c.us', mensaje).then(response => {
        console.log('Mensaje enviado:', response);
    }).catch(err => {
        console.error('Error al enviar el mensaje:', err);
    });
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();
