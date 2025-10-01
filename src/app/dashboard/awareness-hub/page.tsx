import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, Siren, KeyRound, Wifi } from "lucide-react";

const awarenessTopics = [
  {
    title: "Understanding Phishing Scams",
    icon: <Siren className="h-5 w-5 text-destructive" />,
    content: "Phishing is a fraudulent attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising as a trustworthy entity in an electronic communication. Common signs include unexpected emails, urgent requests, generic greetings, and suspicious links or attachments. Always verify the sender and hover over links to check the actual destination before clicking."
  },
  {
    title: "Creating Strong Passwords",
    icon: <KeyRound className="h-5 w-5 text-primary" />,
    content: "A strong password is your first line of defense. It should be long (at least 12 characters), complex (include uppercase and lowercase letters, numbers, and symbols), and unique for each account. Avoid using personal information like birthdays or names. Consider using a password manager to generate and store complex, unique passwords for all your accounts securely."
  },
  {
    title: "Securing Your Home Wi-Fi",
    icon: <Wifi className="h-5 w-5 text-green-600" />,
    content: "An unsecured Wi-Fi network is an open door for intruders. Secure your network by changing the default router admin password, using a strong and unique password for your Wi-Fi (with WPA3 or WPA2 encryption), changing your network name (SSID), and disabling remote management. Also, keep your router's firmware updated to protect against the latest vulnerabilities."
  },
    {
    title: "Recognizing Malware Threats",
    icon: <ShieldCheck className="h-5 w-5 text-accent" />,
    content: "Malware, or malicious software, includes viruses, ransomware, spyware, and more. It can be distributed through malicious downloads, email attachments, or infected websites. Protect yourself by installing reputable antivirus software, keeping your operating system and applications updated, being cautious about what you download, and regularly backing up your important files to an external drive or cloud service."
  }
];

export default function AwarenessHubPage() {
  return (
    <div className="flex flex-col gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl">Cybersecurity Awareness Hub</CardTitle>
                <CardDescription>Knowledge is your best defense. Learn about common threats and how to protect yourself.</CardDescription>
            </CardHeader>
        </Card>

        <Accordion type="single" collapsible className="w-full">
            {awarenessTopics.map((topic, index) => (
                <Card key={index} className="mb-4">
                    <AccordionItem value={`item-${index}`} className="border-b-0">
                        <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline">
                           <div className="flex items-center gap-4">
                             {topic.icon}
                             <span>{topic.title}</span>
                           </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                           <div className="prose prose-sm dark:prose-invert max-w-none">
                            {topic.content}
                           </div>
                        </AccordionContent>
                    </AccordionItem>
                </Card>
            ))}
        </Accordion>
    </div>
  );
}
