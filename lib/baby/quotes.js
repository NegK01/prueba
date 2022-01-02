const {fromMe, from} = require (".../Neg")

const janza = {
    key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
    "productMessage": {
    "product": {
    "productImage":{
    "mimetype": "image/jpeg",
    "jpegThumbnail": fs.readFileSync(`./media/imagen/fake.jpg`)
    },
    "title": `Neg|NegBot`,
    "description": "",
    "currencyCode": "NIUSES",
    "priceAmount1000": "999999999999999999",
    "retailerId": "",
    "productImageCount": 999
    },
    "businessOwnerJid": `0@s.whatsapp.net`
    }
    }
    }
    contextInfo: {
    mentionedJid: [sender]}

    const menuall = {
      key:
      { fromMe: false,
      participant: `0@s.whatsapp.net`, ...(from ?
      { remoteJid: "status@broadcast" } : {}) },
      message: { "videoMessage": { "caption":"⚜️ *TODOS LOS COMANDOS* ⚜️", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
      }
      contextInfo: {
      mentionedJid: [sender]}

      const qmiembros = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"⚜️ *MENU PARA TODOS* ⚜️", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}
        
      const brillo = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"⚜️ *MENU PARA ADMIN* ⚜️", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}

      const juegosc = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"⚜️ *TODOS LOS COMANDOS* ⚜️", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}

        const fimg = {
          key:
          { fromMe: false,
          participant: `0@s.whatsapp.net`, ...(from ?
          { remoteJid: "status@broadcast" } : {}) },
          message: { "imageMessage": { "mimetype": "image/jpeg","caption": `Neg`, 'jpegThumbnail': fs.readFileSync('./src/help.jpg')}}
          }
          contextInfo: {
          mentionedJid: [sender]}

          const cnal = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ?
            { remoteJid: "status@broadcast" } : {}) },
            message: { "videoMessage": { "caption":"⚜️ Neg ⚜️", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
            }
            contextInfo: {
            mentionedJid: [sender]}
            module.exports = {
                janza, menuall, qmiembros, brillo, fimg, cnal
            }