import { e as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, r as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML } from './astro/server_BONdxEiL.mjs';
import { a as $$Image } from './FeaturesGrid_CwyGxRwy.mjs';
import { a as $$Button } from './PageLayout_BS2WX63q.mjs';
/* empty css                                      */

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image"),
    id,
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})} data-astro-cid-3w6r54vr> <div class="absolute inset-0 pointer-events-none" aria-hidden="true" data-astro-cid-3w6r54vr> ${renderSlot($$result, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(bg)}` })}` : null} `)} </div> <div class="relative max-w-5xl mx-auto px-4 sm:px-6 mt-12 md:mt-20" data-astro-cid-3w6r54vr> <div class="pt-0 md:pt-[76px] pointer-events-none" data-astro-cid-3w6r54vr></div> <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-start lg:gap-8" data-astro-cid-3w6r54vr> <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto" data-astro-cid-3w6r54vr> <!-- {
          tagline && (
            <p
              class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"
              set:html={tagline}
            />
          )
        } --> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-4" data-astro-cid-3w6r54vr> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0" aria-hidden="true" data-astro-cid-3w6r54vr></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-3w6r54vr>${unescapeHTML(tagline)}</span> </div>`} ${title && renderTemplate`<h1 class="hero2-title text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter" data-astro-cid-3w6r54vr>${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto lg:max-w-none" data-astro-cid-3w6r54vr> ${subtitle && renderTemplate`<p class="text-lg md:text-base text-muted mb-6 dark:text-slate-300 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter" data-astro-cid-3w6r54vr>${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter" data-astro-cid-3w6r54vr> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto" data-astro-cid-3w6r54vr> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0", "data-astro-cid-3w6r54vr": true })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div class="basis-1/2 self-stretch flex items-stretch" data-astro-cid-3w6r54vr> ${image && renderTemplate`<div class="relative w-full h-full intersect-once intersect-no-queue motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter" data-astro-cid-3w6r54vr> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "w-full h-full", "layout": "contained", "loading": "eager", "width": 1200, "height": 675, ...image, "data-astro-cid-3w6r54vr": true })}`} </div>`} </div> </div> </div> </section> `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/Hero2.astro", void 0);

export { $$Hero2 as $ };
