const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=37gFmTBJ#3-kgx8wdiu9S_EchevAT6saPy9bGOfcvrLN9kdT5aJI",
MONGODB: process.env.MONGODB || "mongodb+srv://sadewdewmika10:<db_password>@cluster0.bldwa.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
