import { LoginForm } from '@/components/login-form';
import Logo from '@/components/logo';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
       <div className="flex items-center justify-center gap-2 mb-8">
        <Logo className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold">Raksha AI</span>
      </div>
      <div className="w-full max-w-sm">
        <div className="bg-muted/30 border border-border rounded-xl shadow-lg p-8">
            <div className="grid gap-2 text-center mb-6">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <p className="text-balance text-muted-foreground">
                Enter your credentials to access your account.
                </p>
            </div>
            <LoginForm />
            <div className="mt-6 text-center text-sm">
                Don't have an account?{' '}
                <Link href="/register" className="underline text-primary font-medium">
                Sign up
                </Link>
            </div>
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground mt-8">
        Empowering a secure digital India.
      </div>
    </div>
  );
}
