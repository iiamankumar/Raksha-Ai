"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileScan,
  Bot,
  Home,
  BookUser,
  LifeBuoy,
  FileText,
  Settings,
  Sparkles,
} from "lucide-react";

import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/dashboard/threat-detection", icon: FileScan, label: "Threat Detection" },
  { href: "/dashboard/recommendations", icon: Sparkles, label: "AI Insights" },
  { href: "/dashboard/assistant", icon: Bot, label: "AI Assistant" },
  { href: "/dashboard/awareness-hub", icon: BookUser, label: "Awareness Hub" },
];

const secondaryNavItems = [
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    { href: "/dashboard/support", icon: LifeBuoy, label: "Help & Support" },
    { href: "/dashboard/terms", icon: FileText, label: "Terms & Conditions" },
]

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 px-2">
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
            <Link href={item.href} className="w-full">
                <SidebarMenuButton
                isActive={pathname === item.href}
                tooltip={item.label}
                className="justify-start"
                >
                <item.icon className="h-5 w-5" />
                <span className="text-base">{item.label}</span>
                </SidebarMenuButton>
            </Link>
        </SidebarMenuItem>
      ))}
      <hr className="my-2 border-sidebar-border" />
       {secondaryNavItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} className="w-full">
            <SidebarMenuButton
              isActive={pathname === item.href}
              tooltip={item.label}
              className="justify-start"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-base">{item.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </div>
  );
}
