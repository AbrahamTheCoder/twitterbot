import "dotenv/config";
// import { dbConnection } from "../lib/dbConnection";

const IS_LOCAL = process.env.IS_LOCAL === "true" ? true : false;

export const config = {
  IS_LOCAL,
//   PORT: process.env.PORT || "3000",
  NODE_ENV: process.env.NODE_ENV || "development",
  ENDPOINT_NOT_FOUND: "ENDPOINT_NOT_FOUND" as const,
//   APP_VERSION: process.env.npm_package_version || "0.0.0",
//   AUTH_SECRET: process.env.AUTH_SECRET,
  SALT_ROUNDS: 10, // These salt rounds help us encrypt passwords.
//   SERVER_URL: process.env.SERVER_URL || "dev.flightapi.com",
OPENAI_API_KEY: process.env.OPENAI_API_KEY.toString(),
TWITTER_API_KEY: process.env.TWITTER_API_KEY.toString(),
TWITTER_API_SECRET: process.env.TWITTER_API_SECRET.toString(),
TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN.toString(),
TWITTER_ACCESS_SECRET: process.env.TWITTER_ACCESS_SECRET.toString(),
TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN.toString(),
};