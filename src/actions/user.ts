
"use server";

import { z } from "zod";

export async function updateProfile(prevState: any, formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
  });
  const validatedFields = schema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      message: "Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  // In a real app, you would update the user in the database
  return { message: "Profile updated successfully!", success: true };
}


export async function updateNotificationSettings(prevState: any, formData: FormData) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would update the settings in the database
    
    return { message: "Notification settings updated!", success: true };
}


export async function changePassword(prevState: any, formData: FormData) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const schema = z.object({
        currentPassword: z.string().min(1, "Current password is required"),
        newPassword: z.string().min(8, "New password must be at least 8 characters long"),
        confirmPassword: z.string(),
    }).refine((data) => data.newPassword === data.confirmPassword, {
        message: "New passwords do not match",
        path: ["confirmPassword"],
    });

    const validatedFields = schema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
            message: "Please check your input.",
            errors: validatedFields.error.flatten().fieldErrors,
            success: false,
        };
    }
    
    // In a real app, you would verify the current password and update it
    
    return { message: "Password changed successfully!", success: true };
}
