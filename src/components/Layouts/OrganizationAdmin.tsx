import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/global/app-sidebar"
import { LayoutDashboard } from "lucide-react"
import { Outlet } from "react-router-dom"

const items = [
    {
        title: 'لوحة التحكم',
        to: 'dashboard',
        icon: LayoutDashboard
    }
]

export default function OrganizationAdminLayout() {
  return (
    <SidebarProvider dir="rtl">
      <AppSidebar items={items} title="ادمن المنظومة" />
      <main className="w-screen h-screen" dir="rtl">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}