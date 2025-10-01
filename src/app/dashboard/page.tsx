import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ShieldCheck, FileScan, Bot } from "lucide-react";
import ThreatsChart from "@/components/threats-chart";
import ThreatAlerts from "@/components/threat-alerts";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Threats Neutralized
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,204</div>
            <p className="text-xs text-muted-foreground">
              +15.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Vulnerabilities Patched
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              +5 since last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <svg
              className="h-4 w-4 text-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">92%</div>
            <p className="text-xs text-muted-foreground">Excellent standing</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Monitors</CardTitle>
            <FileScan className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Network and endpoint protection
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Threat Overview</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ThreatsChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Threat Alerts</CardTitle>
            <CardDescription>
              High-priority threats detected recently.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ThreatAlerts />
          </CardContent>
        </Card>
      </div>
       <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Access our core security tools with a single click.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link href="/dashboard/threat-detection" passHref>
              <Button variant="outline" className="w-full h-full p-4 flex flex-col items-start text-left gap-2">
                <FileScan className="h-6 w-6 text-primary" />
                <span className="font-semibold">Analyze Traffic</span>
                <span className="text-sm text-muted-foreground font-normal">Check logs or data for malicious activity.</span>
              </Button>
            </Link>
             <Link href="/dashboard/recommendations" passHref>
              <Button variant="outline" className="w-full h-full p-4 flex flex-col items-start text-left gap-2">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="font-semibold">Get Recommendations</span>
                <span className="text-sm text-muted-foreground font-normal">Receive AI-powered security advice.</span>
              </Button>
            </Link>
            <Link href="/dashboard/assistant" passHref>
             <Button variant="outline" className="w-full h-full p-4 flex flex-col items-start text-left gap-2">
                <Bot className="h-6 w-6 text-primary" />
                <span className="font-semibold">Ask AI Assistant</span>
                <span className="text-sm text-muted-foreground font-normal">Get instant answers to your security questions.</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
    </div>
  );
}
