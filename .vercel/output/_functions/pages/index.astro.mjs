import { c as createComponent, m as maybeRenderHead, a as renderTemplate, e as createAstro, b as addAttribute, r as renderComponent, u as unescapeHTML, F as Fragment, d as renderScript } from '../chunks/astro/server_BONdxEiL.mjs';
import 'piccolore';
import { c as $$Icon, $ as $$PageLayout } from '../chunks/PageLayout_BS2WX63q.mjs';
import { a as $$TestimonialsGrid, $ as $$FeaturesHighlights } from '../chunks/TestimonialsGrid_CHsF45-x.mjs';
import { a as $$FeaturesCarousel, $ as $$ContentSplitCard } from '../chunks/ContentSplitCard_uJ1VUM9r.mjs';
import { a as $$Image, $ as $$FeaturesGrid } from '../chunks/FeaturesGrid_CwyGxRwy.mjs';
import { $ as $$ToolsMarquee } from '../chunks/ToolsMarquee_TPsf7ym1.mjs';
import { $ as $$SecuritySplit } from '../chunks/SecuritySplit_C3Zm8LcA.mjs';
import { a as $$WidgetWrapper, $ as $$FaqAccordion } from '../chunks/FaqAccordion_DHd6Sfjj.mjs';
import { $ as $$CtaBanner } from '../chunks/CtaBanner_CHQ1omhl.mjs';
import 'clsx';
/* empty css                                 */
import { twMerge } from 'tailwind-merge';
export { renderers } from '../renderers.mjs';

const $$HeroDashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hero-dashboard" aria-hidden="true" data-astro-cid-erx5si4d> <!-- ── Floating integration badges ──────────────────────── --> <!-- SAP small — top-left --> <div class="badge badge-sm float-1" style="top:4%;left:8%" data-astro-cid-erx5si4d> <div class="badge-inner bg-white" data-astro-cid-erx5si4d> <img src="/uploads/logo/iot-integration.png" alt="IoT logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> </div> <!-- Epicor — top-center --> <div class="badge badge-lg float-2" style="top:1%;left:40%" data-astro-cid-erx5si4d> <div class="badge-inner bg-white" data-astro-cid-erx5si4d> <img src="/uploads/logo/epicore-integration-with-upbuff-crm.png" alt="Epicor logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> </div> <!-- Zoho — top-right --> <div class="badge badge-lg float-3" style="top:5%;right:6%" data-astro-cid-erx5si4d> <div class="badge-inner bg-white" data-astro-cid-erx5si4d> <img src="/uploads/logo/zoho-integration-with-upbuff-crm.png" alt="Zoho logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> </div> <!-- SAP S/4HANA — mid-left large --> <div class="badge badge-xl float-4" style="top:38%;left:0%" data-astro-cid-erx5si4d> <div class="badge-inner bg-white" data-astro-cid-erx5si4d> <div class="flex flex-col items-center justify-center gap-0" data-astro-cid-erx5si4d> <img src="/uploads/logo/sap-s4-hanna-integration-with-upbuff-crm.png" alt="SAP S/4HANA logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> </div> </div> <!-- WhatsApp — bottom-left --> <div class="badge badge-sm float-5" style="bottom:12%;left:7%" data-astro-cid-erx5si4d> <img src="/uploads/logo/whatsapp-integration-with-upbuff-crm.png" alt="WhatsApp logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> <!-- SAP Business One — bottom-center --> <div class="badge badge-xl float-6" style="bottom:5%;left:37%" data-astro-cid-erx5si4d> <div class="badge-inner bg-white" data-astro-cid-erx5si4d> <div class="text-center" data-astro-cid-erx5si4d> <img src="/uploads/logo/sap-integration-with-upbuff-crm.png" alt="SAP BusinessOne logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> </div> </div> <!-- Oracle — bottom-right --> <div class="badge badge-lg float-7" style="bottom:9%;right:3%" data-astro-cid-erx5si4d> <div class="badge-inner bg-white" data-astro-cid-erx5si4d> <img src="/uploads/logo/oracle-integration-with-upbuff-crm.png" alt="Oracle logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> </div> <!-- Google Calendar — bottom-center-left small --> <div class="badge badge-sm float-8" style="bottom:4%;left:22%" data-astro-cid-erx5si4d> <div class="badge-inner bg-white" data-astro-cid-erx5si4d> <img src="/uploads/logo/calendar-integration-with-upbuff-crm.png" alt="Google Calendar logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> </div> <!-- Gmail — bottom-right small --> <div class="badge badge-sm float-9" style="bottom:4%;right:22%" data-astro-cid-erx5si4d> <div class="badge-inner bg-white" data-astro-cid-erx5si4d> <img src="/uploads/logo/voip-integration-with-upbuff-crm.png" alt="VoIP logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> </div> <!-- ── Main dashboard card ───────────────────────────────── --> <div class="dashboard-card" data-astro-cid-erx5si4d> <!-- Sales bar chart panel --> <div class="panel panel-main" data-astro-cid-erx5si4d> <div class="panel-header" data-astro-cid-erx5si4d> <span class="panel-title" data-astro-cid-erx5si4d>Sales</span> <div class="panel-tabs" data-astro-cid-erx5si4d> <span class="tab active" data-astro-cid-erx5si4d>Monthly</span> <span class="tab" data-astro-cid-erx5si4d>Quarterly</span> </div> </div> <!-- Bar chart --> <div class="bar-chart" data-astro-cid-erx5si4d> <div class="bars" data-astro-cid-erx5si4d> <div class="bar-group" style="--d:0s" data-astro-cid-erx5si4d> <div class="bar bar-1" style="--h:45%" data-astro-cid-erx5si4d></div> <div class="bar bar-2" style="--h:30%" data-astro-cid-erx5si4d></div> </div> <div class="bar-group" style="--d:0.15s" data-astro-cid-erx5si4d> <div class="bar bar-1" style="--h:60%" data-astro-cid-erx5si4d></div> <div class="bar bar-2" style="--h:40%" data-astro-cid-erx5si4d></div> </div> <div class="bar-group" style="--d:0.3s" data-astro-cid-erx5si4d> <div class="bar bar-1" style="--h:50%" data-astro-cid-erx5si4d></div> <div class="bar bar-2" style="--h:35%" data-astro-cid-erx5si4d></div> </div> <div class="bar-group" style="--d:0.45s" data-astro-cid-erx5si4d> <div class="bar bar-1" style="--h:80%" data-astro-cid-erx5si4d></div> <div class="bar bar-2" style="--h:55%" data-astro-cid-erx5si4d></div> </div> <div class="bar-group" style="--d:0.6s" data-astro-cid-erx5si4d> <div class="bar bar-1" style="--h:65%" data-astro-cid-erx5si4d></div> <div class="bar bar-2" style="--h:45%" data-astro-cid-erx5si4d></div> </div> <div class="bar-group" style="--d:0.75s" data-astro-cid-erx5si4d> <div class="bar bar-1" style="--h:90%" data-astro-cid-erx5si4d></div> <div class="bar bar-2" style="--h:60%" data-astro-cid-erx5si4d></div> </div> <div class="bar-group" style="--d:0.9s" data-astro-cid-erx5si4d> <div class="bar bar-1" style="--h:70%" data-astro-cid-erx5si4d></div> <div class="bar bar-2" style="--h:50%" data-astro-cid-erx5si4d></div> </div> </div> <div class="bar-labels" data-astro-cid-erx5si4d> <span data-astro-cid-erx5si4d>Jan</span><span data-astro-cid-erx5si4d>Feb</span><span data-astro-cid-erx5si4d>Mar</span><span data-astro-cid-erx5si4d>Apr</span><span data-astro-cid-erx5si4d>May</span><span data-astro-cid-erx5si4d>Jun</span><span data-astro-cid-erx5si4d>Jul</span> </div> </div> <!-- Top products table --> <div class="table-section" data-astro-cid-erx5si4d> <div class="table-header" data-astro-cid-erx5si4d> <span data-astro-cid-erx5si4d>Top Products by <span class="text-blue-600" data-astro-cid-erx5si4d>Sales</span></span> <span data-astro-cid-erx5si4d>by <span class="text-blue-600" data-astro-cid-erx5si4d>Volume</span></span> <span class="text-gray-400" data-astro-cid-erx5si4d>⋮</span> </div> <div class="table-row row-in" data-astro-cid-erx5si4d><span class="row-name" data-astro-cid-erx5si4d>ERP-CRM Module</span><span class="row-val text-green-600" data-astro-cid-erx5si4d>124k</span><span class="row-badge green" data-astro-cid-erx5si4d>+12.4%</span></div> <div class="table-row row-in" style="animation-delay:.15s" data-astro-cid-erx5si4d><span class="row-name" data-astro-cid-erx5si4d>Field Service</span><span class="row-val text-gray-700" data-astro-cid-erx5si4d>74.9k</span><span class="row-badge red" data-astro-cid-erx5si4d>-8.5%</span></div> <div class="table-row row-in" style="animation-delay:.3s" data-astro-cid-erx5si4d><span class="row-name" data-astro-cid-erx5si4d>Warehouse Mgmt</span><span class="row-val text-green-600" data-astro-cid-erx5si4d>52.1k</span><span class="row-badge green" data-astro-cid-erx5si4d>+62.6%</span></div> </div> </div> <!-- Spinner panel (centre-right) --> <div class="panel panel-spinner" data-astro-cid-erx5si4d> <div class="spinner-wrap" data-astro-cid-erx5si4d> <div class="spinner" data-astro-cid-erx5si4d></div> <div class="spinner-inner" data-astro-cid-erx5si4d></div> <span class="spinner-label" data-astro-cid-erx5si4d>Syncing<br data-astro-cid-erx5si4d>ERP</span> </div> <p class="spinner-sub" data-astro-cid-erx5si4d>Real-time sync</p> </div> </div> <!-- ── Stocks card (floating right) ─────────────────────── --> <div class="stocks-card float-stocks" data-astro-cid-erx5si4d> <div class="stocks-header" data-astro-cid-erx5si4d> <span class="stocks-title" data-astro-cid-erx5si4d>Stocks Today</span> <div class="stocks-accent badge" data-astro-cid-erx5si4d> <img src="/uploads/logo/power-bi-integration-with-upbuff-crm.png" alt="WhatsApp logo" class="w-16 h-auto" data-astro-cid-erx5si4d> </div> </div> <div class="stocks-sub" data-astro-cid-erx5si4d><span class="text-gray-400 text-[10px]" data-astro-cid-erx5si4d>By Trend</span></div> <!-- Donut chart — 3 segments, each continuously animating --> <div class="donut-wrap" data-astro-cid-erx5si4d> <svg class="donut" viewBox="0 0 80 80" data-astro-cid-erx5si4d> <circle class="donut-track" cx="40" cy="40" r="28" fill="none" stroke="#f3f4f6" stroke-width="12" data-astro-cid-erx5si4d></circle> <circle class="donut-green" cx="40" cy="40" r="28" fill="none" stroke="#22c55e" stroke-width="12" stroke-linecap="round" transform="rotate(-90 40 40)" data-astro-cid-erx5si4d></circle> <circle class="donut-red" cx="40" cy="40" r="28" fill="none" stroke="#ef4444" stroke-width="12" stroke-linecap="round" transform="rotate(-90 40 40)" data-astro-cid-erx5si4d></circle> <circle class="donut-blue" cx="40" cy="40" r="28" fill="none" stroke="#3b82f6" stroke-width="12" stroke-linecap="round" transform="rotate(-90 40 40)" data-astro-cid-erx5si4d></circle> </svg> </div> <div class="legend" data-astro-cid-erx5si4d> <div class="legend-row" data-astro-cid-erx5si4d><span class="dot bg-green-500" data-astro-cid-erx5si4d></span><span data-astro-cid-erx5si4d>In Stock</span><span class="ml-auto font-semibold" data-astro-cid-erx5si4d>500 Units</span></div> <div class="legend-row" data-astro-cid-erx5si4d><span class="dot bg-red-500" data-astro-cid-erx5si4d></span><span data-astro-cid-erx5si4d>Out of Stock</span><span class="ml-auto font-semibold" data-astro-cid-erx5si4d>50</span></div> <div class="legend-row" data-astro-cid-erx5si4d><span class="dot bg-blue-500" data-astro-cid-erx5si4d></span><span data-astro-cid-erx5si4d>Low Stock</span><span class="ml-auto font-semibold" data-astro-cid-erx5si4d>6</span></div> </div> </div> </div> `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/HeroDashboard.astro", void 0);

const $$Astro$2 = createAstro("https://upbuff-site.vercel.app");
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items = [], classes = {}, defaultIcon } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700"
  } = classes;
  return renderTemplate`${items && items.length > 0 && renderTemplate`${maybeRenderHead()}<div${addAttribute(containerClass, "class")}>${items.map(({ title, description, icon, classes: itemClasses = {} }, index = 0) => renderTemplate`<div${addAttribute(twMerge(
    "flex intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
    panelClass,
    itemClasses?.panel
  ), "class")}><div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"><div><div class="flex items-center justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-10 h-10 p-2 rounded-full border-2", defaultIconClass, itemClasses?.icon) })}`}</div></div>${index !== items.length - 1 && renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>`}</div><div${addAttribute(`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`, "class")}>${title && renderTemplate`<p${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${unescapeHTML(title)}</p>`}${description && renderTemplate`<p${addAttribute(twMerge("text-muted mt-2", descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}</div></div>`)}</div>`}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/ui/Timeline.astro", void 0);

const $$Astro$1 = createAstro("https://upbuff-site.vercel.app");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl ",
    subtitle: subtitleClass = "text-xl"
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge("font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl", titleClass), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("mt-4 text-muted", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/ui/Headline.astro", void 0);

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Steps;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    image = await Astro2.slots.render("image"),
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "flex flex-col gap-8 md:gap-12",
    { "md:flex-row-reverse": isReversed },
    { "md:flex-row": image }
  ], "class:list")}> <!-- Content --> <div${addAttribute([
    "md:py-4 md:self-center",
    { "md:basis-1/2": image },
    { "w-full": !image }
  ], "class:list")}> <!-- ✅ Enterprise Tagline --> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-5"> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0"></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${unescapeHTML(tagline)}</span> </div>`} <!-- ✅ Updated Headline --> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "classes": {
    container: "text-left rtl:text-right",
    title: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
    subtitle: "mt-4 text-muted text-base md:text-lg dark:text-slate-400",
    ...classes?.headline ?? {}
  } })} <!-- ✅ Better spacing --> <div class="mt-6"> ${renderComponent($$result2, "Timeline", $$Timeline, { "items": items, "classes": classes?.items })} </div> </div> <!-- ❗ Image section unchanged --> ${image && renderTemplate`<div class="md:basis-1/2 flex items-center"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "inset-0 object-cover object-center w-full", "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "width": 432, "height": 768, "layout": "cover", "src": image?.src, "alt": image?.alt || "" })}`} </div>`} </div> ` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/Steps.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "UpBuff Technologies | ERP Execution Platform for SAP & Enterprise ERP",
    ignoreTitleTemplate: true,
    description: "UpBuff Technologies is an ERP-integrated execution platform extending SAP Business One, Oracle, and Epicor into sales, field service, warehouse, and manufacturing operations without modifying your ERP core.",
    canonical: "https://www.upbuff.com/",
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: "https://www.upbuff.com/",
      title: "UpBuff Technologies | ERP Execution Platform for SAP & Enterprise ERP",
      description: "Extend SAP Business One, Oracle, and Epicor into real-time execution across sales, field service, warehouse, and manufacturing operations\u2014without modifying your ERP core.",
      image: "https://www.upbuff.com/assets/og-image.jpg"
    },
    twitter: {
      cardType: "summary_large_image",
      title: "UpBuff Technologies | ERP Execution Platform for SAP & Enterprise ERP",
      description: "ERP-integrated execution platform for SAP Business One and enterprise ERP systems.",
      image: "https://www.upbuff.com/assets/og-image.jpg"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata, "headerTheme": "black" }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`      ${maybeRenderHead()}<section class="relative not-prose md:-mt-[76px] bg-[#0a0a0a] text-white overflow-hidden"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none" aria-hidden="true" style="background:radial-gradient(ellipse at 50% 0%,rgba(99,102,241,0.15) 0%,transparent 70%);"></div> <div class="absolute inset-0 pointer-events-none noise-overlay opacity-20" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-16 md:py-24 lg:py-28 flex flex-col items-center text-center"> <!-- Headline --> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight tracking-tight font-heading mb-6 max-w-4xl">
The ERP Execution Platform Built for SAP & Enterprise ERPs
</h1> <!-- Subtitle --> <p class="text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl mb-2">
Extend SAP, Oracle, and Epicor into real time execution across sales, field service, warehouse, manufacturing, and partner
          operations — without modifying your ERP core.
</p> <p class="text-sm text-white/35 mb-7">
ERP remains the system of record. UpBuff acts as the execution layer — enabling real-time execution across your operations.
</p> <!-- CTAs --> <div class="flex flex-wrap items-center justify-center gap-3 mb-14"> <a href="request-demo" class="btn-primary inline-flex items-center gap-2">
Schedule a Demo
<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg> </a> <button id="hero-video-btn" class="btn-secondary inline-flex items-center gap-2 cursor-pointer">
Watch Video
</button> </div> <!-- Dashboard image --> <div class="w-full max-w-5xl"> ${renderComponent($$result2, "HeroDashboard", $$HeroDashboard, {})} </div> <!-- Logo strip --> <div class="w-full max-w-6xl pt-10"> <p class="text-sm font-regular text-white/40 mb-8">
Powering execution across leading enterprise
</p> <div class="flex flex-wrap items-center justify-center gap-6 md:gap-9"> ${[
    { src: "/uploads/ideaForge-logo.svg", alt: "ideaForge logo" },
    { src: "/uploads/jnk-chemdist-logo.svg", alt: "jnk chemdist logo" },
    { src: "/uploads/molygraph-logo.svg", alt: "molygraph logo" },
    { src: "/uploads/ncc-streetscape-logo.svg", alt: "ncc streetscape logo" },
    { src: "/uploads/roofsol-logo.svg", alt: "roofsol logo" },
    { src: "/uploads/the-wine-source-logo.svg", alt: "the wine source logo" }
  ].map((logo) => renderTemplate`<img${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} class="h-4 w-auto object-contain opacity-40 grayscale brightness-200 hover:opacity-70 transition-opacity duration-200" loading="lazy">`)} </div> </div> </div> </div> </section>  ${renderComponent($$result2, "FeaturesCarousel", $$FeaturesCarousel, { "id": "products", "tagline": "Our Products", "title": "ERP-integrated products for enterprise operations", "subtitle": "Each product acts as part of the UpBuff ERP Execution Layer \u2014 extending ERP workflows into real-time execution environments without modifying ERP core.", "items": [
    {
      title: "ERP-Integrated CRM",
      href: "/products/erp-integrated-crm",
      description: "Synchronize sales opportunities, quotations, pricing, credit limits, and customer master data directly with SAP and enterprise ERP systems. Eliminate duplicate entry, improve sales visibility, and enable field reps to create ERP-governed orders from mobile devices \u2014 online or offline. As part of the UpBuff ERP Execution Layer, sales activities are executed in real time while ERP remains the system of record.",
      image: '<img src="/uploads/modular-crm-software-for-small-and-mid-sized-businesses.png" class="w-full h-full object-contain" alt="ERP-Integrated CRM for SAP Business One and enterprise ERP" loading="lazy" />'
    },
    {
      title: "ERP-Integrated Field Service Management",
      href: "/products/erp-integrated-fsm",
      description: "Manage work orders, assets, warranties, and technician workflows with mobile execution connected to ERP financial and service modules. Real-time work order dispatch, offline job capture, spare parts tracking, and automated SAP updates \u2014 without modifying ERP core. Within the UpBuff ERP Execution Layer, service operations run in real time, while ERP continues to serve as the system of record.",
      image: '<img src="/uploads/ERP-Integrated-Field-Service-Management.png" class="w-full h-full object-contain" alt="ERP-Integrated Field Service Management for SAP" loading="lazy" />'
    },
    {
      title: "Warehouse & Inventory",
      href: "/products/erp-integrated-warehouse-inventory",
      description: "Mobile inventory audits, goods receipt, inter-warehouse transfers, and batch tracking with real-time ERP synchronization. Barcode and QR scanning, bin-level control, and automated stock reconciliation keep warehouse operations accurate and audit-ready at every stage. With the UpBuff ERP Execution Layer, inventory movements are executed in real time, with ERP maintained as the system of record.",
      image: '<img src="/uploads/SAP-Integrated-Warehouse-Inventory-Management.png" class="w-full h-full object-contain" alt="SAP Integrated Warehouse Inventory Management" loading="lazy" />'
    },
    {
      title: "Sales & Distribution Execution",
      href: "/products/erp-integrated-sales-distribution",
      description: "Route-to-market with ERP-integrated order booking, van sales POS, distributor management, and secondary sales visibility. Field reps capture orders, collections, and returns on mobile \u2014 synced instantly to ERP without manual re-entry or data lag.",
      image: '<img src="/uploads/SAP-Businessone-Integrated-Sales-Distribution-excecution.png" class="w-full h-full object-contain" alt="SAP Businessone Integrated Sales Distribution excecution" loading="lazy" />'
    },
    {
      title: "Manufacturing & Shopfloor",
      href: "/products/erp-integrated-manufacturing-shopfloor",
      description: "Production updates, maintenance records, and operational data at the shopfloor while preserving ERP as the financial backbone. Capture production completions, downtime events, quality checks, and material consumption in real time \u2014 feeding directly into ERP without manual intervention.",
      image: '<img src="/uploads/Epicore-Integrated-Manufacturing-Shopfloor.png" class="w-full h-full object-contain" alt="Epicore Integrated Manufacturing Shopfloor" loading="lazy" />'
    },
    {
      title: "Enterprise & Partner Portals",
      href: "/products/enterprise-partner-portals",
      description: "Secure digital portals for suppliers, dealers, and partners \u2014 connected directly to ERP master data and transactional workflows. Vendors submit invoices, dealers place orders, and distributors track deliveries through branded self-service portals with live ERP data behind every interaction.",
      image: '<img src="/uploads/Oracle-integrated-Enterprise-Partner-Portals.png" class="w-full h-full object-contain" alt="Oracle integrated Enterprise Partner Portals" loading="lazy" />'
    },
    {
      title: "ERP-Integrated Product Configurator",
      href: "/products/erp-integrated-product-configurator",
      description: "Configure products, pricing, and variants in real time with seamless ERP and SAP integration. Sales teams build accurate, rule-driven quotes with ERP-validated pricing, BOMs, and availability \u2014 eliminating configuration errors before orders ever reach production.",
      image: '<img src="/uploads/ERP-integrated-product-configurator.png" class="w-full h-full object-contain" alt="ERP Integrated Product Configurator for SAP and enterprise ERP systems" loading="lazy" />'
    },
    {
      title: "Asset Tracking System",
      href: "/products/asset-tracking-system",
      description: "Real-time asset visibility, IoT-enabled preventive maintenance, barcode/QR/RFID lifecycle management, and audit automation \u2014 integrated with SAP Business One, SAP S/4HANA, Oracle, and Epicor without modifying ERP core. Track every asset from procurement to disposal with full depreciation, compliance, and maintenance history.",
      image: '<img src="/uploads/manufacturing-asset-tracking.png" class="w-full h-full object-contain" alt="UpBuff Asset Tracking System \u2014 IoT preventive maintenance and barcode QR RFID lifecycle management" loading="lazy" />'
    }
  ] })}  ${renderComponent($$result2, "ContentSplitCard", $$ContentSplitCard, { "tagline": "ERP & Platform Integrations", "title": "Seamless ERP connectivity \u2014 agnostic by design", "cardTitle": "UpBuff integrates with every major enterprise ERP platform", "cardDescription": "UpBuff acts as an ERP Execution Layer \u2014 integrating with SAP, Oracle, and Epicor using secure, API-first connectivity. SAP Business One via Service Layer, SAP S/4HANA via OData and RFC, Oracle ERP via REST, and Epicor via flexible API connectivity. No direct database writes. No core modifications. ERP governance preserved at every layer.", "cardImage": "/uploads/upbuff-ERP-CRM-integrations-for-WhatsApp-Tally-Shopify-SAP.png", "cardGradient": "linear-gradient(135deg, #1d4ed8 0%, #0891b2 50%, #0f766e 100%)", "testimonial": {
    quote: "Switching from Oracle e-Business Suite to SAP B1 with UpBuff was a great decision, as they delivered mobile and web solutions connecting our van sales, warehouses, and suppliers in real time. Their expertise in ZRA e-invoicing and SAP integration significantly improved our operational efficiency.",
    name: "Kamlesh Mistry",
    company: "CTO, Gourock Zambia Ltd",
    avatar: "/uploads/gaurock-client.png"
  }, "features": [
    {
      icon: "tabler:building-store",
      title: "SAP Business One & S/4HANA",
      description: "Native integration via Service Layer, OData, BAPI, and RFC \u2014 Clean Core compliant."
    },
    {
      icon: "tabler:plug-connected",
      title: "Oracle, Epicor & Custom ERP",
      description: "Flexible REST and SOAP connectivity for Oracle, Epicor, and legacy ERP systems."
    },
    {
      icon: "tabler:apps",
      title: "WhatsApp, Shopify & 100+ tools",
      description: "Connect ERP with communication platforms, marketplaces, and enterprise applications."
    }
  ] })}  ${renderComponent($$result2, "ToolsMarquee", $$ToolsMarquee, { "title": "Connects your ERP to your entire business ecosystem", "description": "UpBuff bridges SAP, Oracle, and Epicor with the communication platforms, marketplaces, and enterprise applications your teams already rely on \u2014 creating a connected digital enterprise without silos.", "speed": 30, "tools": [
    { name: "Calendar", logo: '<img src="/uploads/logo/calendar-integration-with-upbuff-crm.png" alt="Calendar integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "Epicor", logo: '<img src="/uploads/logo/epicore-integration-with-upbuff-crm.png" alt="Epicor integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "SAP", logo: '<img src="/uploads/logo/sap-integration-with-upbuff-crm.png" alt="SAP integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "Gmail", logo: '<img src="/uploads/logo/gmail-integration-with-upbuff-crm.png" alt="Gmail integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "IoT", logo: '<img src="/uploads/logo/iot-integration.png" alt="IoT integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "SAP S/4HANA", logo: '<img src="/uploads/logo/sap-integration-with-upbuff-crm.png" alt="SAP S/4HANA integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "Oracle", logo: '<img src="/uploads/logo/oracle-integration-with-upbuff-crm.png" alt="Oracle integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "Outlook", logo: '<img src="/uploads/logo/outlook-integration-with-upbuff-crm.png" alt="Outlook integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "Power BI", logo: '<img src="/uploads/logo/power-bi-integration-with-upbuff-crm.png" alt="Power BI integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "SAP Business One", logo: '<img src="/uploads/logo/sap-integration-with-upbuff-crm.png" alt="SAP Business One integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "SMS", logo: '<img src="/uploads/logo/sms-integration-with-upbuff-crm.png" alt="SMS integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "VoIP", logo: '<img src="/uploads/logo/voip-integration-with-upbuff-crm.png" alt="VoIP integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "WhatsApp", logo: '<img src="/uploads/logo/whatsapp-integration-with-upbuff-crm.png" alt="WhatsApp integration with UpBuff CRM" class="w-10 h-10 object-contain" />' },
    { name: "Zoho", logo: '<img src="/uploads/logo/zoho-integration-with-upbuff-crm.png" alt="Zoho integration with UpBuff CRM" class="w-10 h-10 object-contain" />' }
  ] })}  ${renderComponent($$result2, "FeaturesCarousel", $$FeaturesCarousel, { "tagline": "Value Proposition", "title": "Why UpBuff for SAP & enterprise ERP customers", "subtitle": "Designed to extend ERP into execution \u2014 without disruption to your core system, upgrade roadmap, or compliance posture.", "items": [
    {
      gradient: "linear-gradient(135deg, #1d4ed8 0%, #6366f1 100%)",
      badge: "No heavy customization",
      title: "Extend SAP without modifying ERP core",
      description: "Leverage your existing ERP investment without complex modifications to the core system. UpBuff connects via official APIs \u2014 protecting your upgrade path and long-term ERP roadmap while delivering full execution capability to frontline teams.",
      image: '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-black opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>'
    },
    {
      gradient: "linear-gradient(135deg, #0f766e 0%, #16a34a 100%)",
      badge: "Frontline ERP adoption",
      title: "Improve frontline ERP adoption with mobile-first interfaces",
      description: "Mobile-first execution tools make ERP data accessible and actionable for field teams, warehouse operators, and production supervisors \u2014 replacing paper-based and offline workflows with real-time ERP-synchronized execution.",
      image: '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-black opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01M9 7h6M9 11h6M9 15h3"/></svg></div>'
    },
    {
      gradient: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
      badge: "Digital transformation",
      title: "Accelerate enterprise digital transformation",
      description: "Fast-track your enterprise digitisation initiatives with pre-built ERP execution workflows for sales, field service, warehouse, and manufacturing. Go live in weeks \u2014 not months \u2014 without disrupting existing ERP operations.",
      image: '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-black opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div>'
    },
    {
      gradient: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
      badge: "ERP ROI optimization",
      title: "Maximize SAP ERP ROI and reduce operational costs",
      description: "Improve return on investment from SAP and enterprise ERP systems by eliminating manual processes, reducing custom development costs, and streamlining operations. UpBuff enhances ERP efficiency while minimizing implementation and maintenance overhead.",
      image: '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-black opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg></div>'
    },
    {
      gradient: "linear-gradient(135deg, #1e293b 0%, #4f46e5 100%)",
      badge: "ERP governance & compliance",
      title: "Ensure ERP data governance, security, and compliance",
      description: "Maintain enterprise-grade governance across SAP and ERP operations with role-based access control, audit trails, and approval workflows. UpBuff ensures secure, compliant execution aligned with enterprise IT policies and regulatory requirements.",
      image: '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-black opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>'
    }
  ] })}  ${renderComponent($$result2, "FeaturesGrid", $$FeaturesGrid, { "id": "compliance", "tagline": "Built for Enterprise Control", "title": "Security, compliance & audit readiness", "subtitle": "Enterprise SAP and ERP customers demand governance. UpBuff delivers execution without compromising compliance.", "items": [
    {
      icon: "tabler:lock",
      title: "Role-Based Security",
      description: "Granular user access control aligned with ERP roles and approval hierarchies \u2014 mapped directly to your SAP or Oracle governance model."
    },
    {
      icon: "tabler:file-search",
      title: "Comprehensive Audit Logs",
      description: "Track user actions, document changes, and financial workflows across all execution layers with full timestamp and user attribution."
    },
    {
      icon: "tabler:git-merge",
      title: "Approval & Workflow Management",
      description: "Customizable multi-level approvals integrated with ERP business logic \u2014 credit checks, pricing validations, and authorization workflows."
    },
    {
      icon: "tabler:file-certificate",
      title: "Document Traceability",
      description: "Complete lifecycle tracking for sales, service, inventory, and financial documents \u2014 from field capture to ERP posting."
    },
    {
      icon: "tabler:receipt",
      title: "Global E-Invoicing Compliance",
      description: "Support for India GST, ZATCA (Saudi Arabia), ZRA (Zambia), and regional compliance frameworks built into execution workflows."
    },
    {
      icon: "tabler:database-export",
      title: "Enterprise Data Integrity",
      description: "Secure ERP data synchronization ensuring consistency across branches, subsidiaries, and multi-country enterprise deployments."
    }
  ] })}  ${renderComponent($$result2, "Steps", $$Steps, { "tagline": "How It Works", "title": "How UpBuff Extends Your ERP", "items": [
    {
      title: 'Step 1: <span class="font-medium">ERP Assessment</span>',
      description: "We analyze your SAP or ERP workflows, integration points, and operational gaps to design the optimal execution layer for your enterprise.",
      icon: "tabler:search"
    },
    {
      title: 'Step 2: <span class="font-medium">Execution Layer Deployment</span>',
      description: "UpBuff connects using secure APIs and service layers without altering ERP core logic \u2014 ensuring zero disruption to your existing systems.",
      icon: "tabler:plug-connected"
    },
    {
      title: 'Step 3: <span class="font-medium">Controlled Rollout</span>',
      description: "Mobile, warehouse, and execution teams are onboarded with governance controls intact \u2014 ensuring compliance from day one.",
      icon: "tabler:users"
    },
    {
      title: "Ready to modernize ERP execution!",
      icon: "tabler:check"
    }
  ], "image": {
    src: "/uploads/UpBuff-ERP-Extension-Process.png",
    alt: "UpBuff ERP Extension Process"
  } })}  ${renderComponent($$result2, "TestimonialsGrid", $$TestimonialsGrid, { "title": "What enterprise teams say", "subtitle": "Trusted by leading SAP Business One customers, Oracle enterprises, and field service organizations worldwide", "row1": [
    {
      company: "Fareast Mercantile Co. Ltd",
      logo: "/uploads/FareastMercantile.png",
      avatar: "/uploads/Raja Mohammed-GM-Fareast-Mercantile.png",
      quote: "We struggled with limited visibility into sub-distributor sales, customers, and pricing, but the solution transformed our operations with real-time insights and centralized control. It brought transparency, pricing consistency, and a scalable platform tailored to our business.",
      name: "Raja Mohammed",
      role: "GM, Fareast Mercantile Co. Ltd "
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
    label: "enterprise users on the UpBuff execution platform",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 50%, #0f766e 100%)"
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
  ] })}  ${renderComponent($$result2, "SecuritySplit", $$SecuritySplit, { "tagline": "Enterprise Security", "title": "Built on enterprise principles \u2014<br />security, compliance & ERP integrity", "subtitle": "Our values guide how we design, build, and deliver ERP execution solutions. ERP-centric thinking, operational precision, and continuous innovation \u2014 ensuring enterprise-grade security and compliance at every layer.", "features": [
    {
      title: "ERP-centric thinking",
      description: "We respect ERP as the system of record and design execution solutions that extend \u2014 not disrupt \u2014 enterprise governance. Every API call, every transaction, every workflow is governed by ERP rules.",
      illustration: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 72" class="w-20 h-16" fill="none"><ellipse cx="40" cy="16" rx="28" ry="10" stroke="url(#db6)" stroke-width="2.5"/><path d="M12 16v20c0 5.523 12.536 10 28 10s28-4.477 28-10V16" stroke="url(#db6)" stroke-width="2.5"/><path d="M12 36v16c0 5.523 12.536 10 28 10s28-4.477 28-10V36" stroke="url(#db6)" stroke-width="2.5"/><circle cx="40" cy="38" r="3" fill="#1d4ed8"/><defs><linearGradient id="db6" x1="12" y1="0" x2="68" y2="72" gradientUnits="userSpaceOnUse"><stop stop-color="#1d4ed8"/><stop offset="1" stop-color="#0891b2"/></linearGradient></defs></svg>'
    },
    {
      title: "Operational precision",
      description: "Execution workflows are engineered to reflect real-world operational complexity with structured ERP alignment. No shortcuts \u2014 every integration point is validated, tested, and audit-ready.",
      illustration: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="w-20 h-16" fill="none"><rect x="20" y="36" width="40" height="30" rx="6" stroke="url(#lk6)" stroke-width="2.5"/><path d="M28 36V26a12 12 0 0124 0v10" stroke="url(#lk6)" stroke-width="2.5" stroke-linecap="round"/><circle cx="40" cy="52" r="4" fill="#22c55e"/><defs><linearGradient id="lk6" x1="20" y1="10" x2="60" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="#22c55e"/><stop offset="1" stop-color="#0f766e"/></linearGradient></defs></svg>'
    },
    {
      title: "Continuous ERP innovation",
      description: "We evolve with SAP, Oracle, and enterprise technology landscapes to keep execution future-ready. As ERP platforms release new APIs and capabilities, UpBuff integrations stay current and upgrade-safe.",
      illustration: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="w-20 h-16" fill="none"><rect x="14" y="14" width="52" height="52" rx="8" stroke="url(#bx6)" stroke-width="2.5"/><path d="M26 40h28M26 52h18M26 28h28" stroke="url(#bx6)" stroke-width="2" stroke-linecap="round"/><defs><linearGradient id="bx6" x1="14" y1="14" x2="66" y2="66" gradientUnits="userSpaceOnUse"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs></svg>'
    }
  ] })}  ${renderComponent($$result2, "FeaturesHighlights", $$FeaturesHighlights, { "tagline": "Why UpBuff", "title": "Why enterprises choose UpBuff", "subtitle": "Enterprise ERP systems are powerful \u2014 but they were not designed for real-time frontline execution.UpBuff bridges the gap between ERP systems and real-time execution as an execution layer \u2014 without modifying ERP core.", "items": [
    {
      title: "ERP-First Architecture",
      description: "Built natively around SAP Business One, Oracle ERP, and Epicor. Real-time synchronization using secure ERP APIs \u2014 SAP Service Layer, OData, BAPI \u2014 ensures data integrity without core customization or upgrade risk.",
      image: '<div class="flex flex-col items-center justify-center gap-4"><img src="/uploads/erp-first-architecture-upbuff.png" alt="ERP-first architecture integrating SAP Business One, Oracle ERP, and Epicor with real-time API synchronization" class="max-h-[180px] w-auto object-contain"/><p class="text-sm font-semibold text-gray-800 text-center">SAP \xB7 Oracle \xB7 Epicor</p><p class="text-xs text-blue-600 text-center">No core modification \xB7 API-native</p></div>'
    },
    {
      title: "Real-Time Frontline Mobility",
      description: "Mobile-first applications for sales reps, field engineers, warehouse teams, and distributors connected directly to ERP master data \u2014 online or offline \u2014 with automatic synchronization.",
      image: '<div class="flex flex-col items-center justify-center gap-4"><img src="/uploads/real-time-update.png" alt="Real-time ERP mobility solution for sales, field service, warehouse, and shopfloor teams with offline and online synchronization" class="max-h-[180px] w-auto object-contain"/><p class="text-sm font-semibold text-gray-800 text-center">Sales \xB7 Field \xB7 Warehouse \xB7 Shopfloor</p><p class="text-xs text-green-600 text-center">Offline-capable \xB7 Real-time sync</p></div>'
    },
    {
      title: "Data Integrity & Governance",
      description: "Role-based access control, audit logs, and approval workflows ensure enterprise compliance across multi-entity operations. ERP governance intact at every execution step.",
      image: '<div class="flex flex-col items-center justify-center gap-4"><img src="/uploads/upbuff-data-integrity-security.png" alt="ERP data integrity and governance with role-based access control, audit logs, and compliance workflows" class="max-h-[180px] w-auto object-contain"/><p class="text-sm font-semibold text-gray-800 text-center">RBAC \xB7 Audit logs \xB7 Approvals</p><p class="text-xs text-gray-500 text-center">SOC 2 \xB7 GDPR \xB7 Compliance-ready</p></div>'
    }
  ] })}  ${renderComponent($$result2, "FaqAccordion", $$FaqAccordion, { "tagline": "FAQs", "title": "Frequently asked questions", "items": [
    {
      question: "What products does UpBuff offer?",
      answer: "UpBuff offers 7 ERP-integrated products: (1) ERP-Integrated CRM, (2) ERP-Integrated Field Service Management, (3) Warehouse & Inventory Management, (4) Sales & Distribution Execution, (5) Manufacturing & Shopfloor, (6) Enterprise & Partner Portals, and (7) ERP-Integrated Product Configurator (8) Asset Tracking System. All products connect to SAP Business One, SAP S/4HANA, Oracle ERP, and Epicor via official APIs without modifying ERP core."
    },
    {
      question: "What is an ERP Execution Platform?",
      answer: "An ERP Execution Platform extends systems like SAP Business One or Oracle ERP into frontline operations \u2014 sales, field service, warehouse, and manufacturing \u2014 while preserving ERP as the system of record. UpBuff handles real-time execution and synchronizes outcomes back to ERP via official APIs."
    },
    {
      question: "Does UpBuff replace SAP or Oracle ERP?",
      answer: "No. UpBuff integrates with SAP Business One, Oracle ERP, and Epicor ERP and acts as the execution layer \u2014 ensuring real-time synchronization without modifying ERP core systems. ERP remains the system of record."
    },
    {
      question: "Which ERP systems does UpBuff integrate with?",
      answer: "UpBuff integrates with SAP Business One, SAP S/4HANA, SAP ECC, Oracle ERP, Epicor ERP, and custom ERP systems using secure API-based and ERP-native integration methods including Service Layer, OData, BAPI, and REST."
    },
    {
      question: "How is UpBuff different from standalone CRM or FSM tools?",
      answer: "Unlike standalone applications that operate separately and require manual ERP sync, UpBuff is built ERP-first \u2014 ensuring data integrity, compliance, and real-time synchronization across enterprise workflows at every transaction."
    },
    {
      question: "Is UpBuff suitable for multi-country enterprises?",
      answer: "Yes. UpBuff supports multi-entity operations with compliance-ready workflows, centralized ERP governance, and regional e-invoicing support for India GST, ZATCA (Saudi Arabia), ZRA (Zambia), and other frameworks."
    },
    {
      question: "Can UpBuff integrate with external platforms like Shopify or WhatsApp?",
      answer: "Yes. UpBuff connects ERP systems with WhatsApp Business, Shopify, Salesforce, Zapier, Tally, Unicommerce, IndiaMART, Zoho, and other enterprise applications \u2014 enabling a fully connected digital ecosystem with ERP at the core."
    }
  ] })}  ${renderComponent($$result2, "CtaBanner", $$CtaBanner, { "title": "Ready to modernize ERP execution?", "subtitle": "Extend your SAP, Oracle, or Epicor ERP into real-time execution \u2014 without modifying ERP core. ", "action": {
    text: "Schedule a Consultation",
    href: "/contact",
    variant: "primary"
  }, "note": "No ERP core modifications required" })}  <div id="hero-video-overlay" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300" aria-modal="true" role="dialog" aria-label="Video popup"> <!-- Backdrop --> <div id="hero-video-backdrop" class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div> <!-- Modal --> <div class="relative z-10 w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"> <!-- Close button --> <button id="hero-video-close" class="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors" aria-label="Close video"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg> </button> <!-- YouTube iframe --> <iframe id="hero-video-iframe" src="" class="w-full h-full" frameborder="0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe> </div> </div> ${renderScript($$result2, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/index.astro?astro&type=script&index=0&lang.ts")} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UpBuff Technologies",
    "url": "https://www.upbuff.com",
    "logo": "https://www.upbuff.com/assets/logo.png",
    "description": "UpBuff Technologies is an ERP-integrated execution platform extending SAP Business One, Oracle ERP, and Epicor ERP into frontline enterprise operations.",
    "sameAs": ["https://www.linkedin.com/company/upbuff-technologies"],
    "knowsAbout": [
      "SAP Business One Integration",
      "ERP Execution Platform",
      "ERP Integrated CRM",
      "ERP Integrated Field Service",
      "ERP Integrated Warehouse Management",
      "Enterprise Mobility",
      "ERP Data Synchronization"
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UpBuff Technologies",
    "url": "https://www.upbuff.com/"
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "UpBuff ERP Execution Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Android, iOS",
    "description": "UpBuff is an ERP-integrated execution platform that extends SAP Business One, Oracle ERP, and Epicor into CRM, field service, warehouse, sales, and manufacturing workflows.",
    "offers": { "@type": "Offer", "price": "Contact for pricing", "priceCurrency": "USD" }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "UpBuff Products",
    "description": "UpBuff offers 7 ERP-integrated products that extend SAP, Oracle, and Epicor into frontline enterprise operations without modifying ERP core.",
    "numberOfItems": 7,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ERP-Integrated CRM", "url": "https://www.upbuff.com/products/erp-integrated-crm", "description": "Synchronize sales opportunities, quotations, pricing, credit limits, and customer master data directly with SAP and enterprise ERP systems." },
      { "@type": "ListItem", "position": 2, "name": "ERP-Integrated Field Service Management", "url": "https://www.upbuff.com/products/erp-integrated-fsm", "description": "Manage work orders, assets, warranties, and technician workflows with mobile execution connected to ERP financial and service modules." },
      { "@type": "ListItem", "position": 3, "name": "Warehouse & Inventory Management", "url": "https://www.upbuff.com/products/erp-integrated-warehouse-inventory", "description": "Mobile inventory audits, goods receipt, inter-warehouse transfers, and batch tracking with real-time ERP synchronization." },
      { "@type": "ListItem", "position": 4, "name": "Sales & Distribution Execution", "url": "https://www.upbuff.com/products/erp-integrated-sales-distribution", "description": "Route-to-market with ERP-integrated order booking, van sales POS, distributor management, and secondary sales visibility." },
      { "@type": "ListItem", "position": 5, "name": "Manufacturing & Shopfloor", "url": "https://www.upbuff.com/products/erp-integrated-manufacturing-shopfloor", "description": "Production updates, maintenance records, and operational data at the shopfloor while preserving ERP as the financial backbone." },
      { "@type": "ListItem", "position": 6, "name": "Enterprise & Partner Portals", "url": "https://www.upbuff.com/products/enterprise-partner-portals", "description": "Secure digital portals for suppliers, dealers, and partners connected directly to ERP master data and transactional workflows." },
      { "@type": "ListItem", "position": 7, "name": "ERP-Integrated Product Configurator", "url": "https://www.upbuff.com/products/erp-integrated-product-configurator", "description": "Configure products, pricing, and variants in real time with seamless ERP and SAP integration." }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What products does UpBuff offer?", "acceptedAnswer": { "@type": "Answer", "text": "UpBuff offers 7 ERP-integrated products: ERP-Integrated CRM, ERP-Integrated Field Service Management, Warehouse and Inventory Management, Sales and Distribution Execution, Manufacturing and Shopfloor, Enterprise and Partner Portals, Asset Tracking System, and ERP-Integrated Product Configurator. All connect to SAP Business One, SAP S/4HANA, Oracle ERP, and Epicor via official APIs without ERP core modification." } },
      { "@type": "Question", "name": "What is an ERP Execution Platform?", "acceptedAnswer": { "@type": "Answer", "text": "An ERP Execution Platform extends systems like SAP Business One or Oracle ERP into frontline operations such as sales, field service, warehouse, and manufacturing while preserving ERP as the system of record." } },
      { "@type": "Question", "name": "Does UpBuff replace SAP or Oracle ERP?", "acceptedAnswer": { "@type": "Answer", "text": "No. UpBuff integrates with SAP Business One, Oracle ERP, and Epicor ERP and acts as the execution layer, ensuring real-time synchronization without modifying ERP core systems." } },
      { "@type": "Question", "name": "Which ERP systems does UpBuff integrate with?", "acceptedAnswer": { "@type": "Answer", "text": "UpBuff integrates with SAP Business One, Oracle ERP, Epicor ERP, and custom ERP systems using secure API-based and ERP-native integration methods." } }
    ]
  }))) })}` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/index.astro", void 0);

const $$file = "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
