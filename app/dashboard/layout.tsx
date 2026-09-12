"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PackagePlus, Truck, FileText, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Commander", href: "/dashboard/commander", icon: PackagePlus },
    { name: "Suivi", href: "/dashboard/suivi", icon: Truck },
    { name: "Factures", href: "/dashboard/factures", icon: FileText },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 px-[clamp(20px,4vw,28px)] py-12 md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full shrink-0 md:w-64">
        <div className="sticky top-28 flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm">
          <div className="border-b border-line bg-paper-card px-6 py-5">
            <h2 className="text-lg font-bold text-ink">Espace Client</h2>
            <p className="text-xs text-muted">Alexandre Dupont</p>
          </div>
          
          <nav className="flex flex-col p-2">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-paper hover:text-ink"
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-4 border-t border-line p-2">
            <Link
              href="/dashboard/parametres"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-paper hover:text-ink"
            >
              <Settings size={18} strokeWidth={2} />
              Paramètres
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 hover:text-red-700"
            >
              <LogOut size={18} strokeWidth={2} />
              Déconnexion
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>
      
    </div>
  );
}
