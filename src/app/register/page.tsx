import Image from 'next/image';
import { RegisterForm } from '@/components/register-form';
import Logo from '@/components/logo';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2 bg-background text-foreground">
       <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-muted/20 relative">
        <div className="absolute top-6 left-6 flex items-center gap-2 text-2xl font-bold">
           <Logo className="h-8 w-8 text-primary" />
           <span>Raksha AI</span>
        </div>
        <Image
          src="https://picsum.photos/seed/raksha-signup/800/800"
          alt="Abstract security illustration"
          data-ai-hint="digital security"
          width={500}
          height={500}
          className="rounded-full shadow-2xl shadow-primary/20"
        />
        <div className="mt-8 max-w-md text-center">
            <h3 className="text-2xl font-bold">Join the Mission for a Safer Digital India</h3>
            <p className="text-muted-foreground mt-2">
              By creating an account with Raksha AI, you are taking the first step towards securing your digital life. Our platform offers advanced tools and personalized insights to protect you from cyber threats.
            </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 px-4">
        <div className="mx-auto grid w-[380px] gap-6">
          <div className="grid gap-2 text-center">
             <div className="flex justify-center items-center gap-2 mb-4 lg:hidden">
              <Logo className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details below to get started.
            </p>
          </div>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/" className="underline text-primary">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
