//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "gamer10ayan@gmail.com";
global.location = "Dhaka, Bangladesh";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Dhaka";
global.github = process.env.GITHUB || "https://github.com/AyanBot10/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/+8801631486512";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "8801631486512";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUtvQ2VCUnJsOXZycnhEYWRRZG9ZWXB6ZE15T0pQWHBxSzAwb0FXbGpIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXEzQUdBLzV2cld6RlJndHpqVWxOcWlqRmsrdUdic2ZsMXdOWFN6NUNXVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRVpteWd3ODdXN3dDYlg0TEZUeVBZMmMwZ2UvWW5RUENzaHhYR3NWMVhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRVdoOHNVY2lsSC94Nnp2cm1nd1Q0THczVDMyLzVCWm5MVS8yOC82L21nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHU0FTdDJyTkRMNm00bnJLN3RQYTFPa09kNHJKOTVsT0lnNkROcG5FSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5mU3hBMmtRbzhhUXZWNlI5VnZFQ3k0Q1JYcEkrT25SQlNDOGVmQVpMbFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1aamxGNzI3aWsyQ2VuOGpaVG0xSXhSejF3WmlWdStzdWcwWWxHN2kyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBIdGo3MlQvZDRiQ0R2Nm0vd3ZXdlZiUzMwQ3A1YWVOaUpZcW9YSkZCWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpWVHB1dTJQelBjS3VvbmVRNFMvU0hoZHVNdDcvYm05d2g4NmRpTUkrL3BVU1cwd1NPQXZ5eVdjT1NQVVE4NkFFWDVIcHJRMk5Ra0xuRnRLdi9FcURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6ImxIdFJrS0xtTnhSMTNWQ0g5RWpKRFpKT1ZxZlVJeHBENlBZalU3WkRnZ3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTg5MjM5MzQ4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNjgzN0NBMkVCOUJBMTQ2RkE5QUFEMTVCNTgxQTAzQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3NjE3MTkwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI4ODAxODkyMzkzNDg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBCQTRDRkQyNjAyNjRFRkFDOTM0ODgwNDYwRDZEODVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc2MTcxOTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpscXkwd1FWUmxlZC1teFJsaDlDeEEiLCJwaG9uZUlkIjoiNzQ1NzRiNDItOGNlMi00NDA0LThkMjUtOWIzNmQ4ZjM1NmY4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZFWnh3dEExWUtzajR6OG1tSWtiZWYxMW10dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLY2ttb2ZhcjhQcTdWa0JybE5MZ0I1QVNKcHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjRTWlpYOTEiLCJtZSI6eyJpZCI6Ijg4MDE4OTIzOTM0ODc6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBeWFuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYUQ0TVVCRUpheDViY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxaFhuMnE3NDVvZEExREhFL2V4RkV0MjNIV2RxYXROU082c0twanUvV0RVPSIsImFjY291bnRTaWduYXR1cmUiOiIvblh1NVpNN0NydFBuYnhQYU1PWkgxaHdkRW92ZitlSHNBNXpmNGhaUDFleDRic3VBV0tvVVVzUGdPNDQ0UHk4UFNFT3kyZUFJb3daMzNPeEN2S1BBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV2lSNis2V2o5Nnhxb2V5NnZ2RyszMStOT25DYllvQXFvU1lhWFlZRWVDWUhUR0ZxcXI3Yk94TVFjaFYvKzNHS0VXcitMYklDUzFjUFJYUDIzcUhlQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI4ODAxODkyMzkzNDg3OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFlWNTlxdStPYUhRTlF4eFAzc1JSTGR0eDFuYW1yVFVqdXJDcVk3djFnMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzYxNzE4OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEdG4ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`A Y A N`",
  author: process.env.PACK_AUTHER || "A Y A N",
  packname: process.env.PACK_NAME || "A Y A N",
  botname: process.env.BOT_NAME || "A Y A N",
  ownername: process.env.OWNER_NAME || "Ayan Alvi",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
