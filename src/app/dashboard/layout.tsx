import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Logo from "@/components/logo";
import { DashboardNav } from "@/components/dashboard-nav";
import { UserNav } from "@/components/user-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 text-sidebar-primary" />
            <h1 className="text-xl font-bold font-headline text-sidebar-foreground">
              Raksha AI
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <DashboardNav />
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 text-xs text-sidebar-foreground/50">
            © {new Date().getFullYear()} Raksha AI
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-2">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
             {/* Can add breadcrumbs here */}
          </div>
          <UserNav />
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:pb-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
