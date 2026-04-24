import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DkBytLqn.mjs';
import { manifest } from './manifest_DpUQ5bbU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/api/demo-request.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/industry/industry-solutions.astro.mjs');
const _page7 = () => import('./pages/integrations/integrations.astro.mjs');
const _page8 = () => import('./pages/integrations/sap-business-one.astro.mjs');
const _page9 = () => import('./pages/legal/data-protection.astro.mjs');
const _page10 = () => import('./pages/legal/privacy.astro.mjs');
const _page11 = () => import('./pages/legal/terms.astro.mjs');
const _page12 = () => import('./pages/platform/overview.astro.mjs');
const _page13 = () => import('./pages/platform/security-compliance.astro.mjs');
const _page14 = () => import('./pages/platform/why-upbuff.astro.mjs');
const _page15 = () => import('./pages/products/asset-tracking-system.astro.mjs');
const _page16 = () => import('./pages/products/enterprise-partner-portals.astro.mjs');
const _page17 = () => import('./pages/products/erp-integrated-crm.astro.mjs');
const _page18 = () => import('./pages/products/erp-integrated-fsm.astro.mjs');
const _page19 = () => import('./pages/products/erp-integrated-manufacturing-shopfloor.astro.mjs');
const _page20 = () => import('./pages/products/erp-integrated-product-configurator.astro.mjs');
const _page21 = () => import('./pages/products/erp-integrated-sales-distribution.astro.mjs');
const _page22 = () => import('./pages/products/erp-integrated-warehouse-inventory.astro.mjs');
const _page23 = () => import('./pages/request-demo.astro.mjs');
const _page24 = () => import('./pages/rss.xml.astro.mjs');
const _page25 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/api/demo-request.ts", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/industry/industry-solutions.astro", _page6],
    ["src/pages/integrations/integrations.astro", _page7],
    ["src/pages/integrations/sap-business-one.astro", _page8],
    ["src/pages/legal/data-protection.astro", _page9],
    ["src/pages/legal/privacy.astro", _page10],
    ["src/pages/legal/terms.astro", _page11],
    ["src/pages/platform/overview.astro", _page12],
    ["src/pages/platform/security-compliance.astro", _page13],
    ["src/pages/platform/why-upbuff.astro", _page14],
    ["src/pages/products/asset-tracking-system.astro", _page15],
    ["src/pages/products/enterprise-partner-portals.astro", _page16],
    ["src/pages/products/erp-integrated-crm.astro", _page17],
    ["src/pages/products/erp-integrated-fsm.astro", _page18],
    ["src/pages/products/erp-integrated-manufacturing-shopfloor.astro", _page19],
    ["src/pages/products/erp-integrated-product-configurator.astro", _page20],
    ["src/pages/products/erp-integrated-sales-distribution.astro", _page21],
    ["src/pages/products/erp-integrated-warehouse-inventory.astro", _page22],
    ["src/pages/request-demo.astro", _page23],
    ["src/pages/rss.xml.ts", _page24],
    ["src/pages/index.astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4d45cc86-8340-4cf6-90da-d8c41f2f3309",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
