"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-100 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-zinc-900 to-zinc-600">MsgFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-zinc-500">
            {["Features", "Solutions", "API", "Pricing"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <button className="text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors">Sign In</button>
            <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-600 transition-all hover:shadow-xl hover:shadow-emerald-200 active:scale-95">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-linear-to-b from-emerald-50/50 to-transparent -z-10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/20 rounded-full blur-[100px] -z-10"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Direct Meta Business Partner
              </div>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tight text-zinc-900 leading-[0.95]">
                Messaging <br />
                <span className="text-emerald-500">reimagined.</span>
              </h1>
              <p className="text-xl text-zinc-500 max-w-xl leading-relaxed font-medium">
                The ultimate API platform for sending promotional campaigns, automated utility alerts, and secure authentication messages via WhatsApp. 
              </p>
              <div className="flex flex-wrap gap-5">
                <button className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-200 active:scale-95 text-lg">
                  Start Sending
                </button>
                <button className="flex items-center gap-3 px-10 py-5 rounded-2xl font-bold border-2 border-zinc-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all active:scale-95 text-lg group">
                  <svg className="w-6 h-6 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Book Demo
                </button>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Integrated with</p>
                <div className="flex gap-8 items-center opacity-40 grayscale">
                  <div className="font-black text-xl italic tracking-tighter">STRIPE</div>
                  <div className="font-bold text-lg tracking-tighter uppercase">Shopify</div>
                  <div className="font-black text-xl italic tracking-tighter">HUB SPOT</div>
                </div>
              </div>
            </div>

            <div className="relative group lg:ml-12">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-[3rem] group-hover:bg-emerald-500/30 transition-all duration-500"></div>
              <div className="relative bg-white border border-zinc-200/50 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden aspect-4/5 flex items-center justify-center">
                 {/* AI Generated Phone Mockup Image */}
                 <div className="absolute inset-0 z-0">
                    <Image 
                      src="/phone_mockup.png" 
                      alt="WhatsApp Phone Mockup" 
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 
                 {/* Floating Bubbles Overlay */}
                 <div className="relative z-10 w-full h-full p-12 flex flex-col justify-center gap-6 pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl rounded-tl-none shadow-xl border border-white/50 max-w-[80%] animate-fade-in-up">
                      <div className="text-[9px] font-black text-orange-500 uppercase mb-1">Promotion</div>
                      <p className="text-[11px] leading-relaxed font-bold text-zinc-800">Flash Sale! ⚡ 40% OFF code: MAGIC40</p>
                    </div>

                    <div className="ml-auto bg-emerald-500/90 backdrop-blur-md text-white p-4 rounded-2xl rounded-tr-none shadow-xl max-w-[80%] transform translate-y-4 animate-fade-in-up delay-150">
                       <div className="text-[9px] font-bold text-emerald-100 uppercase mb-1">OTP Verification</div>
                       <p className="text-sm font-black tracking-[0.3em] text-center my-1">491 228</p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl rounded-tl-none shadow-xl border border-white/50 max-w-[80%] transform translate-y-8 animate-fade-in-up delay-300">
                      <div className="text-[9px] font-black text-blue-500 uppercase mb-1">Order Status</div>
                      <p className="text-[11px] leading-relaxed font-bold text-zinc-800">Delivered! 📦 Rate your experience.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section id="features" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-5xl font-black tracking-tighter">Three modes. <br />One platform.</h2>
                <p className="text-lg text-zinc-500 font-medium">We built MsgFlow to handle every single touchpoint of your customer journey through the world's most popular messaging app.</p>
              </div>
              <a href="#" className="flex items-center gap-3 font-bold text-emerald-600 hover:gap-5 transition-all group pb-2">
                See all capabilities
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Promotional",
                  desc: "Hyper-personalized marketing campaigns that actually get read. Boost ROI with rich media and advanced segmentation.",
                  icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                  color: "from-orange-400 to-orange-600",
                  bg: "bg-orange-50/50"
                },
                {
                  title: "Utility",
                  desc: "Critical alerts, shipping notifications, and transactional updates delivered instantly via automated workflows.",
                  icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                  color: "from-blue-400 to-blue-600",
                  bg: "bg-blue-50/50"
                },
                {
                  title: "Authentication",
                  desc: "Industry-grade security with lightning-fast OTP delivery and global redundancy for 99.99% reliability.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  color: "from-emerald-400 to-emerald-600",
                  bg: "bg-emerald-50/50"
                }
              ].map((feature, i) => (
                <div key={i} className="group relative">
                  <div className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[2.5rem] blur-xl -z-10 scale-90 group-hover:scale-100`}></div>
                  <div className="bg-white border border-zinc-100 p-10 rounded-[2.5rem] h-full transition-all duration-500 group-hover:-translate-y-2 flex flex-col">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner ${feature.bg}`}>
                      <svg className="w-7 h-7 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                    <p className="text-zinc-500 font-medium leading-relaxed mb-10 grow">{feature.desc}</p>
                    <div className="flex items-center gap-2 font-bold text-zinc-900">
                      <span>Explore {feature.title}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase - AI Generated Image */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative rounded-[3rem] overflow-hidden aspect-21/9 shadow-2xl group border border-zinc-100">
              <Image 
                src="/platform_mockup.png" 
                alt="Platform Showcase" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 via-transparent to-transparent flex flex-col justify-end p-16">
                <div className="max-w-2xl space-y-4">
                  <h3 className="text-4xl font-black text-white">Full Analytics Dashboard</h3>
                  <p className="text-lg text-zinc-300 font-medium">Monitor delivery rates, engagement metrics, and campaign performance in real-time with our unified dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer / Go Section */}
        <section id="api" className="py-32 bg-zinc-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                   <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M1.385 10.985c.19 2.535 2.11 4.545 4.675 4.705.58.035 1.155.035 1.73.015.65-.025 1.25-.335 1.63-.855l1.09-1.48c.19-.26.545-.335.83-.17.1.06.19.14.25.24l1.32 2.15c.14.23.14.52 0 .75l-1.32 2.15c-.06.1-.15.18-.25.24-.285.165-.64.09-.83-.17l-1.09-1.48c-.38-.52-.98-.83-1.63-.855-.575-.02-1.15-.02-1.73.015-4.04.25-7.385 3.39-7.9 7.41-.055.43.275.81.705.81h17.8c.43 0 .76-.38.705-.81-.515-4.02-3.86-7.16-7.9-7.41-.58-.035-1.155-.035-1.73-.015-.65.025-1.25.335-1.63.855l-1.09 1.48c-.19.26-.545.335-.83.17-.1-.06-.19-.14-.25-.24l-1.32-2.15c-.14-.23-.14-.52 0-.75l1.32-2.15c.06-.1.15-.18.25-.24.285-.165.64-.09.83.17l1.09 1.48c.38.52.98.83 1.63.855.575.02 1.15.02 1.73-.015 2.565-.16 4.485-2.17 4.675-4.705.03-.41-.295-.75-.705-.75H2.09c-.41 0-.735.34-.705.75z"/>
                   </svg>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-black tracking-[0.2em] text-[10px] uppercase">Engineered for Reliability</h4>
                  <p className="text-xl font-bold">Native Go Architecture</p>
                </div>
              </div>
              <h2 className="text-5xl font-black tracking-tight leading-[1.1]">Developer-first API, built for high scale.</h2>
              <p className="text-lg text-zinc-400 font-medium leading-relaxed">
                Our core engine is written in Go, ensuring lightning-fast processing and massive concurrency.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Throughput", value: "5k+", sub: "msgs / sec" },
                  { label: "Latency", value: "< 200ms", sub: "API response" },
                  { label: "Delivery", value: "99.9%", sub: "SLA uptime" },
                  { label: "Encryption", value: "256-bit", sub: "End-to-end" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
                    <p className="text-xs text-zinc-500">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-20 bg-emerald-500/20 blur-[120px] rounded-full"></div>
               <div className="relative bg-[#1a1a1a] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                 <div className="bg-zinc-800/50 px-6 py-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Go SDK</span>
                 </div>
                 <div className="p-10 font-mono text-sm leading-relaxed overflow-x-auto">
                    <div className="flex gap-4">
                      <span className="text-zinc-600 select-none">1</span>
                      <span className="text-blue-400">package</span>
                      <span className="text-white">main</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-zinc-600 select-none">2</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-zinc-600 select-none">3</span>
                      <span className="text-blue-400">import</span>
                      <span className="text-emerald-400">"github.com/msgflow/sdk-go"</span>
                    </div>
                    <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                       <pre className="text-xs text-zinc-300">
{`{
  "id": "msg_9k2Lp1...",
  "status": "delivered"
}`}
                       </pre>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-6 relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] opacity-25"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
            <h2 className="text-7xl lg:text-9xl font-black tracking-tight leading-[0.8] mb-4">
              Stop waiting. <br />
              <span className="text-emerald-500 italic">Start sending.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <button className="bg-zinc-900 text-white px-12 py-6 rounded-4xl font-black text-xl hover:bg-emerald-600 transition-all hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] active:scale-95">
                 Create Free Account
               </button>
               <button className="bg-white text-zinc-900 border-2 border-zinc-200 px-12 py-6 rounded-4xl font-black text-xl hover:border-zinc-900 transition-all active:scale-95">
                 Contact Sales
               </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-50 border-t border-zinc-200 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight">MsgFlow</span>
            </div>
            <p className="text-zinc-500 font-medium max-w-sm text-lg leading-relaxed">
              The infrastructure for the next generation of business-to-customer communication.
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Security", "Uptime", "Pricing"] },
            { title: "Resources", links: ["API Docs", "SDKs", "Status", "Community"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Privacy"] }
          ].map((column, i) => (
            <div key={i} className="space-y-8">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-zinc-400">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map(link => (
                  <li key={link}><a href="#" className="text-zinc-600 font-bold hover:text-emerald-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto pt-16 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-400 font-bold text-sm tracking-tight">© 2024 MsgFlow Global Inc. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
