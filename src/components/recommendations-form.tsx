"use client";

import { useFormState, useFormStatus } from "react-dom";
import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getRecommendationsAction } from "@/actions/ai";
import type { PreventativeRecommendationsOutput } from "@/ai/flows/preventative-recommendations";
import { Card, CardContent } from "@/components/ui/card";

const initialState: PreventativeRecommendationsOutput | null = null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Generating..." : <><ShieldCheck className="mr-2 h-4 w-4" /> Get Recommendations</>}
    </Button>
  );
}

export function RecommendationsForm() {
  const [state, formAction] = useFormState(
    getRecommendationsAction,
    initialState
  );

  return (
    <form action={formAction} className="grid gap-6">
      <Textarea
        name="userDescription"
        placeholder="e.g., 'I run a small e-commerce site and I'm worried about payment fraud.' or 'How can I secure my family's home WiFi network?'"
        rows={6}
        required
      />
      <div className="flex justify-end">
        <SubmitButton />
      </div>
      {state?.recommendations && (
        <Card>
            <CardContent className="p-6">
                 <div
                    className="prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: state.recommendations.replace(/\n/g, '<br />'),
                    }}
                />
            </CardContent>
        </Card>
      )}
    </form>
  );
}
