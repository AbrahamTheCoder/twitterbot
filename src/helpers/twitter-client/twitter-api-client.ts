import { TwitterClient } from 'twitter-api-client';
import { config } from '../../config';

export const twitterClient = new TwitterClient({
    apiKey: config.TWITTER_API_KEY,
    apiSecret: config.TWITTER_API_SECRET,
    accessToken: config.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: config.TWITTER_ACCESS_SECRET,
});