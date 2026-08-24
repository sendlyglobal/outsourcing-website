import React from "react";

export default function PrivacyPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="container-site max-w-3xl">
        <h1
          style={{
            fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
          }}
          className="text-4xl font-bold tracking-tight text-(--text-primary)"
        >
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs font-mono text-(--text-muted)">
          Last updated: January 2026
        </p>

        <div className="mt-8 space-y-6 text-sm text-(--text-secondary) leading-relaxed">
          <p>
            At RiseUp Solutions, we prioritize the protection and
            confidentiality of your personal and business data. This Privacy
            Policy outlines how we collect, process, and protect your
            information when you visit our website or engage our engineering
            services.
          </p>
          <h2 className="text-xl font-bold text-(--text-primary) pt-4">
            Data Collection &amp; Use
          </h2>
          <p>
            We only collect personal information that you voluntarily provide to
            us (such as name, work email, company, and project requirements when
            scheduling discovery calls or submitting contact inquiries). We
            never sell your data to third parties.
          </p>
          <h2 className="text-xl font-bold text-(--text-primary) pt-4">
            Security Standards
          </h2>
          <p>
            All data transmissions are encrypted using industry-standard TLS
            protocols. Client code repositories and project communications are
            safeguarded by strict access controls and confidentiality
            agreements.
          </p>
        </div>
      </div>
    </div>
  );
}
