import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$ProblemSplit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProblemSplit;
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
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"> <!-- ── Left column: tagline + big title + body ────────────── --> <div class="lg:w-[42%] shrink-0 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter"> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-5"> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0" aria-hidden="true"></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${unescapeHTML(tagline)}</span> </div>`} ${title && renderTemplate`<h2 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-heading text-heading dark:text-gray-100 mb-5">${unescapeHTML(title)}</h2>`} ${subtitle && renderTemplate`<p class="text-muted text-base leading-relaxed dark:text-slate-400">${unescapeHTML(subtitle)}</p>`} </div> <!-- ── Right column: 2 × 2 accent-bordered items ─────────── --> ${items.length > 0 && renderTemplate`<div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8"> ${items.map(({ title: it, description }, i) => renderTemplate`<div${addAttribute([
    "pl-5 border-l-2 border-pink-400 dark:border-pink-500",
    "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
  ], "class:list")}${addAttribute(`animation-delay: ${i * 80}ms`, "style")}> <h3 class="text-xl font-bold text-heading dark:text-gray-100 mb-2">${it}</h3> ${description && renderTemplate`<p class="text-sm text-muted dark:text-slate-400 leading-relaxed">${unescapeHTML(description)}</p>`} </div>`)} </div>`} </div> ` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/ProblemSplit.astro", void 0);

export { $$ProblemSplit as $ };
