"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled || menuOpen || pathname !== "/" ? " is-solid" : ""}`}>
      <div className="shell nav-shell">
        <Link className="brand" href="/" aria-label="K A Capital home" onClick={closeMenu}>
          <Image src="/images/ka-capital-logo.jpeg" alt="K A CAPITAL (PVT) LTD" width={1254} height={1254} priority sizes="(max-width: 700px) 108px, 128px" />
        </Link>

        <nav id="primary-navigation" className={`nav-links${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          {navigation.map(({ label, href }) => (
            <Link key={href} href={href} className={pathname === href ? "is-active" : undefined} aria-current={pathname === href ? "page" : undefined} onClick={closeMenu}>
              {label}
            </Link>
          ))}
        </nav>

        <button className="menu-button" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((current) => !current)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && <button className="menu-backdrop" type="button" aria-label="Close navigation menu" onClick={closeMenu} />}
    </header>
  );
}
