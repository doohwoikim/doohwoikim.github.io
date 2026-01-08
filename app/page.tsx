import React from 'react';
import { Github, Mail, ExternalLink, Code2, Database, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* 1. 네비게이션 바 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Doohwoi.Dev
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        
        {/* 2. 히어로 섹션 (자기소개) */}
        <section id="about" className="mb-32 animate-fade-in-up">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
              안녕하세요, <br />
              <span className="text-blue-600">백엔드 개발자</span> 김두회입니다.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Java와 Spring Boot를 주력으로 안정적인 서버를 구축합니다.<br/>
              최근에는 주식 정보 분석 시스템과 데이터 처리에 관심을 갖고 있으며, 
              Node.js와 Python을 활용한 유연한 개발도 지향합니다.
            </p>
            
            <div className="flex gap-4">
              <a href="https://github.com/doohwoikim" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition">
                <Github size={20} />
                GitHub 방문하기
              </a>
              <a href="#contact" 
                 className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition">
                <Mail size={20} />
                연락하기
              </a>
            </div>
          </div>
        </section>

        {/* 3. 기술 스택 (Skills) */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Terminal className="text-blue-600" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Backend Card */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Code2 size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Backend</h3>
              <p className="text-slate-600">Java, Spring Boot, Node.js, Python</p>
            </div>
            
            {/* Database Card */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                <Database size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Database</h3>
              <p className="text-slate-600">MySQL, MariaDB</p>
            </div>

            {/* DevOps/Tools Card */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                <Terminal size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Tools</h3>
              <p className="text-slate-600">Git, GitHub Actions, MacOS</p>
            </div>
          </div>
        </section>

        {/* 4. 프로젝트 목록 */}
        <section id="projects" className="mb-32">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1: 주식 정보 앱 */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Stock Info App</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">주식 정보 웹 애플리케이션</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  Spring Boot와 MySQL을 활용하여 실시간 주식 정보를 수집하고 분석하여 사용자에게 제공하는 웹 서비스입니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Java 17</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Spring Boot</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">MySQL</span>
                </div>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline">
                  View Project <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </article>

            {/* Project 2: 포트폴리오 사이트 */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">Portfolio V1</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">개인 포트폴리오 웹사이트</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  Next.js와 GitHub Pages를 이용하여 구축한 정적 웹사이트입니다. CI/CD 자동화를 통해 코드를 푸시하면 자동 배포됩니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">Tailwind</span>
                </div>
                <a href="https://github.com/doohwoikim/doohwoikim.github.io" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline">
                  View Source <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </article>

          </div>
        </section>

        {/* 5. 하단(Footer) */}
        <section id="contact" className="border-t border-slate-200 pt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Let's work together</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            새로운 프로젝트 기회나 기술적인 대화는 언제든 환영합니다.
          </p>
          <a href="mailto:contact@email.com" className="text-xl font-bold text-blue-600 hover:text-blue-700 underline">
            contact@email.com
          </a>
          <p className="text-slate-400 text-sm mt-16">
            © 2026 Doohwoi Kim. All rights reserved.
          </p>
        </section>

      </main>
    </div>
  );
}
