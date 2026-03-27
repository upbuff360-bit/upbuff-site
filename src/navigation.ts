import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Platform',
      links: [
        {
          text: 'Overview',
          href: getPermalink('/homes/overview'),
        },
        {
          text: 'Why UpBuff',
          href: getPermalink('/homes/why-upbuff'),
        },
        {
          text: 'Security & Compliance',
          href: getPermalink('/homes/security-compliance'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'ERP-Integrated CRM',
          href: getPermalink('/homes/erp-integrated-crm'),
        },
        {
          text: 'ERP-Integrated Field Service Management',
          href: getPermalink('/homes/erp-integrated-fsm'),
        },
        {
          text: 'Warehouse & Inventory Management',
          href: getPermalink('/homes/erp-integrated-warehouse-inventory'),
        },
        {
          text: 'Sales & Distribution Execution',
          href: getPermalink('/homes/erp-integrated-sales-distribution'),
        },
        {
          text: 'Manufacturing & Shopfloor',
          href: getPermalink('/homes/erp-integrated-manufacturing-shopfloor'),
        },
        {
          text: 'Enterprise & Partner Portals',
          href: getPermalink('/homes/enterprise-partner-portals'),
        },
        {
          text: 'ERP-Integrated Product Configurator',
          href: getPermalink('/homes/erp-integrated-product-configurator'),
        },
      ],
    },
    {
      text: 'By Industry',
      links: [
        {
          text: 'Industry Solutions Overview',
          href: getPermalink('/homes/solutions'),
        },
      ],
    },
    {
      text: 'Integrations',
      links: [
        {
          text: 'Overview',
          href: getPermalink('/homes/integrations'),
        },
        {
          text: 'SAP Business One',
          href: getPermalink('/homes/sap-business-one'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [
    { text: 'Request Demo', href: getPermalink('/homes/request-demo') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'ERP-Integrated CRM',                 href: getPermalink('/homes/erp-integrated-crm') },
        { text: 'Field Service Management',            href: getPermalink('/homes/erp-integrated-fsm') },
        { text: 'Warehouse & Inventory',               href: getPermalink('/homes/erp-integrated-warehouse-inventory') },
        { text: 'Sales & Distribution',                href: getPermalink('/homes/erp-integrated-sales-distribution') },
        { text: 'Manufacturing & Shopfloor',           href: getPermalink('/homes/erp-integrated-manufacturing-shopfloor') },
        { text: 'Enterprise & Partner Portals',        href: getPermalink('/homes/enterprise-partner-portals') },
        { text: 'ERP-Integrated Product Configurator', href: getPermalink('/homes/erp-integrated-product-configurator') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Overview',              href: getPermalink('/homes/overview') },
        { text: 'Why UpBuff',            href: getPermalink('/homes/why-upbuff') },
        { text: 'Integrations',          href: getPermalink('/homes/integrations') },
        { text: 'SAP Business One',      href: getPermalink('/homes/sap-business-one') },
        { text: 'Security & Compliance', href: getPermalink('/homes/security-compliance') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About',        href: getPermalink('/about') },
        { text: 'Blog',         href: getBlogPermalink() },
        { text: 'Contact',      href: getPermalink('/contact') },
        { text: 'Request Demo', href: getPermalink('/homes/request-demo') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy',   href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms',          href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn',  icon: 'tabler:brand-linkedin',  href: 'https://www.linkedin.com/company/upbuff' },
    { ariaLabel: 'X',         icon: 'tabler:brand-x',         href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook',  icon: 'tabler:brand-facebook',  href: '#' },
    { ariaLabel: 'RSS',       icon: 'tabler:rss',             href: getAsset('/rss.xml') },
  ],
  footNote: `&copy; ${new Date().getFullYear()} UpBuff Technologies. All rights reserved.`,
};