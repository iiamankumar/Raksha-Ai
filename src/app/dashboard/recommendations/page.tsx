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
    <div className="flex justify-center items-start pt-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Preventive Recommendations</CardTitle>
          <CardDescription>
            Describe your current setup, digital habits, or security concerns to
            receive AI-generated recommendations for mitigating future threats.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecommendationsForm />
        </CardContent>
      </Card>
    </div>
  );
}
