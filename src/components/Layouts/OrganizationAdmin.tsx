import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/global/app-sidebar";
import {
  Activity,
  BadgeDollarSign,
  ClipboardPlus,
  LayoutDashboard,
  Package,
  SquareUserRound,
} from "lucide-react";
import { Outlet } from "react-router-dom";

const items = [
  {
    title: "لوحة التحكم",
    to: "",
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
      },
      {
        title: "طلبات التوريد",
        to: "purchases",
      },
      {
        title: "المودرين",
        to: "suppliers",
      },
      {
        title: "تعديل يدوي",
        to: "man-update",
      },
    ],
  },
  {
    title: "المبيعات",
    to: "sales",
    icon: BadgeDollarSign,
    subLink: true,
    subLinks: [
      {
        title: "العملاء",
        to: "customers",
      },
      {
        title: "الفواتير",
        to: "invoices",
      },
    ],
  },
  {
    title: "التقارير",
    icon: ClipboardPlus,
    to: "reports",
  },
  {
    title: "سجل النشاط",
    icon: Activity,
    to: "activity",
  },
];

export default function OrganizationAdminLayout() {
  return (
    <SidebarProvider dir="rtl">
      <AppSidebar items={items} title="ادمن المنظومة" />
      <main className="w-screen h-screen" dir="rtl">
        <SidebarTrigger className="m-3" />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
