/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'zamarbako99@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section 
      id="contact" 
      className="px-6 py-20 md:px-12 md:py-28 lg:py-32 bg-[#05070A] border-t border-white/[0.04]"
    >
      <div className="mx-auto max-w-4xl">
        
        {/* Massive Premium Callout Card */}
        <div className="relative rounded-2xl border border-white/[0.06] bg-[#101827] p-8 md:p-14 overflow-hidden shadow-2xl">
          {/* Accent light source */}
          <div className="absolute top-0 right-0 h-64 w-64 -mr-20 -mt-20 rounded-full bg-[#4F7DFF]/5 blur-[60px]" />
          
          <div className="relative z-10 max-w-2xl">
            {/* Title */}
            <h2 
              className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#F5F7FA] mb-6 font-display"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Let's build<br />something precise.
            </h2>
            
            {/* Description */}
            <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed mb-10 font-normal">
              I'm currently open to selective freelance opportunities and consulting for high-growth tech products.
            </p>

            {/* Copyable Email Input Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div 
                onClick={handleCopy}
                className="group flex flex-1 items-center justify-between gap-4 rounded-lg border border-white/5 bg-[#05070A] p-4 cursor-pointer transition-all duration-300 hover:border-[#4F7DFF]/40 hover:bg-[#05070A]/85"
                id="contact-email-card"
                title="Click to copy email address"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#101827] text-[#4F7DFF] group-hover:bg-[#4F7DFF] group-hover:text-white transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-sm tracking-wider text-[#F5F7FA]">
                    {email}
                  </span>
                </div>
                
                {/* Copy Status indicator */}
                <div className="flex items-center justify-center text-[#9CA3AF] hover:text-white transition-colors duration-200">
                  {copied ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#4F7DFF]">
                      <Check className="h-4 w-4" />
                      COPIED
                    </span>
                  ) : (
                    <Copy className="h-4 w-4 group-hover:scale-105 transition-transform duration-200" />
                  )}
                </div>
              </div>
              
              {/* Mailto directly button */}
              <a
                href={`mailto:${email}`}
                className="inline-flex h-14 items-center justify-center rounded-lg bg-[#4F7DFF] px-8 text-xs font-mono font-bold tracking-wider text-white transition-all duration-300 hover:bg-[#3B66E0] hover:shadow-[0_0_20px_rgba(79,125,255,0.3)]"
                id="contact-direct-mailto"
              >
                Mail Direct
              </a>
            </div>

          </div>
        </div>

        {/* Footer info row matching general aesthetics */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono tracking-widest text-[#9CA3AF]/40">
          <span>BAKO.GZ</span>
          <span>© 2024 Bako George Zamar. Built with precision.</span>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">GitHub</a>
            <a href="https://read.cv" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">Read.cv</a>
          </div>
        </div>

      </div>
    </section>
  );
}
