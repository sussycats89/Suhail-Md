const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+919362599250";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_37_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgODcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJodDZoelc5UXkvcjUrVHFaRzdTeCtWaXFGcjc2QTVFTVVwNThNWWhzRkxZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTM2MjU5OTI1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTgyRjVDMDMwNDlEN0Q0QzgzQzNDRDNDNThCRUIyNjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MzU3ODYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MzYyNTk5MjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MjVFRTVGRkVDNjAxMTU3MTg0N0U5NUJENDUxM0MyQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgzNTc4NjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaDlOeV9FY3VUb0N5ZnNHX2EtVUYwQVwiLFxuICBcInBob25lSWRcIjogXCIyYjg5NjhhZi1kZGRlLTRhNTMtYWQzMS00ODlkNmI5NDJjOGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgNixcbiAgICAgIDEyMSxcbiAgICAgIDM0LFxuICAgICAgMTUwLFxuICAgICAgNjMsXG4gICAgICA3MyxcbiAgICAgIDE2MSxcbiAgICAgIDkyLFxuICAgICAgMTc0LFxuICAgICAgMjM1LFxuICAgICAgMTM0LFxuICAgICAgMjAzLFxuICAgICAgMTMxLFxuICAgICAgMjMyLFxuICAgICAgNzIsXG4gICAgICA2NCxcbiAgICAgIDAsXG4gICAgICAyMDEsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgNjksXG4gICAgICA4MixcbiAgICAgIDEzNSxcbiAgICAgIDc2LFxuICAgICAgMjMxLFxuICAgICAgMjI1LFxuICAgICAgMTQxLFxuICAgICAgMTk2LFxuICAgICAgMTk0LFxuICAgICAgNTksXG4gICAgICA0NyxcbiAgICAgIDUwLFxuICAgICAgMjA3LFxuICAgICAgMjQsXG4gICAgICA1NCxcbiAgICAgIDE3LFxuICAgICAgMTgzLFxuICAgICAgMTA2LFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFhGNDJUNjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTM2MjU5OTI1MDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc2OTEzOTA1OTk5OTQ2OjEzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJvdHRlbj9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLWFBqN2NERU42ZXNMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQxN2VMVFpFbThSaCtxT3gycENUQWVYSDZ6K1o1aUZZZHQwVDlNb01QVjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMG1seUZoR0hGWVFmL0N5YnFxRFAwR0pNTURwUzB0QkpkZEtDSDV3QWkwYlVoSkNwVm9EemdLeHF3c0ZWZWdFUUxkdnVGczZPWVlYK2ZjdkxTOWJwQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK0IxN0pRRHc5bDB0N2xzazk4MVFHYlU1V2ZDYmUyZE8xMVBkVms5bXRqZU9ZUnNGaENsTFRGVkVGS01HbHE0emhQMkYxREQrUndKMGNWeDVMSmNZZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MzYyNTk5MjUwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM1Nzg1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx4WVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHhZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUdJYmw2N29RRytKV2tzTTBRNXZ2NFRDTjBrUGdLQzBQVnp6UmZZVEE5ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MjA5MDU2MzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==
  "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
