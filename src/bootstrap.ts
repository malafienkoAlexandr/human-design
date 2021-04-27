import { initDb } from "./db/db";
import * as Font from "expo-font";

export async function bootstrap() {
  await initDb();
}
