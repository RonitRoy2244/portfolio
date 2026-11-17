import React, { useState } from 'react';
import { 
  Play, 
  Terminal, 
  ShieldCheck, 
  Clock, 
  HardDrive, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  RefreshCw, 
  Code2, 
  Sparkles,
  Lock,
  Database
} from 'lucide-react';
import confetti from 'canvas-confetti';

const sampleProblems = [
  {
    id: 1,
    title: "1. Two Sum",
    difficulty: "EASY",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    javaCode: `import java.util.*;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}`,
    jsCode: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
    testCasesCount: 15
  },
  {
    id: 2,
    title: "125. Valid Palindrome",
    difficulty: "EASY",
    description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
    javaCode: `public class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}`,
    jsCode: `function isPalindrome(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let l = 0, r = clean.length - 1;
    while (l < r) {
        if (clean[l] !== clean[r]) return false;
        l++;
        r--;
    }
    return true;
}`,
    testCasesCount: 20
  }
];

export default function CodeArenaSimulator({ darkMode }) {
  const [selectedProblem, setSelectedProblem] = useState(sampleProblems[0]);
  const [language, setLanguage] = useState('JAVA');
  const [activeTab, setActiveTab] = useState('runner'); // 'runner' or 'architecture'
  const [isRunning, setIsRunning] = useState(false);
  const [executionStep, setExecutionStep] = useState(0);
  const [result, setResult] = useState(null);

  const currentCode = language === 'JAVA' ? selectedProblem.javaCode : selectedProblem.jsCode;

  const handleRunCode = () => {
    if (isRunning) return;
    setIsRunning(true);
    setResult(null);
    setExecutionStep(1); // Acquiring Semaphore

    setTimeout(() => {
      setExecutionStep(2); // Spawning isolated OS Subprocess
    }, 400);

    setTimeout(() => {
      setExecutionStep(3); // Enforcing 64KB cap & process timeout guard
    }, 800);

    setTimeout(() => {
      setExecutionStep(4); // Executing hidden test cases
    }, 1200);

    setTimeout(() => {
      setIsRunning(false);
      setExecutionStep(5); // Complete
      setResult({
        verdict: "ACCEPTED",
        runtimeMs: language === 'JAVA' ? 112 : 78,
        memoryMb: language === 'JAVA' ? 24.2 : 18.6,
        outputBufferKb: 0.8,
        testsPassed: `${selectedProblem.testCasesCount} / ${selectedProblem.testCasesCount}`,
        semaphoreState: "Active slot released (3/3 available)",
        exitCode: 0
      });
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 1600);
  };

  return (
    <section id="codearena-demo" className="py-20 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
              <span>05 // Interactive Sandbox Engine</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              CodeArena Live Subprocess Simulator
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Experience the isolated OS subprocess execution engine with semaphore concurrency and 64 KB output cap.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-slate-800 bg-slate-900/60 font-mono text-xs">
            <button
              onClick={() => setActiveTab('runner')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'runner' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Live Code Runner
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'architecture' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              4 Entities & Security Blueprint
            </button>
          </div>
        </div>

        {activeTab === 'runner' ? (
          <div className={`rounded-3xl border overflow-hidden shadow-2xl transition-all ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            
            {/* Top Toolbar */}
            <div className={`px-4 sm:px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
              darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              
              <div className="flex flex-wrap items-center gap-3">
                {/* Problem Selector */}
                <select
                  value={selectedProblem.id}
                  onChange={(e) => setSelectedProblem(sampleProblems.find(p => p.id === Number(e.target.value)))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                    darkMode ? 'bg-slate-950 text-white border-slate-700' : 'bg-white text-slate-900 border-slate-300'
                  }`}
                >
                  {sampleProblems.map(p => (
                    <option key={p.id} value={p.id}>{p.title} ({p.difficulty})</option>
                  ))}
                </select>

                {/* Language Selector */}
                <div className="flex items-center gap-1 p-0.5 rounded-lg border border-slate-700/60 bg-slate-900 text-xs font-mono">
                  <button
                    onClick={() => setLanguage('JAVA')}
                    className={`px-2.5 py-1 rounded-md ${
                      language === 'JAVA' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Java 17
                  </button>
                  <button
                    onClick={() => setLanguage('JS')}
                    className={`px-2.5 py-1 rounded-md ${
                      language === 'JS' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    JavaScript (Node)
                  </button>
                </div>
              </div>

              {/* Execution Action Button */}
              <button
                type="button"
                onClick={handleRunCode}
                disabled={isRunning}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-bold text-white transition-all duration-200 shadow-md ${
                  isRunning 
                    ? 'bg-slate-700 cursor-not-allowed opacity-80' 
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 cursor-pointer shadow-emerald-500/20 hover:shadow-emerald-500/40'
                }`}
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing in Subprocess...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run in Isolated Sandbox</span>
                  </>
                )}
              </button>

            </div>

            {/* Split Screen: Code Viewer + Sandbox Monitor */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              
              {/* Code Viewer */}
              <div className="lg:col-span-7 p-4 sm:p-6 font-mono text-xs overflow-x-auto">
                <div className="flex items-center justify-between text-slate-400 mb-3 pb-2 border-b border-slate-800/50">
                  <span className="flex items-center gap-2 text-cyan-400">
                    <Code2 className="w-4 h-4" /> Solution.{language === 'JAVA' ? 'java' : 'js'}
                  </span>
                  <span className="text-[11px] text-slate-500">Read-Only Sample Submission</span>
                </div>
                <pre className={`p-4 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto ${
                  darkMode ? 'bg-slate-900/50 text-slate-200' : 'bg-slate-50 text-slate-800'
                }`}>
                  <code>{currentCode}</code>
                </pre>
              </div>

              {/* Sandbox Execution Status */}
              <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <h4 className={`text-sm font-bold font-mono mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    Subprocess Sandbox Telemetry
                  </h4>

                  {/* Execution Flow Steps */}
                  <div className="space-y-3 font-mono text-xs mb-6">
                    <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                      executionStep >= 1 ? 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300' : 'border-slate-800 text-slate-500'
                    }`}>
                      <span className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5" /> 1. Concurrency Semaphore
                      </span>
                      <span>{executionStep >= 1 ? 'Slot Acquired (1/3)' : 'Idle'}</span>
                    </div>

                    <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                      executionStep >= 2 ? 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300' : 'border-slate-800 text-slate-500'
                    }`}>
                      <span className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5" /> 2. OS Subprocess Spawn
                      </span>
                      <span>{executionStep >= 2 ? 'Isolated Tree (PID: 8192)' : 'Waiting'}</span>
                    </div>

                    <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                      executionStep >= 3 ? 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300' : 'border-slate-800 text-slate-500'
                    }`}>
                      <span className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5" /> 3. 64KB Cap & Time Guard
                      </span>
                      <span>{executionStep >= 3 ? '1.5s Limit · 64KB Cap Active' : 'Waiting'}</span>
                    </div>

                    <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                      executionStep >= 4 ? 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300' : 'border-slate-800 text-slate-500'
                    }`}>
                      <span className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5" /> 4. Server-Side Hidden Tests
                      </span>
                      <span>{executionStep >= 4 ? `${selectedProblem.testCasesCount}/${selectedProblem.testCasesCount} Passed` : 'Locked'}</span>
                    </div>
                  </div>

                  {/* Verdict Output Card */}
                  {result ? (
                    <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-400 font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between font-bold text-sm text-emerald-300 pb-2 border-b border-emerald-500/20">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verdict: {result.verdict}
                        </span>
                        <span>Exit 0</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                        <div>Runtime: <span className="text-white font-bold">{result.runtimeMs} ms</span></div>
                        <div>Memory: <span className="text-white font-bold">{result.memoryMb} MB</span></div>
                        <div>Output Size: <span className="text-white font-bold">{result.outputBufferKb} KB / 64 KB</span></div>
                        <div>Tests Passed: <span className="text-white font-bold">{result.testsPassed}</span></div>
                      </div>
                    </div>
                  ) : (
                    <div className={`p-4 rounded-2xl border border-dashed text-center font-mono text-xs ${
                      darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-300 text-slate-400'
                    }`}>
                      Click "Run in Isolated Sandbox" to trigger the complete execution lifecycle.
                    </div>
                  )}
                </div>

                {/* Subprocess Safeguards Note */}
                <div className="mt-4 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
                  <span className="text-cyan-400 font-bold">Safeguard Guarantee:</span> Hidden test cases never leave the server; process-tree termination kills runaway forks automatically.
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Architecture Blueprint Tab */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 4 Entities Schema */}
            <div className={`p-6 rounded-3xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <h3 className={`text-base font-bold font-mono flex items-center gap-2 mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <Database className="w-4 h-4 text-cyan-400" />
                4 Core Relational Entities (MySQL & Hibernate JPA)
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-cyan-400 font-bold block">1. User Entity:</span>
                  <span className="text-slate-400">id, username, email, passwordHash (BCrypt), role (USER/ADMIN), createdAt</span>
                </div>
                <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-indigo-400 font-bold block">2. Problem Entity:</span>
                  <span className="text-slate-400">id, title, difficulty, description, timeLimitMs, memoryLimitMb, createdAt</span>
                </div>
                <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-emerald-400 font-bold block">3. Submission Entity:</span>
                  <span className="text-slate-400">id, userId, problemId, language (JAVA/JS), sourceCode, status, runtimeMs, output</span>
                </div>
                <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-amber-400 font-bold block">4. TestCase Entity:</span>
                  <span className="text-slate-400">id, problemId, inputData, expectedOutput, isHidden (never exposed to client)</span>
                </div>
              </div>
            </div>

            {/* Security Safeguards & 25 Automated Tests */}
            <div className={`p-6 rounded-3xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              <h3 className={`text-base font-bold font-mono flex items-center gap-2 mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Security & Concurrency Protections
              </h3>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-emerald-400">✔</span>
                  <span><strong>Semaphore(3):</strong> Caps simultaneous subprocess runs to prevent CPU starvation.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-emerald-400">✔</span>
                  <span><strong>Rate Limiting:</strong> 1 submission per 5 seconds per authenticated user token.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-emerald-400">✔</span>
                  <span><strong>64 KB Buffer Cap:</strong> Prevents stdout flooding and JVM OutOfMemoryErrors.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-emerald-400">✔</span>
                  <span><strong>Process-Tree Termination:</strong> Clean SIGKILL to child threads on timeout.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <span className="text-emerald-400">✔</span>
                  <span><strong>25 Automated Tests:</strong> JUnit 5 & MockMvc verifying auth, endpoints, & runner.</span>
                </li>
              </ul>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
