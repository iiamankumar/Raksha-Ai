"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Sparkles, Loader2, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getRecommendationsAction } from "@/actions/ai";
import type { PreventativeRecommendationsOutput } from "@/ai/flows/preventative-recommendations";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { threatAlertsData } from "@/lib/mock-data";

const initialState: PreventativeRecommendationsOutput | null = null;

const mockSecurityData = threatAlertsData.slice(0, 5).map(alert => 
  `${alert.timestamp} | ${alert.type} | ${alert.severity} Severity | ${alert.details}`
).join('\n');


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full text-base py-6">
      {pending ? <> <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating... </> : <><Wand2 className="mr-2 h-5 w-5" /> Generate Insights </>}
    </Button>
  );
}

export function RecommendationsForm() {
  const [state, formAction] = useActionState(
    getRecommendationsAction,
    initialState
  );
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="grid md:grid-cols-2 gap-6 items-start">
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Your Security Data</CardTitle>
                <CardDescription>This is a sample of recent security events used to generate your insights.</CardDescription>
            </CardHeader>
            <CardContent>
                <input type="hidden" name="userDescription" value={mockSecurityData} />
                <div className="text-sm bg-muted/50 rounded-lg p-4 font-mono whitespace-pre-wrap h-80 overflow-y-auto">
                    {mockSecurityData}
                </div>
                 <div className="mt-4">
                    <SubmitButton />
                </div>
            </CardContent>
        </Card>
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span>AI-Powered Insights</span>
                </CardTitle>
                 <CardDescription>Personalized suggestions to help you improve your security posture.</CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex flex-col justify-center items-center">
                 {pending ? (
                     <div className="flex flex-col items-center gap-4 text-muted-foreground">
                        <Loader2 className="h-8 w-8 animate-spin text-primary"/>
                        <p>Analyzing your data...</p>
                    </div>
                ) : state?.recommendations ? (
                    <div className="prose prose-sm dark:prose-invert max-w-none h-full overflow-y-auto"
                        dangerouslySetInnerHTML={{ __html: state.recommendations.replace(/\n/g, '<br />') }}
                    />
                ) : (
                    <div className="text-center text-muted-foreground">
                        <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                        <h3 className="font-semibold text-lg text-foreground/80">Unlock your security potential</h3>
                        <p>Click "Generate Insights" to receive personalized advice from our AI assistant.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    </form>
  );
}
