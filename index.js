const TelegramAPI = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TOKEN;
const bot = new TelegramAPI(token, { polling: true });

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  console.log(msg);
  if (text === "/ogir") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/1.webp"
    );
  }
  if (text === "/yiglatadigan") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/2.webp"
    );
  }
  if (text === "/rasvo") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/3.webp"
    );
  }
  if (text === "/hursandqiladigan") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/4.webp"
    );
  }
  if (text === "/sovuq") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/5.webp"
    );
  }
  if (text === "/kulguli") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/6.webp"
    );
  }
  if (text === "/zor") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp"
    );
  }
  if (text === "/kallamishladi") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/8.webp"
    );
  }
});
