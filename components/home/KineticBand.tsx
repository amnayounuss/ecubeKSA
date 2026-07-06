"use client";

import Marquee from "../ui/Marquee";

export default function KineticBand() {
  return (
    <section className="border-y border-border/60 bg-surface/60 py-3 backdrop-blur-sm">
      <Marquee
        items={[
          "Odoo Implementation",
          "ERP Consulting",
          "Custom Development",
          "Business Automation",
          "Dedicated Support",
          "Cloud Migration",
        ]}
      />
    </section>
  );
}
