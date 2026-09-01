"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/providers/ThemeProvider";
import {
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Layers,
  Smartphone,
  Globe,
  Server,
  Cloud,
  Sparkles,
  GitMerge,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useQuoteModal } from "@/providers/QuoteModalProvider";
import { Button } from "../ui";

const SERVICES_LIST = [
  {
    title: "Web Development",
    slug: "/services/web-development",
    desc: "Responsive web apps, portals, dashboards & SaaS systems",
    icon: Globe,
  },
  {
    title: "Mobile Development",
    slug: "/services/mobile-development",
    desc: "iOS, Android & cross-platform Flutter / React Native apps",
    icon: Smartphone,
  },
  {
    title: "Backend & APIs",
    slug: "/services/backend-api-development",
    desc: "REST/gRPC microservices, authentication & integrations",
    icon: Server,
  },
  {
    title: "Enterprise Software",
    slug: "/services/enterprise-software",
    desc: "Business-critical systems, ERPs, ledgers & workflow tools",
    icon: Layers,
  },
  {
    title: "Cloud & DevOps",
    slug: "/services/cloud-devops",
    desc: "Cloud infrastructure, Kubernetes, CI/CD & auto-scaling",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    slug: "/services/ai-automation",
    desc: "Intelligent assistants, OCR document parsing & workflows",
    icon: Sparkles,
  },
  {
    title: "Software Modernization",
    slug: "/services/software-modernization",
    desc: "Microservices transition, cloud migration & refactoring",
    icon: GitMerge,
  },
  {
    title: "QA & Testing",
    slug: "/services/qa-testing",
    desc: "Automated E2E testing, security audits & load testing",
    icon: ShieldCheck,
  },
];

const TECH_SECTIONS = [
  {
    id: "web",
    title: "Web Platforms",
    techs: ["Next.js", "React", "TypeScript"],
    href: "/technologies/web",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    techs: ["React Native", "Flutter", "Swift & Kotlin"],
    href: "/technologies/mobile",
  },
  {
    id: "erp",
    title: "ERP Development",
    techs: ["ODOO", "PostgreSQL", "Docker"],
    href: "/technologies/erp",
  },
  {
    id: "custom",
    title: "Custom Systems",
    techs: ["Go", "Rust", "Python"],
    href: "/technologies/custom",
  },
];

const NAV_LINKS = [
  { title: "Case Studies", href: "/case-studies" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { openQuoteModal } = useQuoteModal();

  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const techTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (techTimeoutRef.current) clearTimeout(techTimeoutRef.current);
    setServicesOpen(true);
    setTechOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const handleTechEnter = () => {
    if (techTimeoutRef.current) clearTimeout(techTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setTechOpen(true);
    setServicesOpen(false);
  };

  const handleTechLeave = () => {
    techTimeoutRef.current = setTimeout(() => {
      setTechOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setTechOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-2 right-2 rounded-full z-50 h-18 flex items-center transition-all duration-300 border-b ${
          scrolled || mobileMenuOpen
            ? "bg-(--nav-bg)/80 backdrop-blur-2xl border-(--border-color)/50 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="p-4 flex items-center justify-between w-full">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group select-none"
          >
            <div className="w-8.5 h-8.5 rounded-lg bg-[#0b2545] border border-white/15 flex items-center justify-center text-white font-mono font-bold text-sm tracking-tighter group-hover:border-(--teal) transition-colors shadow-xs">
              TN
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-(--text-primary) leading-tight font-display">
                RiseUp
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-(--teal) font-medium">
                Engineering
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-(--teal) font-semibold"
                  : "text-(--text-secondary) hover:text-(--text-primary)"
              }`}
            >
              Home
            </Link>

            <div
              className="py-2"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1.5 text-sm font-medium py-1 transition-colors cursor-pointer ${
                  pathname.startsWith("/services")
                    ? "text-(--teal) font-semibold"
                    : "text-(--text-secondary) hover:text-(--text-primary)"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-(--teal)" : ""
                  }`}
                />
              </Link>

              {servicesOpen && (
                <div
                  className="fixed top-18 left-1/2 -translate-x-1/2 pt-2.5 w-[1140px] max-w-[calc(100vw-32px)] z-50 animate-fadeIn"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <div className="relative rounded-2xl border shadow-2xl overflow-hidden bg-white dark:bg-black border-(--border-color) before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                    <div className="flex">
                      <div
                        className="w-[230px] shrink-0 p-6 flex flex-col justify-between border-r border-(--border-color)"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--teal) 10%, var(--bg-primary))",
                        }}
                      >
                        <div>
                          <h3 className="text-[15px] font-bold text-(--text-primary) leading-snug font-display">
                            Explore Our Services
                          </h3>
                          <p className="mt-2.5 text-xs text-(--text-secondary) leading-relaxed">
                            From enterprise systems to high-performance mobile &
                            web platforms.
                          </p>
                        </div>

                        <Link
                          href="/services"
                          className="mt-6 inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full bg-(--teal) text-white text-xs font-semibold hover:brightness-110 transition-all shadow-sm"
                        >
                          View all services
                        </Link>
                      </div>

                      <div className="flex-1 p-4 grid grid-cols-4 gap-2.5">
                        {SERVICES_LIST.map((service) => {
                          const Icon = service.icon;
                          const isActive = pathname === service.slug;

                          return (
                            <Link
                              key={service.slug}
                              href={service.slug}
                              className={`group flex flex-col gap-2.5 p-3 rounded-xl border transition-all duration-200 ${
                                isActive
                                  ? "border-(--teal)/40 bg-(--teal)/8"
                                  : "border-transparent hover:border-(--border-color) hover:bg-(--border-color)/20 dark:hover:bg-white/5"
                              }`}
                            >
                              <div
                                className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center border transition-colors ${
                                  isActive
                                    ? "bg-(--teal)/15 border-(--teal)/40 text-(--teal)"
                                    : "bg-(--bg-primary) border-(--border-color) text-(--teal) group-hover:border-(--teal) group-hover:bg-(--teal) group-hover:text-white"
                                }`}
                              >
                                <Icon size={16} />
                              </div>

                              <div>
                                <div
                                  className={`text-xs font-bold leading-tight transition-colors ${
                                    isActive
                                      ? "text-(--teal)"
                                      : "text-(--text-primary) group-hover:text-(--teal)"
                                  }`}
                                >
                                  {service.title}
                                </div>
                                <div className="text-[10.5px] text-(--text-secondary) mt-1 leading-snug line-clamp-2">
                                  {service.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="py-2"
              onMouseEnter={handleTechEnter}
              onMouseLeave={handleTechLeave}
            >
              <Link
                href="/technologies"
                className={`flex items-center gap-1.5 text-sm font-medium py-1 transition-colors cursor-pointer ${
                  pathname.startsWith("/technologies")
                    ? "text-(--teal) font-semibold"
                    : "text-(--text-secondary) hover:text-(--text-primary)"
                }`}
                aria-expanded={techOpen}
              >
                <span>Technologies</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    techOpen ? "rotate-180 text-(--teal)" : ""
                  }`}
                />
              </Link>

              {techOpen && (
                <div
                  className="fixed top-18 left-1/2 -translate-x-1/2 pt-2.5 w-[780px] max-w-[calc(100vw-32px)] z-50 animate-fadeIn"
                  onMouseEnter={handleTechEnter}
                  onMouseLeave={handleTechLeave}
                >
                  <div className="relative rounded-2xl border shadow-2xl overflow-hidden bg-white dark:bg-black border-(--border-color) before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                    <div className="p-6">
                      <div className="grid grid-cols-4 divide-x divide-(--border-color)">
                        {TECH_SECTIONS.map((sec) => (
                          <div key={sec.id} className="px-5 first:pl-2 last:pr-2 flex flex-col justify-between min-h-[160px]">
                            <div>
                              <h4 className="text-sm font-bold text-(--text-primary) font-display mb-3.5">
                                {sec.title}
                              </h4>
                              <div className="space-y-2">
                                {sec.techs.map((tech) => (
                                  <span
                                    key={tech}
                                    className="block text-xs text-(--text-secondary) hover:text-(--teal) transition-colors font-medium cursor-default"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <Link
                              href={sec.href}
                              className="mt-4 text-xs font-semibold text-(--teal) hover:text-(--aqua) inline-flex items-center gap-1"
                            >
                              <span>Explore Stack</span>
                              <ChevronRight size={12} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-(--teal) font-semibold"
                      : "text-(--text-secondary) hover:text-(--text-primary)"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="w-9 h-9 rounded-full border flex items-center justify-center text-(--text-secondary) hover:text-(--text-primary) hover:border-(--teal) transition-colors cursor-pointer"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Button variant="quote" size="sm" />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="w-9.5 h-9.5 rounded-full border flex items-center justify-center text-(--text-secondary) hover:text-(--text-primary) active:scale-95 transition-all"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              className="w-9.5 h-9.5 rounded-xl border flex items-center justify-center text-(--text-primary) hover:border-(--teal) active:scale-95 transition-all"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-18 bottom-0 z-60 flex flex-col overflow-y-auto border-t animate-fadeIn bg-white dark:bg-black border-(--border-color)"
        >
          <div className="flex-1 p-5 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition-all ${
                pathname === "/"
                  ? "bg-(--teal)/10 text-(--teal)"
                  : "text-(--text-primary) hover:bg-(--border-color)/20"
              }`}
            >
              <span>Home</span>
              <ChevronRight
                size={16}
                className={
                  pathname === "/" ? "text-(--teal)" : "text-(--text-muted)"
                }
              />
            </Link>

            <div
              className="rounded-2xl border overflow-hidden border-(--border-color)"
            >
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-xs font-mono uppercase tracking-wider text-(--teal) font-semibold"
              >
                <span>Services</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    mobileServicesOpen
                      ? "rotate-180 text-(--teal)"
                      : "text-(--text-secondary)"
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="px-3 pb-3 grid grid-cols-1 gap-1.5 border-t border-(--border-color) max-h-[340px] overflow-y-auto">
                  {SERVICES_LIST.map((service) => {
                    const Icon = service.icon;
                    const isActive = pathname === service.slug;
                    return (
                      <Link
                        key={service.slug}
                        href={service.slug}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                          isActive
                            ? "bg-(--teal)/10 text-(--teal) font-semibold border border-(--teal)/30"
                            : "text-(--text-primary) hover:bg-(--border-color)/25 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8.5 h-8.5 rounded-lg bg-(--bg-primary) border border-(--border-color) flex items-center justify-center text-(--teal) shrink-0">
                            <Icon size={15} />
                          </div>
                          <div>
                            <div className="text-xs font-bold leading-tight">
                              {service.title}
                            </div>
                            <div className="text-[10px] text-(--text-muted) line-clamp-1 mt-0.5">
                              {service.desc}
                            </div>
                          </div>
                        </div>
                        <ChevronRight
                          size={14}
                          className="text-(--text-muted) shrink-0"
                        />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <div
              className="rounded-2xl border overflow-hidden border-(--border-color)"
            >
              <button
                onClick={() => setMobileTechOpen(!mobileTechOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-xs font-mono uppercase tracking-wider text-(--teal) font-semibold"
              >
                <span>Technologies</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    mobileTechOpen
                      ? "rotate-180 text-(--teal)"
                      : "text-(--text-secondary)"
                  }`}
                />
              </button>

              {mobileTechOpen && (
                <div className="px-4 pb-4 space-y-4 border-t border-(--border-color)">
                  {TECH_SECTIONS.map((sec) => (
                    <div key={sec.id} className="pt-3 first:pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-(--text-primary)">
                          {sec.title}
                        </span>
                        <Link
                          href={sec.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[11px] font-semibold text-(--teal)"
                        >
                          Explore Stack →
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {sec.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-(--bg-primary) border border-(--border-color) text-(--text-secondary)"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "bg-(--teal)/10 text-(--teal)"
                      : "text-(--text-primary) hover:bg-(--border-color)/20"
                  }`}
                >
                  <span>{link.title}</span>
                  <ChevronRight
                    size={16}
                    className={
                      isActive ? "text-(--teal)" : "text-(--text-muted)"
                    }
                  />
                </Link>
              );
            })}
          </div>

          <div className="p-5 border-t border-(--border-color) bg-(--bg-card)/40">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full justify-center"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
