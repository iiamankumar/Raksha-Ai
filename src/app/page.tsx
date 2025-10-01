import Image from 'next/image';
import { LoginForm } from '@/components/login-form';
import Logo from '@/components/logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileScan, Bot, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Raksha AI</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#login" passHref>
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/register" passHref>
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-16 text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center min-h-screen">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            India's Future of Security is Here.
          </h1>
          <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground mb-8">
            Seamless threat detection, intelligent monitoring, and AI-driven insights—all in one app designed to elevate your digital safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mx-auto lg:mx-0">
            <Link href="/register" passHref className="flex-1">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Join Raksha Now &rarr;</Button>
            </Link>
            <Link href="/dashboard" passHref className="flex-1">
              <Button size="lg" variant="outline" className="w-full">Explore Features</Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center mt-12 lg:mt-0 relative">
          <div className="w-full max-w-sm">
            <div className="relative rounded-[2.5rem] border-4 border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 z-10 flex justify-center items-end p-2">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
                <div className="p-4 pt-10 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">U</div>
                      <div>
                        <p className="text-sm text-slate-400">Welcome back,</p>
                        <p className="font-bold">Demo User</p>
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4 text-center mb-6">
                    <p className="text-sm text-slate-400">Security Score</p>
                    <p className="text-3xl font-bold text-primary">92%</p>
                  </div>
                  <div className="flex justify-around mb-6">
                    <div className="text-center"><div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-6 h-6"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg></div><p className="text-xs">Scan</p></div>
                    <div className="text-center"><div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div><p className="text-xs">Shield</p></div>
                    <div className="text-center"><div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0_0_24_24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-6 h-6"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg></div><p className="text-xs">History</p></div>
                    <div className="text-center"><div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-6 h-6"><path d="m12.83-1.17 6 6a2 2 0 0 1 0 2.83l-11.5 11.5a2 2 0 0 1-2.83 0l-6-6a2 2 0 0 1 0-2.83l6.5-6.5" /><path d="m3 21 6-6" /><path d="m18 1-6 6" /></svg></div><p className="text-xs">Alerts</p></div>
                  </div>

                   <div>
                    <p className="font-bold mb-2">Recent Activity</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg></div><div><p className="font-medium">Phishing Blocked</p><p className="text-xs text-slate-400">Malicious Link</p></div></div><p className="font-mono text-red-400">- Threat</p></div>
                      <div className="flex justify-between items-center"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0_0_24_24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div><div><p className="font-medium">Scan Complete</p><p className="text-xs text-slate-400">System Scan</p></div></div><p className="font-mono text-green-400">+ Safe</p></div>
                       <div className="flex justify-between items-center"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div><div><p className="font-medium">Password Breach</p><p className="text-xs text-slate-400">Data Leak</p></div></div><p className="font-mono text-red-400">- Alert</p></div>
                    </div>
                  </div>
                </div>
            </div>
            {/* Phone glow effect */}
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="absolute top-1/2 left-1/2 w-2/3 h-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20"></div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-primary/10 text-primary font-semibold py-1 px-3 rounded-full text-sm mb-4">
            Core Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need, Nothing You Don't</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
            Raksha AI is packed with powerful tools to help you manage your digital security with confidence and ease.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/30 p-8 rounded-xl shadow-lg border border-border">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6 mx-auto">
                <FileScan className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Threat Detection</h3>
              <p className="text-muted-foreground">
                Our AI analyzes files, logs, and network traffic to identify and neutralize threats in real-time.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl shadow-lg border border-border">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6 mx-auto">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Recommendations</h3>
              <p className="text-muted-foreground">
                Get personalized, actionable security advice based on your specific needs and digital habits.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl shadow-lg border border-border">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6 mx-auto">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
              <p className="text-muted-foreground">
                Your on-demand cybersecurity expert, ready to answer your questions and guide you through any security concern.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="login" className="py-16 lg:hidden">
         <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Logo className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold font-headline">Raksha AI</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Your partner in navigating India's digital landscape safely.
            </p>
          </div>
          <LoginForm />
           <div className="mt-4 text-center text-sm">
            Don't have an account?{' '}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
          <div className="text-center text-sm">
            Empowering a secure digital India.
          </div>
        </div>
      </section>
    </div>
  );
}
