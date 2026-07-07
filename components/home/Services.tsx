"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase,
  ShoppingCart,
  Globe,
  Send,
  Layers,
  Database,
  Monitor,
  Smartphone,
  Truck,
  Star,
  Gift,
  Grid,
  CalendarClock,
  Tv,
  CreditCard,
  Receipt,
  Wallet,
  Camera,
  Scan,
  LineChart,
  ShoppingBag,
  Banknote,
  ShieldCheck,
  FileText,
  Settings,
  Boxes,
  Users,
  Activity,
  Plane
} from "lucide-react";
import Container from "../ui/Container";
import { SectionHeading } from "../ui/Section";

const iconMap = {
  Briefcase,
  ShoppingCart,
  Globe,
  Send,
  Layers,
  Database,
  Monitor,
  Smartphone,
  Truck,
  Star,
  Gift,
  Grid,
  CalendarClock,
  Tv,
  CreditCard,
  Receipt,
  Wallet,
  Camera,
  Scan,
  LineChart,
  ShoppingBag,
  Banknote,
  ShieldCheck,
  FileText,
  Settings,
  Boxes,
  Users,
  Activity,
  Plane
} as const;

type IconName = keyof typeof iconMap;

interface ModuleItem {
  title: string;
  description: string;
  icon: IconName;
  badge?: string;
}

interface Category {
  id: string;
  label: string;
  modules: ModuleItem[];
}

const SERVICES_CATEGORIES: Category[] = [
  {
    id: "sales",
    label: "Sales",
    modules: [
      {
        title: "CRM",
        description: "Manage leads, deals, and customer 360° views with pipeline automation and email-to-lead integration.",
        icon: "Briefcase",
      },
      {
        title: "Sale",
        description: "Quotation builder, sales orders, electronic signatures, and seamless invoice creation in one flow.",
        icon: "ShoppingCart",
      },
      {
        title: "Zid & Salla Integration",
        description: "Sync products, orders, stock, and customers with Zid & Salla — manage every channel from one place.",
        icon: "Globe",
        badge: "Popular",
      },
      {
        title: "B2B Delivery App",
        description: "Dedicated mobile app for B2B clients to track shipments, view invoices, and place bulk orders.",
        icon: "Send",
      },
    ],
  },
  {
    id: "pos",
    label: "POS",
    modules: [
      {
        title: "Order Management Portal",
        description: "The operations hub for customer-facing experiences — control loyalty programs, the Pickup App, and the Waitlist & Reservations system from one place. Built on top of ECube SaaS, focused on order-side and engagement features.",
        icon: "Layers",
        badge: "Popular",
      },
      {
        title: "ECube SaaS (POS Management)",
        description: "The central source of truth that powers the entire system. Manage the POS App menu, Menu Portal (Signage) content, pricing, branches, and core configuration here — the master data layer that the Order Management Portal and all connected apps build on.",
        icon: "Database",
        badge: "Popular",
      },
      {
        title: "POS App",
        description: "All-in-one point of sale for managing sales, purchases, demands, inventory, online ordering, and loyalty — the central hub for daily store operations.",
        icon: "Monitor",
        badge: "Popular",
      },
      {
        title: "Pickup App",
        description: "Customer-facing ordering app with menu control, branch snooze, Moyasser payments, scheduled orders, loyalty, coupons, and rewards — built for fast, self-service pickup.",
        icon: "Smartphone",
      },
      {
        title: "Deliverect",
        description: "Integration that connects your menu and orders to major delivery platforms, syncing items, stock, and incoming orders into one unified flow.",
        icon: "Truck",
      },
      {
        title: "Nuggtah",
        description: "Loyalty and rewards integration that lets customers earn and redeem points, boosting repeat visits and engagement.",
        icon: "Star",
      },
      {
        title: "Bonat",
        description: "Customer loyalty and rewards platform integration for running points programs, offers, and retention campaigns.",
        icon: "Gift",
      },
      {
        title: "Table Management",
        description: "Visual floor and table control to assign, track, and turn over tables — keeping dine-in service organized and efficient.",
        icon: "Grid",
      },
      {
        title: "Waitlist & Reservations",
        description: "Lets customers book ahead or join a digital queue, reducing crowding and managing seating during peak hours.",
        icon: "CalendarClock",
      },
      {
        title: "Menu Portal (Signage)",
        description: "Digital menu display for in-store screens, showing items, prices, and promotions that update in real time.",
        icon: "Tv",
      },
      {
        title: "Soft-POS (Nearpay)",
        description: "Turns a phone or tablet into a contactless payment terminal via Nearpay — accept tap-to-pay with no extra hardware.",
        icon: "CreditCard",
      },
      {
        title: "Payment Integration (Neoleap N910)",
        description: "Native integration with the Neoleap N910 terminal for secure, fast card and contactless payments at checkout.",
        icon: "Receipt",
      },
      {
        title: "Moyasser",
        description: "Online payment gateway integration powering secure checkout in the Pickup App and Menu Portal (Signage) — lets customers pay digitally for self-service and on-screen orders.",
        icon: "Wallet",
      },
      {
        title: "Drive-Through Plate Recognition",
        description: "Automated license plate recognition for drive-through lanes, instantly identifying returning customers and syncing order histories for faster checkout.",
        icon: "Camera",
      },
      {
        title: "AI Camera Ticket Generation & Heatmap",
        description: "AI-powered queue tracking and automatic support ticket generation paired with foot-traffic density heatmaps to optimize floor layout and speed of service.",
        icon: "Scan",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    modules: [
      {
        title: "Accounting",
        description: "Full general ledger, multi-currency, VAT handling, and audit-ready financial reports tailored for KSA.",
        icon: "LineChart",
        badge: "Popular",
      },
      {
        title: "Purchase",
        description: "RFQs, vendor management, purchase orders, and multi-level approvals with full procurement audit trail.",
        icon: "ShoppingBag",
      },
      {
        title: "Employee Expenses",
        description: "Streamline expense reporting, approval workflows, and quick reimbursement tied directly to accounting.",
        icon: "Banknote",
      },
      {
        title: "Asset Management",
        description: "Asset lifecycle from purchase to disposal, depreciation schedules, and maintenance scheduling.",
        icon: "ShieldCheck",
      },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    modules: [
      {
        title: "Ticketing System",
        description: "Helpdesk and support ticketing system to manage customer inquiries and internal support requests efficiently.",
        icon: "FileText",
      },
      {
        title: "Manufacturing",
        description: "Bill of materials, work orders, MRP planning, and shop-floor control for production environments.",
        icon: "Settings",
      },
      {
        title: "Fleet",
        description: "Track vehicles, drivers, fuel logs, services, and contracts with maintenance alerts and cost analysis.",
        icon: "Truck",
      },
      {
        title: "Project Management",
        description: "Tasks, Kanban boards, timesheets, and Gantt charts to keep every project on schedule and on budget.",
        icon: "Grid",
        badge: "Popular",
      },
      {
        title: "Inventory",
        description: "Multi-warehouse stock, barcoding, lot tracking, automated reordering, and real-time valuation.",
        icon: "Boxes",
        badge: "Popular",
      },
    ],
  },
  {
    id: "people",
    label: "People",
    modules: [
      {
        title: "HR & Payroll",
        description: "Saudi-compliant payroll with GOSI, end-of-service, leave tracking, attendance, and document expiry alerts.",
        icon: "Users",
        badge: "Popular",
      },
      {
        title: "Performance",
        description: "Track employee performance, set KPIs, conduct appraisals, and foster continuous professional development.",
        icon: "Activity",
      },
      {
        title: "Business Trip",
        description: "Manage corporate travel requests, approvals, flight bookings, and associated per-diem allowances.",
        icon: "Plane",
      },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("sales");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#services-")) {
        const tabId = hash.replace("#services-", "");
        if (SERVICES_CATEGORIES.some((cat) => cat.id === tabId)) {
          setActiveTab(tabId);
          const element = document.getElementById("services");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (hash === "#services") {
        const element = document.getElementById("services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange();

    let lastHash = window.location.hash;
    const interval = setInterval(() => {
      if (window.location.hash !== lastHash) {
        lastHash = window.location.hash;
        handleHashChange();
      }
    }, 100);

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      clearInterval(interval);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const currentCategory = SERVICES_CATEGORIES.find((cat) => cat.id === activeTab) || SERVICES_CATEGORIES[0];

  return (
    <section id="services" className="relative overflow-hidden bg-surface/30 py-28 sm:py-36">
      {/* Anchor targets for hash links */}
      <div id="services-sales" className="absolute top-0 left-0 pointer-events-none" />
      <div id="services-pos" className="absolute top-0 left-0 pointer-events-none" />
      <div id="services-finance" className="absolute top-0 left-0 pointer-events-none" />
      <div id="services-operations" className="absolute top-0 left-0 pointer-events-none" />
      <div id="services-people" className="absolute top-0 left-0 pointer-events-none" />
      {/* Background aesthetics */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 right-0 h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          eyebrow="All-In-One Enterprise Platform"
          title="One platform. Every module your business needs."
          subtitle="31 modules covering Sales, POS, Finance, Operations, and HR — all tailored for Saudi Arabia and fully ZATCA compliant."
        />

        {/* Categories Tab Bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-2 sm:gap-3">
          {SERVICES_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="relative px-6 py-3 rounded-full text-sm font-bold tracking-tight transition-all duration-300 focus:outline-none"
                style={{
                  color: isActive ? "#0E6E66" : "#64748b"
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-[#0E6E66]/10 border border-[#0E6E66]/20 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modules Grid with smooth exit/entry animations */}
        <div className="mt-16 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {currentCategory.modules.map((m) => {
                const Icon = iconMap[m.icon];
                return (
                  <motion.div
                    key={m.title}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="group relative flex flex-col justify-between rounded-3xl border border-border/50 bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary/20 hover:shadow-card cursor-pointer"
                  >
                    <div>
                      {/* Top section: Icon & Badge */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#0E6E66]/12 to-[#0E6E66]/6 text-[#0E6E66] transition-all duration-400 group-hover:scale-105 group-hover:from-[#0E6E66] group-hover:to-[#074742] group-hover:text-white group-hover:shadow-glow">
                          <Icon size={22} />
                        </div>
                        {m.badge && (
                          <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            m.badge === "Popular" 
                              ? "bg-[#FFCC3F]/15 text-[#b28400]" 
                              : "bg-[#0E6E66]/10 text-[#0E6E66]"
                          }`}>
                            {m.badge}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="mt-5 text-lg font-bold tracking-tight text-text group-hover:text-[#0E6E66] transition-colors duration-200">
                        {m.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted font-medium">
                        {m.description}
                      </p>
                    </div>

                    {/* Bottom visual accent line */}
                    <div className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 bg-gradient-to-r from-[#0E6E66] to-[#FFCC3F] transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
