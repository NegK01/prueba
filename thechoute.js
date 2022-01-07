   // - - - - 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔 - - - -\\
  // Si modificas recuerda dejar  \\
 //     Los Creditos               \\
//////////// 𝕿𝖍𝖊 𝕮𝖍𝖔𝖚𝖙𝖊  \\\\\\\\\\\\\

const { 
  WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  prepareMessageFromContent, 
  Browsers,
  processTime
  } = require("@adiwajshing/baileys")
  const fs = require('fs');
  const prefix = '.'
const crypto = require("crypto-js");        
const CryptoJS = require("crypto-js");
const ffmpeg = require("fluent-ffmpeg");
const chalk = require('chalk');
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const axios = require('axios');
const fetch = require('node-fetch');
const request = require('request');
const fromBuffer = require('file-type');
const FormData = require('form-data')
//const zalgo = require('./lib/zalgo')
const { spawn, exec, execSync } = require("child_process");
const moment = require("moment-timezone");
const yts = require('yt-search')
const LeoGg = require('google-it');
const LeoGgImg = require('g-i-s');
const hx = require('hxz-api');
const {convertSticker} = require("./lib/swm.js")
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const chatban = JSON.parse(fs.readFileSync('./src/ban.json'))
const conn = require("./lib/connect")
const wa = require("./lib/wa")
const Exif = require('./lib/exif');
const exif = new Exif();
const { color } = require("./lib/color");
const {  getBuffer, h2k,  generateMessageID, getGroupAdmins,  getRandom, banner,  start,  info, success, close,} = require("./lib/functions");
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
const {y2mateA, y2mateV} = require('./lib/y2mate.js')
const help = require("./lib/help")
const postBuffer = help.postBuffer
//const getBuffer = help.getBuffer
//const getRandom = help.getRandomExt
const postJson = help.postJson
const getJson = help.getJson
const { isFiltered, addFilter } = require('./lib/Addfilter')
const { jadibot, stopjadibot, listjadibot } = require('./lib/serbot')
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
const fake = 'Leon'
var public = config.public
const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))



    
leo.on('chat-update', async(choute) => {
  try {
      if (!choute.hasNewMessage) return
      if (!choute.messages) return
      if (choute.key && choute.key.remoteJid == 'status@broadcast') {}
choute = choute.messages.all()[0]
choute.message = (Object.keys(choute.message)[0] === 'ephemeralMessage') ? choute.message.ephemeralMessage.message : choute.message
      if (!choute.message) return
  const from = choute.key.remoteJid
  const type = Object.keys(choute.message)[0]        
  const quoted = type == 'extendedTextMessage' && choute.message.extendedTextMessage.contextInfo != null ? choute.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
  const typeQuoted = Object.keys(quoted)[0]
  const content = JSON.stringify(choute.message)
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const body = choute.message.conversation || choute.message[type].caption || choute.message[type].text || "" 
  chats = (type === 'conversation') ? choute.message.conversation : (type === 'extendedTextMessage') ? choute.message.extendedTextMessage.text : ''
  budy = (type === 'conversation' && choute.message.conversation.startsWith(prefix)) ? choute.message.conversation : (type == 'imageMessage') && choute.message.imageMessage.caption.startsWith(prefix) ? choute.message.imageMessage.caption : (type == 'videoMessage') && choute.message.videoMessage.caption.startsWith(prefix) ? choute.message.videoMessage.caption : (type == 'extendedTextMessage') && choute.message.extendedTextMessage.text.startsWith(prefix) ? choute.message.extendedTextMessage.text : ''
  var _0x56fb=["\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x44\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74","\x6D\x65\x73\x73\x61\x67\x65","","\x6B\x65\x79\x73","\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x62\x61\x73\x65\x36\x34","\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36"];resbutton= (type== _0x56fb[0])?choute[_0x56fb[2]][_0x56fb[0]][_0x56fb[1]]:_0x56fb[3];const commandstik=Object[_0x56fb[4]](choute[_0x56fb[2]])[0]== _0x56fb[5]?choute[_0x56fb[2]][_0x56fb[5]][_0x56fb[7]].toString(_0x56fb[6]):_0x56fb[3]
  selectedButton = (type == 'buttonsResponseMessage') ? choute.message.buttonsResponseMessage.selectedButtonId : ''

  const reply = (teks) => {leo.sendMessage(from, teks, text, {sendEphemeral: true, quoted: choute})}

  const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}

switch (command) {

  case 'tts':
    case 'voz':
               if (args.length < 1) return leo.sendMessage(from, 'Y el codigo de idioma? escribe el comando *idiomas* para ver la lista', text, { quoted: choute })
              const gtts = require('./lib/installpc')(args[0])
                if (args.length < 2) return leo.sendMessage(from, 'Escribe el texto', text, {quoted: choute})
                dtt = body.slice(8)
                dtt.length > 300
              
            addFilter(from)
          break

}
} catch (e) {const emror = String(e)
  if (emror.includes('convert')){ 
  return
  }
  if (emror.includes('this.isZero')){ 
  return
  }	
  if (emror.includes('fileLength')){                           
  return
  }
  if (emror.includes('jid')){                           
  return
  }
  console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[  ERROR  ]"), chalk.keyword("red")(e))
  }
  })
