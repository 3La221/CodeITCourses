'use client';
import Link from "next/link";
import {
  Home,
  LineChart,
  Menu,
  Settings,
  NotebookPen,
  Calendar,
  BookOpen,
  CircleUser
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggler from "@/components/ThemeToggler";
import { usePathname } from "next/navigation";
import Logo from "@/components/home/Logo";
import { getUser, logout } from "@/helpers/actions";
import { get } from "react-hook-form";
import { useRouter } from "next/navigation";

export function DashboardSideBar({ children }) {

  const sidebarItems = [
    { path: "/dashboard", icon: Home, title: "Main" },
    { path: "/dashboard/schedule", icon: Calendar, title: "Schedule" },
    { path: "/dashboard/my-courses", icon: BookOpen, title: "My Courses" },
    { path: "/dashboard/settings", icon: Settings, title: "Settings" },
  ];

  const user = getUser()
  const router = useRouter()

  const pathname = usePathname();

  return (
    <div className="mx-0 grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]" dir="ltr">
      <div className="hidden border-l bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Logo />
            
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {sidebarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`${pathname === item.path ? 'bg-muted text-primary' : 'text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Navigation Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                {sidebarItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className={`${pathname === item.path ? 'bg-muted text-primary' : 'text-muted-foreground'} flex items-center gap-3  rounded-lg px-3 py-2 transition-all hover:text-primary`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
               Hello 
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">User Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={()=>{
                logout(router)
              }}>
                
                Logout

              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggler />
        </header>

        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
