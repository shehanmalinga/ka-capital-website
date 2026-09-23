import Image from "next/image";
import Link from "next/link";

type PageHeroProps = { eyebrow: string; title: string; description?: string; image?: string };

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-heading">
      {image && <Image className="page-hero-image" src={image} alt="" fill priority sizes="100vw" />}
      <div className="page-hero-overlay" aria-hidden="true" />
      <div className="shell page-hero-content">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{eyebrow}</span></nav>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 id="page-hero-heading">{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
