//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU02Z01wQjFtOUpBVVUrSjV0S2hGWWFHTmd1UFBqOFpsRVozQitqclEzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZytndzBtY3BRdFBiYjFKYmloeFIvMW9ZcE1zc3loMDFaN0dMaGxPUmp4OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTVRlM1h1NnpxYjlMaURzRGlpdENCTVhZOVFvd0hyMHhBWnZoSDdNYjBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPejhFSzI5TnE3N0FSenUzbm5WNXozaWVFVXBXY1lSQ2hJR1lUYTJ5b0NrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCSW9FMVUvdDM3dFgwVU9Ja3VCQVpBcW1EQlNKQlpPRzMrS0huTk5NMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDeXQrQzdMRi9vTkFFbVRqRXo2Z2Q4VnZjbGIxaDVTQTdPR1ZmWlVNWHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0c4cGkweGtzeWR5RkxLeEd6RXpwWjAySzQzRDJkUnhaUEZVOUhPQzZIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialJhL3lsM09KT0VPL1BQVVIvSlByOTBVWm5JK2hFRStJSVRCcFVjN2l5Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9jWXVhUmNPREpLeVpRRGtKaVEyZDFSbkhvZ2t3RmlzYmpsTFI1cklmUFpLdWFtUnJFd0NsWVEwWlUyT1d6U1NqSU1ic3NkTm1na3BXVnB2RTQxZ0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IloxcG90elovbTBHcjJkQjZIVFNRcmZsNFVpdm4wUlZzK3JybVFpUUxZaGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTIwMzkyOTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IjNBNzBDNjk5RDQxRkZEOTFCRjAxIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjUwMDQ3MjB9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTEw3UERXU0MiLCJtZSI6eyJpZCI6IjIyODkyMDM5MjkzOjI0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjgwMDg4MTM4NTIyNzY2OjI0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnlZOHRnUEVKNnJ6OGtHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicGxLSmtLUkFRNjVnRGVERnN4c2FHaHpjdDEzKzlXdXhBU1hGdjJHK0ZEYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUTIzZ1lteUFqeUc0OTBlaWdiSTJhT2RZYWZYQVZJOVhwbWlvMTU0N2lnWnlaZVpnSFF6M1RyeHBkV0FQcWpscWczY2Q1akRpSzZVbkY2RGMrTUxlakE9PSIsImRldmljZVNpZ25hdHVyZSI6ImtXM1RJWVZLSlkrME5IQW11blp6YnZGNExvb2tzcStIeGMrWmJybHU5U3B3QzFic1ordjkxNWJ5d3p6KzV1K1lHQmJWRkNPSGNEWUNTeWpabzBLK0NBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjgwMDg4MTM4NTIyNzY2OjI0QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhWlNpWkNrUUVPdVlBM2d4Yk1iR2hvYzNMZGQvdlZyc1FFbHhiOWh2aFEzIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZ2dTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NTAwNDcxNiwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKaEMifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'Shadow-Bot' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '22892039293' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['22892039393', '22897339278'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Nathan Art' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Lome';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Nathan" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || ""

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©shadow-Mangaka', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
