// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>Hello</div>
//   )

// }

// export default App

import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Cpu,
  BookOpen,
  FileText,
  Upload,
  Search,
  Settings,
  Bell,
  ChevronRight,
  MessageSquare,
  Activity,
  Lock,
  HardDrive,
  Download,
  AlertCircle,
  Menu,
  X,
  Send,
  Zap,
  Globe,
  Database,
  Filter,
  FileSearch,
  ClipboardList,
  Target,
  Waves,
  Crosshair,
  Radar,
  Terminal,
  Share2,
  Layers,
  Sparkles,
  BarChart3,
  ExternalLink,
  RefreshCw,
  Plus
} from 'lucide-react';
 
const BG_DARK = '#0A0C10';
const BG_NAV = '#111418';
 
const App = () => {
  const [activeTab, setActiveTab] = useState('intelligence');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedSource, setSelectedSource] = useState('All Assets');
  const [healthScore, setHealthScore] = useState(99.9);
  const [notifications, setNotifications] = useState(3);
 
  const [chatHistory, setChatHistory] = useState([
    { role: 'system', content: 'SECURE UP-LINK ESTABLISHED // BIOMETRIC AUTHENTICATED // BEL DESIGN AUTHORITY ONLINE' },
    { role: 'assistant', content: 'Strategic Design Authority initialized. Monitoring live telemetry on Missile Seekers, Naval RF Signatures, and AESA Radar architectures. I am ready to synthesize technical directives for OEM alignment.' }
  ]);
 
  const chatEndRef = useRef(null);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatHistory]);
 
  // Periodic health pulse simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setHealthScore(prev => +(prev + (Math.random() * 0.1 - 0.05)).toFixed(2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
 
  // --- INTERACTIVE DATA ---
  const [techManuals, setTechManuals] = useState([
    { id: 'TM-001', title: 'AESA Radar Calibration Protocol', version: 'v4.2', date: '2024-03-12', category: 'Radar' },
    { id: 'TM-002', title: 'IR Seeker Signal Processing Spec', version: 'v1.8', date: '2024-05-10', category: 'Missile' },
    { id: 'TM-003', title: 'Naval RCS Measurement Standards', version: 'v2.1', date: '2024-01-20', category: 'Naval' },
    { id: 'TM-004', title: 'BEL-S2 Interface Protocol', version: 'v5.0', date: '2024-06-01', category: 'Interface' },
  ]);
 
  const [researchPapers, setResearchPapers] = useState([
    { id: 'RP-101', title: 'Cognitive Spectrum Sensing in Dense EW Environments', author: 'Dr. A. Sharma', year: '2024', status: 'Classified', domain: 'Radar' },
    { id: 'RP-102', title: 'Non-Kinetic Neutralization of Swarm UAVs', author: 'BEL R&D Lab 4', year: '2023', status: 'Internal', domain: 'Electronic Warfare' },
    { id: 'RP-103', title: 'GaN-based T/R Module Thermal Dissipation Models', author: 'IIT-B / BEL Collab', year: '2024', status: 'Restricted', domain: 'Electronics' },
    { id: 'RP-104', title: 'Quantum Encryption for Ship-to-Shore Links', author: 'Advanced Cyber Div', year: '2024', status: 'Confidential', domain: 'Naval' },
  ]);
 
  const quickQueries = [
    { label: "Missile: ECCM Logic", icon: <Crosshair size={14}/>, q: "ECCM requirements for seeker-head processing.", a: "TECHNICAL DIRECTIVE [MSL-ECCM-09]: For upcoming seekers, OEMs must implement 'Home-on-Jam' (HOJ) logic. Mandatory multi-gate tracking for deceptive jamming suppression required." },
    { label: "Ship: RCS Signature", icon: <Waves size={14}/>, q: "RCS thresholds for stealth frigate.", a: "NAVAL DIRECTIVE [NAV-ST-2024]: For new frigate class, OEMs must ensure RCS values do not exceed 0.05m² in X-band. Use BEL-proprietary RAM coating specs." },
    { label: "Radar: AESA Agility", icon: <Radar size={14}/>, q: "L-Band AESA GaN module specs.", a: "RADAR SPECIFICATION [AESA-GA-55]: Next-gen radars must support Cognitive Spectrum Sensing. Direct OEMs to provide GaN-based modules with MTBF > 50k hrs." },
    { label: "EW: DRFM Latency", icon: <Zap size={14}/>, q: "DRFM system latency benchmarks.", a: "EW DIRECTIVE [DRFM-V2]: All DRFM systems must support 1GHz bandwidth with latency < 50ns for effective repeater jamming." }
  ];
 
  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    const userText = query;
    setQuery('');
    processAIQuery(userText);
  };
 
  const processAIQuery = (userText) => {
    setChatHistory(prev => [...prev, { role: 'user', content: userText }]);
    setIsProcessing(true);
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'assistant', content: `DIRECTIVE SYNTHESIS COMPLETED: Query regarding "${userText}" has been cross-referenced with Secure Repository. Technical compliance for OEM delivery finalized. Reference ID: DA-BEL-${Math.floor(Math.random()*1000)}.` }]);
      setIsProcessing(false);
    }, 1500);
  };
 
  const handleQuickQuery = (item) => {
    setChatHistory(prev => [...prev, { role: 'user', content: item.q }]);
    setIsProcessing(true);
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'assistant', content: item.a }]);
      setIsProcessing(false);
    }, 800);
  };
 
  const simulateUpload = (type) => {
    setIsProcessing(true);
    setTimeout(() => {
      const newDoc = {
        id: `NEW-${Math.floor(Math.random()*999)}`,
        title: `Untitled ${type} Document`,
        version: 'v1.0',
        date: new Date().toISOString().split('T')[0],
        category: 'New Upload',
        author: 'Current User',
        year: '2024',
        status: 'Pending Review',
        domain: 'Unassigned'
      };
      if(type === 'Manual') setTechManuals(prev => [newDoc, ...prev]);
      else setResearchPapers(prev => [newDoc, ...prev]);
      setIsProcessing(false);
      setNotifications(n => n + 1);
    }, 1200);
  };
 
  const navItems = [
    { id: 'intelligence', icon: <Target size={20} />, label: 'Strategic Synthesis' },
    { id: 'repository', icon: <BookOpen size={20} />, label: 'Tech Manuals' },
    { id: 'research', icon: <FileText size={20} />, label: 'Domain Research' },
    { id: 'monitoring', icon: <Activity size={20} />, label: 'Knowledge Health' },
  ];
 
  return (
    <div className="flex h-screen w-full font-sans text-slate-100 overflow-hidden" style={{ backgroundColor: BG_DARK }}>
      {/* --- Sidebar --- */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} transition-all duration-500 flex flex-col border-r border-white/5 z-30 shadow-[10px_0_30px_rgba(0,0,0,0.5)]`} style={{ backgroundColor: BG_NAV }}>
        <div className="p-8 flex items-center gap-4 border-b border-white/5 relative overflow-hidden group">
          <div className="bg-sky-500 p-2.5 rounded-xl shadow-[0_0_20px_rgba(0,174,239,0.5)] relative z-10 transition-transform group-hover:rotate-12">
            <Shield className="text-white" size={24} />
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col relative z-10 animate-in fade-in slide-in-from-left-2">
              <span className="font-black text-xl leading-tight tracking-[0.2em]">BEL</span>
              <span className="text-[10px] text-sky-400 uppercase font-black tracking-widest">DESIGN AUTHORITY</span>
            </div>
          )}
        </div>
        <nav className="flex-1 mt-8 px-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all relative ${activeTab === item.id ? 'bg-sky-500/10 text-white border border-sky-500/30 shadow-[0_0_20px_rgba(14,165,233,0.1)]' : 'hover:bg-white/5 text-slate-500'}`}
            >
              <div className={activeTab === item.id ? 'text-sky-400' : ''}>{item.icon}</div>
              {isSidebarOpen && <span className="font-bold text-sm tracking-wide">{item.label}</span>}
              {activeTab === item.id && <div className="absolute left-0 w-1 h-6 bg-sky-500 rounded-r-full" />}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-white/5">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="w-full flex justify-center p-3 rounded-xl hover:bg-white/5 text-slate-500 transition-all border border-transparent hover:border-white/10 active:scale-95">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </aside>
 
      {/* --- Main Content --- */}
      <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-black/40 backdrop-blur-2xl shrink-0">
          <div className="flex items-center gap-4">
             <h2 className="text-xl font-black uppercase tracking-[0.3em] text-white">
               {navItems.find(n => n.id === activeTab)?.label}
             </h2>
             {isProcessing && <RefreshCw size={14} className="text-sky-400 animate-spin" />}
          </div>
         
          <div className="flex items-center gap-6">
            <div className="relative group cursor-pointer">
              <Bell size={20} className="text-slate-400 group-hover:text-white transition-colors" />
              {notifications > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-[10px] flex items-center justify-center rounded-full font-bold">{notifications}</span>}
            </div>
            <div className="hidden lg:flex items-center gap-2 bg-slate-900/50 border border-white/10 rounded-xl px-4 py-2">
              <Database size={14} className="text-sky-400" />
              <span className="text-xs font-mono text-slate-300 uppercase tracking-tighter">SECURE_CORE_09</span>
            </div>
            <div className="h-10 w-10 rounded-xl bg-sky-600 flex items-center justify-center font-black text-sm border border-white/20 shadow-lg hover:scale-105 transition-transform cursor-pointer">SE</div>
          </div>
        </header>
 
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          {/* STRATEGIC SYNTHESIS TAB */}
          {activeTab === 'intelligence' && (
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard icon={<Radar />} label="Radars" value="1,248" color="sky" />
                <StatCard icon={<Crosshair />} label="Missiles" value="482" color="rose" />
                <StatCard icon={<Waves />} label="Naval" value="92" color="indigo" />
                <StatCard icon={<Activity />} label="Health" value={`${healthScore}%`} color="emerald" />
              </div>
 
              <div className="grid grid-cols-12 gap-8 min-h-[600px]">
                <div className="col-span-12 lg:col-span-4 space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                    <h3 className="text-xs font-black uppercase text-slate-400 mb-6 tracking-widest flex items-center gap-2">
                      <Terminal size={14} className="text-sky-400" /> Control Parameters
                    </h3>
                   
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase block">Knowledge Set</label>
                        <select value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm text-slate-200 outline-none focus:border-sky-500 transition-colors hover:bg-white/5 cursor-pointer">
                          <option>All Assets</option>
                          <option>Tech Specs Only</option>
                          <option>R&D Papers Only</option>
                        </select>
                      </div>
 
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase block mb-3">Priority Directives</label>
                        {quickQueries.map((item, i) => (
                          <button
                            key={i}
                            onClick={() => handleQuickQuery(item)}
                            disabled={isProcessing}
                            className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all text-left group active:scale-95"
                          >
                            <div className="p-2 rounded-lg bg-black/40 text-sky-500 group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <span className="text-[11px] font-bold text-slate-400 group-hover:text-white leading-tight">
                              {item.label}
                            </span>
                          </button>
                        ))}
                      </div>
 
                      <button className="w-full py-4 bg-sky-500/10 border border-sky-500/20 rounded-xl text-[10px] font-black tracking-widest text-sky-400 hover:bg-sky-500/20 transition-all uppercase mt-4 active:scale-95 shadow-[0_0_15px_rgba(14,165,233,0.05)]">
                        Initialize HIL Validation
                      </button>
                    </div>
                  </div>
                </div>
 
                <div className="col-span-12 lg:col-span-8 flex flex-col bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
                   <div className="px-6 py-4 border-b border-white/5 bg-black/40 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse shadow-[0_0_8px_#0ea5e9]"></div>
                        <span className="text-[10px] font-black tracking-[0.2em] text-sky-400 uppercase">Design Authority Output</span>
                      </div>
                      <div className="flex gap-2">
                         <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-colors"><Share2 size={14}/></button>
                         <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-colors"><Download size={14}/></button>
                      </div>
                   </div>
                   
                   <div className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
                    {chatHistory.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                        <div className={`max-w-[85%] flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                          <div className={`mt-1 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-sky-500 border border-sky-400' : 'bg-slate-800 text-sky-400 border border-white/5'}`}>
                            {msg.role === 'user' ? <Target size={20} /> : <Shield size={20} />}
                          </div>
                          <div className={`p-6 rounded-2xl text-sm lg:text-base leading-relaxed ${msg.role === 'user' ? 'bg-sky-600/20 border border-sky-500/30' : 'bg-white/5 border border-white/10 shadow-xl'}`}>
                            {msg.content}
                          </div>
                        </div>
                      </div>
                    ))}
                    {isProcessing && (
                      <div className="flex items-center gap-3 ml-14 animate-pulse">
                        <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-sky-500 rounded-full [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-sky-500 rounded-full [animation-delay:0.4s]"></div>
                        <span className="text-[10px] text-sky-500 font-mono tracking-widest uppercase ml-2">Parsing Secure Archives...</span>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
 
                  <form onSubmit={handleSendMessage} className="p-6 bg-black/40 border-t border-white/5 relative">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Input technical query or command..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-6 pr-16 text-sm lg:text-base outline-none focus:border-sky-500 focus:bg-white/[0.07] transition-all font-medium"
                    />
                    <button type="submit" disabled={!query.trim() || isProcessing} className="absolute right-9 top-1/2 -translate-y-1/2 p-2.5 bg-sky-500 rounded-xl text-white shadow-lg hover:bg-sky-400 transition-all disabled:opacity-50 disabled:grayscale active:scale-90">
                      <Send size={20}/>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
 
          {/* TECH MANUALS TAB */}
          {activeTab === 'repository' && (
            <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Technical Manual Repository</h3>
                  <p className="text-slate-500 text-sm">Design Authority specifications for OEM compliance.</p>
                </div>
                <button
                  onClick={() => simulateUpload('Manual')}
                  className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-sky-500/20 active:scale-95"
                >
                  <Upload size={16}/> Upload Revised Spec
                </button>
              </div>
             
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techManuals.map((manual) => (
                  <div key={manual.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-sky-500/40 hover:bg-white/[0.07] transition-all group cursor-pointer relative overflow-hidden active:scale-[0.98]">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-all group-hover:rotate-12">
                      <BookOpen size={48} />
                    </div>
                    <div className="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> {manual.category}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-4 leading-tight group-hover:text-sky-400 transition-colors pr-8">{manual.title}</h4>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                      <span>{manual.id} // {manual.version}</span>
                      <Download size={14} className="group-hover:text-white transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
 
          {/* DOMAIN RESEARCH TAB */}
          {activeTab === 'research' && (
            <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Domain Research Core</h3>
                  <p className="text-slate-500 text-sm">Strategic whitepapers and multi-domain analysis.</p>
                </div>
                <div className="flex gap-3">
                   <button
                    onClick={() => simulateUpload('Research')}
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95"
                   >
                    <Plus size={16}/> New Analysis
                   </button>
                   <button
                    onClick={() => simulateUpload('Research')}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-purple-600/20 active:scale-95"
                   >
                    <Upload size={16}/> Import Research
                   </button>
                </div>
              </div>
 
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-2 rounded-xl mb-6">
                    <div className="flex-1 px-4 py-2 flex items-center gap-3 text-slate-400">
                      <Search size={16}/>
                      <input className="bg-transparent border-none outline-none text-sm w-full" placeholder="Search research index..." />
                    </div>
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-slate-300 transition-colors flex items-center gap-2">
                       <Filter size={14}/> Domain
                    </button>
                  </div>
                 
                  {researchPapers.map((paper, i) => (
                    <div key={paper.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between hover:bg-white/[0.07] transition-all group cursor-pointer active:scale-[0.99]">
                      <div className="flex items-center gap-5">
                        <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                          <FileSearch size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-100 group-hover:text-purple-400 transition-colors">{paper.title}</h4>
                          <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                            {paper.author} • {paper.year} •
                            <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[9px] uppercase tracking-tighter">
                              {paper.status}
                            </span>
                            <span className="text-slate-600">|</span>
                            <span className="text-slate-400">{paper.domain}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                         <button className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all"><ExternalLink size={18}/></button>
                      </div>
                    </div>
                  ))}
                </div>
               
                <div className="col-span-12 lg:col-span-4">
                  <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-8 sticky top-10 backdrop-blur-sm">
                    <h4 className="text-xs font-black uppercase text-indigo-400 tracking-widest mb-4 flex items-center gap-2"><Sparkles size={14}/> Research Synthesis</h4>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 italic">"Design Authority synthesis pulls from over 40k classified datasets. The current domain focus is on X-Band adaptive wavelets."</p>
                   
                    <div className="space-y-4">
                       <div className="p-4 bg-black/40 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group">
                        <div className="text-[10px] text-slate-500 uppercase font-bold mb-2 group-hover:text-indigo-400 transition-colors">Latest Insight</div>
                        <div className="text-xs font-bold text-white mb-1 leading-tight">X-Band Adaptive Waveforms for Low-RCS Targets</div>
                        <div className="text-[9px] text-slate-500">Confidence Rating: 98.4%</div>
                      </div>
                     
                      <div className="p-4 bg-black/40 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors cursor-pointer group">
                        <div className="text-[10px] text-slate-500 uppercase font-bold mb-2 group-hover:text-purple-400 transition-colors">Critical Alert</div>
                        <div className="text-xs font-bold text-white mb-1 leading-tight">DRFM Latency Vulnerability Detected in J-Band</div>
                        <div className="text-[9px] text-rose-500 font-bold uppercase tracking-widest">Urgent Review Needed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
 
          {/* KNOWLEDGE HEALTH TAB */}
          {activeTab === 'monitoring' && (
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Database Stability</h4>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black rounded border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">NOMINAL</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-32 mb-6 relative z-10">
                    {[40, 60, 55, 70, 90, 85, 95, 80, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-sky-500/40 rounded-t-sm transition-all duration-700 hover:bg-sky-500" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 relative z-10">
                    <span className="flex items-center gap-1"><RefreshCw size={10} className="animate-spin-slow"/> 99.9% UPTIME</span>
                    <span>14.2ms LATENCY</span>
                  </div>
                </div>
               
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl group">
                   <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 group-hover:text-white transition-colors">Knowledge Coverage</h4>
                   <div className="space-y-6">
                      <CoverageItem label="Radar Systems" value="94%" color="bg-sky-500" />
                      <CoverageItem label="Missile Seekers" value="88%" color="bg-rose-500" />
                      <CoverageItem label="Naval Stealth" value="76%" color="bg-indigo-500" />
                      <CoverageItem label="Cyber Defense" value="91%" color="bg-emerald-500" />
                   </div>
                </div>
 
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col">
                   <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center justify-between">
                     Live Event Logs
                     <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping" />
                   </h4>
                   <div className="flex-1 space-y-4 font-mono text-[10px] text-slate-400 overflow-y-auto max-h-48 pr-2">
                      <LogEntry time="10:42:01" msg="BIOMETRIC_AUTH_SUCCESS" type="success" />
                      <LogEntry time="10:41:55" msg="SYNC_TM_004_VERSION_5.0" />
                      <LogEntry time="10:40:30" msg="AI_SYNTH_CORE_BOOT_COMPLETE" type="info" />
                      <LogEntry time="10:39:12" msg="ENCRYPTION_KEY_ROTATED" type="warning" />
                      <LogEntry time="10:38:44" msg="OEM_PORTAL_CONNECTION_OPEN" />
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
 
        <footer className="h-12 border-t border-white/5 bg-black/60 flex items-center justify-between px-10 text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase shrink-0">
          <div className="flex gap-10">
            <span className="flex items-center gap-1.5"><Activity size={14} className="text-emerald-500" /> STABILITY_INDEX: {healthScore}%</span>
            <span className="flex items-center gap-1.5 text-sky-500 font-black"><Globe size={12} /> HYD_DC_NODE_01</span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="text-slate-400">{new Date().toLocaleTimeString()}</span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
          </div>
        </footer>
      </main>
    </div>
  );
};
 
const StatCard = ({ icon, label, value, color }) => {
  const colorMap = {
    sky: 'text-sky-400 bg-sky-500/10 border-sky-500/20 shadow-sky-500/5 hover:bg-sky-500/20',
    rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20 shadow-rose-500/5 hover:bg-rose-500/20',
    indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20 shadow-indigo-500/5 hover:bg-indigo-500/20',
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/5 hover:bg-emerald-500/20'
  };
  return (
    <div className={`p-6 rounded-2xl border ${colorMap[color]} backdrop-blur-md flex items-center gap-5 transition-all cursor-default active:scale-95 group`}>
      <div className={`p-4 rounded-xl bg-black/20 group-hover:scale-110 transition-transform`}>{React.cloneElement(icon, { size: 28 })}</div>
      <div>
        <div className="text-[10px] font-black uppercase text-slate-500 tracking-[0.1em] mb-1">{label}</div>
        <div className="text-2xl font-mono font-black text-white">{value}</div>
      </div>
    </div>
  );
};
 
const CoverageItem = ({ label, value, color }) => (
  <div className="space-y-2 group/item">
    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
      <span className="text-slate-500 group-hover/item:text-slate-300 transition-colors">{label}</span>
      <span className="text-white">{value}</span>
    </div>
    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
      <div className={`h-full ${color} transition-all duration-1000 group-hover/item:brightness-125`} style={{ width: value }}></div>
    </div>
  </div>
);
 
const LogEntry = ({ time, msg, type }) => {
  const colors = {
    success: 'text-emerald-400',
    info: 'text-sky-400',
    warning: 'text-amber-400',
    default: 'text-slate-400'
  };
  return (
    <div className={`flex gap-3 ${colors[type] || colors.default} hover:bg-white/5 p-1 rounded transition-colors cursor-default`}>
      <span>[{time}]</span>
      <span className="font-bold tracking-tight">{msg}</span>
    </div>
  );
};
 
export default App;
