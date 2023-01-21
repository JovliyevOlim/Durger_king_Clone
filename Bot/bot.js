const {Telegraf} = require("telegraf")
const Token = '5949954215:AAF1fvtlgYOin4TTokgmeLZhpBSQ3YW53Z0'
const bot = new Telegraf(Token);
const web_link = "https://idyllic-buttercream-2fcfbf.netlify.app/";

bot.start((ctx) =>
    ctx.reply("Welcome", {
    reply_markup:{
        keyboard:[[{text:"web app",web_app:{url:web_link}}]]
    },
}));
bot.launch();
