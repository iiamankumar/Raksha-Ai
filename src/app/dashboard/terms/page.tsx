import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms & Conditions</CardTitle>
          <CardDescription>
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardContent className="p-6 prose prose-sm dark:prose-invert max-w-none">
          <p>
            Welcome to Raksha AI. These terms and conditions outline the rules and regulations for the use of Raksha AI's Website, located at rakshaai.com.
          </p>

          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Raksha AI if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h4 className="font-semibold">1. License to Use</h4>
          <p>
            Unless otherwise stated, Raksha AI and/or its licensors own the intellectual property rights for all material on Raksha AI. All intellectual property rights are reserved. You may access this from Raksha AI for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from Raksha AI</li>
            <li>Sell, rent or sub-license material from Raksha AI</li>
            <li>Reproduce, duplicate or copy material from Raksha AI</li>
            <li>Redistribute content from Raksha AI</li>
          </ul>

          <h4 className="font-semibold">2. User Account</h4>
          <p>
            You are responsible for maintaining the security of your account, and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. You must immediately notify Raksha AI of any unauthorized uses of your account or any other breaches of security.
          </p>

          <h4 className="font-semibold">3. Limitation of Liability</h4>
          <p>
            In no event shall Raksha AI, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Raksha AI, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
          </p>
          
          <h4 className="font-semibold">4. Governing Law</h4>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
