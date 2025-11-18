import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/global/app-sidebar";
import {
  Boxes,
  LayoutDashboard,
  Package,
  Receipt,
  SquareUserRound,
  Users,
} from "lucide-react";
import { Outlet } from "react-router-dom";

const items = [
  {
    title: "لوحة التحكم",
    to: "dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "المستخدمين",
    to: "staff",
    icon: SquareUserRound,
  },
  {
    title: "المخزون",
    to: "inventory",
    icon: Package,
    subLink: true,
    subLinks: [
      {
        title: "المنتجات",
        to: "products",
        // icon: Receipt,
      },
    ],
  },
];

export default function OrganizationAdminLayout() {
  return (
    <SidebarProvider dir="rtl">
      <AppSidebar items={items} title="ادمن المنظومة" />
      <main className="w-screen h-screen" dir="rtl">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
