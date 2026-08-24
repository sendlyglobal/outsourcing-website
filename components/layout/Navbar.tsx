"use client";

import React, { useState, useEffect } from "react";
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
  Cpu,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useQuoteModal } from "@/providers/QuoteModalProvider";
import { Button } from "../ui";

const SERVICES_LIST = [
  {
    title: "ERP Development",
    slug: "/services/erp-development",
    desc: "Enterprise resource planning & system integrations",
    icon: Layers,
  },
  {
    title: "Mobile Apps",
    slug: "/services/mobile-development",
    desc: "Native iOS/Android & cross-platform apps",
    icon: Smartphone,
  },
  {
    title: "Web Platforms",
    slug: "/services/web-development",
    desc: "High-throughput web applications & cloud portals",
    icon: Globe,
  },
  {
    title: "Custom Systems",
    slug: "/services/custom-software",
    desc: "Bespoke architectures solving complex workflows",
    icon: Cpu,
  },
];

const NAV_LINKS = [
  { title: "Technologies", href: "/technologies" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
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
                TechNexus
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
              className="relative py-2"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
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
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[720px] rounded-2xl border shadow-2xl overflow-hidden animate-fadeIn z-50"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--bg-modal) 92%, transparent)",
                    borderColor: "var(--border-color)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                  }}
                >
                  <div className="flex">
                    <div
                      className="w-[250px] shrink-0 p-7 flex flex-col justify-between"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--teal) 12%, var(--bg-primary))",
                        borderRight: "1px solid var(--border-color)",
                      }}
                    >
                      <div>
                        <h3 className="text-[15px] font-bold text-(--text-primary) leading-snug">
                          Explore Our Services
                        </h3>
                        <p className="mt-3 text-base dark:text-white leading-relaxed">
                          From enterprise systems to high-performance mobile &
                          web platforms. We build solutions tailored to your goals.
                        </p>
                      </div>

                      <Link
                        href="/services"
                        className="mt-7 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-(--teal) text-white text-xs font-semibold hover:brightness-110 transition-all"
                      >
                        View all services
                      </Link>
                    </div>

                    <div className="flex-1 p-5 grid grid-cols-2 gap-3">
                      {SERVICES_LIST.map((service) => {
                        const Icon = service.icon;
                        const isActive = pathname === service.slug;

                        return (
                          <Link
                            key={service.slug}
                            href={service.slug}
                            className={`group flex flex-col gap-3.5 p-5 rounded-xl border transition-all duration-200 ${
                              isActive
                                ? "border-(--teal)/40 bg-(--teal)/8"
                                : "border-transparent hover:border-(--border-color) hover:bg-(--border-color)/25 dark:hover:bg-white/5"
                            }`}
                          >
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                                isActive
                                  ? "bg-(--teal)/15 border-(--teal)/40 text-(--teal)"
                                  : "bg-(--bg-primary) border-(--border-color) text-(--teal) group-hover:border-(--teal)"
                              }`}
                            >
                              <Icon size={18} />
                            </div>

                            <div>
                              <div
                                className={`text-base font-bold leading-tight transition-colors ${
                                  isActive
                                    ? "text-(--teal)"
                                    : "text-(--text-primary) group-hover:text-(--teal)"
                                }`}
                              >
                                {service.title}
                              </div>
                              <div className="text-[11px] dark:text-white mt-1.5 leading-snug line-clamp-2">
                                {service.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href);
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
          className="md:hidden fixed inset-x-0 top-18 bottom-0 z-60 flex flex-col overflow-y-auto border-t animate-fadeIn"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--bg-modal) 94%, transparent)",
            borderColor: "var(--border-color)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
          }}
        >
          <div className="flex-1 p-5 space-y-5">
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
              className="rounded-2xl border overflow-hidden"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--bg-primary) 55%, transparent)",
                borderColor: "var(--border-color)",
              }}
            >
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-xs font-mono uppercase tracking-wider text-(--teal) font-semibold"
              >
                <div className="flex items-center gap-2">
                  <span>Services</span>
                </div>
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
                <div
                  className="px-3 pb-3 grid grid-cols-1 gap-1.5 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
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
                          <div className="w-9 h-9 rounded-lg bg-(--bg-primary) border border-(--border-color) flex items-center justify-center text-(--teal) shrink-0">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="text-sm font-medium leading-tight">
                              {service.title}
                            </div>
                            <div className="text-[11px] text-(--text-muted) line-clamp-1 mt-0.5">
                              {service.desc}
                            </div>
                          </div>
                        </div>
                        <ChevronRight
                          size={15}
                          className="text-(--text-muted) shrink-0"
                        />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname.startsWith(link.href);
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
          </div>

          <div
            className="p-5 border-t space-y-3"
            style={{ borderColor: "var(--border-color)" }}
          >
            <Button
              variant="quote"
              fullWidth
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
