import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, F as Fragment, b as addAttribute } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$LogoBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LogoBar;
  const {
    label,
    logos = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto !py-8 md:!py-10 ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate`  ${label && renderTemplate`${maybeRenderHead()}<p class="text-center text-sm text-muted dark:text-slate-400 mb-6 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter">${unescapeHTML(label)}</p>`} ${logos.length > 0 && renderTemplate`<div class="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter"> ${logos.map(({ src, html, alt = "" }) => renderTemplate`<div class="h-8 flex items-center opacity-100 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"> ${html ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(html)}` })}` : src ? renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt, "alt")} class="h-full w-auto object-contain max-w-[150px]" loading="lazy">` : null} </div>`)} </div>`}` })}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/LogoBar.astro", void 0);

export { $$LogoBar as $ };
