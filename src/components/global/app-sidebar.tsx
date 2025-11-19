import { ChevronDown, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, NavLink } from "react-router-dom";
import type { ForwardRefExoticComponent } from "react";

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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ModeToggle } from "../theme/ThemeToggle";

interface Item {
  title: string;
  to: string;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  subLinks?: Item[];
}

export function AppSidebar({ items, title }: { items: Item[]; title: string }) {
  const location = useLocation();

  return (
    <Sidebar dir="rtl" side="right" collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="font-black text-foreground text-2xl mt-2">{title}</span>
          </SidebarGroupLabel>

          <SidebarGroupContent className="pt-5">
            <SidebarMenu>
              {items.map((item) => {
                const hasSubLinks = !!item.subLinks?.length;

                const isGroupActive =
                  item.subLinks?.some(
                    (sub) =>
                      location.pathname === sub.to ||
                      location.pathname.startsWith(`${sub.to}/`)
                  ) ?? false;

                return (
                  <SidebarMenuItem key={item.title}>
                    {hasSubLinks ? (
                      <Collapsible
                        defaultOpen={isGroupActive}
                        className="group/collapsible"
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={item.title}
                            className={cn(
                              "w-full justify-between",
                              isGroupActive && "font-bold text-white"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              {item.icon && <item.icon className="size-5" />}
                              <span>{item.title}</span>
                            </div>
                            <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub className="ps-8">
                            {item.subLinks?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <NavLink
                                    to={subItem.to}
                                    end
                                    title={subItem.title}
                                  >
                                    {({ isActive }) => (
                                      <SidebarMenuButton className={cn(isActive && "font-bold bg-primary text-white")}>
                                        {subItem.icon && (
                                          <subItem.icon className="size-4" />
                                        )}
                                        <span
                                          className={cn(
                                            isActive && "font-bold"
                                          )}
                                        >
                                          {subItem.title}
                                        </span>
                                      </SidebarMenuButton>
                                    )}
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      /* Leaf item (no sub-links) */
                      <SidebarMenuButton asChild>
                        <NavLink to={item.to} end title={item.title}>
                          {({ isActive }) => (
                            <SidebarMenuButton className={cn(isActive && "font-bold bg-primary text-white")}>
                              {item.icon && (<item.icon className="size-5" />)}
                              <span >
                                {item.title}
                              </span>
                            </SidebarMenuButton>
                          )}
                        </NavLink>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
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
