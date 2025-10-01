"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  changePassword,
  updateNotificationSettings,
  updateProfile,
} from "@/actions/user";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Lock, Bell, Shield } from "lucide-react";

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : children}
    </Button>
  );
}

export default function SettingsForm() {
    const { toast } = useToast();

    const [profileState, updateProfileAction, isProfilePending] = useActionState(updateProfile, null);
    const [notificationsState, updateNotificationsAction, isNotificationsPending] = useActionState(updateNotificationSettings, null);
    const [passwordState, changePasswordAction, isPasswordPending] = useActionState(changePassword, null);

    useEffect(() => {
        if (profileState?.success) {
            toast({ title: "Success", description: profileState.message });
        } else if (profileState?.message && !profileState.success) {
             toast({ variant: "destructive", title: "Error", description: profileState.message });
        }
    }, [profileState]);

     useEffect(() => {
        if (notificationsState?.success) {
            toast({ title: "Success", description: notificationsState.message });
        }
    }, [notificationsState]);

    useEffect(() => {
        if (passwordState?.success) {
            toast({ title: "Success", description: passwordState.message });
        } else if (passwordState?.message && !passwordState.success) {
             toast({ variant: "destructive", title: "Error", description: passwordState.message });
        }
    }, [passwordState]);

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">
          <User className="mr-2 h-4 w-4" /> Profile
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell className="mr-2 h-4 w-4" /> Notifications
        </TabsTrigger>
        <TabsTrigger value="security">
          <Shield className="mr-2 h-4 w-4" /> Security
        </TabsTrigger>
      </TabsList>

      {/* Profile Tab */}
      <TabsContent value="profile">
        <Card>
          <form action={updateProfileAction}>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="name" name="name" defaultValue="Demo User" className="pl-10"/>
                </div>
                 {profileState?.errors?.name && <p className="text-sm text-destructive">{profileState.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                 <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" name="email" type="email" defaultValue="user@example.com" className="pl-10"/>
                </div>
                {profileState?.errors?.email && <p className="text-sm text-destructive">{profileState.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" name="phone" type="tel" defaultValue="+91 98765 43210" className="pl-10"/>
                </div>
                {profileState?.errors?.phone && <p className="text-sm text-destructive">{profileState.errors.phone[0]}</p>}
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <SubmitButton>Save Changes</SubmitButton>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      {/* Notifications Tab */}
      <TabsContent value="notifications">
        <Card>
          <form action={updateNotificationsAction}>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage how you receive notifications from Raksha AI.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <Label htmlFor="security-alerts" className="font-bold">Critical Security Alerts</Label>
                  <p className="text-xs text-muted-foreground">Receive real-time alerts for critical threats like malware or breaches.</p>
                </div>
                <Switch id="security-alerts" name="security_alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <Label htmlFor="weekly-summary" className="font-bold">Weekly Security Summary</Label>
                   <p className="text-xs text-muted-foreground">Get a weekly email digest of your security status and insights.</p>
                </div>
                <Switch id="weekly-summary" name="weekly_summary" defaultChecked />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                 <div>
                  <Label htmlFor="product-updates" className="font-bold">Product Updates</Label>
                  <p className="text-xs text-muted-foreground">Receive news and updates about new features and improvements.</p>
                </div>
                <Switch id="product-updates" name="product_updates" />
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <SubmitButton>Save Preferences</SubmitButton>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      {/* Security Tab */}
      <TabsContent value="security">
        <Card>
          <form action={changePasswordAction}>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password for enhanced security. Choose a strong, unique password.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                 <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="current-password" name="currentPassword" type="password" className="pl-10"/>
                </div>
                 {passwordState?.errors?.currentPassword && <p className="text-sm text-destructive">{passwordState.errors.currentPassword[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="new-password" name="newPassword" type="password" className="pl-10"/>
                </div>
                 {passwordState?.errors?.newPassword && <p className="text-sm text-destructive">{passwordState.errors.newPassword[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                 <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="confirm-password" name="confirmPassword" type="password" className="pl-10"/>
                </div>
                {passwordState?.errors?.confirmPassword && <p className="text-sm text-destructive">{passwordState.errors.confirmPassword[0]}</p>}
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <SubmitButton>Update Password</SubmitButton>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
