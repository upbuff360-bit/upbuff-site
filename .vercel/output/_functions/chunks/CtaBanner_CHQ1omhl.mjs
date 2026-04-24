import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';
import { a as $$Button } from './PageLayout_BS2WX63q.mjs';
/* empty css                         */

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$CtaBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CtaBanner;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    action,
    note,
    noteIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto !py-0 !px-0 md:!py-0 lg:!py-0 ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm min-h-[320px] flex items-center justify-center px-6 py-16 md:py-20"> <!-- ── Left decorative circle ──────────────────────────── --> <div class="pointer-events-none absolute -left-16 top-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl opacity-70" style="background: radial-gradient(circle, #e879f9 0%, #d946ef 40%, #a855f7 100%); animation: floatLoop 8s linear infinite;" aria-hidden="true"></div> <!-- ── Right decorative circle ─────────────────────────── --> <div class="pointer-events-none absolute -right-16 top-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl opacity-70" style="background: radial-gradient(circle, #fb923c 0%, #f97316 40%, #ef4444 100%); animation: floatLoopReverse 10s linear infinite;" aria-hidden="true"></div> <!-- ── Centre content ──────────────────────────────────── --> <div class="relative z-10 text-center max-w-2xl mx-auto intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter"> ${title && renderTemplate`<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-heading text-heading dark:text-gray-100 mb-4">${unescapeHTML(title)}</h2>`} ${subtitle && renderTemplate`<p class="text-muted text-base md:text-lg leading-relaxed dark:text-slate-400 mb-8 max-w-lg mx-auto">${unescapeHTML(subtitle)}</p>`} ${action && renderTemplate`<div class="flex justify-center mb-4"> <!-- Button with gradient underline accent --> <div class="relative inline-block"> ${renderComponent($$result2, "Button", $$Button, { ...action, "class": "relative z-10 btn-primary !bg-gray-900 !text-white hover:!bg-gray-700 dark:!bg-white dark:!text-gray-900 dark:hover:!bg-gray-100 px-8 py-3 rounded-xl text-base font-semibold transition-colors" })} <!-- Gradient underline bar --> <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 h-1 w-4/5 rounded-full" style="background: linear-gradient(90deg, #a855f7, #ec4899, #f97316);" aria-hidden="true"></span> </div> </div>`} ${note && renderTemplate`<p class="inline-flex items-center gap-1.5 text-sm text-muted dark:text-slate-400"> <span>${unescapeHTML(note)}</span> </p>`} </div> </div> ` })} `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/CtaBanner.astro", void 0);

export { $$CtaBanner as $ };
