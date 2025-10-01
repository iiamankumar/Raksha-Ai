"use server";

import { redirect } from "next/navigation";

export async function login(prevState: { message: string, success: boolean }, formData: FormData) {
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
  
  redirect("/dashboard")
}

export async function register(prevState: { message: string, success: boolean }, formData: FormData) {
  const email = formData.get("email");
  const phone = formData.get("phone");
  const password = formData.get("password");
  const otp = formData.get("otp");

  if (!email || !phone || !password || !otp) {
    return { message: "All fields are required.", success: false };
  }

  if (otp !== "123456") {
    return { message: "Invalid OTP. Please use '123456' for this demo.", success: false };
  }

  // In a real app, you would create the user in the database
  
  redirect("/dashboard")
}


export async function logout() {
  // In a real app, you would destroy the session
  redirect("/");
}
