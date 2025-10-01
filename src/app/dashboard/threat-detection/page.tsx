import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThreatDetectionForm } from "@/components/threat-detection-form";

export default function ThreatDetectionPage() {
  return (
    <div className="flex justify-center items-start pt-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered Threat Detection</CardTitle>
          <CardDescription>
            Paste network traffic data, logs, or any text-based data below to
            analyze it for phishing attempts, malware, or other suspicious
            activities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ThreatDetectionForm />
        </CardContent>
      </Card>
    </div>
  );
}
