import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact K A CAPITAL in Sri Lanka to discuss service enquiries, opportunities and partnerships.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Get In Touch"
        title="Let’s Create Opportunities Together"
        image="/images/hero-property.png"
      />

      <section
        className="section contact contact-page"
        aria-labelledby="contact-heading"
      >
        <div className="shell contact-grid">
          <div className="contact-intro">
            <p className="eyebrow">Contact Us</p>

            <h2 id="contact-heading">
              Start a conversation with <em>our team.</em>
            </h2>

            <p>
              Contact us for enquiries, partnerships or to learn more about
              K A CAPITAL&apos;s services.
            </p>

            <address className="contact-items">
              <div>
                <span>
                  <Phone aria-hidden="true" />
                </span>

                <p>
                  <strong>Call us</strong>
                  <small>
                    <a href="tel:+94773759209">
                      077 375 9209
                    </a>
                  </small>
                </p>
              </div>

              <div>
                <span>
                  <Mail aria-hidden="true" />
                </span>

                <p>
                  <strong>Email us</strong>
                  <small>
                    <a href="mailto:kacapitals20@gmail.com">
                      kacapitals20@gmail.com
                    </a>
                  </small>
                </p>
              </div>

              <div>
                <span>
                  <MapPin aria-hidden="true" />
                </span>

                <p>
                  <strong>Our location</strong>
                  <small>Sri Lanka</small>
                </p>
              </div>
            </address>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}