"use server";

import { analyzeNetworkTraffic, AnalyzeNetworkTrafficInput, AnalyzeNetworkTrafficOutput } from "@/ai/flows/ai-powered-threat-detection";
import { getPreventativeRecommendations, PreventativeRecommendationsInput, PreventativeRecommendationsOutput } from "@/ai/flows/preventative-recommendations";
import { aiSecurityAssistant, AiSecurityAssistantInput, AiSecurityAssistantOutput } from "@/ai/ai-security-assistant";

export async function analyzeTrafficAction(
  input: AnalyzeNetworkTrafficInput
): Promise<AnalyzeNetworkTrafficOutput> {
  try {
    const result = await analyzeNetworkTraffic(input);
    return result;
  } catch (error) {
    console.error("Error analyzing traffic:", error);
    return {
      isMalicious: false,
      threatType: "Error",
      warningMessage: "An error occurred while analyzing the data. Please try again.",
    };
  }
}

export async function getRecommendationsAction(
  input: PreventativeRecommendationsInput
): Promise<PreventativeRecommendationsOutput> {
    try {
        const result = await getPreventativeRecommendations(input);
        return result;
    } catch (error) {
        console.error("Error getting recommendations:", error);
        return {
            recommendations: "An error occurred while generating recommendations. Please try again."
        }
    }
}

export async function securityAssistantAction(
  input: AiSecurityAssistantInput
): Promise<AiSecurityAssistantOutput> {
  try {
    const result = await aiSecurityAssistant(input);
    return result;
  } catch (error) {
    console.error("Error with AI assistant:", error);
    return {
      answer: "I'm sorry, but I encountered an error. Please try again in a moment.",
    };
  }
}
