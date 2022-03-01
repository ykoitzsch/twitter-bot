import dotenv from "dotenv";

dotenv.config();

interface Config {
  twitter: {
    token: string;
    secret: string;
    bearer: string;
  };
}

export const CONFIG: Config = {
  twitter: {
    secret: process.env.TWITTER_API_SECRET || "",
    token: process.env.TWITTER_API_TOKEN || "",
    bearer: process.env.TWITTER_API_BEARER_TOKEN || "",
  },
};
