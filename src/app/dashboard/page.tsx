"use client"

import React, { useState } from "react";
import AppSidebar from "@/components/layout/Sidebar";
import {
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  MoreHorizontal,
  Search,
  Bell,
  Plus,
  ArrowRight,
} from "lucide-react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-white font-sans text-zinc-900 selection:bg-emerald-100">
        <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <SidebarInset className="flex flex-col min-w-0 flex-1">
          {/* Responsive Header */}
          <header className="h-16 bg-white border-b border-zinc-100 px-4 md:px-8 flex items-center justify-between shrink-0 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1" />
              <div className="h-4 w-px bg-zinc-200 hidden sm:block"></div>
              <h1 className="text-sm font-bold text-zinc-900 hidden sm:block">{activeTab}</h1>
              <div className="h-4 w-px bg-zinc-200 hidden md:block"></div>
              <p className="text-xs text-zinc-400 font-medium hidden md:block">
                MsgFlow Enterprise
              </p>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-300" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-zinc-50 border border-zinc-100 text-sm rounded-xl w-64 xl:w-72 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all placeholder:text-zinc-400"
                />
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <button className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors">
                  <Bell className="w-4.5 h-4.5" />
                </button>
                <div className="h-6 w-px bg-zinc-100 mx-1"></div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-zinc-700 hidden sm:block">
                    Alex Rivera
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-500 border border-zinc-200 shrink-0">
                    AR
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Responsive Dashboard Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 md:space-y-10 scrollbar-hide">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
                  Dashboard
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Overview of your messaging infrastructure performance.
                </p>
              </div>
              <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-sm active:scale-95 w-full sm:w-auto">
                <Plus className="w-4.5 h-4.5" />
                <span>Create Campaign</span>
              </button>
            </div>

            {/* Responsive Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  label: "Messages Sent",
                  value: "1,284,912",
                  change: "+12.5%",
                  icon: TrendingUp,
                },
                {
                  label: "Active Contacts",
                  value: "84,204",
                  change: "+4.2%",
                  icon: Users,
                },
                {
                  label: "Delivery Rate",
                  value: "99.9%",
                  change: "Stable",
                  icon: CheckCircle2,
                },
                {
                  label: "Avg Response",
                  value: "14m",
                  change: "-2m",
                  icon: Clock,
                },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-5 md:p-6 rounded-2xl border border-zinc-100 shadow-[0_1px_4px_rgba(0,0,0,0.01)] hover:shadow-md hover:shadow-zinc-100 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-9 h-9 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-zinc-400 group-hover:text-emerald-600" />
                      </div>
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${stat.change.startsWith("+") ? "bg-emerald-50 text-emerald-600" : "bg-zinc-50 text-zinc-400"}`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                      {stat.label}
                    </p>
                    <h3 className="text-2xl font-bold text-zinc-900 mt-1.5 tabular-nums">
                      {stat.value}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Responsive Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Recent Campaigns Table */}
              <div className="lg:col-span-2 border border-zinc-100 rounded-2xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.01)]">
                <div className="px-5 md:px-6 py-4 md:py-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/10">
                  <h3 className="text-base font-bold text-zinc-900">
                    Recent Campaigns
                  </h3>
                  <button className="text-[10px] font-black text-emerald-600 hover:underline uppercase tracking-widest">
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto scrollbar-hide">
                  <table className="w-full text-left min-w-[500px]">
                    <thead className="bg-zinc-50/50 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-center">Volume</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs divide-y divide-zinc-50">
                      {[
                        {
                          name: "Spring Flash Sale",
                          status: "Completed",
                          sent: "42k",
                          color: "emerald",
                        },
                        {
                          name: "OTP Auth Service",
                          status: "Active",
                          sent: "1.2M",
                          color: "blue",
                        },
                        {
                          name: "Customer Recovery",
                          status: "Paused",
                          sent: "12k",
                          color: "orange",
                        },
                        {
                          name: "Weekend Newsletter",
                          status: "Completed",
                          sent: "150k",
                          color: "emerald",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="hover:bg-zinc-50/50 transition-colors group"
                        >
                          <td className="px-6 py-4 font-bold text-zinc-900 whitespace-nowrap">
                            {row.name}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-black ${
                                row.status === "Completed"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : row.status === "Active"
                                    ? "bg-blue-50 text-blue-700"
                                    : "bg-zinc-100 text-zinc-600"
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center text-zinc-500 font-medium">
                            {row.sent}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-white rounded-lg transition-all border border-transparent hover:border-zinc-200">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Activity List */}
              <div className="border border-zinc-100 rounded-2xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.01)]">
                <div className="px-5 md:px-6 py-4 md:py-5 border-b border-zinc-100 bg-zinc-50/10">
                  <h3 className="text-base font-bold text-zinc-900">
                    System Activity
                  </h3>
                </div>
                <div className="p-5 md:p-6 space-y-7">
                  {[
                    {
                      time: "12:42 PM",
                      event: "Campaign Sent",
                      desc: "Summer Sale #4 is now live.",
                      icon: CheckCircle2,
                    },
                    {
                      time: "11:20 AM",
                      event: "Throughput Peak",
                      desc: "Performance: 4.2k req/sec.",
                      icon: TrendingUp,
                    },
                    {
                      time: "09:15 AM",
                      event: "Health Check",
                      desc: "All regional nodes healthy.",
                      icon: Clock,
                    },
                    {
                      time: "08:30 AM",
                      event: "Daily Export",
                      desc: "Analytics report generated.",
                      icon: CheckCircle2,
                    },
                  ].map((act, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="mt-0.5 shrink-0">
                        <div className="w-7 h-7 rounded-lg bg-zinc-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                          <act.icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-600" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-[13px] font-bold text-zinc-900">
                            {act.event}
                          </h4>
                          <span className="text-[10px] font-medium text-zinc-400">
                            {act.time}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-0.5 leading-tight">
                          {act.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-[10px] font-black text-zinc-400 hover:text-zinc-900 transition-all border-t border-zinc-50 pt-7 group uppercase tracking-widest">
                    View Logs
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
