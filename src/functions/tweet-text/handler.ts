import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { getRandomSubject } from "src/controllers/openAI-functions";
import { updateStatus } from "src/controllers/twitter-functions";
import schema from "./schema";

const tweetText: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const randomText = await getRandomSubject();

  let tweet = `${randomText.prompt}${randomText.completionResponse.data.choices[0].text}`;

//   if(tweet.length < 280) {
//     tweet = `${tweet} `;
//   }

  const tweetResponse = await updateStatus(tweet)

  console.log(`Choices List:${JSON.stringify(randomText.completionResponse.data.choices)}`)

  return formatJSONResponse({
    message: `Twitter Response: ${tweetResponse}`,
    event,
  });
};

export const main = middyfy(tweetText);
