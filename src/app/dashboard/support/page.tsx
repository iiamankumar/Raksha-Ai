import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Help & Support</CardTitle>
          <CardDescription>
            We're here to help. Find the best way to get in touch with our support team.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Our team is available to assist you with any questions or issues.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-sm text-muted-foreground">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:support@rakshaai.com" className="text-primary underline">
                  support@rakshaai.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone Support</h3>
                <p className="text-sm text-muted-foreground">
                  Talk to a support agent for immediate assistance. (Mon-Fri, 9am-6pm IST)
                </p>
                <a href="tel:+910000000000" className="text-primary underline">
                  +91-00-0000-0000
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find answers to common questions about our platform and services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
             <div className="font-semibold">How does Raksha AI detect threats?</div>
             <p className="text-muted-foreground">Raksha AI uses advanced machine learning models to analyze patterns in data and identify potential threats like malware and phishing in real-time.</p>
             <div className="font-semibold">Is my data secure with Raksha AI?</div>
             <p className="text-muted-foreground">Yes, we prioritize your privacy and security. All data is encrypted and handled with the strictest confidentiality protocols.</p>
             <div className="font-semibold">What should I do if I find a vulnerability?</div>
             <p className="text-muted-foreground">Please report any suspected vulnerabilities immediately through our support email. Our security team will investigate promptly.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
