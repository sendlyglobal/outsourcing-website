import React from "react";

export default function TermsPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="container-site max-w-3xl">
        <h1
          style={{
            fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
          }}
          className="text-4xl font-bold tracking-tight text-(--text-primary)"
        >
          Terms of Service
        </h1>
        <p className="mt-2 text-xs font-mono text-(--text-muted)">
          Last updated: January 2026
        </p>

        <div className="mt-8 space-y-6 text-sm text-(--text-secondary) leading-relaxed">
          <p>
            By accessing the RiseUp Solutions website or contracting our
            software engineering and consulting services, you agree to comply
            with and be bound by the following terms and conditions.
          </p>
          <h2 className="text-xl font-bold text-(--text-primary) pt-4">
            Engineering Services &amp; IP Ownership
          </h2>
          <p>
            Unless explicitly agreed otherwise in a Master Services Agreement
            (MSA), all custom software, source code, architectures, and
            intellectual property developed for a client become the sole
            property of the client upon final payment settlement.
          </p>
        </div>
      </div>
    </div>
  );
}
