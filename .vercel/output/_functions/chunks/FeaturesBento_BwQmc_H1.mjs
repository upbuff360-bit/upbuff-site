import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, F as Fragment } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';
import { a as $$Image } from './FeaturesGrid_CwyGxRwy.mjs';
/* empty css                                      */

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$FeaturesBento = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesBento;
  const {
    tagline,
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    items = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  items.filter((i) => i.wide);
  items.filter((i) => !i.wide);
  const rowGroups = [];
  for (const item of items) {
    const type = item.wide ? "wide" : "narrow";
    const last = rowGroups[rowGroups.length - 1];
    if (last && last.type === type) {
      last.items.push(item);
    } else {
      rowGroups.push({ type, items: [item] });
    }
  }
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg, "data-astro-cid-dsdtxlqq": true }, { "default": async ($$result2) => renderTemplate`  ${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div class="mb-10 md:mb-12 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter" data-astro-cid-dsdtxlqq> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-5" data-astro-cid-dsdtxlqq> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0" aria-hidden="true" data-astro-cid-dsdtxlqq></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-dsdtxlqq>${unescapeHTML(tagline)}</span> </div>`} <div class="flex flex-col md:flex-row md:items-start md:gap-12" data-astro-cid-dsdtxlqq> ${title && renderTemplate`<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-heading dark:text-gray-100 font-heading md:w-1/2 shrink-0" data-astro-cid-dsdtxlqq>${unescapeHTML(title)}</h2>`} ${subtitle && renderTemplate`<p class="mt-3 md:mt-1 text-muted text-base md:text-lg dark:text-slate-400 md:w-1/2" data-astro-cid-dsdtxlqq>${unescapeHTML(subtitle)}</p>`} </div> </div>`} ${rowGroups.map((group) => group.type === "wide" ? (
    /* ── Wide row: 2-col grid ─────────────────────────────── */
    renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 first:mt-0" data-astro-cid-dsdtxlqq> ${group.items.map(({ title: t, description, image, href, classes: ic = {} }) => renderTemplate`<div${addAttribute([
      "rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900",
      "overflow-hidden shadow-sm",
      "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
      ic?.panel
    ], "class:list")} data-astro-cid-dsdtxlqq> <div${addAttribute(["relative h-64 dark:bg-slate-800 overflow-hidden flex items-center justify-center", ic?.image], "class:list")} data-astro-cid-dsdtxlqq> ${image && (typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full object-cover", "width": 600, "height": 256, ...image, "data-astro-cid-dsdtxlqq": true })}`)} </div> <div${addAttribute(["p-6", ic?.content], "class:list")} data-astro-cid-dsdtxlqq> ${t && (href ? renderTemplate`<h3${addAttribute(["text-lg font-bold text-heading dark:text-gray-100 mb-2", ic?.title], "class:list")} data-astro-cid-dsdtxlqq> <a${addAttribute(href, "href")} class="hover:text-accent transition-colors duration-150" data-astro-cid-dsdtxlqq>${t}</a> </h3>` : renderTemplate`<h3${addAttribute(["text-lg font-bold text-heading dark:text-gray-100 mb-2", ic?.title], "class:list")} data-astro-cid-dsdtxlqq>${t}</h3>`)} ${description && renderTemplate`<p${addAttribute(["text-sm text-muted leading-relaxed dark:text-slate-400", ic?.description], "class:list")} data-astro-cid-dsdtxlqq>${unescapeHTML(description)}</p>`} ${href && renderTemplate`<a${addAttribute(href, "href")} class="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-accent hover:underline" data-astro-cid-dsdtxlqq>
Learn more
<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dsdtxlqq><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-dsdtxlqq></path></svg> </a>`} </div> </div>`)} </div>`
  ) : (
    /* ── Narrow rows: chunked into rows of 3, last row 2-col if < 3 ── */
    renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-dsdtxlqq": true }, { "default": async ($$result3) => renderTemplate`${Array.from({ length: Math.ceil(group.items.length / 3) }, (_, rowIdx) => {
      const row = group.items.slice(rowIdx * 3, rowIdx * 3 + 3);
      return renderTemplate`<div${addAttribute([
        "grid gap-4 mt-4",
        row.length < 3 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      ], "class:list")} data-astro-cid-dsdtxlqq> ${row.map(({ title: t, description, image, href, classes: ic = {} }) => renderTemplate`<div${addAttribute([
        "rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900",
        "overflow-hidden shadow-sm",
        "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
        ic?.panel
      ], "class:list")} data-astro-cid-dsdtxlqq> <div${addAttribute(["relative h-52 dark:bg-slate-800 overflow-hidden flex items-center justify-center", ic?.image], "class:list")} data-astro-cid-dsdtxlqq> ${image && (typeof image === "string" ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result3, "Image", $$Image, { "class": "w-full h-full object-cover", "width": 400, "height": 208, ...image, "data-astro-cid-dsdtxlqq": true })}`)} </div> <div${addAttribute(["p-5", ic?.content], "class:list")} data-astro-cid-dsdtxlqq> ${t && (href ? renderTemplate`<h3${addAttribute(["text-base font-bold text-heading dark:text-gray-100 mb-1.5", ic?.title], "class:list")} data-astro-cid-dsdtxlqq> <a${addAttribute(href, "href")} class="hover:text-accent transition-colors duration-150" data-astro-cid-dsdtxlqq>${t}</a> </h3>` : renderTemplate`<h3${addAttribute(["text-base font-bold text-heading dark:text-gray-100 mb-1.5", ic?.title], "class:list")} data-astro-cid-dsdtxlqq>${t}</h3>`)} ${description && renderTemplate`<p${addAttribute(["text-sm text-muted leading-relaxed dark:text-slate-400", ic?.description], "class:list")} data-astro-cid-dsdtxlqq>${unescapeHTML(description)}</p>`} ${href && renderTemplate`<a${addAttribute(href, "href")} class="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-accent hover:underline" data-astro-cid-dsdtxlqq>
Learn more
<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-dsdtxlqq><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-dsdtxlqq></path></svg> </a>`} </div> </div>`)} </div>`;
    })}` })}`
  ))}` })} `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/FeaturesBento.astro", void 0);

export { $$FeaturesBento as $ };
