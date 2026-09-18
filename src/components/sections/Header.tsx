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

const burgerLine =
  "block h-0.5 w-6 bg-bark transition-[transform,opacity] duration-200 motion-reduce:transition-none";

function isNavActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string>(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); // initialise / re-evaluate on route change
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]); // re-run on navigation so scroll state is accurate per page

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-100 ",
        "transition-[background-color,backdrop-filter,border-color] duration-300 motion-reduce:transition-none",
        scrolled
          ? "bg-cream/70 backdrop-blur-md border-b border-sand"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="cursor-pointer hover:text-honey transition-colors duration-300 motion-reduce:transition-none font-voice"
        >
          Le Rucher de Marquefave
        </Link>

        {/* Nav */}
        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-8 font-sans">
            {navItems.map((item) => {
              const isActive = isNavActive(item.href, pathname);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "tracking-wide transition-colors duration-300 motion-reduce:transition-none hover:text-honey",
                      isActive ? "text-honey font-medium" : "text-bark-muted",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/*Burger menu*/}
        <button
          type="button"
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`${burgerLine} ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`${burgerLine} ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`${burgerLine} ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>

        {/* CTA */}
        <Button className="hidden lg:block">Commander</Button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          "lg:hidden flex flex-col px-8 gap-5 overflow-hidden min-h-0 border-b border-sand bg-cream/95 backdrop-blur-xl transition-[max-height, opacity] duration-300 ease-out ",
          isOpen ? "max-h-48 py-6 opacity-100" : " opacity-0 max-h-0 py-0",
        ].join(" ")}
      >
        {navItems.map((item) => {
          const isActif = isNavActive(item.href, pathname);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "font-sans text-bark-muted hover:text-honey",
                isActif ? "text-honey font-medium" : "text-bark-muted",
              ].join(" ")}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
