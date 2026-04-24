import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, F as Fragment, b as addAttribute } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$SecuritySplit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SecuritySplit;
  const {
    tagline,
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    badges = [],
    features = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"> <!-- Left column --> <div class="lg:w-5/12 shrink-0"> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-5"> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0"></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${unescapeHTML(tagline)}</span> </div>`} ${title && renderTemplate`<h2 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-heading text-heading dark:text-gray-100 mb-4">${unescapeHTML(title)}</h2>`} ${subtitle && renderTemplate`<p class="text-muted text-base leading-relaxed dark:text-slate-400 mb-6">${unescapeHTML(subtitle)}</p>`} ${badges.length > 0 && renderTemplate`<div class="flex flex-wrap gap-4 items-center mt-2"> ${badges.map(({ image, alt = "" }) => renderTemplate`<div class="w-16 h-16 flex items-center justify-center"> ${image.startsWith("<") ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`<img${addAttribute(image, "src")}${addAttribute(alt, "alt")} class="w-full h-full object-contain grayscale" loading="lazy">`} </div>`)} </div>`} </div> <!-- Right panel --> ${features.length > 0 && renderTemplate`<div class="flex-1 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm divide-y divide-gray-200 dark:divide-gray-700"> ${features.map(({ title: ft, description, illustration, href, target }, i) => renderTemplate`<div class="flex items-center justify-between gap-6 px-7 py-6"${addAttribute(`animation-delay: ${i * 80}ms`, "style")}> <!-- Text --> <div class="flex-1 min-w-0"> <h3 class="text-lg font-bold text-heading dark:text-gray-100 mb-1"> ${ft} </h3> ${description && renderTemplate`<p class="text-sm text-muted dark:text-slate-400 leading-relaxed mb-2">${unescapeHTML(description)}</p>`} ${href && renderTemplate`<a${addAttribute(href, "href")}${addAttribute(target || "_self", "target")} class="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group">
Learn more
<span class="transition-transform group-hover:translate-x-1">→</span> </a>`} </div> <!-- Illustration (optional but unused in your case) --> ${illustration && renderTemplate`<div class="shrink-0 w-24 h-20 flex items-center justify-end overflow-hidden"> ${illustration.startsWith("<") ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(illustration)}` })}` : renderTemplate`<img${addAttribute(illustration, "src")}${addAttribute(ft, "alt")} class="w-full h-full object-contain" loading="lazy">`} </div>`} </div>`)} </div>`} </div> ` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/SecuritySplit.astro", void 0);

export { $$SecuritySplit as $ };
