// src/components/app-wrapper.tsx (VintiePlus project)
"use client"; // <--- MUST BE AT THE VERY TOP

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Package,
  Home,
  Settings,
  BarChart,
  ClipboardList,
  FileText,
  LogIn,
  LogOut,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);

    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("authToken"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const hideSidebar = pathname === "/login" || pathname === "/register";

  return (
    <div className="flex min-h-screen">
      {!hideSidebar && (
        <aside className="w-64 flex flex-col p-4 border-r bg-card text-card-foreground shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 mb-6">
            <h1 className="text-xl font-bold text-primary">VintiePlus</h1>
          </div>
          <nav className="flex-1 space-y-2">
            <NavLink href="/dashboard" icon={<Home className="h-4 w-4" />} label="Dashboard" />
            <NavLink href="/monitor" icon={<Package className="h-4 w-4" />} label="Monitor" />
            <NavLink href="/manage-filters" icon={<ClipboardList className="h-4 w-4" />} label="Manage Filters" />
            <NavLink href="/analytics" icon={<BarChart className="h-4 w-4" />} label="Analytics" />
            <NavLink href="/edit-profile" icon={<User className="h-4 w-4" />} label="Edit Profile" />
            <NavLink href="/docs" icon={<FileText className="h-4 w-4" />} label="Docs" />
          </nav>
          <div className="mt-auto pt-4 border-t border-border space-y-2">
            {isLoggedIn ? (
              <Button
                variant="ghost"
                className="w-full justify-start text-base px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span className="ml-3">Logout</span>
              </Button>
            ) : (
              <>
                <NavLink href="/login" icon={<LogIn className="h-4 w-4" />} label="Login" />
                <NavLink href="/register" icon={<Settings className="h-4 w-4" />} label="Register" />
              </>
            )}
          </div>
        </aside>
      )}

      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start text-base px-3 py-2 transition-colors",
          isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
        )}
      >
        {icon}
        <span className="ml-3">{label}</span>
      </Button>
    </Link>
  );
}