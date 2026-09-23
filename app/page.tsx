import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Hammer,
  HandCoins,
  House,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "K A CAPITAL provides buying and selling, property development and resale, house renovation and improvement, and microfinance-related services in Sri Lanka.",
};

const services = [
  { number: "01", icon: House, title: "Buying & Selling", image: "/images/buying-selling.png", alt: "Property sale agreement and professional handshake", text: "Reliable buying and selling services built around transparent transactions, practical guidance and valuable opportunities." },
  { number: "02", icon: Building2, title: "Property Development & Resale", image: "/images/property-development.png", alt: "Property development team reviewing a house under construction", text: "We identify properties with potential, improve them to a higher standard and prepare them for stronger resale value." },
  { number: "03", icon: Hammer, title: "House Renovation & Improvement", image: "/images/renovation.png", alt: "Modern home interior undergoing a professional renovation", text: "Thoughtful renovations, upgrades and enhancements designed to improve comfort, functionality and property value." },
  { number: "04", icon: HandCoins, title: "Microfinance", image: "/images/microfinance.png", alt: "Professional discussing finance solutions with a customer", text: "Microfinance-related services intended to support individuals and small businesses with access to financial opportunities." },
];

const values = [
  { icon: ShieldCheck, title: "Trust & Reliability", text: "Honesty and dependable service form the foundation of every relationship." },
  { icon: BadgeCheck, title: "Quality Service", text: "We pay attention to customer needs and aim for professional, smooth experiences." },
  { icon: Users, title: "Customer Focus", text: "We listen first, then work toward suitable solutions that create genuine value." },
  { icon: BriefcaseBusiness, title: "Professional Approach", text: "We work responsibly and continuously improve how we serve customers and partners." },
];

const process = [
  { number: "01", title: "Purchase", image: "/images/process-purchase.png", alt: "Customers viewing a property with a representative", text: "Identify properties with potential." },
  { number: "02", title: "Renovate", image: "/images/process-renovate.png", alt: "Renovation specialists working inside a property", text: "Plan and execute meaningful upgrades." },
  { number: "03", title: "Improve", image: "/images/process-improve.png", alt: "Professionals reviewing improvements to a modern home", text: "Elevate quality, function and presentation." },
  { number: "04", title: "Resell", image: "/images/process-resell.png", alt: "Customers receiving keys to an improved property", text: "Present an improved property for resale." },
];

export default function Home() {
  return (
    <>
      <main id="main-content">
        <section id="home" className="hero" aria-labelledby="hero-heading">
          <Image className="hero-image" src="/images/hero-property.png" alt="Contemporary luxury home overlooking a city at sunset" fill priority quality={90} sizes="100vw" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="shell hero-content">
            <p className="eyebrow eyebrow-light reveal">Property <span>•</span> Development <span>•</span> Renovation <span>•</span> Microfinance</p>
            <h1 id="hero-heading" className="reveal reveal-delay-one">Building Value.<br /><em>Creating Opportunities.</em></h1>
            <p className="hero-lead reveal reveal-delay-two">Trusted solutions in buying &amp; selling, property development, house renovation and resale, and microfinance.</p>
            <div className="hero-actions reveal reveal-delay-three">
              <Link className="button button-gold" href="/services">Explore Our Services <ArrowDownRight size={18} aria-hidden="true" /></Link>
              <Link className="button button-outline" href="/contact">Contact Us</Link>
            </div>
            <div className="hero-values" aria-label="Our values"><span>Trust</span><i aria-hidden="true" /><span>Quality</span><i aria-hidden="true" /><span>Professionalism</span></div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to Our Business"><span>Discover</span><i aria-hidden="true" /></a>
        </section>

        <section id="about" className="section about" aria-labelledby="about-heading">
          <div className="shell about-grid">
            <div className="about-visual">
              <div className="section-number" aria-hidden="true">01</div>
              <div className="image-frame"><Image src="/images/about-property.png" alt="Contemporary residence surrounded by landscaped gardens" fill sizes="(max-width: 850px) 100vw, 52vw" /></div>
              <div className="image-caption"><span>Properties</span><span>People</span><span>Progress</span></div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">About K A Capital</p>
              <h2 id="about-heading">Our Business</h2>
              <div className="gold-rule" aria-hidden="true" />
              <p className="large-copy">K A CAPITAL (PVT) LTD is a growing business focused on buying and selling, property development, house renovation and resale, and microfinance.</p>
              <p>We are committed to providing reliable services and creating valuable opportunities for our customers and business partners.</p>
              <Link className="text-link" href="/about">Learn more about us <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section id="services" className="section services" aria-labelledby="services-heading">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">Our Services</p><h2 id="services-heading">Focused expertise.<br /><em>Lasting value.</em></h2></div>
              <p>Four connected areas of business, guided by clear communication and a professional approach from start to finish.</p>
            </div>
            <div className="service-grid">
              {services.map(({ number, icon: Icon, title, image, alt, text }, index) => (
                <article className={`service-card service-card-${index + 1}`} key={title}>
                  <div className="service-image"><Image src={image} alt={alt} fill sizes="(max-width: 720px) 100vw, 50vw" /><span className="service-number">{number}</span></div>
                  <div className="service-body"><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p><Link href="/services">Explore service <ArrowRight size={15} aria-hidden="true" /></Link></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vision-mission" aria-label="Our vision and mission">
          <article className="statement statement-vision"><div className="statement-inner"><span className="statement-number" aria-hidden="true">V</span><p className="eyebrow eyebrow-light">Our Vision</p><h2>Recognized for trust,<br />quality &amp; professionalism.</h2><p>To become a leading and well recognized name across our business sectors while building a strong and trusted reputation.</p></div></article>
          <article className="statement statement-mission"><div className="statement-inner"><span className="statement-number" aria-hidden="true">M</span><p className="eyebrow">Our Mission</p><h2>Dependable service.<br />Sustainable opportunity.</h2><p>To grow through integrity, quality service, customer focus and long-term relationships with customers and partners.</p></div></article>
        </section>

        <section id="why" className="section why" aria-labelledby="why-heading">
          <div className="shell">
            <div className="section-heading compact"><div><p className="eyebrow">Why Choose Us</p><h2 id="why-heading">Principles that guide our work.</h2></div><p>Our standards shape how we approach every customer, property and business opportunity. <Link className="inline-link" href="/why-choose-us">Discover our approach</Link></p></div>
            <div className="value-grid">
              {values.map(({ icon: Icon, title, text }, index) => <article key={title}><span className="value-number">0{index + 1}</span><div className="value-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section transformation" aria-labelledby="process-heading">
          <div className="shell">
            <div className="section-heading light"><div><p className="eyebrow eyebrow-light">Property Transformation</p><h2 id="process-heading">From Potential to<br /><em>Greater Value</em></h2></div><p>Our property approach is straightforward: identify, improve and create value through a considered progression.</p></div>
            <ol className="process-list">
              {process.map(({ number, title, image, alt, text }, index) => (
                <li className="process-step" key={title}>
                  <div className="process-image"><Image src={image} alt={alt} fill sizes="(max-width: 700px) 100vw, 25vw" /><span>{number}</span></div>
                  <div className="process-copy"><h3>{title}</h3><p>{text}</p></div>
                  {index < process.length - 1 && <ArrowRight className="process-arrow" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="commitment" aria-labelledby="commitment-heading">
          <Image src="/images/commitment.png" alt="Professional partnership representing K A Capital's commitment" fill sizes="100vw" />
          <div className="commitment-overlay" aria-hidden="true" />
          <div className="shell commitment-content"><p className="eyebrow eyebrow-light">Our Commitment</p><h2 id="commitment-heading">Growing Together</h2><p>At K A CAPITAL (PVT) LTD, we are committed to growing together with our customers and building a strong, trusted brand across all the areas in which we operate.</p><Link href="/contact" className="button button-gold">Talk to Our Team <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </section>

        <section className="section home-contact-cta" aria-labelledby="contact-heading">
          <div className="shell"><p className="eyebrow">Get in Touch</p><h2 id="contact-heading">Let&apos;s create opportunities <em>together.</em></h2><p>Contact our team for enquiries, partnerships or to learn more about K A CAPITAL&apos;s services.</p><Link className="button button-gold" href="/contact">Contact Us <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </section>
      </main>
    </>
  );
}
