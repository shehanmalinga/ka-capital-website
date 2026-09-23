import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = ["Buying & Selling", "Property Development & Resale", "House Renovation & Improvement", "Microfinance"];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand"><Link href="/" aria-label="K A Capital home"><Image src="/images/ka-capital-logo.jpeg" alt="K A CAPITAL (PVT) LTD" width={1254} height={1254} sizes="132px" /></Link><p>Building value. Creating opportunities through dependable service and long-term relationships.</p></div>
        <div><h2>Company</h2><Link href="/about">About Us</Link><Link href="/why-choose-us">Why Choose Us</Link><Link href="/contact">Contact</Link></div>
        <div><h2>Services</h2>{services.map((service) => <Link key={service} href="/services">{service}</Link>)}</div>
        <div><h2>Contact</h2><span>Company number to be added</span><span>Company email to be added</span><span>Sri Lanka</span></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 K A CAPITAL (PVT) LTD. All rights reserved.</span><Link href="/">Home <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
    </footer>
  );
}
