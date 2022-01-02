const { WAConnection, MessageType, Mimetype, } = require('@adiwajshing/baileys');
const fs = require('fs');
const conn = require("./lib/connect")
conn.connect()
const leo = conn.leo
leo.on('chat-update', async (choute));
const conts = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'

    const menu = `*_Neg Bot_*
    Usuario: ${pushname}
    Wa.me:wa.me/
    Hora: 
    
    *Grupos:* 
    _cg_
    _comag_
    
    *Descargas:*
    _dowloan_
    _descargas_
    _bajar_
    
    *Sticker:*
    _sticker_
    _st_
    _stiker_aa
        
    *Entretenimiento:*
    _entrenimiento_
    _entrete_
    _meaburro_
        
    *Creditos*
    _creador_`
    
    module.exports = {
        menu,
    } 
