import axios from "axios";
import dotenv from "dotenv";
import { DecathlonItem } from "./types";

dotenv.config();

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
const PRODUCT_API_URL = process.env.PRODUCT_API_URL!;

async function checkStock() {
  try {
    const response = await axios.get<DecathlonItem[]>(PRODUCT_API_URL);

    const inStock = response.data?.some(item => item.IsAvailable);

    if (inStock) {
      await sendTelegramMessage("🚨 Product is now in stock");
    } else {
      console.log("❌ Still out of stock.");
    }
  } catch (error) {
    console.error("Error checking stock:", (error as Error).message);
		await sendTelegramMessage("Error checking stock");
  }
}

async function sendTelegramMessage(message: string) {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    await axios.get(url, {
      params: {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      },
    });
    console.log("✅ Telegram message sent");
  } catch (error) {
    console.error("Failed to send Telegram message:", (error as Error).message);
  }
}

checkStock();
