import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  Terminal, 
  Layers, 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  Code2,
  Sparkles
} from 'lucide-react';
import { mockApiEndpoints } from '../data/portfolioData';

export default function ApiPlayground({ darkMode }) {
  const [selectedEndpoint, setSelectedEndpoint] = useState(mockApiEndpoints[0]);
  const [isSending, setIsSending] = useState(false);
  const [response, setResponse] = useState(mockApiEndpoints[0].responseBody);
  const [statusCode, setStatusCode] = useState(mockApiEndpoints[0].responseStatus);
  const [copiedResponse, setCopiedResponse] = useState(false);
  const [latency, setLatency] = useState(42);

  const handleSelect = (endpoint) => {
    setSelectedEndpoint(endpoint);
    setResponse(endpoint.responseBody);
    setStatusCode(endpoint.responseStatus);
  };

  const handleSendRequest = () => {
    setIsSending(true);
    const mockLatency = Math.floor(Math.random() * 60) + 35;
    setTimeout(() => {
      setIsSending(false);
      setLatency(mockLatency);
      setResponse(selectedEndpoint.responseBody);
      setStatusCode(selectedEndpoint.responseStatus);
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(response, null, 2));
    setCopiedResponse(true);
    setTimeout(() => setCopiedResponse(false), 2000);
  };

  return (
    <section id="api-playground" className="py-20 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>07 // Developer API Sandbox</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Interactive Spring Boot REST API Console
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Test live simulated HTTP requests against Ronit's documented endpoints with Bearer auth, latency, and status codes.
          </p>
        </div>

        {/* API Console Window */}
        <div className={`rounded-3xl border overflow-hidden shadow-2xl transition-all ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          
          {/* Endpoint Selector Tabs */}
          <div className={`p-3 border-b flex flex-wrap items-center gap-2 ${
            darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            {mockApiEndpoints.map((ep) => (
              <button
                key={ep.id}
                onClick={() => handleSelect(ep)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedEndpoint.id === ep.id
                    ? darkMode
                      ? 'bg-slate-800 text-cyan-400 border border-cyan-500/40 shadow-xs'
                      : 'bg-white text-blue-600 border border-blue-300 shadow-xs'
                    : darkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  ep.method === 'POST' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {ep.method}
                </span>
                <span className="truncate">{ep.path}</span>
              </button>
            ))}
          </div>

          {/* Request Header Bar */}
          <div className={`p-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                selectedEndpoint.method === 'POST' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
              }`}>
                {selectedEndpoint.method}
              </span>
              <span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {selectedEndpoint.path}
              </span>
              <span className="text-slate-500 text-[11px] hidden md:inline">({selectedEndpoint.project})</span>
            </div>

            <button
              onClick={handleSendRequest}
              disabled={isSending}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <Send className={`w-3.5 h-3.5 ${isSending ? 'animate-pulse' : ''}`} />
              <span>{isSending ? "Executing..." : "Send Request"}</span>
            </button>
          </div>

          {/* Split Pane: Request Details + JSON Response */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Request Pane */}
            <div className="lg:col-span-5 p-4 sm:p-6 space-y-4 font-mono text-xs">
              <div>
                <span className="text-slate-500 block mb-1">Description:</span>
                <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {selectedEndpoint.description}
                </p>
              </div>

              <div>
                <span className="text-slate-500 block mb-1">Headers:</span>
                <div className={`p-3 rounded-xl border space-y-1 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div><span className="text-cyan-400">Content-Type:</span> application/json</div>
                  <div><span className="text-cyan-400">Authorization:</span> Bearer eyJhbGciOiJIUzI1...</div>
                </div>
              </div>

              {selectedEndpoint.requestPayload && (
                <div>
                  <span className="text-slate-500 block mb-1">Request Payload (JSON):</span>
                  <pre className={`p-3 rounded-xl border overflow-x-auto leading-relaxed ${
                    darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}>
                    <code>{JSON.stringify(selectedEndpoint.requestPayload, null, 2)}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Response Pane */}
            <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/60 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">Status:</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {statusCode} OK
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {latency}ms
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono border cursor-pointer transition-all ${
                      copiedResponse 
                        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400' 
                        : darkMode ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {copiedResponse ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedResponse ? "Copied" : "Copy JSON"}</span>
                  </button>
                </div>

                <pre className={`p-4 rounded-2xl font-mono text-xs leading-relaxed overflow-x-auto max-h-[360px] ${
                  darkMode ? 'bg-slate-900/80 text-emerald-300' : 'bg-slate-900 text-emerald-300'
                }`}>
                  <code>{JSON.stringify(response, null, 2)}</code>
                </pre>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Spring MVC REST Controller Simulation</span>
                <span className="text-cyan-400">Secured via Spring Security FilterChain</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
