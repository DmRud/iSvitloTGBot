"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const app = () => {
    const bot = new node_telegram_bot_api_1.default(process.env.BOT_TOKEN || "1234", { polling: true });
    bot.on("message", (msg) => {
        const text = msg.text;
        const chatId = msg.chat.id;
        console.log(msg);
        bot.sendMessage(chatId, `echo text: ${text}`);
    });
};
exports.app = app;
