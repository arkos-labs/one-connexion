"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PackagePlus, Truck, FileText, MapPin, Settings, LogOut, Phone, Calendar } from "lucide-react";
import { PHONE_TEL } from "@/lib/site-content";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Commander une course", href: "/dashboard/commander", icon: PackagePlus, hasDot: true },
    { name: "Navettes récurrentes", href: "/dashboard/navettes", icon: Calendar, badge: "Nouveau" },
    { name: "Suivi des livraisons", href: "/dashboard/suivi", icon: Truck, badge: "1 active" },
    { name: "Factures & Relevés", href: "/dashboard/factures", icon: FileText },
    { name: "Adresses favorites", href: "/dashboard/adresses", icon: MapPin },
    { name: "Paramètres du compte", href: "/dashboard/parametres", icon: Settings },
  ];

  return (
    <div className="relative min-h-screen bg-[#FBFBFB]">


      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 px-[clamp(20px,4vw,32px)] py-10 lg:flex-row">
        
        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-[300px]">
          <div className="sticky top-[110px] flex flex-col gap-6">
            
            {/* Carte Principale Sidebar */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              
              {/* En-tête profil */}
              <div className="flex items-center gap-4 border-b border-line p-5">
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-[#0E0F10] text-[15px] font-bold text-white shadow-sm">
                  AD
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold text-ink">Alexandre Dupont</span>
                    <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[9px] font-bold uppercase text-green-600">Vérifié</span>
                  </div>
                  <span className="text-xs font-medium text-muted">Cabinet Dupont & Associés</span>
                </div>
              </div>
              
              {/* Statistiques (Courses ce mois / Facturation) */}
              <div className="flex items-center divide-x divide-line border-b border-line bg-paper/30 p-4">
                <div className="flex flex-1 flex-col items-center justify-center">
                  <span className="text-[11px] font-medium text-label">Courses ce mois</span>
                  <span className="mt-0.5 text-sm font-bold text-ink">18 courses</span>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center">
                  <span className="text-[11px] font-medium text-label">Facturation</span>
                  <span className="mt-0.5 text-sm font-bold text-accent">En compte 30j</span>
                </div>
              </div>
              
              {/* Navigation Menu */}
              <nav className="flex flex-col p-3">
                {navItems.map((item) => {
                  const isActive = pathname.startsWith(item.href);
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
                      
                      {item.hasDot && isActive && (
                        <div className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent" />
                      )}
                      
                      {item.badge && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-bold text-yellow-800">
                          {item.badge}
                        </div>
                      )}
                    </Link>
                  );
                })}
                
                <div className="my-2 border-t border-line" />
                
                <Link
                  href="/"
                  className="flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-[14px] font-semibold text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut size={18} strokeWidth={2} className="text-red-400" />
                  Déconnexion
                </Link>
              </nav>
            </div>

            {/* Dispatch 24/7 EN LIGNE Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl bg-[#1A1C20] text-white shadow-lg">
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                  <h3 className="text-sm font-bold tracking-wide">DISPATCH 24/7 EN LIGNE</h3>
                </div>
                <p className="mb-5 text-xs font-medium text-white/70 leading-relaxed">
                  Besoin d'une modification urgente ou d'un itinéraire multi-points ? Nos régulateurs vous répondent en direct.
                </p>
                <a 
                  href={`tel:${PHONE_TEL}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-white/20"
                >
                  <Phone size={14} className="text-accent" />
                  Appeler le dispatching
                </a>
              </div>
            </div>

          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          {children}
        </main>
        
      </div>
    </div>
  );
}
