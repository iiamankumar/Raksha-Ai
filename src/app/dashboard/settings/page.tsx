import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsForm from "@/components/settings-form";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl">Settings</CardTitle>
                <CardDescription>Manage your account settings, notification preferences, and security options.</CardDescription>
            </CardHeader>
        </Card>
        <SettingsForm />
    </div>
  );
}
