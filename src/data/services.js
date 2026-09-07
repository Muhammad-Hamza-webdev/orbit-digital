export const serviceCategories = [
  {
    id: "develop",
    badge: "Category 1",
    title: "Develop",
    heading: "Category 1 — Develop",
    description: "Your website is the first impression most customers get. We build it to load fast, rank well, and convert — on whichever platform fits your business best.",
    services: [
      {
        slug: "wordpress-websites",
        title: "WordPress Websites",
        category: "Develop",
        description: "We design and build custom WordPress websites that are fast, easy to manage, and optimized for search engines from day one — no bloated page builders slowing you down.",
        deliverables: [
          "Custom theme design (no generic templates)",
          "Speed and Core Web Vitals optimization",
          "SEO-friendly structure and clean code",
          "Easy content management for your team"
        ]
      },
      {
        slug: "shopify-stores",
        title: "Shopify Stores",
        category: "Develop",
        description: "We build Shopify stores designed to convert browsers into buyers, with clean product pages, fast checkout flows, and a design that matches your brand.",
        deliverables: [
          "Custom Shopify theme setup and design",
          "Product page and collection optimization",
          "Payment, shipping, and app integrations",
          "Store speed and mobile optimization"
        ]
      },
      {
        slug: "custom-websites-nextjs",
        title: "Custom Websites (Next.js)",
        category: "Develop",
        description: "For businesses that need more than a template can offer, we build fully custom websites in Next.js — fast, scalable, and built to handle growth without breaking.",
        deliverables: [
          "Modern Next.js architecture and clean code",
          "Fully responsive design (mobile to desktop)",
          "Built for strong Core Web Vitals scores",
          "Scalable codebase that grows with your business"
        ]
      },
      {
        slug: "programming-custom-web-apps",
        title: "Programming & Custom Web Apps",
        category: "Develop",
        description: "Beyond websites, we build the custom tools, APIs, and web applications that power your internal operations or customer-facing products.",
        deliverables: [
          "Custom API development and integrations",
          "Internal business tools and dashboards",
          "Third-party software and CRM integrations",
          "Ongoing maintenance and support"
        ]
      }
    ]
  },
  {
    id: "automate",
    badge: "Category 2",
    title: "Automate",
    heading: "Category 2 — Automate",
    description: "Manual, repetitive work costs your team hours every week. We automate it, so your people can focus on higher-value work.",
    services: [
      {
        slug: "ai-automation",
        title: "AI Automation",
        category: "Automate",
        description: "We map your everyday business workflows — lead follow-ups, order updates, internal approvals — and automate them using AI and no-code/low-code tools, saving your team hours every week.",
        deliverables: [
          "Workflow mapping and automation strategy",
          "Lead capture and follow-up automation",
          "Internal process and reporting automation",
          "Ongoing monitoring and optimization"
        ]
      },
      {
        slug: "ai-tools-integration",
        title: "AI Tools Integration",
        category: "Automate",
        description: "We integrate AI directly into how your business already runs — chatbots that actually answer customer questions, content generation tools, and CRM automation that keeps your pipeline moving.",
        deliverables: [
          "AI chatbot setup for websites and social channels",
          "AI-assisted content generation workflows",
          "CRM automation and lead scoring",
          "Custom AI tool integration for your specific stack"
        ]
      }
    ]
  },
  {
    id: "create",
    badge: "Category 3",
    title: "Create",
    heading: "Category 3 — Create",
    description: "Good design is what makes people stop, look, and remember you. We create visuals built around how your audience actually behaves online.",
    services: [
      {
        slug: "graphic-designing",
        title: "Graphic Designing",
        category: "Create",
        description: "From logos to full brand identities to everyday social content, we design visuals that keep your brand consistent and instantly recognizable across every channel.",
        deliverables: [
          "Logo design and brand identity systems",
          "Social media post and ad creative design",
          "Marketing collateral and print design",
          "Packaging and label design"
        ]
      },
      {
        slug: "video-editing",
        title: "Video Editing",
        category: "Create",
        description: "We edit short-form reels, paid ad creatives, YouTube content, and product videos designed to hold attention and drive action, not just look polished.",
        deliverables: [
          "Reels and short-form social video editing",
          "Paid ad video creatives",
          "YouTube and long-form video editing",
          "Product and promotional video editing"
        ]
      }
    ]
  },
  {
    id: "grow",
    badge: "Category 4",
    title: "Grow",
    heading: "Category 4 — Grow",
    description: "Traffic without conversion is just noise. Our growth services are built to turn visibility into measurable revenue.",
    services: [
      {
        slug: "social-media-management",
        title: "Social Media Management",
        category: "Grow",
        description: "We plan, create, and post consistent content across your social channels, so your brand shows up reliably without you having to think about it daily.",
        deliverables: [
          "Monthly content calendar planning",
          "Post scheduling and publishing",
          "Community engagement and response management",
          "Monthly performance reporting"
        ]
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        category: "Grow",
        description: "Beyond regular posting, we build organic growth strategies that expand your reach and turn followers into genuine customers over time.",
        deliverables: [
          "Organic growth strategy and audience targeting",
          "Content strategy aligned to business goals",
          "Hashtag, trend, and platform-specific optimization",
          "Growth tracking and strategy adjustments"
        ]
      },
      {
        slug: "performance-marketing",
        title: "Performance Marketing",
        category: "Grow",
        description: "We run Facebook and Google Ads with one focus: return on ad spend. Every campaign is built, tested, and optimized against real revenue numbers, not just clicks.",
        deliverables: [
          "Facebook & Instagram Ads management",
          "Google Ads (Search, Display, Shopping)",
          "Conversion tracking and pixel setup",
          "Ongoing A/B testing and ROI optimization"
        ]
      },
      {
        slug: "seo",
        title: "SEO",
        category: "Grow",
        description: "We improve where you rank on Google through a combination of on-page fixes, technical SEO, and off-page authority building — so you get found by people already searching for what you offer.",
        deliverables: [
          "On-page SEO (content, structure, metadata)",
          "Technical SEO (speed, indexing, Core Web Vitals)",
          "Off-page SEO and authority building",
          "Keyword research and monthly rank tracking"
        ]
      }
    ]
  }
];

export const servicesData = serviceCategories.flatMap((cat) => cat.services);
