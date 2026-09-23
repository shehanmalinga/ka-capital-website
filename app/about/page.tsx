import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, BriefcaseBusiness, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = { title: "About Us", description: "Learn about K A CAPITAL's business, vision, mission and professional approach to creating value in Sri Lanka." };

const principles = [
  { icon: ShieldCheck, title: "Trust", text: "Honesty and dependable service form the foundation of every customer and partner relationship." },
  { icon: BadgeCheck, title: "Quality", text: "We give careful attention to customer needs and aim to deliver professional, smooth experiences." },
  { icon: Users, title: "Customer Focus", text: "We listen first and work toward suitable solutions that create genuine value." },
  { icon: BriefcaseBusiness, title: "Professionalism", text: "We work responsibly and continuously improve how we serve customers and partners." },
];

export default function AboutPage() {
  return <main id="main-content">
    <PageHero eyebrow="About K A Capital" title="Building value through trust and opportunity." image="/images/about-property.png" />
    <section className="section inner-about"><div className="shell inner-split"><div className="inner-image"><Image src="/images/about-property.png" alt="Contemporary residence surrounded by landscaped gardens" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="inner-copy"><p className="eyebrow">Our Business</p><h2>A growing business with a clear purpose.</h2><div className="gold-rule" /><p className="lead-copy">K A CAPITAL (PVT) LTD is a growing business focused on buying and selling, property development, house renovation and resale, and microfinance.</p><p>We are committed to providing reliable services and creating valuable opportunities for our customers and business partners.</p></div></div></section>
    <section className="vision-mission" aria-label="Our vision and mission"><article className="statement statement-vision"><div className="statement-inner"><span className="statement-number" aria-hidden="true">V</span><p className="eyebrow eyebrow-light">Our Vision</p><h2>Recognized for trust,<br />quality &amp; professionalism.</h2><p>To become a leading and well recognized name across our business sectors while building a strong and trusted reputation.</p></div></article><article className="statement statement-mission"><div className="statement-inner"><span className="statement-number" aria-hidden="true">M</span><p className="eyebrow">Our Mission</p><h2>Dependable service.<br />Sustainable opportunity.</h2><p>To grow through integrity, quality service, customer focus and long-term relationships with customers and partners.</p></div></article></section>
    <section className="section approach"><div className="shell"><div className="section-heading compact"><div><p className="eyebrow">Our Approach</p><h2>Principles behind every opportunity.</h2></div><p>Our standards guide how we approach our services, relationships and responsibilities.</p></div><div className="value-grid">{principles.map(({ icon: Icon, title, text }, index) => <article key={title}><span className="value-number">0{index + 1}</span><div className="value-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <CTASection eyebrow="Our Commitment" title="Growing together through trusted relationships." text="We are committed to growing with our customers and building a strong, trusted brand across every area in which we operate." />
  </main>;
}
