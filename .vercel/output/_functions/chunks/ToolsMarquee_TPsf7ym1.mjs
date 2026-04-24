import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, F as Fragment } from './astro/server_BONdxEiL.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';
import { a as $$Image } from './FeaturesGrid_CwyGxRwy.mjs';
/* empty css                         */

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$ToolsMarquee = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToolsMarquee;
  const {
    title = "Works with your tools",
    description,
    tools = [],
    speed = 30,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const mid = Math.ceil(tools.length / 2);
  const row1 = tools.slice(0, mid);
  const row2 = tools.slice(mid);
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto !py-6 md:!py-8 ${classes?.container ?? ""}`, "bg": bg, "data-astro-cid-ceuwrj72": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row md:items-center gap-6 md:gap-10" data-astro-cid-ceuwrj72> <!-- ── Left: Title + description ──────────────────────────── --> <div class="md:w-72 shrink-0" data-astro-cid-ceuwrj72> ${title && renderTemplate`<h3 class="text-lg font-bold text-heading dark:text-gray-100" data-astro-cid-ceuwrj72>${title}</h3>`} ${description && renderTemplate`<p class="mt-1.5 text-sm text-muted dark:text-slate-400 leading-relaxed" data-astro-cid-ceuwrj72>${unescapeHTML(description)}</p>`} </div> <!-- ── Right: Scrolling marquee rows ─────────────────────── --> <div class="flex-1 overflow-hidden min-w-0" data-astro-cid-ceuwrj72> <!-- Row 1 --> <div class="marquee-track mb-3"${addAttribute(`--speed: ${speed}s`, "style")} data-astro-cid-ceuwrj72> <div class="marquee-inner" data-astro-cid-ceuwrj72> ${[...row1, ...row1].map(({ name, logo, image }) => renderTemplate`<div class="marquee-chip" data-astro-cid-ceuwrj72> <span class="marquee-logo" aria-hidden="true" data-astro-cid-ceuwrj72> ${logo ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(logo)}` })}` : image ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image.src, "alt": image.alt ?? name, "width": 20, "height": 20, "class": "w-5 h-5 object-contain", "data-astro-cid-ceuwrj72": true })}` : null} </span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-ceuwrj72>${name}</span> </div>`)} </div> </div> <!-- Row 2 (offset start) --> <div class="marquee-track"${addAttribute(`--speed: ${speed}s; --delay: -${speed / 2}s`, "style")} data-astro-cid-ceuwrj72> <div class="marquee-inner" data-astro-cid-ceuwrj72> ${[...row2, ...row2].map(({ name, logo, image }) => renderTemplate`<div class="marquee-chip" data-astro-cid-ceuwrj72> <span class="marquee-logo" aria-hidden="true" data-astro-cid-ceuwrj72> ${logo ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(logo)}` })}` : image ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image.src, "alt": image.alt ?? name, "width": 20, "height": 20, "class": "w-5 h-5 object-contain", "data-astro-cid-ceuwrj72": true })}` : null} </span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-ceuwrj72>${name}</span> </div>`)} </div> </div> </div> </div> ` })} `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/ToolsMarquee.astro", void 0);

export { $$ToolsMarquee as $ };
