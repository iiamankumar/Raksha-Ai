import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecommendationsForm } from "@/components/recommendations-form";

export default function RecommendationsPage() {
  return (
    <div className="flex flex-col gap-6">
       <Card>
        <CardHeader>
          <CardTitle className="text-3xl">AI Insights</CardTitle>
          <CardDescription>
            Analyze your security events and get personalized, AI-powered suggestions to improve your digital safety.
          </CardDescription>
        </CardHeader>
      </Card>
      <RecommendationsForm />
    </div>
  );
}
