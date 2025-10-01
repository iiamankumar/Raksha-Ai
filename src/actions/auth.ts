"use server";

import { redirect } from "next/navigation";

export async function login(prevState: { message: string }, formData: FormData) {
  const phone = formData.get("phone");
  const otp = formData.get("otp");

  // Mock validation
  if (!phone || !otp) {
    return { message: "Phone number and OTP are required.", success: false };
  }

  if (otp !== "123456") {
    return { message: "Invalid OTP. Please use '123456' for this demo.", success: false };
  }
  
  // In a real app, you would verify the OTP and create a session
  
  return { success: true };
}

export async function logout() {
  // In a real app, you would destroy the session
  redirect("/");
}
