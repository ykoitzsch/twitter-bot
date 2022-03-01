import { TwitterApi } from "twitter-api-v2";
import { CONFIG } from "../config";

// Instanciate with desired auth type (here's Bearer v2 auth)
const client = new TwitterApi(CONFIG.twitter.bearer);

// Tell typescript it's a readonly app
const roClient = client.readOnly;

export const fetchTweet = async (id: string) => {
  const tweet = await roClient.v2.singleTweet(id);
  return tweet;
};

export const fetchAnswersToTweet = async (account: string, tweetId: string) => {
  const query = "to:" + account;
  return await roClient.v2.search(query, {
    "tweet.fields": "conversation_id",
    since_id: tweetId,
  });
};
