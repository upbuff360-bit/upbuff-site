import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, F as Fragment } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';
import { a as $$Image } from './FeaturesGrid_CwyGxRwy.mjs';

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$FeaturesEnterprise = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesEnterprise;
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
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate`  ${(tagline || title || subtitle) && renderTemplate`${maybeRenderHead()}<div class="text-center mb-10 md:mb-12 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter"> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-5"> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0" aria-hidden="true"></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${unescapeHTML(tagline)}</span> </div>`} ${title && renderTemplate`<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-heading text-heading dark:text-gray-100">${unescapeHTML(title)}</h2>`} ${subtitle && renderTemplate`<p class="mt-4 text-muted text-base md:text-lg max-w-2xl mx-auto dark:text-slate-400">${unescapeHTML(subtitle)}</p>`} </div>`} ${items.length > 0 && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${items.map(({ title: ct, description, illustration }, i) => renderTemplate`<div${addAttribute([
    "rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900",
    "overflow-hidden shadow-sm",
    "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
  ], "class:list")}${addAttribute(`animation-delay: ${i * 80}ms`, "style")}> <!-- Illustration area --> <div class="relative h-72 flex items-center justify-center overflow-hidden dark:bg-slate-800"> ${illustration && (typeof illustration === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(illustration)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full object-contain", "width": 400, "height": 288, ...illustration })}`)} </div> <!-- Text --> <div class="p-6 border-t border-gray-100 dark:border-gray-700"> <h3 class="text-lg font-bold text-heading dark:text-gray-100 mb-2">${ct}</h3> ${description && renderTemplate`<p class="text-sm text-muted dark:text-slate-400 leading-relaxed">${unescapeHTML(description)}</p>`} </div> </div>`)} </div>`}` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/FeaturesEnterprise.astro", void 0);

export { $$FeaturesEnterprise as $ };
