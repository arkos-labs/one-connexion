/**
 * lib/admin-nav.ts
 * Source unique des entrées de navigation du dashboard admin.
 */
import { LayoutDashboard, Truck, Calendar, Users, Wallet, type LucideIcon } from "lucide-react";

export type AdminNavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  hasDot?: boolean;
  badge?: string;
};

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  { name: "Vue d'ensemble", href: "/admin", icon: LayoutDashboard },
  { name: "Courses & dispatch", href: "/admin/courses", icon: Truck },
  { name: "Navettes récurrentes", href: "/admin/navettes", icon: Calendar },
  { name: "Chauffeurs", href: "/admin/chauffeurs", icon: Users },
  { name: "Clients", href: "/admin/clients", icon: Users },
  { name: "Chiffre d'affaires", href: "/admin/chiffre-affaires", icon: Wallet },
];
