import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, F as Fragment } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';
import { a as $$Image } from './FeaturesGrid_CwyGxRwy.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://upbuff-site.vercel.app");
const $$FeaturesHighlights = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturesHighlights;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    items = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg, "data-astro-cid-qj6vslvn": true }, { "default": async ($$result2) => renderTemplate`  ${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div class="mb-10 md:mb-14" data-astro-cid-qj6vslvn> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-5 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter" data-astro-cid-qj6vslvn> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0" aria-hidden="true" data-astro-cid-qj6vslvn></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-qj6vslvn>${unescapeHTML(tagline)}</span> </div>`} <div class="md:flex md:items-start md:gap-12" data-astro-cid-qj6vslvn> ${title && renderTemplate`<h2 class="font-bold leading-tight tracking-tight font-heading text-heading text-4xl md:text-5xl md:w-1/2 text-left dark:text-gray-200 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter" data-astro-cid-qj6vslvn>${unescapeHTML(title)}</h2>`} ${subtitle && renderTemplate`<p class="mt-4 md:mt-1 text-muted text-lg md:text-base md:w-1/2 dark:text-slate-400 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter" data-astro-cid-qj6vslvn>${unescapeHTML(subtitle)}</p>`} </div> </div>`} ${items.length > 0 && renderTemplate`<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-qj6vslvn> ${items.map(({ title: itemTitle, description, image, classes: itemClasses = {} }) => renderTemplate`<div${addAttribute([
    "rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900",
    "overflow-hidden shadow-sm",
    "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
    itemClasses?.panel
  ], "class:list")} data-astro-cid-qj6vslvn> <!-- Illustration / image area --> <div${addAttribute([
    "relative h-72 bg-gray-50 dark:bg-slate-800 overflow-hidden",
    "flex items-center justify-center",
    itemClasses?.image
  ], "class:list")} data-astro-cid-qj6vslvn> ${image && (typeof image === "string" ? renderTemplate`<div class="w-full flex items-center justify-center h-full" data-astro-cid-qj6vslvn> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(image)}` })} </div>` : typeof image?.src === "string" ? renderTemplate`<!-- Remote image -->
    <img${addAttribute(image.src, "src")}${addAttribute(typeof image.alt === "string" ? image.alt : "", "alt")} class="max-h-[220px] w-auto object-contain mx-auto" loading="lazy" data-astro-cid-qj6vslvn>` : renderTemplate`<!-- Local Astro image -->
    ${renderComponent($$result2, "Image", $$Image, { "class": "max-h-[220px] w-auto object-contain mx-auto", "width": 480, "height": 288, ...image, "data-astro-cid-qj6vslvn": true })}`)} </div> <!-- Card text content --> <div${addAttribute(["p-6", itemClasses?.content], "class:list")} data-astro-cid-qj6vslvn> ${itemTitle && renderTemplate`<h3${addAttribute([
    "text-lg font-bold text-heading dark:text-gray-100 mb-2",
    itemClasses?.title
  ], "class:list")} data-astro-cid-qj6vslvn> ${itemTitle} </h3>`} ${description && renderTemplate`<p${addAttribute([
    "text-muted text-sm leading-relaxed dark:text-slate-400",
    itemClasses?.description
  ], "class:list")} data-astro-cid-qj6vslvn>${unescapeHTML(description)}</p>`} </div> </div>`)} </div>`}` })} `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/FeaturesHighlights.astro", void 0);

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$TestimonialsGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialsGrid;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    row1 = [],
    row2 = [],
    statCard,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg, "data-astro-cid-t5uckbdu": true }, { "default": async ($$result2) => renderTemplate`  ${(title || subtitle) && renderTemplate`${maybeRenderHead()}<div class="text-center mb-10 md:mb-12 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter" data-astro-cid-t5uckbdu> ${title && renderTemplate`<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-heading text-heading dark:text-gray-100 mb-3" data-astro-cid-t5uckbdu>${unescapeHTML(title)}</h2>`} ${subtitle && renderTemplate`<p class="text-muted text-base md:text-lg dark:text-slate-400 max-w-5xl mx-auto" data-astro-cid-t5uckbdu>${unescapeHTML(subtitle)}</p>`} </div>`} ${row1.length > 0 && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4" data-astro-cid-t5uckbdu> ${row1.map(({ company, logo, quote, name, role, avatar, wide }, i) => renderTemplate`<div${addAttribute([
    "rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-sm",
    wide ? "sm:col-span-2 lg:col-span-1" : "",
    "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
  ], "class:list")}${addAttribute(`animation-delay: ${i * 80}ms`, "style")} data-astro-cid-t5uckbdu> <!-- Logo / company name --> <div class="mb-4" data-astro-cid-t5uckbdu> ${logo ? logo.startsWith("<") ? renderTemplate`<div class="testimonial-logo h-10 flex items-center text-black" data-astro-cid-t5uckbdu>${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(logo)}` })}</div>` : renderTemplate`<img${addAttribute(logo, "src")}${addAttribute(company ?? "", "alt")} class="testimonial-logo h-7 w-auto max-w-full object-contain grayscale contrast-200 brightness-75" loading="lazy" data-astro-cid-t5uckbdu>` : company && renderTemplate`<span class="text-sm font-medium text-gray-400 dark:text-gray-500" data-astro-cid-t5uckbdu>${company}</span>`} </div> <!-- Quote --> <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-5" data-astro-cid-t5uckbdu>${unescapeHTML(`"${quote}"`)}</p> <!-- Attribution --> ${(name || role || avatar) && renderTemplate`<div class="flex items-center" data-astro-cid-t5uckbdu> ${avatar && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-slate-800" data-astro-cid-t5uckbdu> ${avatar.startsWith("<") ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(avatar)}` })}` : renderTemplate`<img${addAttribute(avatar, "src")}${addAttribute(name ?? "", "alt")} class="h-10 w-10 object-cover" loading="lazy" data-astro-cid-t5uckbdu>`} </div>`} <div${addAttribute(avatar ? "ml-3 rtl:ml-0 rtl:mr-3" : "", "class")} data-astro-cid-t5uckbdu> ${name && renderTemplate`<p class="text-sm font-bold text-heading dark:text-gray-100" data-astro-cid-t5uckbdu>${name}</p>`} ${role && renderTemplate`<p class="text-xs text-muted dark:text-slate-400" data-astro-cid-t5uckbdu>${role}</p>`} </div> </div>`} </div>`)} <!-- Stat card (3rd slot in row 1) --> ${statCard && renderTemplate`<div class="rounded-2xl overflow-hidden shadow-sm relative flex flex-col justify-end intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"${addAttribute(`animation-delay: ${row1.length * 80}ms`, "style")} data-astro-cid-t5uckbdu> <!-- Background --> <div class="absolute inset-0" data-astro-cid-t5uckbdu> ${statCard.backgroundImage ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(statCard.backgroundImage)}` })}` : renderTemplate`<div class="w-full h-full"${addAttribute(statCard.gradient ? `background: ${statCard.gradient}` : "background: linear-gradient(135deg, #f97316, #ec4899)", "style")} data-astro-cid-t5uckbdu></div>`} </div> <!-- Stat text (bottom-left overlay on white bg) --> <div class="relative bg-white dark:bg-slate-900 m-0 p-6" data-astro-cid-t5uckbdu> <p class="text-4xl font-bold text-heading dark:text-gray-100 leading-none mb-1" data-astro-cid-t5uckbdu>${unescapeHTML(statCard.stat)}</p> ${statCard.label && renderTemplate`<p class="text-sm text-muted dark:text-slate-400 leading-snug" data-astro-cid-t5uckbdu>${unescapeHTML(statCard.label)}</p>`} </div> </div>`} </div>`} ${row2.length > 0 && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-astro-cid-t5uckbdu> ${row2.map(({ company, logo, quote, name, role, avatar }, i) => renderTemplate`<div${addAttribute([
    "rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-sm",
    "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
  ], "class:list")}${addAttribute(`animation-delay: ${i * 80}ms`, "style")} data-astro-cid-t5uckbdu> <div class="mb-4" data-astro-cid-t5uckbdu> ${logo ? logo.startsWith("<") ? renderTemplate`<div class="testimonial-logo h-10 flex items-center text-black" data-astro-cid-t5uckbdu>${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(logo)}` })}</div>` : renderTemplate`<img${addAttribute(logo, "src")}${addAttribute(company ?? "", "alt")} class="testimonial-logo h-7 w-auto max-w-full object-contain grayscale contrast-200 brightness-75" loading="lazy" data-astro-cid-t5uckbdu>` : company && renderTemplate`<span class="text-sm font-medium text-gray-400 dark:text-gray-500" data-astro-cid-t5uckbdu>${company}</span>`} </div> <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-5" data-astro-cid-t5uckbdu>${unescapeHTML(`"${quote}"`)}</p> ${(name || role || avatar) && renderTemplate`<div class="flex items-center" data-astro-cid-t5uckbdu> ${avatar && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-slate-800" data-astro-cid-t5uckbdu> ${avatar.startsWith("<") ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(avatar)}` })}` : renderTemplate`<img${addAttribute(avatar, "src")}${addAttribute(name ?? "", "alt")} class="h-10 w-10 object-cover" loading="lazy" data-astro-cid-t5uckbdu>`} </div>`} <div${addAttribute(avatar ? "ml-3 rtl:ml-0 rtl:mr-3" : "", "class")} data-astro-cid-t5uckbdu> ${name && renderTemplate`<p class="text-sm font-bold text-heading dark:text-gray-100" data-astro-cid-t5uckbdu>${name}</p>`} ${role && renderTemplate`<p class="text-xs text-muted dark:text-slate-400" data-astro-cid-t5uckbdu>${role}</p>`} </div> </div>`} </div>`)} </div>`}` })} `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/TestimonialsGrid.astro", void 0);

export { $$FeaturesHighlights as $, $$TestimonialsGrid as a };
