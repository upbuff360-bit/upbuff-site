import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_BONdxEiL.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../chunks/PageLayout_BS2WX63q.mjs';
import { $ as $$HeroOrbital } from '../../chunks/HeroOrbital_DGRKs8Ra.mjs';
import { $ as $$LogoBar } from '../../chunks/LogoBar_B0qNkUOO.mjs';
import { $ as $$FeaturesGrid } from '../../chunks/FeaturesGrid_CwyGxRwy.mjs';
import { a as $$FeaturesCarousel, $ as $$ContentSplitCard } from '../../chunks/ContentSplitCard_uJ1VUM9r.mjs';
import { $ as $$FeaturesHighlights, a as $$TestimonialsGrid } from '../../chunks/TestimonialsGrid_CHsF45-x.mjs';
import { $ as $$SecuritySplit } from '../../chunks/SecuritySplit_C3Zm8LcA.mjs';
import { $ as $$ToolsMarquee } from '../../chunks/ToolsMarquee_TPsf7ym1.mjs';
import { $ as $$FaqAccordion } from '../../chunks/FaqAccordion_DHd6Sfjj.mjs';
import { $ as $$CtaBanner } from '../../chunks/CtaBanner_CHQ1omhl.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$EnterprisePartnerPortals = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "ERP-Integrated Enterprise & Partner Portals for SAP | UpBuff",
    description: "Secure SAP S/4HANA, ECC, and SAP Business One Enterprise & Partner Portals. Enable real-time distributor, supplier, and customer collaboration with SAP-integrated access.",
    canonical: "https://www.upbuff.com/products/enterprise-partner-portals/",
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      type: "website",
      url: "https://www.upbuff.com/products/enterprise-partner-portals",
      title: "ERP-Integrated Enterprise & Partner Portals | UpBuff",
      description: "Secure SAP-integrated portals for distributors, suppliers, and enterprise stakeholders. Real-time ERP collaboration without customization.",
      image: "https://www.upbuff.com/images/erp-portals-og.jpg"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`     ${renderComponent($$result2, "HeroOrbital", $$HeroOrbital, { "tagline": "Enterprise & Partner Portals", "title": "Secure SAP-Integrated Collaboration for Enterprises & Ecosystems", "subtitle": "UpBuff Enterprise & Partner Portals extend SAP S/4HANA, ECC, and SAP Business One into secure, role-based digital portals for suppliers, distributors, dealers, service partners, and enterprise stakeholders. Transform SAP data into structured, governed, real-time collaboration \u2014 without modifying core ERP.", "actions": [
    { text: "Request Demo", href: "/contact", variant: "primary" },
    { text: "Talk to ERP Expert", href: "/contact", variant: "secondary" }
  ], "image": {
    src: "/uploads/Oracle-integrated-Enterprise-Partner-Portals.png",
    alt: "UpBuff ERP-Integrated Enterprise & Partner Portals"
  } })}  ${renderComponent($$result2, "LogoBar", $$LogoBar, { "label": "Trusted by leading enterprises & SAP partners worldwide", "logos": [
    { src: "/uploads/ideaForge-logo.svg", alt: "ideaForge logo" },
    { src: "/uploads/jnk-chemdist-logo.svg", alt: "jnk chemdist logo" },
    { src: "/uploads/molygraph-logo.svg", alt: "molygraph logo" },
    { src: "/uploads/ncc-streetscape-logo.svg", alt: "ncc streetscape logo" },
    { src: "/uploads/roofsol-logo.svg", alt: "roofsol logo" },
    { src: "/uploads/the-wine-source-logo.svg", alt: "the wine source logo" }
  ] })}  ${renderComponent($$result2, "FeaturesGrid", $$FeaturesGrid, { "id": "features", "tagline": "Why UpBuff Partner Portals", "title": "Why Choose UpBuff Enterprise & Partner Portals?", "subtitle": "Each capability enhances SAP-driven collaboration while preserving ERP as the system of record.", "items": [
    {
      icon: "tabler:database",
      title: "Native SAP Integration (S/4HANA, ECC, SAP B1)",
      description: "Secure bi-directional integration using OData, IDoc, BAPI, and Service Layer APIs. No SAP core modification required."
    },
    {
      icon: "tabler:shield-lock",
      title: "Role-Based Secure Access",
      description: "Granular user roles for suppliers, distributors, customers, and internal stakeholders. Enforce SAP-based authorization logic."
    },
    {
      icon: "tabler:file-text",
      title: "Real-Time Document & Transaction Visibility",
      description: "Provide partners access to sales orders, purchase orders, deliveries, invoices, inventory availability, and payment status \u2014 all synchronized directly with SAP."
    },
    {
      icon: "tabler:click",
      title: "Self-Service Workflows",
      description: "Enable partners to place orders, submit RFQs, track deliveries, download invoices, and raise support requests. Reduce manual coordination and email-based processes."
    },
    {
      icon: "tabler:users-group",
      title: "Multi-Tenant Partner Architecture",
      description: "Support multiple partners across regions with isolated, secure data access aligned to SAP master data."
    },
    {
      icon: "tabler:clipboard-check",
      title: "Audit-Ready & Compliance-Driven",
      description: "Full transaction logging mapped to SAP user and authorization models."
    }
  ] })}  ${renderComponent($$result2, "FeaturesCarousel", $$FeaturesCarousel, { "tagline": "Use Cases", "title": "Discover how ERP-Integrated Enterprise & Partner Portals transform SAP-driven collaboration.", "subtitle": "From channel partners to internal enterprise teams \u2014 secure, real-time SAP collaboration across every stakeholder type.", "items": [
    {
      gradient: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)",
      title: "Distributor & Dealer Portals: Improve Channel Transparency",
      description: "Provide dealers with live pricing, stock visibility, and order tracking integrated with SAP SD. Achieve reduced order disputes, faster communication, improved partner satisfaction, and real-time transaction tracking.",
      image: '<div class="w-full h-full overflow-hidden"><img src="/uploads/Distribution-Centers.png" class="w-full object-top" alt="Distributor & Dealer Portals" loading="lazy" /></div>'
    },
    {
      gradient: "linear-gradient(135deg, #065f46 0%, #0f766e 100%)",
      title: "Supplier Collaboration Portals: Streamline Procurement & PO Management",
      description: "Enable suppliers to access purchase orders, shipment schedules, and invoice status. Achieve improved procurement efficiency, reduced coordination overhead, accurate delivery alignment, and better supplier relationships.",
      image: '<div class="w-full h-full overflow-hidden"><img src="/uploads/Supplier-Collaboration-Portals.png" class="w-full object-top" alt="Supplier Collaboration Portals" loading="lazy" /></div>'
    },
    {
      gradient: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
      title: "Customer Self-Service Portals: Enhance Enterprise Customer Experience",
      description: "Allow enterprise customers to view order history, delivery status, and invoices. Achieve improved transparency, reduced support tickets, faster response cycles, and better customer retention.",
      image: '<div class="w-full h-full overflow-hidden"><img src="/uploads/FMCG-and-Distribution-Networks.png" class="w-full object-top" alt="Customer Self-Service Portals" loading="lazy" /></div>'
    },
    {
      gradient: "linear-gradient(135deg, #b45309 0%, #d97706 100%)",
      title: "Internal Enterprise Portals: Unified Operational Dashboards",
      description: "Provide cross-functional teams with SAP-synced dashboards for visibility and decision-making. Enable executive reporting, cross-department transparency, controlled access governance, and real-time performance monitoring.",
      image: '<div class="w-full h-full overflow-hidden"><img src="/uploads/Internal-Enterprise-Portals.png" class="w-full object-top" alt="Internal Enterprise Portals" loading="lazy" /></div>'
    }
  ] })}  ${renderComponent($$result2, "FeaturesHighlights", $$FeaturesHighlights, { "tagline": "Platform Pillars", "title": "Three pillars of SAP-integrated portal collaboration", "subtitle": "Each pillar connects a core dimension of enterprise collaboration directly to SAP \u2014 without modifying ERP core.", "items": [
    {
      title: "Native SAP Integration & Role-Based Secure Access",
      description: "Secure bi-directional integration using OData, IDoc, BAPI, and Service Layer APIs \u2014 no SAP core modification required. Granular user roles for suppliers, distributors, customers, and internal stakeholders enforce SAP-based authorization logic across every portal interaction.",
      image: '<div class="w-full h-full flex items-center justify-center bg-gray-50 p-6"><div class="flex flex-col items-center gap-4"><div class="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm text-gray-700 flex items-center gap-2"><span class="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs">\u2713</span><span>SAP integration live!</span></div><div class="w-px h-6 border-l-2 border-dashed border-gray-300"></div><div class="flex items-center gap-4"><div class="w-20 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-80"></div><div class="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 text-gray-600"><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="currentColor"/></svg></div><div class="w-20 h-10 rounded-full bg-gradient-to-r from-red-400 to-pink-500 opacity-80"></div></div></div></div>'
    },
    {
      title: "Real-Time Document Visibility & Self-Service Workflows",
      description: "Partners access sales orders, purchase orders, deliveries, invoices, inventory availability, and payment status \u2014 all synchronized directly with SAP. Self-service workflows enable order placement, RFQ submission, delivery tracking, invoice download, and support requests without manual coordination.",
      image: '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-6"><div class="bg-white rounded-2xl shadow-md w-72 p-5 flex flex-col items-center relative"><div class="flex justify-center gap-6 w-full relative z-0"><div class="flex flex-col items-center"><div class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-700 shadow-sm">Orders</div><div class="w-[2px] h-8 bg-gray-200 relative overflow-hidden"><div class="absolute inset-0 bg-green-400 animate-[flowY_1.5s_linear_infinite]"></div></div></div><div class="flex flex-col items-center"><div class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-700 shadow-sm">Invoice</div><div class="w-[2px] h-8 bg-gray-200 mt-1 relative overflow-hidden"><div class="absolute inset-0 bg-green-400 animate-[flowY_1.5s_linear_infinite]"></div></div></div></div><div class="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm text-gray-700 flex items-center gap-2 -mt-2 relative z-20"><span class="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs">\u2713</span><span>Upbuff Integration Layer</span></div><div class="flex justify-center gap-6 w-full relative z-0"><div class="flex flex-col items-center"><div class="w-[2px] h-8 bg-gray-200 mb-1 relative overflow-hidden"><div class="absolute inset-0 bg-green-400 animate-[flowY_1.5s_linear_infinite]"></div></div><div class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-700 shadow-sm">RFQ</div></div><div class="flex flex-col items-center"><div class="w-[2px] h-8 bg-gray-200 mb-1 relative overflow-hidden"><div class="absolute inset-0 bg-green-400 animate-[flowY_1.5s_linear_infinite]"></div></div><div class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-700 shadow-sm">Delivery</div></div></div><div class="text-[10px] text-green-600 text-center font-medium animate-pulse mt-2">Live SAP Sync \xB7 Self-Service Enabled</div></div></div>'
    },
    {
      title: "Multi-Tenant Architecture & Audit-Ready Compliance",
      description: "Support multiple partners across regions with isolated, secure data access aligned to SAP master data. Full transaction logging mapped to SAP user and authorization models ensures every portal action is traceable, compliant, and audit-ready.",
      image: '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 p-6"><div class="bg-white rounded-2xl shadow-md w-72 p-5 flex flex-col items-center gap-4"><div class="text-xs font-semibold text-gray-700">Multi-Tenant \xB7 Audit-Ready</div><div class="flex justify-center gap-4 w-full"><div class="flex flex-col items-center gap-1"><div class="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[10px] text-blue-700 font-semibold shadow-sm">Tenant A</div><span class="text-[9px] text-gray-400">Isolated</span></div><div class="flex flex-col items-center gap-1"><div class="w-14 h-14 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-[10px] text-green-700 font-semibold shadow-sm">Tenant B</div><span class="text-[9px] text-gray-400">Isolated</span></div><div class="flex flex-col items-center gap-1"><div class="w-14 h-14 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[10px] text-purple-700 font-semibold shadow-sm">Tenant C</div><span class="text-[9px] text-gray-400">Isolated</span></div></div><div class="w-full h-[2px] bg-gray-200 overflow-hidden"><div class="h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-[shimmer_1.2s_infinite]"></div></div><div class="bg-gray-900 text-green-400 rounded-lg px-3 py-2 w-full text-[10px] font-mono flex flex-col gap-1"><div class="animate-[fadeIn_0.5s_ease-out]">[SAP] User A \u2192 Order Created \u2713</div><div class="animate-[fadeIn_0.7s_ease-out]">[SAP] User B \u2192 Invoice Viewed \u2713</div><div class="animate-[fadeIn_0.9s_ease-out]">[SAP] User C \u2192 RFQ Submitted \u2713</div></div><div class="text-[10px] text-gray-500 text-center">Full traceability \xB7 SAP authorization mapped</div></div></div>'
    }
  ] })}  ${renderComponent($$result2, "ContentSplitCard", $$ContentSplitCard, { "tagline": "Built for SAP Enterprises", "title": "It Enhances SAP \u2014 It Does Not Replace It.", "cardTitle": "Native OData, BAPI & Service Layer \u2014 real-time portal sync, upgrade-safe", "cardDescription": "UpBuff Enterprise & Partner Portals integrate with SAP S/4HANA via OData, IDoc, and BAPI. SAP ECC and SAP Business One via Service Layer. Oracle and Epicor via flexible REST/SOAP connectors. Every partner transaction \u2014 order, invoice, RFQ, document download \u2014 flows back into SAP as the authoritative system of record. No core modifications. No upgrade risk.", "cardImage": "/uploads/sap-compatibility.png", "cardGradient": "linear-gradient(135deg, #003f7c 0%, #0070c0 50%, #1d4ed8 100%)", "testimonial": {
    quote: "After struggling with CRMs that lacked visibility and required heavy manual effort, the new system brought a simple, structured approach aligned with our workflow. It has improved tracking, coordination, and consistency, making our sales operations far more efficient.",
    name: "Joint Managing Director",
    company: "K. Patel Phyto Extractions",
    avatar: "/uploads/Viraj-Patel-joint-MD.png "
  }, "features": [
    {
      icon: "tabler:check",
      title: "Extends SAP S/4HANA",
      description: "Full integration with SAP S/4HANA using OData, IDoc, BAPI, and secure APIs for real-time portal collaboration."
    },
    {
      icon: "tabler:check",
      title: "Extends SAP ECC & SAP Business One",
      description: "Native integration using SAP Service Layer for real-time synchronization across partner operations."
    },
    {
      icon: "tabler:check",
      title: "Extends Epicor, Oracle & Custom ERPs",
      description: "Seamless connectivity with Epicor, Oracle, and custom ERP environments through flexible API-based integration."
    }
  ] })}  ${renderComponent($$result2, "SecuritySplit", $$SecuritySplit, { "tagline": "Enterprise Security", "title": "Secure by design \u2014 SAP authorization enforced at every portal interaction", "subtitle": "Every partner request is API-governed, role-controlled, and audit-logged. SAP remains the authoritative system of record \u2014 no direct database writes, no core modifications, no compliance gaps.", "features": [
    {
      title: "Role-Based Access Mapped to SAP",
      description: "Granular user roles for suppliers, distributors, customers, and internal stakeholders. Each partner only sees the SAP data their role authorizes \u2014 enforced by SAP authorization logic.",
      illustration: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="w-20 h-16" fill="none"><rect x="20" y="36" width="40" height="30" rx="6" stroke="url(#lk1)" stroke-width="2.5"/><path d="M28 36V26a12 12 0 0 1 24 0v10" stroke="url(#lk1)" stroke-width="2.5" stroke-linecap="round"/><circle cx="40" cy="52" r="4" fill="#22c55e"/><defs><linearGradient id="lk1" x1="20" y1="10" x2="60" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="#22c55e"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs></svg>'
    },
    {
      title: "Multi-Tenant Data Isolation",
      description: "Support multiple partners across regions with completely isolated, secure data access aligned to SAP master data \u2014 no cross-tenant data leakage possible.",
      illustration: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 72" class="w-20 h-16" fill="none"><ellipse cx="40" cy="16" rx="28" ry="10" stroke="url(#db1)" stroke-width="2.5"/><path d="M12 16v20c0 5.523 12.536 10 28 10s28-4.477 28-10V16" stroke="url(#db1)" stroke-width="2.5"/><path d="M12 36v16c0 5.523 12.536 10 28 10s28-4.477 28-10V36" stroke="url(#db1)" stroke-width="2.5"/><circle cx="40" cy="38" r="3" fill="#06b6d4"/><defs><linearGradient id="db1" x1="12" y1="0" x2="68" y2="72" gradientUnits="userSpaceOnUse"><stop stop-color="#06b6d4"/><stop offset="1" stop-color="#6366f1"/></linearGradient></defs></svg>'
    },
    {
      title: "Full Transaction Audit Trail",
      description: "Every partner action \u2014 order placed, document accessed, invoice downloaded \u2014 is logged immutably and mapped to SAP user and authorization models. Exportable for compliance and audit teams.",
      illustration: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="w-20 h-16" fill="none"><rect x="14" y="14" width="52" height="52" rx="8" stroke="url(#bx1)" stroke-width="2.5"/><path d="M26 40h28M26 52h18M26 28h28" stroke="url(#bx1)" stroke-width="2" stroke-linecap="round"/><defs><linearGradient id="bx1" x1="14" y1="14" x2="66" y2="66" gradientUnits="userSpaceOnUse"><stop stop-color="#f97316"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs></svg>'
    }
  ] })}  ${renderComponent($$result2, "ToolsMarquee", $$ToolsMarquee, { "title": "Integrates with your enterprise ecosystem", "description": "UpBuff Enterprise & Partner Portals connect your SAP environment with the collaboration, communication, and analytics tools your partners and teams already rely on.", "speed": 30, "tools": [
    { name: "SAP", logo: '<img src="/uploads/logo/sap-integration-with-upbuff-crm.png" alt="SAP integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "SAP S/4HANA", logo: '<img src="/uploads/logo/sap-s4-hanna-integration-with-upbuff-crm.png" alt="SAP S/4HANA integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "SAP Business One", logo: '<img src="/uploads/logo/sap-integration-with-upbuff-crm.png" alt="SAP Business One integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "Oracle", logo: '<img src="/uploads/logo/oracle-integration-with-upbuff-crm.png" alt="Oracle ERP integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "Epicor", logo: '<img src="/uploads/logo/epicore-integration-with-upbuff-crm.png" alt="Epicor integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "Power BI", logo: '<img src="/uploads/logo/power-bi-integration-with-upbuff-crm.png" alt="Power BI integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "WhatsApp", logo: '<img src="/uploads/logo/whatsapp-integration-with-upbuff-crm.png" alt="WhatsApp integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "Outlook", logo: '<img src="/uploads/logo/outlook-integration-with-upbuff-crm.png" alt="Outlook integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "Gmail", logo: '<img src="/uploads/logo/gmail-integration-with-upbuff-crm.png" alt="Gmail integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "SMS", logo: '<img src="/uploads/logo/sms-integration-with-upbuff-crm.png" alt="SMS integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "Zoho", logo: '<img src="/uploads/logo/zoho-integration-with-upbuff-crm.png" alt="Zoho integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' },
    { name: "VoIP", logo: '<img src="/uploads/logo/voip-integration-with-upbuff-crm.png" alt="VoIP integration with UpBuff Partner Portals" class="w-10 h-10 object-contain" />' }
  ] })}  ${renderComponent($$result2, "TestimonialsGrid", $$TestimonialsGrid, { "title": "What our customers say", "subtitle": "Trusted by <strong>10,000+</strong> businesses \u2014 from SAP Business One customers to large enterprise partner networks", "row1": [
    {
      company: "Gourock Zambia Ltd",
      logo: "/uploads/GZL_Logo1.png",
      avatar: "/uploads/gaurock-client.png",
      quote: "Switching from Oracle e-Business Suite to SAP B1 with UpBuff was a great decision, as they delivered mobile and web solutions connecting our van sales, warehouses, and suppliers in real time. Their expertise in ZRA e-invoicing and SAP integration significantly improved our operational efficiency.",
      name: "Kamlesh Mistry",
      role: "CTO, Gourock Zambia Ltd"
    },
    {
      company: "Index System Pvt Ltd",
      logo: "/uploads/IndexSystem.jpg",
      avatar: "/uploads/Praful-Prabhu-CFO-Index-systems.png",
      quote: "The CRM solution, integrated with SAP Business One and IVR, has significantly improved how we manage customer data, interactions, and call handling. It has given us better visibility, faster response times, and a more streamlined, consistent customer experience.",
      name: "Mr. Praful Prabhu",
      role: "CFO, Index System Pvt Ltd"
    }
  ], "statCard": {
    stat: "10,000+",
    label: "businesses trust UpBuff ERP Partner Portals",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 50%, #22c55e 100%)"
  }, "row2": [
    {
      company: "Ideaforge",
      logo: "/uploads/ideaForge-logo.svg",
      avatar: "/uploads/Vivek-Patel-CTO-ideaForge.png",
      quote: "We partnered with a team that built a fully integrated SAP Business One ecosystem, expanding from service management into product configuration, portals, mobile apps, and workflows. Their integration expertise and professionalism significantly improved our operational visibility and coordination. It has enabled us to scale our operations with greater efficiency and confidence.",
      name: "Mr. Vivek Patel",
      role: "CTO, ideaForge Technology Ltd"
    },
    {
      company: "Spartan Engineering Pvt Ltd",
      logo: "/uploads/Spartan-New-Logo-1.png",
      avatar: "/uploads/Ganesh-Sahani-CTO.png",
      quote: "We discovered UpBuff Technologies by chance when our CFO noticed a mobile service app during a routine ERP visit, which led us to start with service tracking and engineer monitoring. What followed was a complete solution\u2014including IoT integration, preventive alerts, remote shutdowns, and a customer app\u2014that transformed our operations.",
      name: "Ganesh Sahani",
      role: "CTO, Spartan Engineering Pvt Ltd"
    }
  ] })}  ${renderComponent($$result2, "FaqAccordion", $$FaqAccordion, { "tagline": "FAQs", "title": "Frequently Asked Questions", "subtitle": "Get answers to common questions about UpBuff Enterprise & Partner Portals and how they integrate with SAP.", "items": [
    {
      question: "What are ERP-Integrated Enterprise & Partner Portals?",
      answer: "They are secure web portals connected directly to SAP systems that allow suppliers, distributors, customers, and stakeholders to interact with real-time ERP data."
    },
    {
      question: "Does it modify SAP core?",
      answer: "No. The portal integrates via secure APIs and keeps SAP as the system of record."
    },
    {
      question: "Is partner data isolated securely?",
      answer: "Yes. Role-based access ensures each partner only sees authorized SAP data."
    },
    {
      question: "Can partners place orders directly?",
      answer: "Yes. Orders and requests can be posted directly to SAP with validation rules enforced."
    },
    {
      question: "Is it scalable for global enterprises?",
      answer: "Yes. Multi-region, multi-partner architecture supports enterprise-level scalability."
    }
  ] })}  ${renderComponent($$result2, "SecuritySplit", $$SecuritySplit, { "tagline": "Reach out to us", "title": "Have questions about Enterprise & Partner Portals?", "subtitle": "Feel free to contact us. We're here to help!", "features": [
    {
      title: "Schedule a Demo",
      description: "See live ERP sync, mobile order capture, and pricing enforcement in action. Schedule a 30-minute demo with our SAP integration specialists.",
      href: "/contact"
    },
    {
      title: "Join Partner Program",
      description: "SAP reseller and ERP channel partner program for VARs and system integrators. Earn commissions on every UpBuff deployment you bring to market.",
      href: "/partners"
    },
    {
      title: "Explore CRM Modules",
      description: "Browse field sales, distribution management, collections, and performance reporting modules organized by industry and ERP platform.",
      href: "/solutions"
    }
  ] })}  ${renderComponent($$result2, "CtaBanner", $$CtaBanner, { "title": "Connect your SAP to partners, suppliers, and customers \u2014 securely", "subtitle": "Use UpBuff to extend SAP S/4HANA, ECC, and Business One into real-time enterprise and partner portals \u2014 without modifying core ERP.", "action": {
    text: "Contact us",
    href: "/contact",
    variant: "primary"
  }, "note": "No SAP core modifications required" })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <meta name="author" content="UpBuff Technologies"> <meta property="og:site_name" content="UpBuff Technologies"> <meta property="og:image" content="https://www.upbuff.com/images/erp-portals-og.jpg"> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UpBuff Technologies",
    "url": "https://www.upbuff.com",
    "logo": "https://www.upbuff.com/logo.png",
    "description": "UpBuff is an ERP Execution Platform extending SAP systems into secure portals, manufacturing, sales, warehouse, CRM, and field service operations."
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.upbuff.com",
    "name": "UpBuff Technologies",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.upbuff.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "UpBuff ERP-Integrated Enterprise & Partner Portals",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "ERP-integrated enterprise and partner portal solution extending SAP systems with secure, role-based collaboration.",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are ERP-Integrated Enterprise & Partner Portals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They are secure portals connected to SAP systems allowing partners and stakeholders to access real-time ERP data without modifying SAP core."
        }
      },
      {
        "@type": "Question",
        "name": "Does it integrate with SAP S/4HANA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It integrates with SAP S/4HANA, ECC, and SAP Business One using secure APIs such as OData and Service Layer."
        }
      },
      {
        "@type": "Question",
        "name": "Is partner data secured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Role-based access control ensures data isolation and compliance with SAP authorization logic."
        }
      },
      {
        "@type": "Question",
        "name": "Can partners place orders directly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Orders and requests can be posted directly to SAP with validation rules enforced."
        }
      },
      {
        "@type": "Question",
        "name": "Is it scalable for global enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Multi-region, multi-partner architecture supports enterprise-level scalability."
        }
      }
    ]
  }))) })}` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/products/enterprise-partner-portals.astro", void 0);

const $$file = "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/products/enterprise-partner-portals.astro";
const $$url = "/products/enterprise-partner-portals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EnterprisePartnerPortals,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
