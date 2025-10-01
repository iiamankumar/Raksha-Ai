'use server';
/**
 * @fileOverview An AI-powered threat detection flow.
 *
 * - analyzeNetworkTraffic - A function that analyzes network traffic for malicious code.
 * - AnalyzeNetworkTrafficInput - The input type for the analyzeNetworkTraffic function.
 * - AnalyzeNetworkTrafficOutput - The return type for the analyzeNetworkTraffic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeNetworkTrafficInputSchema = z.object({
  networkTrafficData: z.string().describe('Network traffic data to analyze.'),
});
export type AnalyzeNetworkTrafficInput = z.infer<typeof AnalyzeNetworkTrafficInputSchema>;

const AnalyzeNetworkTrafficOutputSchema = z.object({
  isMalicious: z.boolean().describe('Whether the network traffic is malicious.'),
  threatType: z.string().describe('The type of threat detected, if any.'),
  warningMessage: z.string().describe('A warning message to display to the user.'),
});
export type AnalyzeNetworkTrafficOutput = z.infer<typeof AnalyzeNetworkTrafficOutputSchema>;

export async function analyzeNetworkTraffic(input: AnalyzeNetworkTrafficInput): Promise<AnalyzeNetworkTrafficOutput> {
  return analyzeNetworkTrafficFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeNetworkTrafficPrompt',
  input: {schema: AnalyzeNetworkTrafficInputSchema},
  output: {schema: AnalyzeNetworkTrafficOutputSchema},
  prompt: `You are a cybersecurity expert analyzing network traffic data for malicious activity.

  Analyze the following network traffic data and determine if it contains any phishing attempts or malware.

  Network Traffic Data: {{{networkTrafficData}}}

  If the network traffic is malicious, identify the type of threat and generate a warning message to display to the user.
  If the network traffic is not malicious, indicate that it is safe and provide an empty string for the threat type and warning message.

  Return a JSON object with the following fields:
  - isMalicious: true if the network traffic is malicious, false otherwise.
  - threatType: The type of threat detected (e.g., phishing, malware), or an empty string if no threat is detected.
  - warningMessage: A warning message to display to the user if a threat is detected, or an empty string if no threat is detected.
  `,
});

const analyzeNetworkTrafficFlow = ai.defineFlow(
  {
    name: 'analyzeNetworkTrafficFlow',
    inputSchema: AnalyzeNetworkTrafficInputSchema,
    outputSchema: AnalyzeNetworkTrafficOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
