import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection({ eyebrow = "Start a Conversation", title = "Let’s create opportunities together.", text = "Speak with our team about your needs and the services that may be right for you." }) {
  return <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div><Link className="button button-gold" href="/contact">Contact Us <ArrowRight size={18} aria-hidden="true" /></Link></div></section>;
}
