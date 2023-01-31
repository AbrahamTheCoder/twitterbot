import { twitterClient } from '../helpers/twitter-client/twitter-api-client';

/**
 * Tweet a text using Twitter's API.
 */
export const updateStatus = async (text: string, image?: boolean) => {
  try {

    if(image) {
        //Add and load image
    }
    const tweetResponse = await twitterClient.tweets.statusesUpdate({
        status: text,
    });

    return tweetResponse;
  } catch (error) {
    console.log(error);
  }
};
