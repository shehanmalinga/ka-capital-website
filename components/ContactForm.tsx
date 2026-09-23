"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("Your details have been validated locally. Enquiry delivery will be enabled when the company contact endpoint is connected.");
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-describedby="form-note">
      <div className="form-heading"><p className="eyebrow">Send an enquiry</p><h3>How can we help?</h3></div>
      <div className="field-grid">
        <div className="field"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" required placeholder="Your full name" /></div>
        <div className="field"><label htmlFor="phone">Phone <span aria-hidden="true">*</span></label><input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+94" /></div>
        <div className="field"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></div>
        <div className="field"><label htmlFor="service">Interested Service <span aria-hidden="true">*</span></label><select id="service" name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Buying &amp; Selling</option><option>Property Development &amp; Resale</option><option>House Renovation &amp; Improvement</option><option>Microfinance</option><option>Other</option></select></div>
      </div>
      <div className="field"><label htmlFor="message">Message <span aria-hidden="true">*</span></label><textarea id="message" name="message" rows={5} required placeholder="Tell us how we can help" /></div>
      <button className="button button-gold form-button" type="submit">Validate enquiry <Send size={17} aria-hidden="true" /></button>
      <p id="form-note" className="form-note">This form currently validates your details only. It does not send data until a secure company endpoint is connected.</p>
      {status && <p className="form-status" role="status" aria-live="polite">{status}</p>}
    </form>
  );
}
