import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, d as renderScript, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_BONdxEiL.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_BS2WX63q.mjs';
import { $ as $$LogoBar } from '../chunks/LogoBar_B0qNkUOO.mjs';
import { $ as $$FaqAccordion } from '../chunks/FaqAccordion_DHd6Sfjj.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const metadata = {
    title: "Contact UpBuff | Get in Touch with Our ERP Integration Team",
    description: "Get in touch with the UpBuff team. Ask about SAP integration, request a platform walkthrough, or speak directly with an implementation specialist.",
    canonical: "https://www.upbuff.com/contact/",
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: "https://www.upbuff.com/contact/",
      title: "Contact UpBuff | ERP Integration Specialists",
      description: "Reach the UpBuff team for SAP integration questions, platform demos, or implementation support.",
      image: "https://www.upbuff.com/images/contact-og.png"
    },
    twitter: {
      cardType: "summary_large_image",
      title: "Contact UpBuff",
      description: "Speak with an UpBuff ERP integration specialist."
    }
  };
  const svgArrow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E";
  const selectStyle = `background-image:url("${svgArrow}");background-repeat:no-repeat;background-position:right 14px center;`;
  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Saudi Arabia",
    "Singapore",
    "Australia",
    "Canada",
    "Germany",
    "France",
    "Netherlands",
    "South Africa",
    "Zambia",
    "Other"
  ];
  const products = [
    "ERP-Integrated CRM",
    "ERP-Integrated Field Service Management",
    "Warehouse & Inventory Management",
    "Sales & Distribution Execution",
    "Manufacturing & Shopfloor",
    "Enterprise & Partner Portals",
    "ERP-Integrated Product Configurator",
    "Not sure yet — need guidance"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": async ($$result2) => renderTemplate(_a || (_a = __template(["    ", `<section class="relative not-prose md:-mt-[76px] bg-[#0a0a0a] text-white overflow-hidden"> <!-- Ambient glow --> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" aria-hidden="true" style="background:radial-gradient(ellipse at 50% 0%,rgba(99,102,241,0.13) 0%,transparent 70%);"></div> <div class="absolute inset-0 pointer-events-none noise-overlay opacity-30" aria-hidden="true"></div> <div class="relative max-w-5xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-16 md:py-24 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-10"> <!-- ── Left: contact details ───────────────────────── --> <div class="lg:w-1/2 flex flex-col gap-8 lg:pt-4"> <!-- Tagline --> <div class="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"> <span class="w-2 h-2 rounded-full bg-purple-400 shrink-0" aria-hidden="true"></span> <span class="text-sm font-medium text-white/80">Contact Us</span> </div> <!-- Heading --> <div> <h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-heading text-white mb-4">
Contact with UpBuff Sales Team
</h1> <p class="text-base md:text-lg text-white/60 leading-relaxed">
Let us know how we can help by filling out the form. We will respond within 24 business hours.
</p> </div> <!-- Contact details --> <div class="flex flex-col gap-5 pt-2"> <!-- Phone & Email --> <div class="flex flex-col gap-3"> <p class="text-xs font-bold uppercase tracking-widest text-white/30">Work Enquiries</p> <a href="tel:+919819982562" class="inline-flex items-center gap-3 text-white hover:text-indigo-400 transition-colors"> <span class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"></path> </svg> </span> <span class="text-sm font-medium">+91 98199 82562</span> </a> <a href="mailto:info@upbuff.com" class="inline-flex items-center gap-3 text-white hover:text-indigo-400 transition-colors"> <span class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path> <polyline points="22,6 12,13 2,6"></polyline> </svg> </span> <span class="text-sm font-medium">info@upbuff.com</span> </a> </div> <!-- Divider --> <div class="border-t border-white/10"></div> <!-- Offices --> <div class="flex flex-col gap-5"> <p class="text-xs font-bold uppercase tracking-widest text-white/30">Our Offices</p> <!-- Kerala --> <div class="flex gap-3"> <span class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path> <circle cx="12" cy="10" r="3"></circle> </svg> </span> <div> <p class="text-sm font-semibold text-white mb-0.5">Kerala, India (Headquarters)</p> <p class="text-sm text-white/50 leading-relaxed">
UpBuff Technologies Pvt Ltd<br>
Swatantra', Ground Floor South Pavilion,<br>
Karyavattom, Thiruvananthapuram - 695581
</p> </div> </div> <!-- Mumbai --> <div class="flex gap-3"> <span class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path> <circle cx="12" cy="10" r="3"></circle> </svg> </span> <div> <p class="text-sm font-semibold text-white mb-0.5">Mumbai, India</p> <p class="text-sm text-white/50 leading-relaxed">
Toutle Space 4th Floor, Aditya Industrial Estate,<br>
Co-Op. Premises Ltd, 98-103, Behind Evershine Mall,<br>
Chincholi Bunder, Malad West,<br>
Mumbai, Maharashtra 400064
</p> </div> </div> </div> </div> </div> <!-- ── Right: contact form ─────────────────────────── --> <div class="lg:w-1/2 shrink-0"> <div class="relative bg-white rounded-2xl shadow-2xl p-7 md:p-8"> <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
Send us a message
</p> <!-- ── Success Popup ────────────────────────────── --> <div id="cf-success" class="hidden absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white px-8 text-center"> <div class="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5"> <svg class="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-2">Message received!</h3> <p class="text-sm text-gray-500 leading-relaxed max-w-xs">
Thanks for reaching out. We'll get back to you within
<strong class="text-gray-700">24 business hours</strong>.
</p> <p class="text-xs text-gray-400 mt-4">A confirmation has been sent to your email.</p> </div> <!-- ── Error Banner ────────────────────────────── --> <div id="cf-error" class="hidden rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 mb-1">
Something went wrong. Please try again or email us at
<a href="mailto:info@upbuff.com" class="underline font-medium">info@upbuff.com</a>.
</div> <form id="cf-form" class="flex flex-col gap-4" novalidate> <!-- ── Honeypot (invisible to real users) ──────────────── --> <div aria-hidden="true" style="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;"> <label>
Website
<input type="text" name="website" tabindex="-1" autocomplete="off"> </label> </div> <!-- ── Timestamp seeded at SSR; preserves real form-render time
                   so humans clear the timing check with room to spare.    ── --> <input type="hidden" name="ts" id="cf-ts"`, '> <!-- Full Name + Email — 2 column --> <div class="grid grid-cols-2 gap-4"> <div class="flex flex-col gap-1.5"> <label for="cf-name" class="text-xs font-semibold text-gray-600">\nFull Name <span class="text-red-500">*</span> </label> <input id="cf-name" name="name" type="text" placeholder="Jane Smith" required class="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"> </div> <div class="flex flex-col gap-1.5"> <label for="cf-email" class="text-xs font-semibold text-gray-600">\nEmail ID <span class="text-red-500">*</span> <span class="text-gray-400 font-normal ml-1">(business preferred)</span> </label> <input id="cf-email" name="email" type="email" placeholder="you@company.com" required class="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"> </div> </div> <!-- Product Interest --> <div class="flex flex-col gap-1.5"> <label for="cf-product" class="text-xs font-semibold text-gray-600">Product Interest</label> <select id="cf-product" name="product" class="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow appearance-none"', '> <option value="" disabled selected>Select a product</option> ', ' </select> </div> <!-- Country --> <div class="flex flex-col gap-1.5"> <label for="cf-country" class="text-xs font-semibold text-gray-600">Country</label> <select id="cf-country" name="country" class="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow appearance-none"', '> <option value="" disabled selected>Select your country</option> ', ' </select> </div> <!-- Message --> <div class="flex flex-col gap-1.5"> <label for="cf-message" class="text-xs font-semibold text-gray-600">\nYour Message <span class="text-gray-400 font-normal">(Optional)</span> </label> <textarea id="cf-message" name="message"', ' placeholder="Tell us about your ERP environment and what you are trying to achieve…" class="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow resize-none"></textarea> </div> <!-- Consent text --> <p class="text-xs text-gray-400 leading-relaxed pt-1">\nBy submitting this form you consent to us emailing you occasionally about our products and services.\n                You can unsubscribe from emails at any time, and we will never pass your email onto third parties.\n<a href="/legal/privacy" class="text-purple-600 hover:underline font-medium">Privacy Policy</a> </p> <!-- ── Cloudflare Turnstile widget ──────────────────────── --> <div class="flex justify-center mt-1"> <div class="cf-turnstile"', ' data-theme="light" data-size="flexible"></div> </div> <!-- Submit --> <button id="cf-submit" type="submit" class="w-full mt-1 px-6 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"> <span id="cf-btn-label">Send message</span> <svg id="cf-spinner" class="hidden animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path> </svg> </button> </form> </div> </div> </div> </div> </section>  ', "  ", "  <script>\n  (function () {\n    function ensureTurnstileScript() {\n      if (document.querySelector('script[data-turnstile-loader]')) return;\n      const s = document.createElement('script');\n      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';\n      s.async = true;\n      s.defer = true;\n      s.setAttribute('data-turnstile-loader', 'true');\n      document.head.appendChild(s);\n    }\n\n    function renderAllWidgets() {\n      if (!window.turnstile || typeof window.turnstile.render !== 'function') {\n        if ((window.__tsRetries || 0) < 15) {\n          window.__tsRetries = (window.__tsRetries || 0) + 1;\n          setTimeout(renderAllWidgets, 200);\n        }\n        return;\n      }\n      window.__tsRetries = 0;\n      document.querySelectorAll('.cf-turnstile').forEach(function (el) {\n        if (el.getAttribute('data-rendered') === 'true') return;\n        const sitekey = el.getAttribute('data-sitekey');\n        if (!sitekey) return;\n        try {\n          window.turnstile.render(el, {\n            sitekey: sitekey,\n            theme:   el.getAttribute('data-theme') || 'auto',\n            size:    el.getAttribute('data-size')  || 'normal',\n          });\n          el.setAttribute('data-rendered', 'true');\n        } catch (err) {\n          console.warn('[turnstile] render skipped:', err);\n        }\n      });\n    }\n\n    ensureTurnstileScript();\n    document.addEventListener('DOMContentLoaded', renderAllWidgets);\n    document.addEventListener('astro:page-load', renderAllWidgets);\n  })();\n</script> ", " "])), maybeRenderHead(), addAttribute(String(Date.now()), "value"), addAttribute(selectStyle, "style"), products.map((p) => renderTemplate`<option${addAttribute(p, "value")}>${p}</option>`), addAttribute(selectStyle, "style"), countries.map((c) => renderTemplate`<option${addAttribute(c, "value")}>${c}</option>`), addAttribute(3, "rows"), addAttribute("0x4AAAAAADBpbFhP19dtePOt", "data-sitekey"), renderComponent($$result2, "LogoBar", $$LogoBar, { "label": "Trusted by operations teams running on UpBuff", "logos": [
    { src: "/uploads/ideaForge-logo.svg", alt: "ideaForge Technology" },
    { src: "/uploads/jnk-chemdist-logo.svg", alt: "JNK Chemdist" },
    { src: "/uploads/molygraph-logo.svg", alt: "Molygraph" },
    { src: "/uploads/ncc-streetscape-logo.svg", alt: "NCC Streetscape" },
    { src: "/uploads/roofsol-logo.svg", alt: "Roofsol" },
    { src: "/uploads/the-wine-source-logo.svg", alt: "The Wine Source" }
  ] }), renderComponent($$result2, "FaqAccordion", $$FaqAccordion, { "tagline": "Contact FAQ", "title": "Common questions", "items": [
    {
      question: "How quickly will you respond?",
      answer: "We typically respond within 24 business hours. For urgent enquiries, call us directly on +91 98199 82562."
    },
    {
      question: "Can I speak directly with an ERP specialist?",
      answer: "Yes. Fill in the form with your product interest and we will connect you with a specialist who has hands-on experience with SAP Business One, S/4HANA, Oracle, or Epicor."
    },
    {
      question: "Is the initial consultation free?",
      answer: "Yes — completely free with no obligation. We will discuss your ERP environment and whether UpBuff is the right fit before any commitment."
    },
    {
      question: "Do you work with partners and system integrators?",
      answer: "Yes. We have a partner programme for SAP implementation partners, system integrators, and ERP consultants. Reach out via the form and mention your partnership interest."
    }
  ] }), renderScript($$result2, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/contact.astro?astro&type=script&index=0&lang.ts")), "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_b || (_b = __template([' <meta name="author" content="UpBuff Technologies"> <meta property="og:site_name" content="UpBuff Technologies"> <script type="application/ld+json">', "</script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UpBuff Technologies",
    "url": "https://www.upbuff.com",
    "logo": "https://www.upbuff.com/logo.png",
    "contactPoint": [
      { "@type": "ContactPoint", "telephone": "+919819982562", "contactType": "sales", "email": "info@upbuff.com" }
    ],
    "address": [
      { "@type": "PostalAddress", "streetAddress": "Swatantra, Ground Floor South Pavilion, Karyavattom", "addressLocality": "Thiruvananthapuram", "addressRegion": "Kerala", "postalCode": "695581", "addressCountry": "IN" },
      { "@type": "PostalAddress", "addressLocality": "Mumbai", "addressRegion": "Maharashtra", "postalCode": "400064", "addressCountry": "IN" }
    ]
  }))) })}` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/contact.astro", void 0);
const $$file = "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
