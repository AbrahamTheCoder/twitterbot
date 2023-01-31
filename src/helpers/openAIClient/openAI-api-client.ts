import { Configuration, OpenAIApi } from 'openai';
import { config } from '../../config';

const openAIConfig = new Configuration({
    apiKey: config.OPENAI_API_KEY,
    organization: 'org-yMZVAWUIR6o7BpSgXh93rzAO',
});

export const openAIClient = new OpenAIApi(openAIConfig);