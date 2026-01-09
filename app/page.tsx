import React from 'react';
import { Github, Mail, ExternalLink, Database, Terminal, Layers, Globe } from 'lucide-react';
import { ThemeToggle } from './components/theme-toggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* 1. 네비게이션 바 */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Doohwoi.Dev
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">

        {/* 2. 히어로 섹션 (자기소개) */}
        <section id="about" className="mb-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
              안녕하세요, <br />
              <span className="text-blue-600 dark:text-blue-400">Full-Stack 개발자</span> 김두회입니다.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Java, Spring Boot부터 NestJS, React까지 폭넓은 기술 스택을 보유하고 있습니다.<br />
              사용자 중심의 가치를 실현하는 웹/앱 서비스를 구축하며,
              안정적인 백엔드 아키텍처와 세련된 프론트엔드 경험을 지향합니다.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/doohwoikim" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-lg">
                <Github size={20} />
                GitHub 방문하기
              </a>
              <a href="#contact"
                className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                <Mail size={20} />
                연락하기
              </a>
            </div>
          </div>
        </section>

        {/* 3. 기술 스택 (Skills) */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 dark:text-white">
            <Terminal className="text-blue-600 dark:text-blue-400" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend & Languages */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <Globe size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Frontend & Languages</h3>
              <p className="text-slate-600 dark:text-slate-400">React, HTML5, CSS, jQuery, JavaScript (ES6+), TypeScript, Python</p>
            </div>

            {/* Backend & Frameworks */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                <Layers size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Backend & Frameworks</h3>
              <p className="text-slate-600 dark:text-slate-400">NestJS, Spring Boot, Java, Express, Node.js, Flask</p>
            </div>

            {/* Database & Tools */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                <Database size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">Database & Tools</h3>
              <p className="text-slate-600 dark:text-slate-400">MySQL, MongoDB, MariaDB, Git, GitHub Actions</p>
            </div>
          </div>
        </section>

        {/* 4. 프로젝트 목록 */}
        <section id="projects" className="mb-32">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Project: antigravity-sandbox */}
            <article className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Antigravity Sandbox</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 dark:text-white transition">Antigravity Sandbox</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  물리 엔진과 상호작용을 실험할 수 있는 샌드박스 프로젝트입니다. TypeScript를 기반으로 구현되었습니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">React</span>
                </div>
                <a href="https://github.com/doohwoikim/antigravity-sandbox" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  View Source <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </article>

            {/* Project: glace */}
            <article className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Glace</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 dark:text-white transition">Glace</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  JavaScript를 활용한 세련된 웹 인터페이스/기능 구현 프로젝트입니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">UI/UX</span>
                </div>
                <a href="https://github.com/doohwoikim/glace" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  View Source <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </article>

            {/* Project: pythonWeather */}
            <article className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Python Weather</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 dark:text-white transition">Python Weather</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  날씨 데이터를 수집하고 시각화하는 프로젝트입니다. JavaScript와 Python을 혼용하여 개발되었습니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">Python</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">JavaScript</span>
                </div>
                <a href="https://github.com/doohwoikim/pythonWeather" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  View Source <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </article>

            {/* Project: dev_smart-blog */}
            <article className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Smart Blog</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 dark:text-white transition">Smart Blog</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  TypeScript를 이용한 현대적인 블로그 서비스 프로젝트입니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full">Next.js</span>
                </div>
                <a href="https://github.com/doohwoikim/dev_smart-blog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  View Source <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </article>

          </div>
        </section>

        {/* 5. 하단(Footer) */}
        <section id="contact" className="border-t border-slate-200 dark:border-slate-800 pt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Let's work together</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            새로운 프로젝트 기회나 기술적인 대화는 언제든 환영합니다.
          </p>
          <a href="mailto:doohwoikim@gmail.com" className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors">
            doohwoikim@gmail.com
          </a>
          <p className="text-slate-400 dark:text-slate-500 text-sm mt-16">
            © 2026 Doohwoi Kim. All rights reserved.
          </p>
        </section>

      </main>
    </div>
  );
}