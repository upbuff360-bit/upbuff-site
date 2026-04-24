import { e as createAstro, c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, u as unescapeHTML } from './astro/server_BONdxEiL.mjs';
import { f as findImage, i as isUnpicCompatible, g as getImagesOptimized, u as unpicOptimizer, a as astroAssetsOptimizer } from './Layout__yYnPx-U.mjs';
import 'piccolore';
import { a as $$WidgetWrapper } from './FaqAccordion_DHd6Sfjj.mjs';
import { c as $$Icon } from './PageLayout_BS2WX63q.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://upbuff-site.vercel.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new Error();
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  if (!props.loading) {
    props.loading = "lazy";
  }
  if (!props.decoding) {
    props.decoding = "async";
  }
  const _image = await findImage(props.src);
  let image = void 0;
  if (typeof _image === "string" && (_image.startsWith("http://") || _image.startsWith("https://")) && isUnpicCompatible(_image)) {
    image = await getImagesOptimized(_image, props, unpicOptimizer);
  } else if (_image) {
    image = await getImagesOptimized(_image, props, astroAssetsOptimizer);
  }
  return renderTemplate`${!image ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")} crossorigin="anonymous" referrerpolicy="no-referrer"${spreadAttributes(image.attributes)}>`}`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/common/Image.astro", void 0);

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$FeaturesGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesGrid;
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
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg, "data-astro-cid-yxkipe5s": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mb-10 md:mb-12 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter" data-astro-cid-yxkipe5s> <!-- Left: tagline + title --> <div class="md:w-1/2" data-astro-cid-yxkipe5s> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-sm mb-4" data-astro-cid-yxkipe5s> <span class="w-2 h-2 rounded-full bg-pink-500 shrink-0" aria-hidden="true" data-astro-cid-yxkipe5s></span> <span class="text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-yxkipe5s>${unescapeHTML(tagline)}</span> </div>`} ${title && renderTemplate`<h2 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-heading text-heading dark:text-gray-100" data-astro-cid-yxkipe5s>${unescapeHTML(title)}</h2>`} </div> <!-- Right: subtitle --> ${subtitle && renderTemplate`<div class="md:w-1/2" data-astro-cid-yxkipe5s> <p class="text-muted text-base md:text-lg leading-relaxed dark:text-slate-400" data-astro-cid-yxkipe5s>${unescapeHTML(subtitle)}</p> </div>`} </div>  ${items.length > 0 && renderTemplate`<div class="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-slate-900 shadow-sm" data-astro-cid-yxkipe5s> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-x-0 sm:divide-x divide-gray-200 dark:divide-gray-700 sm:[&>*:nth-child(3n+1)]:border-l-0" data-astro-cid-yxkipe5s> ${items.map(({ title: ft, description, icon, iconHtml }, i) => renderTemplate`<div${addAttribute([
    "p-7 flex flex-col gap-6",
    // add top border for 2nd row cells on lg
    i >= 3 ? "lg:border-t lg:border-gray-200 dark:lg:border-gray-700" : "",
    i >= 2 ? "sm:border-t sm:border-gray-200 dark:sm:border-gray-700 lg:border-t-0" : "",
    "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
  ], "class:list")}${addAttribute(`animation-delay: ${i * 60}ms`, "style")} data-astro-cid-yxkipe5s> <!-- Icon --> <div class="w-9 h-9 flex items-center justify-center" data-astro-cid-yxkipe5s> ${iconHtml ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(iconHtml)}` })}` : icon ? renderTemplate`<span class="gradient-icon-wrap" data-astro-cid-yxkipe5s> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-8 h-8", "data-astro-cid-yxkipe5s": true })} </span>` : null} </div> <!-- Text --> <div data-astro-cid-yxkipe5s> <h3 class="text-lg font-bold text-heading dark:text-gray-100 mb-2" data-astro-cid-yxkipe5s>${ft}</h3> ${description && renderTemplate`<p class="text-sm text-muted dark:text-slate-400 leading-relaxed" data-astro-cid-yxkipe5s>${unescapeHTML(description)}</p>`} </div> </div>`)} </div> </div>`}` })}  <!-- Inline SVG gradient definition (injected once, referenced by fill:url(#icon-gradient)) --> <svg width="0" height="0" style="position:absolute" data-astro-cid-yxkipe5s> <defs data-astro-cid-yxkipe5s> <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-yxkipe5s> <stop offset="0%" stop-color="#f472b6" data-astro-cid-yxkipe5s></stop> <stop offset="100%" stop-color="#a855f7" data-astro-cid-yxkipe5s></stop> </linearGradient> </defs> </svg>`;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/FeaturesGrid.astro", void 0);

export { $$FeaturesGrid as $, $$Image as a };
