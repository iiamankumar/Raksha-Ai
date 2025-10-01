"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  FileScan,
  Bot,
  ShieldCheck,
  Home,
  BookUser,
} from "lucide-react";

import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/dashboard/threat-detection", icon: FileScan, label: "Threat Detection" },
  { href: "/dashboard/recommendations", icon: ShieldCheck, label: "Recommendations" },
  { href: "/dashboard/assistant", icon: Bot, label: "AI Assistant" },
  { href: "/dashboard/awareness-hub", icon: BookUser, label: "Awareness Hub" },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 px-2">
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href}>
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
