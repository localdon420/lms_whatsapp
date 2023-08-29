const { default: makeConn, DisconnectReason, BufferJSON, useMultiFileAuthState, MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys');
var { Boom } = require('@hapi/boom');
const fs = require('fs');

var sockClient = "";

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info_goyalinfocom');

  console.log(makeConn);

  sockClient = makeConn({
    printQRInTerminal: true,
    auth: state
  });

  sockClient.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
      console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
      // reconnect if not logged out
      if (shouldReconnect) {
        connectToWhatsApp();
      }
    } else if (connection === 'open') {
      console.log('opened connection');
      console.log('Logged in to');

    }
  })

  sockClient.ev.on('creds.update', saveCreds);

  sockClient.ev.on('messages.upsert', m => {
    var message = m?.messages[0].message?.conversation; 
    // console.log(JSON.stringify(m, undefined, 2));
        if(containsFourDigitNumber(message)){
            var code = message;
            console.log("attendence code is:" + message);

        }
        console.log("message is:" + message);

    


    // console.log('Logged in to', m.messages[0].key.remoteJid);
  })
}

function containsFourDigitNumber(inputString) {
    const regex = /^\d{4}$/;
    return regex.test(inputString);
  }

connectToWhatsApp();




function getJid(phone) {
  phone += "";
  var length = [...phone].length;;
  if (length == 10) {
    phone = "91" + phone;
  }

  if (!phone.includes('@s.whatsapp.net')) {
    phone = `${phone}@s.whatsapp.net`;
  }

  return phone;
}

