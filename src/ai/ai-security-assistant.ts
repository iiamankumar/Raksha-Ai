// A chatbot to answer cybersecurity questions and provide guidance.

'use server';

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
  prompt: `You are a cybersecurity expert. A user will ask a question about cybersecurity, and you should provide a helpful and informative answer.\n\nUser query: {{{query}}}`,
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
