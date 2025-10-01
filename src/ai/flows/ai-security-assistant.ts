'use server';

/**
 * @fileOverview A chatbot to answer cybersecurity questions and provide guidance.
 *
 * - aiSecurityAssistant - A function that handles user queries about cybersecurity.
 * - AiSecurityAssistantInput - The input type for the aiSecurityAssistant function.
 * - AiSecurityAssistantOutput - The return type for the aiSecurityAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSecurityAssistantInputSchema = z.object({
  query: z.string().describe('The user query related to cybersecurity.'),
});
export type AiSecurityAssistantInput = z.infer<typeof AiSecurityAssistantInputSchema>;

const AiSecurityAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query.'),
});
export type AiSecurityAssistantOutput = z.infer<typeof AiSecurityAssistantOutputSchema>;

export async function aiSecurityAssistant(input: AiSecurityAssistantInput): Promise<AiSecurityAssistantOutput> {
  return aiSecurityAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSecurityAssistantPrompt',
  input: {schema: AiSecurityAssistantInputSchema},
  output: {schema: AiSecurityAssistantOutputSchema},
  prompt: `You are a cybersecurity expert assistant for a company called Raksha AI. Your role is to provide helpful and informative answers to user questions about cybersecurity.

You must only answer questions related to cybersecurity, digital safety, and online privacy.

If the user asks a question that is not about cybersecurity, you must politely decline and state that you can only answer questions about that topic.

Do not answer questions about other topics, even if you know the answer.

User query: {{{query}}}`,
});

const aiSecurityAssistantFlow = ai.defineFlow(
  {
    name: 'aiSecurityAssistantFlow',
    inputSchema: AiSecurityAssistantInputSchema,
    outputSchema: AiSecurityAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
