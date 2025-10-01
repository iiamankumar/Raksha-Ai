import Image from 'next/image';
import { LoginForm } from '@/components/login-form';
import Logo from '@/components/logo';

export default function Home() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
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
            Empowering a secure digital India.
          </div>
        </div>
      </div>
      <div className="hidden bg-primary/10 lg:block relative">
        <Image
          src="https://picsum.photos/seed/raksha-ai/1200/1000"
          alt="Abstract security pattern"
          data-ai-hint="abstract security"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" />
         <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/50 backdrop-blur-md rounded-lg border">
            <h3 className="text-2xl font-bold text-primary-foreground">Comprehensive Digital Shield</h3>
            <p className="text-primary-foreground/80 mt-2">
              Raksha AI integrates AI-powered threat detection, real-time monitoring, and proactive recommendations to provide a holistic security solution for individuals and businesses across India.
            </p>
        </div>
      </div>
    </div>
  );
}
