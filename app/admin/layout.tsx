"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { ADMIN_NAV_ITEMS } from "@/lib/admin-nav";
import { createClient } from "@/lib/supabase/client";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="relative min-h-screen bg-[#FBFBFB]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 px-[clamp(20px,4vw,32px)] py-10 lg:flex-row">
        <aside className="hidden w-full shrink-0 lg:block lg:w-[280px]">
          <div className="sticky top-[96px] flex flex-col gap-6">
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="border-b border-line p-5">
                <span className="text-[15px] font-bold text-ink">Espace Admin</span>
              </div>
              <nav className="flex flex-col p-3">
                {ADMIN_NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group relative flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-[14px] font-semibold transition-all ${
                        isActive
                          ? "bg-accent/5 text-accent shadow-[inset_0_0_0_1px_rgba(232,93,31,0.15)]"
                          : "text-muted hover:bg-paper hover:text-ink"
                      }`}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-accent" : "text-label group-hover:text-ink"} />
                      {item.name}
                    </Link>
                  );
                })}
                <div className="my-2 border-t border-line" />
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3.5 rounded-xl px-4 py-3.5 text-[14px] font-semibold text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut size={18} strokeWidth={2} className="text-red-400" />
                  Déconnexion
                </button>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1 w-full">{children}</main>
      </div>
    </div>
  );
}
