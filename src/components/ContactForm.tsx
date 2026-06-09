"use client";

import { useState } from "react";
import { practitioners } from "@/lib/data";

const fieldClass =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-orange";

export default function ContactForm({
  withPractitioner = false,
}: {
  withPractitioner?: boolean;
}) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-charcoal">Thank you!</h3>
        <p className="mt-2 text-sm text-grey">
          Your message has been received. We aim to respond within 24 hours — or call us on
          07806 358 752 for the fastest response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="Your phone number" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
          Email
        </label>
        <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@example.com" />
      </div>
      {withPractitioner && (
        <div>
          <label htmlFor="practitioner" className="mb-1.5 block text-sm font-medium text-charcoal">
            Preferred practitioner
          </label>
          <select id="practitioner" name="practitioner" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a practitioner
            </option>
            {practitioners.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
            <option value="no-preference">No preference</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="How can we help?"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
