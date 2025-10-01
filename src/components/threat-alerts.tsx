import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { threatAlertsData } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function ThreatAlerts() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Threat Type</TableHead>
          <TableHead>Severity</TableHead>
          <TableHead className="text-right">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {threatAlertsData.map((alert) => (
          <TableRow key={alert.id}>
            <TableCell className="font-medium">{alert.type}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={cn(
                  alert.severity === "Critical" && "bg-destructive text-destructive-foreground border-destructive",
                  alert.severity === "High" && "bg-accent text-accent-foreground border-accent",
                  alert.severity === "Medium" && "bg-yellow-500/20 text-yellow-500 border-yellow-500"
                )}
              >
                {alert.severity}
              </Badge>
            </TableCell>
            <TableCell className="text-right text-muted-foreground">{alert.timestamp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
