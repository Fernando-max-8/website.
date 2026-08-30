/**
 * config.js — SITE-WIDE SETTINGS
 * ------------------------------------------------------------
 * This is the only file you should need to touch to rebrand the
 * site: name, tagline, social links and legal copy all live here.
 * Nothing in this file references specific products or categories.
 */

const siteConfig = {
  brandName: "Aisle & Co.",
  brandInitial: "A&C",
  tagline: "Curated products. Better choices.",
  metaDescription:
    "Aisle & Co. is an independent, curated selection of products worth buying — hand-picked across technology, home, fitness and travel.",

  nav: [
    { label: "Home", href: "#home" },
    { label: "Shop", href: "#shop" },
    { label: "Categories", href: "#categories" },
    { label: "Featured", href: "#featured" },
    { label: "About", href: "#about" },
  ],

  hero: {
    eyebrow: "An independent selection",
    heading: "Fewer products.\nBetter considered.",
    subheading:
      "We spend the hours comparing specs, reading reviews and returning the disappointments — so you only ever see the shortlist.",
    ctaLabel: "Explore the selection",
    ctaHref: "#shop",
  },

  about: {
    eyebrow: "Why Aisle & Co.",
    heading: "An honest second opinion, before you buy.",
    body: "Every listing here has been researched and compared against its closest alternatives. We're not paid to feature a product, and we don't accept sponsorships — when you buy through one of our links, Amazon pays us a small referral fee at no extra cost to you. That's the entire business model.",
    points: [
      {
        title: "Independently chosen",
        text: "Nothing appears here because a brand asked us to include it.",
      },
      {
        title: "Actually compared",
        text: "Each pick is weighed against its category before it earns a place.",
      },
      {
        title: "Kept current",
        text: "Listings are revisited and retired as better options appear.",
      },
    ],
  },

  affiliateDisclosure:
    "Some links on this website are affiliate links. As an Amazon Associate, Aisle & Co. earns from qualifying purchases at no additional cost to you.",

  social: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    pinterest: "https://pinterest.com/",
  },

  footerNav: {
    Shop: [
      { label: "All products", href: "#shop" },
      { label: "Categories", href: "#categories" },
      { label: "Featured", href: "#featured" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "mailto:hello@example.com" },
    ],
    Legal: [
      { label: "Affiliate disclosure", href: "#disclosure" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of use", href: "#" },
    ],
  },
};
