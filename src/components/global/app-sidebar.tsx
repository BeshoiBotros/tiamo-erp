import { type LucideProps } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { ForwardRefExoticComponent } from "react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../theme/ThemeToggle";

interface Item {
  title: string;
  to: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
}

export function AppSidebar({ items, title }: { items: Item[]; title: string }) {
  return (
    <Sidebar dir="rtl" side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="font-black text-foreground text-lg">{title}</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary font-bold bg-accent"
                          : "text-muted-foreground"
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
