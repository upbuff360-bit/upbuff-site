import { getPermalink } from './utils/permalinks';

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
          href: getPermalink('/platform/overview'),
        },
        {
          text: 'Why UpBuff',
          href: getPermalink('/platform/why-upbuff'),
        },
        {
          text: 'Security & Compliance',
          href: getPermalink('/platform/security-compliance'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'ERP-Integrated CRM',
          href: getPermalink('/products/erp-integrated-crm'),
        },
        {
          text: 'ERP-Integrated Field Service Management',
          href: getPermalink('/products/erp-integrated-fsm'),
        },
        {
          text: 'Warehouse & Inventory Management',
          href: getPermalink('/products/erp-integrated-warehouse-inventory'),
        },
        {
          text: 'Sales & Distribution Execution',
          href: getPermalink('/products/erp-integrated-sales-distribution'),
        },
        {
          text: 'Manufacturing & Shopfloor',
          href: getPermalink('/products/erp-integrated-manufacturing-shopfloor'),
        },
        {
          text: 'Enterprise & Partner Portals',
          href: getPermalink('/products/enterprise-partner-portals'),
        },
        {
          text: 'ERP-Integrated Product Configurator',
          href: getPermalink('/products/erp-integrated-product-configurator'),
        },
      ],
    },
    {
      text: 'By Industry',
      href: getPermalink('/industry/industry-solutions'),
    },
    {
      text: 'Integrations',
      links: [
        {
          text: 'Overview',
          href: getPermalink('/integrations/integrations'),
        },
        {
          text: 'SAP Business One',
          href: getPermalink('/integrations/sap-business-one'),
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [
    { text: 'Request Demo', href: getPermalink('/request-demo'), variant: 'primary' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'ERP-Integrated CRM',                 href: getPermalink('/products/erp-integrated-crm') },
        { text: 'Field Service Management',            href: getPermalink('/products/erp-integrated-fsm') },
        { text: 'Warehouse & Inventory',               href: getPermalink('/products/erp-integrated-warehouse-inventory') },
        { text: 'Sales & Distribution',                href: getPermalink('/products/erp-integrated-sales-distribution') },
        { text: 'Manufacturing & Shopfloor',           href: getPermalink('/products/erp-integrated-manufacturing-shopfloor') },
        { text: 'Enterprise & Partner Portals',        href: getPermalink('/products/enterprise-partner-portals') },
        { text: 'ERP-Integrated Product Configurator', href: getPermalink('/products/erp-integrated-product-configurator') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Overview',              href: getPermalink('/platform/overview') },
        { text: 'Why UpBuff',            href: getPermalink('/platform/why-upbuff') },
        { text: 'Security & Compliance', href: getPermalink('/platform/security-compliance') },
        { text: 'Integrations',          href: getPermalink('/integrations/integrations') },
        { text: 'SAP Business One',      href: getPermalink('/integrations/sap-business-one') },
        { text: 'By Industry',           href: getPermalink('/industry/industry-solutions') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About',        href: getPermalink('/about') },
        { text: 'Contact',      href: getPermalink('/contact') },
        { text: 'Request Demo', href: getPermalink('/request-demo') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy',   href: getPermalink('/legal/privacy') },
        { text: 'Terms of Service', href: getPermalink('/legal/terms') },
        { text: 'Data Protection',  href: getPermalink('/legal/data-protection') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms',          href: getPermalink('/legal/terms') },
    { text: 'Privacy Policy', href: getPermalink('/legal/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn',  icon: 'tabler:brand-linkedin',  href: 'https://www.linkedin.com/company/upbuff/' },
    { ariaLabel: 'X',         icon: 'tabler:brand-x',         href: 'https://x.com/upbuff_crm' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/upbuff.crm/' },
    { ariaLabel: 'Facebook',  icon: 'tabler:brand-facebook',  href: 'https://www.facebook.com/upbuff.crm/' },
    { ariaLabel: 'YouTube',   icon: 'tabler:brand-youtube',   href: 'https://www.youtube.com/channel/UCZRjZv8JTKev2fVdFzhPXyw' },
  ],
  footNote: `&copy; ${new Date().getFullYear()} UpBuff Technologies. All rights reserved.`,
};