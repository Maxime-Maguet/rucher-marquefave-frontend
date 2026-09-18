"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Notre Philosophie", href: "/" },
  { label: "Nos miels", href: "/nos-miels" },
  { label: "Le Rucher", href: "/le-rucher" },
  { label: "Contact", href: "/contact" },
];

function isNavActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); // initialise / re-evaluate on route change
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]); // re-run on navigation so scroll state is accurate per page

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 py-4 font-voice border-b",
        "transition-[background-color,backdrop-filter,border-color] duration-300 motion-reduce:transition-none",
        scrolled
          ? "bg-cream/70 backdrop-blur-md border-sand"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      {/* Logo */}
      <Link
        href="/"
        className="cursor-pointer hover:text-honey transition-colors duration-300 motion-reduce:transition-none uppercase"
      >
        Le Rucher de Marquefave
      </Link>

      {/* Nav */}
      <nav aria-label="Navigation principale">
        <ul className="flex items-center gap-8 uppercase font-sans">
          {navItems.map((item) => {
            const isActive = isNavActive(item.href, pathname);
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "transition-colors duration-300 motion-reduce:transition-none hover:text-honey",
                    isActive
                      ? "text-honey underline underline-offset-4 decoration-honey/60"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Button>Commander</Button>
    </header>
  );
}
