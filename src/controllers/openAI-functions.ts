import { openAIClient } from '../helpers/openAIClient/openAI-api-client';

/**
 * Get a Life tip using OpenAI's GPT-3 API.
 */
export const getRandomSubject = async () => {
  try {
    const prompt = getRandomSubjectText();

    const completionResponse = await openAIClient.createCompletion({
      model: 'text-davinci-002',
      prompt,
      max_tokens: 250,
      temperature: 0.5
    });

    return {
      completionResponse,
      prompt
    };
  } catch (error) {
    console.log(error);
  }
};

const getRandomSubjectText = (): string => {
  const randomOption = getRandomOption(1, 3);

  switch (randomOption) {
    case 1:
      return `Un consejo para una vida saludable es:`;
    case 2:
      return `Sabias que:`;
    case 3:
      return `Life tip:`;
  }
};

const getRandomOption = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
