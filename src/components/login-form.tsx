"use client";

import { useState, useActionState } from "react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { KeyRound, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { login } from "@/actions/auth";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Signing In..." : "Sign In"}
    </Button>
  );
}

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(login, initialState);
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    setOtpSent(true);
    toast({
      title: "OTP Sent",
      description: "A one-time password has been sent to your phone (this is a demo).",
    });
  };
  
  if (state.success) {
    router.push("/dashboard");
  } else if (state.message) {
      if(state.message !== initialState.message) {
        toast({
            variant: "destructive",
            title: "Login Failed",
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
        <Label htmlFor="phone">Phone Number</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required className="pl-10" />
        </div>
      </div>

      {otpSent ? (
        <div className="grid gap-2">
          <Label htmlFor="otp">OTP</Label>
          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="otp" name="otp" type="text" placeholder="123456" required className="pl-10" />
          </div>
        </div>
      ) : (
        <Button type="button" variant="outline" onClick={handleSendOtp}>Send OTP</Button>
      )}

      {otpSent && <SubmitButton />}

    </form>
  );
}
