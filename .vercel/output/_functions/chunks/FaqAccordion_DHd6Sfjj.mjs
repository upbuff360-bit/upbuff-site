import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, a as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML, d as renderScript } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { twMerge } from 'tailwind-merge';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro("https://upbuff-site.vercel.app");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/ui/Background.astro", void 0);

const $$Astro$1 = createAstro("https://upbuff-site.vercel.app");
const $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div${addAttribute([
    twMerge(
      "relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
      containerClass
    ),
    { dark: isDark }
  ], "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/ui/WidgetWrapper.astro", void 0);

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$FaqAccordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqAccordion;
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
  const widgetId = id ?? `faq-${Math.random().toString(36).slice(2, 7)}`;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": widgetId, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg, "data-astro-cid-mu6pvni3": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-12 lg:gap-16" data-astro-cid-mu6pvni3> <!-- ── Left column: tagline + title + subtitle ───────── --> <div class="lg:w-2/5 shrink-0 lg:sticky lg:top-28 self-start intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter" data-astro-cid-mu6pvni3> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-5" data-astro-cid-mu6pvni3> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0" aria-hidden="true" data-astro-cid-mu6pvni3></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-mu6pvni3>${tagline}</span> </div>`} ${title && renderTemplate`<h2 class="text-3xl md:text-4xl font-bold leading-tight tracking-tight font-heading text-heading dark:text-gray-100 mb-4" data-astro-cid-mu6pvni3>${unescapeHTML(title)}</h2>`} ${subtitle && renderTemplate`<p class="text-muted text-base md:text-lg leading-relaxed dark:text-slate-400" data-astro-cid-mu6pvni3>${unescapeHTML(subtitle)}</p>`} </div> <!-- ── Right column: FAQ accordion ──────────────────── --> ${items.length > 0 && renderTemplate`<div class="flex-1 flex flex-col gap-3"${addAttribute(`${widgetId}-list`, "id")} data-astro-cid-mu6pvni3> ${items.map(({ question, answer }, i) => renderTemplate`<div class="faq-item rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 overflow-hidden intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"${addAttribute(`animation-delay: ${i * 40}ms`, "style")} data-astro-cid-mu6pvni3> <!-- Question row (button) --> <button type="button" class="faq-trigger w-full flex items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded="false"${addAttribute(`faq-answer-${widgetId}-${i}`, "aria-controls")} data-astro-cid-mu6pvni3> <h3 class="text-base font-medium text-heading dark:text-gray-100 leading-snug" data-astro-cid-mu6pvni3> ${question} </h3> <span class="faq-chevron shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 transition-transform duration-300" data-astro-cid-mu6pvni3> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mu6pvni3> <path d="M6 9l6 6 6-6" data-astro-cid-mu6pvni3></path> </svg> </span> </button> <!-- Answer panel --> <div${addAttribute(`faq-answer-${widgetId}-${i}`, "id")} class="faq-answer overflow-hidden" style="max-height: 0;" data-astro-cid-mu6pvni3> ${answer && renderTemplate`<p class="px-6 pb-5 text-sm text-muted dark:text-slate-400 leading-relaxed" data-astro-cid-mu6pvni3>${unescapeHTML(answer)}</p>`} </div> </div>`)} </div>`} </div> ` })}  ${renderScript($$result, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/FaqAccordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/FaqAccordion.astro", void 0);

export { $$FaqAccordion as $, $$WidgetWrapper as a };
