import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, a as renderTemplate, u as unescapeHTML, f as renderSlot, r as renderComponent, F as Fragment } from './astro/server_BONdxEiL.mjs';
/* empty css                            */

const $$Astro = createAstro("https://upbuff-site.vercel.app");
const $$HeroOrbital = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroOrbital;
  const {
    title,
    subtitle,
    tagline,
    actions = [],
    image,
    linkAction,
    centerLogo,
    centerColor = "#2563eb",
    avatars = [],
    badges = [],
    id
  } = Astro2.props;
  const resolvedActions = actions.length ? actions : linkAction ? [{ text: linkAction.text ?? "", href: linkAction.href ?? "#", variant: "secondary" }] : [];
  const avatarDegrees = {
    "top": -90,
    // 12 o'clock
    "bottom-left": 150,
    // 7 o'clock
    "bottom-right": 30,
    // 4 o'clock
    "top-left": -150
    // 10 o'clock
  };
  const badgePositions = {
    "left": { top: "46%", left: "-2%", transform: "translate(-100%, -50%)" },
    "right": { top: "28%", left: "102%", transform: "translate(0%, -50%)" },
    "bottom": { top: "104%", left: "50%", transform: "translate(-50%, 0%)" }
  };
  return renderTemplate`${maybeRenderHead()}<section class="relative not-prose md:-mt-[76px] bg-black text-white overflow-hidden" role="banner"${addAttribute(title, "aria-label")}${spreadAttributes(id ? { id } : {})} data-astro-cid-cirpju6b> <div class="relative max-w-5xl mx-auto px-4 sm:px-6" data-astro-cid-cirpju6b> <div class="pt-0 md:pt-[76px] pointer-events-none" data-astro-cid-cirpju6b></div> <div class="py-16 md:py-24 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8" data-astro-cid-cirpju6b> <!-- ── Left: text content ──────────────────────────────── --> <div class="lg:basis-1/2 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter" data-astro-cid-cirpju6b> ${tagline && renderTemplate`<p class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-5 text-sm font-medium text-white/80" data-astro-cid-cirpju6b> <span class="w-2 h-2 rounded-full bg-green-500 shrink-0" aria-hidden="true" data-astro-cid-cirpju6b></span> ${tagline} </p>`} ${title && renderTemplate`<h1 class="heroOrbitalTitle text-5xl md:text-6xl lg:text-6xl font-bold leading-none tracking-tight text-white mb-5 font-heading" itemprop="name" data-astro-cid-cirpju6b>${unescapeHTML(title)}</h1>`} ${subtitle && renderTemplate`<p class="text-base text-gray-400 leading-relaxed mb-7 max-w-sm" itemprop="description" data-astro-cid-cirpju6b>${unescapeHTML(subtitle)}</p>`} ${resolvedActions.length > 0 && renderTemplate`<div class="flex flex-wrap items-center gap-3 mt-7" role="group" aria-label="Call to action" data-astro-cid-cirpju6b> ${resolvedActions.map(
    (action) => action.variant === "primary" ? renderTemplate`<a${addAttribute(action.href, "href")} class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors duration-150" role="button"${addAttribute(action.text, "aria-label")} data-astro-cid-cirpju6b> ${action.text} </a>` : renderTemplate`<a${addAttribute(action.href, "href")} class="inline-flex items-center gap-1.5 text-white font-semibold text-sm hover:opacity-75 transition-opacity group"${addAttribute(action.text, "aria-label")} data-astro-cid-cirpju6b> ${action.text} <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-cirpju6b><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-cirpju6b></path></svg> </a>`
  )} </div>`} </div> <!-- ── Right: slot > image > orbital diagram ────────────── --> <div class="lg:basis-1/2 flex items-center justify-center intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter" data-astro-cid-cirpju6b> ${Astro2.slots.has("visual") ? renderTemplate`${renderSlot($$result, $$slots["visual"])}` : image ? renderTemplate`<img${addAttribute(image.src, "src")}${addAttribute(image.alt ?? "", "alt")} class="w-full max-w-lg rounded-2xl shadow-2xl object-cover" loading="lazy" decoding="async" data-astro-cid-cirpju6b>` : renderTemplate`<!-- ── Orbital diagram ─────────────────────────── -->
        <div class="orbital-root" aria-hidden="true" data-astro-cid-cirpju6b> <!-- Static layers: outer glow ring + dotted inner grid --> <div class="orbital-static" data-astro-cid-cirpju6b> <svg class="orbital-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" data-astro-cid-cirpju6b> <defs data-astro-cid-cirpju6b> <!-- Circular clip for the dot grid --> <clipPath id="orbital-clip" data-astro-cid-cirpju6b> <circle cx="200" cy="200" r="148" data-astro-cid-cirpju6b></circle> </clipPath> </defs> <!-- Outer subtle glow band --> <circle cx="200" cy="200" r="185" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="60" data-astro-cid-cirpju6b></circle> <!-- Outer ring — thin clean line --> <circle cx="200" cy="200" r="168" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" data-astro-cid-cirpju6b></circle> <!-- Inner ring --> <circle cx="200" cy="200" r="148" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" data-astro-cid-cirpju6b></circle> <!-- Dot grid inside the circle --> <g clip-path="url(#orbital-clip)" data-astro-cid-cirpju6b> ${Array.from(
    { length: 19 },
    (_, row) => Array.from({ length: 19 }, (_2, col) => {
      const x = 52 + col * 16;
      const y = 52 + row * 16;
      const dx = x - 200;
      const dy = y - 200;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 145) return null;
      const opacity = dist < 80 ? 0.12 : dist < 120 ? 0.18 : 0.25;
      return renderTemplate`<circle${addAttribute(x, "cx")}${addAttribute(y, "cy")} r="1.5"${addAttribute(`rgba(100,140,255,${opacity})`, "fill")} data-astro-cid-cirpju6b></circle>`;
    })
  )} </g> </svg> </div> <!-- Spinning layer: ring with avatars rotating on it --> <div class="orbital-spinner" data-astro-cid-cirpju6b> <svg class="orbital-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" data-astro-cid-cirpju6b> <!-- Dashed ring that rotates --> <circle cx="200" cy="200" r="168" fill="none" stroke="rgba(255,255,255,0.0)" stroke-width="1" stroke-dasharray="4 10" data-astro-cid-cirpju6b></circle> </svg> <!-- Avatar photos — they sit on the spinning layer so they orbit --> <!-- Counter-rotated via CSS so they stay upright while ring spins --> ${avatars.map(({ src, alt = "", position = "top" }) => {
    const deg = avatarDegrees[position] ?? -90;
    const rad = deg * Math.PI / 180;
    const r = 178;
    const cx = 200 + r * Math.cos(rad);
    const cy = 200 + r * Math.sin(rad);
    const leftPct = cx / 400 * 100;
    const topPct = cy / 400 * 100;
    return renderTemplate`<div class="orbital-avatar"${addAttribute(`left:${leftPct}%;top:${topPct}%;`, "style")} data-astro-cid-cirpju6b> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" data-astro-cid-cirpju6b> </div>`;
  })} </div> <!-- Static center circle — does NOT rotate --> <div class="orbital-center"${addAttribute(`background: radial-gradient(circle at 40% 35%, color-mix(in srgb, ${centerColor} 80%, white 20%), ${centerColor});`, "style")} data-astro-cid-cirpju6b> ${centerLogo && (centerLogo.startsWith("<") ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(centerLogo)}` })}` : renderTemplate`<img${addAttribute(centerLogo, "src")} alt="Logo" class="w-14 h-14 object-contain" data-astro-cid-cirpju6b>`)} </div> <!-- Static badge pills — never rotate --> ${badges.map(({ label, position = "left" }) => {
    const pos = badgePositions[position] ?? badgePositions["left"];
    return renderTemplate`<div class="orbital-badge"${addAttribute(`top:${pos.top};left:${pos.left};transform:${pos.transform};`, "style")} data-astro-cid-cirpju6b> ${label} </div>`;
  })} </div>`} </div> </div> </div> </section> `;
}, "C:/Users/sreeg/Documents/Projects/astrowind-main-latest/src/components/widgets/HeroOrbital.astro", void 0);

export { $$HeroOrbital as $ };
