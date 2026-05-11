"use client"

import {
  BarChart3,
  ChevronRight,
  Code,
  FileText,
  Inbox,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Settings,
  Users,
  Zap
} from "lucide-react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AppSidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { 
      name: 'Overview', 
      icon: LayoutDashboard,
      url: "#"
    },
    { 
      name: 'Messages', 
      icon: MessageSquare,
      subItems: ['Single Message', 'Bulk Broadcast', 'Delivery Status']
    },
    { 
      name: 'Campaigns', 
      icon: Megaphone,
      subItems: ['Overview', 'Create Campaign', 'Schedule Campaign', 'Drafts']
    },
    { 
      name: 'Contacts', 
      icon: Users,
      subItems: ['All Contacts', 'Segments', 'Import/Export']
    },
    { 
      name: 'Templates', 
      icon: FileText,
      subItems: ['Message Templates', 'Interactive Buttons', 'Media Assets']
    },
    { 
      name: 'Inbox', 
      icon: Inbox,
      subItems: ['Live Chat', 'Assigned to Me', 'Archive']
    },
    { 
      name: 'Automation', 
      icon: Zap,
      subItems: ['Chatbots', 'Keyword Triggers', 'Sequences']
    },
    { 
      name: 'API Settings', 
      icon: Code,
      subItems: ['API Keys', 'Webhooks', 'Documentation']
    },
    { 
      name: 'Analytics', 
      icon: BarChart3,
      subItems: ['Usage Reports', 'Analytics Dashboard', 'Cost Analysis']
    },
    { 
      name: 'Settings', 
      icon: Settings,
      subItems: ['Profile', 'Team Members', 'Billing']
    },
  ];

  return (
    <Sidebar collapsible="icon" className="border-r border-zinc-100 bg-white">
      <SidebarHeader className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-transparent cursor-default">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
                <MessageCircle className="size-5" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-bold text-zinc-900">MsgFlow</span>
                <span className="truncate text-[10px] font-medium text-zinc-400">Enterprise</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const hasSubItems = item.subItems && item.subItems.length > 0
              const isActive = activeTab === item.name || item.subItems?.includes(activeTab)

              if (!hasSubItems) {
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      tooltip={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`rounded-xl px-4 py-6 font-semibold transition-colors cursor-pointer ${
                        isActive 
                          ? "bg-zinc-100 text-zinc-900" 
                          : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                      }`}
                    >
                      <Icon className={`size-5 ${isActive ? "text-emerald-600" : "text-zinc-400"}`} />
                      <span className="text-sm">{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              }

              return (
                <Collapsible key={item.name} asChild className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton 
                        tooltip={item.name}
                        className={`rounded-xl px-4 py-6 font-semibold transition-colors cursor-pointer ${
                          isActive 
                            ? "text-zinc-900" 
                            : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                        }`}
                      >
                        <Icon className={`size-5 ${isActive ? "text-emerald-600" : "text-zinc-400"}`} />
                        <span className="text-sm">{item.name}</span>
                        <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-zinc-300" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="ml-9 border-l border-zinc-100 space-y-1 py-1">
                        {item.subItems?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem}>
                            <SidebarMenuSubButton
                              onClick={() => setActiveTab(subItem)}
                              className={`cursor-pointer text-[11px] font-bold rounded-lg transition-colors px-4 py-2 h-auto ${
                                activeTab === subItem
                                  ? "text-emerald-600 bg-emerald-50/50"
                                  : "text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50"
                              }`}
                            >
                              <span>{subItem}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-zinc-100 group-data-[collapsible=icon]:hidden">
        <div className="space-y-3.5">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-zinc-500">Usage</span>
            <span className="text-zinc-900">65%</span>
          </div>
          <div className="w-full bg-zinc-100 rounded-full h-1">
            <div className="bg-emerald-600 h-full rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
          </div>
          <p className="text-[11px] text-zinc-400 leading-tight">
            1.3M of 2.0M messages.
          </p>
          <button className="w-full mt-2 py-2.5 text-[11px] font-bold border border-zinc-200 rounded-lg text-zinc-900 hover:bg-zinc-50 transition-colors cursor-pointer">
            Upgrade
          </button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
