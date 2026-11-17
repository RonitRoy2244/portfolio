import React, { useState } from 'react';
import { 
  ShoppingCart, 
  UserCheck, 
  Search, 
  CreditCard, 
  Cloud, 
  Server, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

const flows = [
  {
    step: 1,
    title: "1. User Registration & Auth",
    icon: UserCheck,
    desc: "Stateless JWT token issuance with BCrypt password hashing (10 salt rounds).",
    details: "Endpoints: POST /api/auth/register, POST /api/auth/login. Issues claims-signed JWT stored in HTTP-only Bearer headers.",
    statusBadge: "JWT + BCrypt Secured"
  },
  {
    step: 2,
    title: "2. Product Catalog & Search",
    icon: Search,
    desc: "Paginated product browsing and filtering powered by Hibernate JPA on MySQL.",
    details: "Endpoints: GET /api/products?page=0&size=12&category=tech. Optimized indexing on category and price columns.",
    statusBadge: "JPA Paginated Queries"
  },
  {
    step: 3,
    title: "3. Real-Time Cart State",
    icon: ShoppingCart,
    desc: "Persistent user basket with atomic quantity adjustments and inventory reservations.",
    details: "Endpoints: POST /api/cart/items, PUT /api/cart/items/{id}, DELETE /api/cart/items/{id}. Synchronized with MySQL InnoDB rows.",
    statusBadge: "ACID Consistency"
  },
  {
    step: 4,
    title: "4. Checkout & Order Fulfillment",
    icon: CreditCard,
    desc: "Multi-table transactional checkout with rollback safeguards and order receipt generation.",
    details: "Endpoints: POST /api/orders/checkout. Uses @Transactional to ensure cart clearance and stock decrement are atomic.",
    statusBadge: "Transactional Rollback Safe"
  }
];

export default function MeridianVisualizer({ darkMode }) {
  const [currentFlow, setCurrentFlow] = useState(0);
  const [viewMode, setViewMode] = useState('flows'); // 'flows' or 'aws'
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSimulateCheckout = () => {
    setOrderPlaced(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  return (
    <section id="meridian-demo" className="py-20 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
              <span>06 // Full-Stack & Cloud Architecture</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Meridian E-Commerce & AWS Cloud Topology
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Explore the 4 core transactional flows and the AWS EC2, RDS, and Nginx deployment architecture.
            </p>
          </div>

          {/* Toggle View */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-slate-800 bg-slate-900/60 font-mono text-xs">
            <button
              onClick={() => setViewMode('flows')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'flows' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              4 Core Flows
            </button>
            <button
              onClick={() => setViewMode('aws')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'aws' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              AWS Cloud Topology
            </button>
          </div>
        </div>

        {viewMode === 'flows' ? (
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            
            {/* Step Navigation Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {flows.map((flow, idx) => {
                const Icon = flow.icon;
                const isActive = currentFlow === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentFlow(idx)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-sm' 
                        : darkMode 
                          ? 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200' 
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold">Step {flow.step}</span>
                    </div>
                    <div className="text-xs font-semibold truncate">{flow.title.split('. ')[1]}</div>
                  </button>
                );
              })}
            </div>

            {/* Current Active Flow Breakdown */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {React.createElement(flows[currentFlow].icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {flows[currentFlow].title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      {flows[currentFlow].statusBadge}
                    </p>
                  </div>
                </div>

                {currentFlow === 3 && (
                  <button
                    onClick={handleSimulateCheckout}
                    disabled={orderPlaced}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 transition-all cursor-pointer shadow-md shadow-emerald-500/20"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>{orderPlaced ? "Order #9812 Placed!" : "Simulate Live Checkout"}</span>
                  </button>
                )}
              </div>

              <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {flows[currentFlow].desc}
              </p>

              <div className={`p-4 rounded-xl font-mono text-xs ${
                darkMode ? 'bg-slate-950 text-cyan-300 border border-slate-800' : 'bg-white text-blue-900 border border-slate-200'
              }`}>
                {flows[currentFlow].details}
              </div>

              {orderPlaced && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-mono text-xs flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> 
                    Transaction Committed: MySQL RDS updated, cart cleared, confirmation email sent.
                  </span>
                  <span className="text-[11px] text-white">Status: 201 CREATED</span>
                </div>
              )}
            </div>

          </div>
        ) : (
          /* AWS Cloud Infrastructure Architecture View */
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            <h3 className={`text-lg font-bold font-mono flex items-center gap-2 mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <Cloud className="w-5 h-5 text-cyan-400" />
              AWS Cloud Deployment Topology & Network Isolation
            </h3>

            {/* Topology Flowchart */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              
              <div className={`p-5 rounded-2xl border text-center ${
                darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <div className="w-10 h-10 mx-auto rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold">1. Clients / Web</div>
                <p className="text-xs text-slate-400 mt-1 font-mono">React.js & Bootstrap Frontend on HTTPS (Port 443)</p>
              </div>

              <div className={`p-5 rounded-2xl border text-center ${
                darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold">2. Nginx Reverse Proxy</div>
                <p className="text-xs text-slate-400 mt-1 font-mono">SSL Termination & Static Asset Caching</p>
              </div>

              <div className={`p-5 rounded-2xl border text-center ${
                darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                  <Cloud className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold">3. AWS EC2</div>
                <p className="text-xs text-slate-400 mt-1 font-mono">Spring Boot Backend Runtime (Port 8080)</p>
              </div>

              <div className={`p-5 rounded-2xl border text-center ${
                darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold">4. AWS RDS</div>
                <p className="text-xs text-slate-400 mt-1 font-mono">Managed MySQL 8.0 isolated in Private Subnet</p>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center gap-3 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Security Group Enforcement:</strong> AWS RDS ingress is strictly locked to incoming requests originating from the EC2 security group ID. No public IP access is permitted to the database.</span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
