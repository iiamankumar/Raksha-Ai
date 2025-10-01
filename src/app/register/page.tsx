import Image from 'next/image';
import { RegisterForm } from '@/components/register-form';
import Logo from '@/components/logo';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
       <div className="hidden bg-primary/10 lg:block relative">
        <Image
          src="https://picsum.photos/seed/raksha-signup/1200/1000"
          alt="Abstract security pattern"
          data-ai-hint="digital security"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" />
         <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/50 backdrop-blur-md rounded-lg border">
            <h3 className="text-2xl font-bold text-primary-foreground">Join the Mission for a Safer Digital India</h3>
            <p className="text-primary-foreground/80 mt-2">
              By creating an account with Raksha AI, you are taking the first step towards securing your digital life. Our platform offers advanced tools and personalized insights to protect you from cyber threats.
            </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[380px] gap-6">
          <div className="grid gap-2 text-center">
             <div className="flex justify-center items-center gap-2 mb-4">
              <Logo className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold font-headline">Create an Account</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Enter your details below to get started.
            </p>
          </div>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
