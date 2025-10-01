'use server';

/**
 * @fileOverview AI tool provides recommendations that inform the user on best practices to mitigate future cyber threats and vulnerabilities.
 *
 * - getPreventativeRecommendations - A function that generates security recommendations based on user input.
 * - PreventativeRecommendationsInput - The input type for the getPreventativeRecommendations function.
 * - PreventativeRecommendationsOutput - The return type for the getPreventativeRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PreventativeRecommendationsInputSchema = z.object({
  userDescription: z
    .string()
    .describe(
      'A description of the users current setup, concerns, and any known vulnerabilities.'
    ),
});
export type PreventativeRecommendationsInput = z.infer<
  typeof PreventativeRecommendationsInputSchema
>;

const PreventativeRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A list of actionable recommendations to mitigate future cyber threats and vulnerabilities.'
    ),
});
export type PreventativeRecommendationsOutput = z.infer<
  typeof PreventativeRecommendationsOutputSchema
>;

export async function getPreventativeRecommendations(
  input: PreventativeRecommendationsInput
): Promise<PreventativeRecommendationsOutput> {
  return preventativeRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'preventativeRecommendationsPrompt',
  input: {schema: PreventativeRecommendationsInputSchema},
  output: {schema: PreventativeRecommendationsOutputSchema},
  prompt: `You are a cybersecurity expert providing actionable recommendations.

  Based on the user's description, provide a list of best practices to mitigate future cyber threats and vulnerabilities. Recommendations should be clear, concise, and actionable.

  User Description: {{{userDescription}}}`,
});

const preventativeRecommendationsFlow = ai.defineFlow(
  {
    name: 'preventativeRecommendationsFlow',
    inputSchema: PreventativeRecommendationsInputSchema,
    outputSchema: PreventativeRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
