"use client";

import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { FileScan, AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { analyzeTrafficAction } from "@/actions/ai";
import type { AnalyzeNetworkTrafficOutput } from "@/ai/flows/ai-powered-threat-detection";

const initialState: AnalyzeNetworkTrafficOutput | null = null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Analyzing..." : <> <FileScan className="mr-2 h-4 w-4" /> Analyze Now </>}
    </Button>
  );
}

export function ThreatDetectionForm() {
  const [state, formAction] = useActionState(analyzeTrafficAction, initialState);

  return (
    <form action={formAction} className="grid gap-6">
      <Textarea
        name="networkTrafficData"
        placeholder="e.g., GET /malicious.exe HTTP/1.1 Host: evil.com..."
        rows={10}
        required
      />
      <div className="flex justify-end">
        <SubmitButton />
      </div>
      {state && (
        <Alert variant={state.isMalicious ? "destructive" : "default"}>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>
            {state.isMalicious ? `Threat Detected: ${state.threatType}` : "Analysis Complete: No Threats Found"}
          </AlertTitle>
          <AlertDescription>
            {state.isMalicious
              ? state.warningMessage
              : "Our analysis did not find any indicators of malicious activity in the provided data."}
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}
