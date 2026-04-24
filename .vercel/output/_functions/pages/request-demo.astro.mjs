import { e as createAstro, c as createComponent, a as renderTemplate, d as renderScript, u as unescapeHTML, b as addAttribute, s as spreadAttributes, m as maybeRenderHead, r as renderComponent, F as Fragment } from '../chunks/astro/server_BONdxEiL.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_BS2WX63q.mjs';
import 'clsx';
import { $ as $$LogoBar } from '../chunks/LogoBar_B0qNkUOO.mjs';
import { $ as $$FeaturesGrid } from '../chunks/FeaturesGrid_CwyGxRwy.mjs';
import { $ as $$FeaturesEnterprise } from '../chunks/FeaturesEnterprise_AO6ercrn.mjs';
import { $ as $$FaqAccordion } from '../chunks/FaqAccordion_DHd6Sfjj.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$HeroContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroContactForm;
  const {
    tagline,
    title,
    subtitle,
    testimonial,
    formTitle = "Talk to our team",
    fields = [],
    submitLabel = "Request a Demo",
    formNote,
    id
  } = Astro2.props;
  const f0 = fields[0]?.type;
  const f1 = fields[1]?.type;
  const hasPair = fields.length >= 2 && f0 !== "select" && f0 !== "textarea" && f1 !== "select" && f1 !== "textarea";
  const pairFields = hasPair ? fields.slice(0, 2) : [];
  const stackFields = hasPair ? fields.slice(2) : fields;
  const htmlType = (t) => t === "email" ? "email" : "text";
  const svgArrow = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E";
  const selectStyle = `background-image:url("${svgArrow}");background-repeat:no-repeat;background-position:right 14px center;`;
  const pairMapped = pairFields.map((f) => ({
    name: f.name,
    label: f.label,
    placeholder: f.placeholder,
    itype: htmlType(f.type)
    // 'text' | 'email' — safe for <input type>
  }));
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="relative not-prose md:-mt-[76px] bg-[#0a0a0a] text-white overflow-hidden"', '> <!-- Ambient glow — matches HeroPanels dark theme --> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" aria-hidden="true" style="background:radial-gradient(ellipse at 50% 0%,rgba(99,102,241,0.13) 0%,transparent 70%);"></div> <!-- Noise texture overlay --> <div class="absolute inset-0 pointer-events-none noise-overlay opacity-30" aria-hidden="true"></div> <div class="relative max-w-5xl mx-auto px-4 sm:px-6"> <!-- Header spacer --> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-16 md:py-24 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-10"> <!-- ── Left: headline + subtitle + testimonial ──────────── --> <div class="lg:w-1/2 flex flex-col gap-6 lg:pt-4"> ', " ", " ", " ", ' </div> <!-- ── Right: form card ──────────────────────────────────── --> <div class="lg:w-1/2 shrink-0"> <div class="relative bg-white rounded-2xl shadow-2xl p-7 md:p-8"> <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5"> ', ` </p> <!-- ── Success Popup ─────────────────────────────────── --> <div id="hcf-success" class="hidden absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white px-8 text-center"> <div class="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5"> <svg class="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-2">We'll be in touch soon!</h3> <p class="text-sm text-gray-500 leading-relaxed max-w-xs">
Your demo request has been received. One of our solutions specialists will reach out within
<strong class="text-gray-700">one business day</strong> to confirm your session.
</p> <p class="text-xs text-gray-400 mt-4">A confirmation has been sent to your email.</p> </div> <!-- ── Error banner ─────────────────────────────────── --> <div id="hcf-error" class="hidden rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 mb-1">
Something went wrong. Please try again or email us at
<a href="mailto:sales@upbuff.com" class="underline font-medium">sales@upbuff.com</a>.
</div> <form id="hcf-form" class="flex flex-col gap-4"> <!-- ── Honeypot (invisible to real users) ──────────────── --> <div aria-hidden="true" style="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;"> <label>
Website
<input type="text" name="website" tabindex="-1" autocomplete="off"> </label> </div> <!-- ── Timestamp seeded at SSR; preserves real form-render time
                 so humans clear the timing check with room to spare.    ── --> <input type="hidden" name="ts" id="hcf-ts"`, "> <!-- Two-column row: first two text / email fields --> ", " <!-- Stacked fields: select / textarea / text --> ", ' <!-- ── Cloudflare Turnstile widget ──────────────────────── --> <div class="flex justify-center mt-1"> <div class="cf-turnstile"', ' data-theme="light" data-size="flexible"></div> </div> <!-- Submit button --> <button id="hcf-submit" type="submit" class="w-full mt-1 px-6 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"> <span id="hcf-btn-label">', '</span> <svg id="hcf-spinner" class="hidden animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path> </svg> </button> ', " </form> </div> </div> </div> </div> <!-- Cloudflare Turnstile loader — compatible with Astro View Transitions.\n     The default auto-render only scans the DOM once. When the user navigates\n     between pages via ClientRouter, the widget div is re-mounted but never\n     rendered. We explicitly render any un-rendered widget on every page-load. --> <script>\n  (function () {\n    function ensureTurnstileScript() {\n      if (document.querySelector('script[data-turnstile-loader]')) return;\n      const s = document.createElement('script');\n      // ?render=explicit — tells Turnstile not to auto-scan; we'll render manually.\n      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';\n      s.async = true;\n      s.defer = true;\n      s.setAttribute('data-turnstile-loader', 'true');\n      document.head.appendChild(s);\n    }\n\n    function renderAllWidgets() {\n      if (!window.turnstile || typeof window.turnstile.render !== 'function') {\n        // Script hasn't loaded yet — retry in 200ms (max ~3s total).\n        if ((window.__tsRetries || 0) < 15) {\n          window.__tsRetries = (window.__tsRetries || 0) + 1;\n          setTimeout(renderAllWidgets, 200);\n        }\n        return;\n      }\n      window.__tsRetries = 0;\n      document.querySelectorAll('.cf-turnstile').forEach(function (el) {\n        // Skip if already rendered (element gets a data-widget-id attr).\n        if (el.getAttribute('data-rendered') === 'true') return;\n        const sitekey = el.getAttribute('data-sitekey');\n        if (!sitekey) return;\n        try {\n          window.turnstile.render(el, {\n            sitekey: sitekey,\n            theme:   el.getAttribute('data-theme') || 'auto',\n            size:    el.getAttribute('data-size')  || 'normal',\n          });\n          el.setAttribute('data-rendered', 'true');\n        } catch (err) {\n          // Most common reason: widget already rendered by auto-scan on a prior load.\n          console.warn('[turnstile] render skipped:', err);\n        }\n      });\n    }\n\n    ensureTurnstileScript();\n\n    // Fire on first load AND after every View Transition navigation.\n    document.addEventListener('DOMContentLoaded', renderAllWidgets);\n    document.addEventListener('astro:page-load', renderAllWidgets);\n  })();\n</script> ", " </section>"])), maybeRenderHead(), spreadAttributes(id ? { id } : {}), tagline && renderTemplate`<div class="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"> <span class="w-2 h-2 rounded-full bg-purple-400 shrink-0" aria-hidden="true"></span> <span class="text-sm font-medium text-white/80">${tagline}</span> </div>`, title && renderTemplate`<h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-heading text-white">${unescapeHTML(title)}</h1>`, subtitle && renderTemplate`<p class="text-base md:text-lg text-white/60 leading-relaxed max-w-md">${unescapeHTML(subtitle)}</p>`, testimonial && renderTemplate`<blockquote class="mt-auto pt-8 border-t border-white/10"> <p class="text-base text-white/70 leading-relaxed italic mb-5">
&ldquo;${testimonial.quote}&rdquo;
</p> <footer class="flex items-center gap-3"> ${testimonial.avatar && renderTemplate`<img${addAttribute(testimonial.avatar, "src")}${addAttribute(testimonial.name ?? "", "alt")} class="w-9 h-9 rounded-full object-cover ring-2 ring-white/20 shrink-0" loading="lazy">`} <div class="text-sm"> ${testimonial.name && renderTemplate`<span class="font-semibold text-white">${testimonial.name}</span>`} ${testimonial.role && renderTemplate`<span class="text-white/50 ml-1">${testimonial.role}</span>`} </div> </footer> </blockquote>`, formTitle, addAttribute(String(Date.now()), "value"), hasPair && renderTemplate`<div class="grid grid-cols-2 gap-4"> ${pairMapped.map((f) => renderTemplate`<div class="flex flex-col gap-1.5"> <label${addAttribute(`hcf-${f.name}`, "for")} class="text-xs font-semibold text-gray-600"> ${f.label} </label> <input${addAttribute(`hcf-${f.name}`, "id")}${addAttribute(f.name, "name")}${addAttribute(f.itype, "type")}${addAttribute(f.placeholder, "placeholder")} class="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"> </div>`)} </div>`, stackFields.map((f) => renderTemplate`<div class="flex flex-col gap-1.5"> <label${addAttribute(`hcf-${f.name}`, "for")} class="text-xs font-semibold text-gray-600"> ${f.label} </label> ${f.type === "select" && renderTemplate`<select${addAttribute(`hcf-${f.name}`, "id")}${addAttribute(f.name, "name")} class="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow appearance-none"${addAttribute(selectStyle, "style")}> ${f.placeholder && renderTemplate`<option value="" disabled${addAttribute(true, "selected")}>${f.placeholder}</option>`} ${(f.options ?? []).map((opt) => renderTemplate`<option${addAttribute(opt, "value")}>${opt}</option>`)} </select>`} ${f.type === "textarea" && renderTemplate`<textarea${addAttribute(`hcf-${f.name}`, "id")}${addAttribute(f.name, "name")}${addAttribute(f.rows ?? 4, "rows")}${addAttribute(f.placeholder, "placeholder")} class="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow resize-none"></textarea>`} ${f.type !== "select" && f.type !== "textarea" && renderTemplate`<input${addAttribute(`hcf-${f.name}`, "id")}${addAttribute(f.name, "name")}${addAttribute(htmlType(f.type), "type")}${addAttribute(f.placeholder, "placeholder")} class="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow">`} </div>`), addAttribute("0x4AAAAAADBpbFhP19dtePOt", "data-sitekey"), submitLabel, formNote && renderTemplate`<p class="text-xs text-center text-gray-400 mt-1">${unescapeHTML(formNote)}</p>`, renderScript($$result, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/HeroContactForm.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/HeroContactForm.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RequestDemo = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Request a Demo | UpBuff ERP Execution Platform",
    description: "See UpBuff in action. Book a personalised demo of the ERP Execution Platform extending SAP S/4HANA, SAP Business One, Oracle, and Epicor into real-time field, warehouse, and sales operations.",
    canonical: "https://www.upbuff.com/request-demo/",
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: "https://www.upbuff.com/request-demo",
      title: "Request a Demo | UpBuff ERP Execution Platform",
      description: "Book a personalised UpBuff demo \u2014 see live SAP integration, real-time field execution, and Clean Core architecture in action.",
      image: "https://www.upbuff.com/images/request-demo-og.png"
    },
    twitter: {
      cardType: "summary_large_image",
      title: "Request a Demo | UpBuff",
      description: "See UpBuff extend SAP, Oracle, and Epicor into real-time operations \u2014 no core modification, no upgrade risk."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`     ${renderComponent($$result2, "HeroContactForm", $$HeroContactForm, { "tagline": "Request a Demo", "title": "See UpBuff extend your ERP in 30 minutes.", "subtitle": "Book a personalised session with an UpBuff solutions specialist. We\u2019ll show you live SAP integration, real-time execution on mobile, and Clean Core architecture \u2014 scoped to your ERP and your operations.", "testimonial": {
    quote: "Switching from Oracle e-Business Suite to SAP B1 with UpBuff was a great decision, as they delivered mobile and web solutions connecting our van sales, warehouses, and suppliers in real time. Their expertise in ZRA e-invoicing and SAP integration significantly improved our operational efficiency.",
    name: "Kamlesh Mistry",
    role: "CTO, Gourock Zambia Ltd",
    avatar: "/uploads/gaurock-client.png"
  }, "formTitle": "Book your demo", "fields": [
    { name: "name", label: "Full name", placeholder: "Jane Smith", type: "text" },
    { name: "email", label: "Work email", placeholder: "you@company.com", type: "email" },
    {
      name: "erp",
      label: "ERP system",
      placeholder: "Select your ERP",
      type: "select",
      options: ["SAP S/4HANA", "SAP Business One", "SAP ECC", "Oracle ERP Cloud", "Oracle NetSuite", "Epicor Kinetic", "Microsoft Dynamics 365", "Other"]
    },
    {
      name: "focus",
      label: "Area of interest",
      placeholder: "Select a module",
      type: "select",
      options: ["Field Service Management", "Warehouse & Inventory", "Sales & Distribution", "Manufacturing / Shopfloor", "CRM & Customer Portal", "Enterprise Partner Portals", "Full platform overview", "ERP-Integrated Product Configurator", "Asset Tracking System"]
    },
    { name: "message", label: "Anything specific you want to see?", placeholder: "Optional \u2014 describe your use case or challenge\u2026", type: "textarea", rows: 3 }
  ], "submitLabel": "Book my demo", "formNote": "Free & no commitment required. We typically respond within one business day." })}  ${renderComponent($$result2, "LogoBar", $$LogoBar, { "label": "Trusted by operations teams already running on UpBuff", "logos": [
    { src: "/uploads/ideaForge-logo.svg", alt: "ideaForge Technology" },
    { src: "/uploads/jnk-chemdist-logo.svg", alt: "JNK Chemdist" },
    { src: "/uploads/molygraph-logo.svg", alt: "Molygraph" },
    { src: "/uploads/ncc-streetscape-logo.svg", alt: "NCC Streetscape" },
    { src: "/uploads/roofsol-logo.svg", alt: "Roofsol" },
    { src: "/uploads/the-wine-source-logo.svg", alt: "The Wine Source" }
  ] })}  ${renderComponent($$result2, "FeaturesGrid", $$FeaturesGrid, { "tagline": "What's in the demo", "title": "A real platform.<br />Your real ERP.", "subtitle": "Every demo is mapped to your ERP system and the operational modules most relevant to your team. No generic slides \u2014 you see UpBuff running live against SAP, Oracle, or Epicor data.", "items": [
    {
      icon: "tabler:plug-connected",
      title: "Live ERP connection",
      description: "Watch UpBuff pull real-time data from SAP Business One, S/4HANA, Oracle, or Epicor via official APIs \u2014 no screenshots, no mock data."
    },
    {
      icon: "tabler:device-mobile",
      title: "Mobile execution in action",
      description: "See field technicians, warehouse operators, or sales reps executing ERP workflows on mobile \u2014 with offline support and instant ERP sync."
    },
    {
      icon: "tabler:arrows-exchange",
      title: "Real-time ERP sync",
      description: "Every action in the demo \u2014 a service order update, a goods issue, a sales confirmation \u2014 syncs back to ERP in real time through the official API layer."
    },
    {
      icon: "tabler:shield-check",
      title: "Clean Core architecture",
      description: "We walk through how UpBuff integrates without any ERP core modification \u2014 keeping your SAP or Oracle environment upgrade-safe from day one."
    },
    {
      icon: "tabler:layout-dashboard",
      title: "Your module, your flow",
      description: "Choose field service, warehouse, sales distribution, shopfloor, or CRM \u2014 we demo the module most relevant to the problem you are trying to solve."
    },
    {
      icon: "tabler:clock",
      title: "30 to 45 minutes",
      description: "A focused session with an UpBuff specialist who knows your ERP. No sales theatre \u2014 just a clear view of what UpBuff can do for your specific operations."
    }
  ] })}  ${renderComponent($$result2, "FeaturesEnterprise", $$FeaturesEnterprise, { "tagline": "What to expect", "title": "What happens after your demo", "items": [
    {
      title: "Meet your integration engineer",
      description: "Every demo ends with an intro to the engineer who would own your SAP or Oracle integration from day one \u2014 no handoffs, no account managers in between.",
      illustration: '<div class="w-full h-full flex flex-col items-center justify-center gap-4 p-6 bg-gray-50"><div class="bg-white rounded-2xl shadow px-5 py-3 flex items-center gap-2 text-sm font-medium border border-gray-100"><span class="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">\u2713</span>SAP integration live</div><div class="flex items-center gap-3 mt-2"><div class="w-16 h-9 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div><div class="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow"><img src="/uploads/common-female.svg" class="w-full h-full object-cover" alt="Integration engineer" /></div><div class="w-16 h-9 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div></div></div>'
    },
    {
      title: "A workflow scoped to your ERP",
      description: "During the demo we map at least one live workflow to your ERP \u2014 SAP Business One, S/4HANA, Oracle, or Epicor \u2014 so you leave with a concrete picture of execution, not a generic slide deck.",
      illustration: '<div class="grid grid-cols-4 gap-3 w-full px-4"><div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#1d4ed8"></div><div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#374151"></div><div class="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden"><img src="/uploads/logo/sap-integration-with-upbuff.png" class="w-7 h-7 object-contain"/></div><div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#7c3aed"></div><div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#0f766e"></div><div class="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden"><img src="/uploads/logo/oracle-integration-with-upbuff-crm.png" class="w-9 h-7 object-contain"/></div><div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#ea580c"></div><div class="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden"><img src="/uploads/logo/epicore-integration-with-upbuff-crm.png" class="w-9 h-7 object-contain"/></div><div class="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center"></div><div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#0ea5e9"></div><div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#6366f1"></div><div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#ec4899"></div></div>'
    },
    {
      title: "Enterprise commitments from day one",
      description: "Enterprise deployments come with documented uptime SLAs and a dedicated support queue. We walk through exactly what those commitments mean for your team during the session.",
      illustration: '<div class="relative w-48 h-48 flex items-center justify-center"><svg viewBox="0 0 160 160" class="absolute inset-0 w-full h-full -rotate-90"><circle cx="80" cy="80" r="60" fill="none" stroke="#e5e7eb" stroke-width="8" stroke-dasharray="6 4"/><circle cx="80" cy="80" r="60" fill="none" stroke="#22c55e" stroke-width="8" stroke-dasharray="350 90" stroke-linecap="round"/></svg><span class="text-2xl font-bold text-heading dark:text-gray-100">99.9%</span></div>'
    }
  ] })}  ${renderComponent($$result2, "FaqAccordion", $$FaqAccordion, { "tagline": "Demo FAQ", "title": "Questions about the demo", "items": [
    {
      question: "What will I see in the demo?",
      answer: "The demo covers live ERP integration (SAP, Oracle, or Epicor), real-time field execution on mobile, warehouse scanning, sales order flows, and Clean Core API architecture \u2014 all mapped to the modules you selected in your request."
    },
    {
      question: "How long does the demo take?",
      answer: "A standard demo runs 30 to 45 minutes. For larger enterprise engagements we offer a 90-minute deep-dive session tailored to your ERP environment and multiple operational modules."
    },
    {
      question: "Who will I be speaking with?",
      answer: "You will be connected with an UpBuff solutions specialist who is familiar with your ERP system \u2014 SAP, Oracle, or Epicor. They will have reviewed your request before the session."
    },
    {
      question: "Do I need to prepare anything?",
      answer: "No preparation is required. It helps to know which ERP system you run and which operational areas you want to improve \u2014 but we can also run a full platform overview if you are still exploring."
    },
    {
      question: "Is this demo free?",
      answer: "Yes \u2014 completely free with no commitment required. Fill in the form and we will send you a calendar link within one business day."
    }
  ] })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <meta name="author" content="UpBuff Technologies"> <meta property="og:site_name" content="UpBuff Technologies"> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UpBuff Technologies",
    "url": "https://www.upbuff.com",
    "logo": "https://www.upbuff.com/logo.png",
    "description": "UpBuff is an ERP Execution Platform extending SAP, Oracle, and Epicor into field service, warehouse, sales, and shopfloor operations."
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What will I see in the UpBuff demo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The demo covers live ERP integration (SAP, Oracle, or Epicor), real-time field execution on mobile, warehouse scanning, sales order flows, and the Clean Core API architecture \u2014 all mapped to your specific use case."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the demo take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard demo runs 30 to 45 minutes. For larger enterprise engagements we offer a 90-minute deep-dive session tailored to your ERP environment and operational modules."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to prepare anything before the demo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No preparation is required. It helps to know which ERP system you use and which operational areas you want to improve \u2014 field service, warehouse, sales, or shopfloor \u2014 so we can tailor the session, but we can also run a full platform overview."
        }
      },
      {
        "@type": "Question",
        "name": "Is the demo free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The demo is completely free with no commitment required. You will be connected with an UpBuff solutions specialist familiar with your ERP environment."
        }
      }
    ]
  }))) })}` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/request-demo.astro", void 0);

const $$file = "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/request-demo.astro";
const $$url = "/request-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RequestDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
