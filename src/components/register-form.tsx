"use client";

import { useState } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { KeyRound, Phone, Mail, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { register } from "@/actions/auth";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={pending}>
      {pending ? "Creating Account..." : "Create Account"}
    </Button>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [state, formAction] = useActionState(register, initialState);
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission
    const form = e.currentTarget.closest('form');
    if (form && form.checkValidity()) {
      setOtpSent(true);
      toast({
        title: "OTP Sent",
        description: "A one-time password has been sent to your phone (this is a demo).",
      });
    } else {
        toast({
            variant: "destructive",
            title: "Missing Information",
            description: "Please fill out all fields before sending the OTP.",
        })
    }
  };
  
  if (state.success) {
    toast({
      title: "Account Created!",
      description: "Redirecting you to the dashboard...",
    });
    router.push("/dashboard");
  } else if (state.message) {
      // A simple way to avoid showing the toast on initial render
      if(state.message !== initialState.message) {
        toast({
            variant: "destructive",
            title: "Registration Failed",
            description: state.message || "An unexpected error occurred.",
          });
      }
  }

  return (
    <form
      action={formAction}
      className="grid gap-4"
    >
        <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="email" name="email" type="email" placeholder="name@example.com" required className="pl-10" disabled={otpSent}/>
            </div>
        </div>
        <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required className="pl-10" disabled={otpSent}/>
            </div>
        </div>
        <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="password" name="password" type="password" required className="pl-10" disabled={otpSent}/>
            </div>
        </div>

      {otpSent ? (
        <div className="grid gap-4">
            <div className="grid gap-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="otp" name="otp" type="text" placeholder="123456" required className="pl-10" />
                </div>
            </div>
            <SubmitButton />
        </div>
      ) : (
        <Button type="button" variant="outline" onClick={handleSendOtp}>Send OTP</Button>
      )}

    </form>
  );
}
