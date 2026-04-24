import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';
import { c as $$Icon } from './PageLayout_BS2WX63q.mjs';
/* empty css                         */

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stats;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    stats = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg, "data-astro-cid-jmv2s4fh": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mb-10 md:mb-12 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter" data-astro-cid-jmv2s4fh> <!-- Left: tagline pill + title --> <div class="md:w-1/2" data-astro-cid-jmv2s4fh> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-4" data-astro-cid-jmv2s4fh> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0" aria-hidden="true" data-astro-cid-jmv2s4fh></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-jmv2s4fh>${unescapeHTML(tagline)}</span> </div>`} ${title && renderTemplate`<h2 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-heading text-heading dark:text-gray-100" data-astro-cid-jmv2s4fh>${unescapeHTML(title)}</h2>`} </div> <!-- Right: subtitle --> ${subtitle && renderTemplate`<div class="md:w-1/2" data-astro-cid-jmv2s4fh> <p class="text-muted text-base md:text-lg leading-relaxed dark:text-slate-400" data-astro-cid-jmv2s4fh>${unescapeHTML(subtitle)}</p> </div>`} </div>  ${stats.length > 0 && renderTemplate`<div class="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-slate-900 shadow-sm" data-astro-cid-jmv2s4fh> <div${addAttribute([
    "grid grid-cols-1 sm:grid-cols-2 divide-y divide-gray-200 dark:divide-gray-700",
    stats.length >= 3 ? "lg:grid-cols-3" : "",
    stats.length >= 4 ? "xl:grid-cols-4 lg:grid-cols-4" : "",
    stats.length >= 5 ? "xl:grid-cols-5 lg:grid-cols-5" : ""
  ], "class:list")} data-astro-cid-jmv2s4fh> ${stats.map(({ amount, title: statTitle, icon }, i) => renderTemplate`<div class="relative p-8 flex flex-col items-start gap-4 group overflow-hidden intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"${addAttribute(`animation-delay: ${i * 80}ms`, "style")} data-astro-cid-jmv2s4fh> <!-- Subtle gradient accent top-left on hover --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" style="background: radial-gradient(ellipse at 0% 0%, rgba(244,114,182,0.07) 0%, transparent 65%);" data-astro-cid-jmv2s4fh></div> <!-- Icon --> ${icon && renderTemplate`<div class="w-9 h-9 flex items-center justify-center shrink-0" data-astro-cid-jmv2s4fh> <span class="gradient-icon-wrap" data-astro-cid-jmv2s4fh> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-8 h-8", "data-astro-cid-jmv2s4fh": true })} </span> </div>`} <!-- Amount — large gradient number --> ${amount && renderTemplate`<div class="font-heading font-extrabold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl stat-amount" data-astro-cid-jmv2s4fh>${unescapeHTML(amount)}</div>`} <!-- Divider --> <div class="w-8 h-0.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 shrink-0" data-astro-cid-jmv2s4fh></div> <!-- Label --> ${statTitle && renderTemplate`<p class="text-sm font-semibold uppercase tracking-widest text-gray-600 dark:text-slate-400 leading-snug" data-astro-cid-jmv2s4fh> ${statTitle} </p>`} </div>`)} </div> </div>`}` })} <!-- Reuse the same gradient definition from FeaturesGrid --> <svg width="0" height="0" style="position:absolute" data-astro-cid-jmv2s4fh> <defs data-astro-cid-jmv2s4fh> <linearGradient id="stat-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-jmv2s4fh> <stop offset="0%" stop-color="#f472b6" data-astro-cid-jmv2s4fh></stop> <stop offset="100%" stop-color="#a855f7" data-astro-cid-jmv2s4fh></stop> </linearGradient> </defs> </svg> `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/Stats.astro", void 0);

export { $$Stats as $ };
