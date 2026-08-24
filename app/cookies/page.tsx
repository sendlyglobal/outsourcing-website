import React from "react";

export default function CookiesPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="container-site max-w-3xl">
        <h1
          style={{
            fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
          }}
          className="text-4xl font-bold tracking-tight text-(--text-primary)"
        >
          Cookie Policy
        </h1>
        <p className="mt-2 text-xs font-mono text-(--text-muted)">
          Last updated: January 2026
        </p>

        <div className="mt-8 space-y-6 text-sm text-(--text-secondary) leading-relaxed">
          <p>
            RiseUp Solutions uses essential cookies and local preferences (such
            as theme choice) solely to ensure basic site functionality and
            enhance your user experience. We do not use third-party behavioral
            tracking cookies.
          </p>
        </div>
      </div>
    </div>
  );
}
