import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, a as renderTemplate, u as unescapeHTML, r as renderComponent, F as Fragment } from './astro/server_BONdxEiL.mjs';
import { a as $$Button } from './PageLayout_BS2WX63q.mjs';
/* empty css                                       */

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$HeroPanels = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroPanels;
  const {
    tagline,
    title,
    subtitle,
    actions = [],
    panels,
    theme = "dark",
    id
  } = Astro2.props;
  const isDark = theme === "dark";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    "hero-statement relative not-prose md:-mt-[76px] overflow-hidden",
    isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"
  ], "class:list")}${spreadAttributes(id ? { id } : {})} data-astro-cid-o3yrwp6t> <!-- ── Subtle noise texture overlay ──────────────────────── --> <div class="absolute inset-0 pointer-events-none noise-overlay" aria-hidden="true" data-astro-cid-o3yrwp6t></div> <!-- ── Ambient glow ──────────────────────────────────────── --> ${isDark && renderTemplate`<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" aria-hidden="true" style="background: radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.13) 0%, transparent 70%);" data-astro-cid-o3yrwp6t></div>`} <div class="relative max-w-5xl mx-auto px-4 sm:px-6" data-astro-cid-o3yrwp6t> <div class="pt-0 md:pt-[76px] pointer-events-none" data-astro-cid-o3yrwp6t></div> <!-- ── Content area ───────────────────────────────────── --> <div class="pt-16 md:pt-24 pb-10 md:pb-14" data-astro-cid-o3yrwp6t> <!-- Top row: tagline + actions side-by-side on lg --> <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-10" data-astro-cid-o3yrwp6t> <!-- Left: tagline + headline + subtitle --> <div class="max-w-2xl" data-astro-cid-o3yrwp6t> <!-- Tagline pill --> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 dark:bg-slate-800 shadow-sm mb-4" style="animation-delay:0ms" data-astro-cid-o3yrwp6t> <span class="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" aria-hidden="true" data-astro-cid-o3yrwp6t></span> <span${addAttribute(["text-xs font-semibold tracking-wide", isDark ? "text-gray-300" : "text-gray-600"], "class:list")} data-astro-cid-o3yrwp6t>${unescapeHTML(tagline)}</span> </div>`} <!-- Headline --> ${title && renderTemplate`<h1${addAttribute([
    "HeroPanelsTitle text-5xl md:text-6xl lg:text-6xl font-bold leading-none tracking-tight mb-5 font-heading hero-fade",
    isDark ? "text-white" : "text-gray-950"
  ], "class:list")} style="animation-delay:80ms" data-astro-cid-o3yrwp6t>${unescapeHTML(title)}</h1>`} <!-- Subtitle --> ${subtitle && renderTemplate`<p${addAttribute([
    "mt-5 text-base md:text-lg leading-relaxed max-w-xl hero-fade",
    isDark ? "text-gray-400" : "text-gray-500"
  ], "class:list")} style="animation-delay:160ms" data-astro-cid-o3yrwp6t>${unescapeHTML(subtitle)}</p>`} </div> <!-- Right: CTA actions — bottom-aligned via parent lg:items-end --> ${actions.length > 0 && renderTemplate`<div class="flex flex-wrap items-center gap-3 lg:shrink-0 hero-fade" style="animation-delay:220ms" data-astro-cid-o3yrwp6t> ${actions.map((action) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...action, "class:list": [
    action.variant === "primary" ? "hero-cta-primary" : "hero-cta-secondary"
  ], "data-astro-cid-o3yrwp6t": true })}`)} </div>`} </div> <!-- ── Two-panel mockup row ───────────────────────────── --> ${panels && panels.length === 2 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 hero-panels hero-fade" style="animation-delay:300ms" data-astro-cid-o3yrwp6t> ${panels.map((panel, i) => renderTemplate`<div${addAttribute([
    "relative rounded-2xl overflow-hidden",
    "panel-card",
    i === 0 ? "panel-left" : "panel-right"
  ], "class:list")}${addAttribute(panel.accent ? `--panel-accent: ${panel.accent};` : "", "style")} data-astro-cid-o3yrwp6t> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(panel.html)}` })} </div>`)} </div>`} </div> </div> </section> `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/HeroPanels.astro", void 0);

export { $$HeroPanels as $ };
