import { fetchAnswersToTweet } from "./twitter";

const user = "";
const tweetId = "";

fetchAnswersToTweet(user, tweetId).then((tweet) => {
  console.log(tweet.data);
});
