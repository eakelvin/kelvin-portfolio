"use client";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import Footer from "@/components/footer";
import Particles from "@/components/particles";
import { Header } from "@/components/ui/header";
import { navigation, profileImage } from "@/utils/links";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Drama, ChevronDown } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Typing Animation Component
const TypingAnimation = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = text.split(' ');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < words.length) {
        setDisplayedText(prev => prev + (currentIndex === 0 ? '' : ' ') + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + (currentIndex * 10)); // 80ms delay between words (faster)

    return () => clearTimeout(timeout);
  }, [currentIndex, words, delay]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollIndicator(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'writing'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black text-slate-300">
        <Header activeSection={activeSection} />

        <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="lg:flex lg:gap-4">
            <div className="my-10 sm:my-0 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div className="">
                <Image
                  src={profileImage}
                  alt="Kelvin Akaba"
                  width={72}
                  height={72}
                  priority
                  className="mb-6 h-[72px] w-[72px] rounded-full object-cover object-[50%_18%] ring-1 ring-slate-700/50"
                />
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  Kelvin Akaba
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Software Engineer | Technical Founder
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400">
                  I build and validate software products from idea to MVP.
                </p>
                <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                  <ul className="w-max space-y-3">
                    {['about', 'projects'].map((section) => {
                      return (
                        <li key={section}>
                          <a
                            href={`#${section}`}
                            className={`group flex items-center py-3 ${activeSection === section ? "active" : ""
                              }`}
                          >
                            <span
                              className={`nav-indicator mr-4 h-px transition-all ${activeSection === section
                                ? "w-16 bg-slate-200"
                                : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                                }`}
                            ></span>
                            <span
                              className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === section
                                ? "text-slate-200"
                                : "text-slate-500 group-hover:text-slate-200"
                                }`}
                            >
                              {section}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
                <li className="text-xs">
                  <a
                    className="block hover:text-slate-200 transition-colors"
                    href="https://github.com/eakelvin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    className="block hover:text-slate-200 transition-colors"
                    href="https://www.linkedin.com/in/kelvin-akaba/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    className="block hover:text-slate-200 transition-colors"
                    href="mailto:akabakelvin@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 lg:py-24">
              <About />
              <Projects />
              {/* <Experience /> */}
            </div>
          </div>
        </main>

        {/* <Footer /> */}
      </div>
    </>
  );
}