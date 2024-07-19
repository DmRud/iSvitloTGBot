import TelegramApi from "node-telegram-bot-api";

const app = ()=>{
  const bot = new TelegramApi(process.env.BOT_TOKEN || "1234", {polling: true})

  bot.on("message", (msg) =>{
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg)
    bot.sendMessage(chatId, `echo text: ${text}`);
  })
};

export { app };
