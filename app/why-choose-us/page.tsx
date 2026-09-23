import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, BriefcaseBusiness, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = { title: "Why Choose Us", description: "Discover the trust, quality service, customer focus and professional approach that guide K A CAPITAL." };
const values = [
  { icon: ShieldCheck, title: "Trust & Reliability", text: "Honesty and dependable service form the foundation of every relationship. We aim to communicate clearly and act responsibly as we work with customers and business partners." },
  { icon: BadgeCheck, title: "Quality Service", text: "We pay attention to customer needs and aim for professional, smooth experiences. Quality shapes how we approach both our work and the relationships built around it." },
  { icon: Users, title: "Customer Focus", text: "We listen first, seek to understand each need and work toward suitable solutions that create genuine value for the people and businesses we serve." },
  { icon: BriefcaseBusiness, title: "Professional Approach", text: "We work responsibly and continuously improve how we serve customers and partners, guided by integrity and a commitment to long-term relationships." },
];
export default function WhyPage() { return <main id="main-content"><PageHero eyebrow="Why K A Capital" title="A Professional Approach to Creating Value" image="/images/commitment.png" /><section className="section why-detail"><div className="shell"><div className="section-heading compact"><div><p className="eyebrow">Why Choose Us</p><h2>Principles that guide our work.</h2></div><p>Our standards shape how we approach every customer, property and business opportunity.</p></div><div className="value-detail-grid">{values.map(({ icon: Icon, title, text }, index) => <article key={title}><span className="value-number">0{index + 1}</span><div className="value-icon"><Icon aria-hidden="true" /></div><h2>{title}</h2><p>{text}</p></article>)}</div></div></section><section className="commitment inner-commitment" aria-labelledby="inner-commitment-heading"><Image src="/images/commitment.png" alt="Professional partnership representing K A Capital's commitment" fill sizes="100vw" /><div className="commitment-overlay" aria-hidden="true" /><div className="shell commitment-content"><p className="eyebrow eyebrow-light">Our Commitment</p><h2 id="inner-commitment-heading">Growing Together</h2><p>At K A CAPITAL (PVT) LTD, we are committed to growing together with our customers and building a strong, trusted brand across all the areas in which we operate.</p></div></section><CTASection title="Bring your next opportunity into focus." /></main>; }
