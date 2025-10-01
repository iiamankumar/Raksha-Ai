"use server";

import { analyzeNetworkTraffic, AnalyzeNetworkTrafficInput, AnalyzeNetworkTrafficOutput } from "@/ai/flows/ai-powered-threat-detection";
import { getPreventativeRecommendations, PreventativeRecommendationsInput, PreventativeRecommendationsOutput } from "@/ai/flows/preventative-recommendations";

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
