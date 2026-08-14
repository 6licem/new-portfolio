import { PortfolioItem, ServiceItem, Testimonial, FAQItem } from '../types';
import lucasImg from '../assets/images/lucas_siverns.jpg';
import markImg from '../assets/images/mark_pascua.jpg';
import kyleImg from '../assets/images/kyle_astorga.jpg';
import creativeVisionImg from '../assets/images/IMG_5253.png';
import justSimplyMarketingImg from '../assets/images/Copy of IMG_9167.png';

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'scale-coaching-vsl',
    title: 'High-Ticket Executive Coaching VSL Funnel',
    clientCategory: 'Coaching',
    summary: 'A streamlined 3-step VSL funnel with dynamic calendar booking, qualification survey, and SMS reminder workflows.',
    metric: '+312%',
    metricLabel: 'Qualified Sales Calls Booked',
    image: creativeVisionImg,
    pagesIncluded: ['Opt-in VSL Page', 'Multi-Step Application Survey', 'Calendar Booking', 'VIP Thank You & Pre-call Asset'],
    features: ['Custom GHL Video Player', 'Instant SMS/Email Confirmation', 'Automated No-Show Followup', 'Stripe Deposit Integration'],
    deliverables: ['Custom Mobile-Optimized Layout', 'Complete Snapshot Export', 'Tagging & Pipeline Automation'],
    ghlFeaturesUsed: ['GHL Forms & Surveys', 'Calendars', 'Workflows', 'Trigger Links'],
    clientName: 'Marcus Vance',
    clientRole: 'Founder, Vance Growth Group',
    testimonialExcerpt: 'Rance transformed our messy 5-tool stack into 1 pristine GoHighLevel funnel. Our conversion rates tripled within 14 days.'
  },
  {
    id: 'agency-leadgen-snapshot',
    title: 'JustSimplyMarketing Funnel & Operations Engine',
    clientCategory: 'Agency',
    summary: '35+ high-converting sales funnels, custom GoHighLevel architecture, and streamlined agency operations built for JustSimplyMarketing.',
    metric: '35+ Funnels',
    metricLabel: 'Built & Deployed',
    image: justSimplyMarketingImg,
    pagesIncluded: ['High-Ticket VSL Page', 'Audit Request Calculator', 'Booking Calendar', 'Client Portal Hub'],
    features: ['Custom GHL CSS Styling', 'Instant Pipeline Stage Trigger', 'A/B Testing Setup', 'n8n & Monday.com Webhook Sync'],
    deliverables: ['35+ Sales Funnels Built', 'Operations & PM Leadership', 'Nurture Sequence Workflows'],
    ghlFeaturesUsed: ['GHL Funnels', 'Pipelines', 'Custom Values', 'LC SMS Engine'],
    clientName: 'Lucas Siverns',
    clientRole: 'Marketing Director, JustSimplyMarketing',
    testimonialExcerpt: 'Ray is reliable, trustworthy, hardworking, and dedicated. He made sure the job got done to the highest level across 35+ funnels.'
  },
  {
    id: 'creativevision-workos-ai',
    title: 'CreativeVision Work OS & AI Automation Engine',
    clientCategory: 'Agency',
    summary: 'Custom Monday.com Work OS architecture, n8n autonomous AI agents, and financial automation engines built for CreativeVision.',
    metric: '1,800+ Hrs',
    metricLabel: 'Saved Annually',
    image: creativeVisionImg,
    pagesIncluded: ['Monday.com Executive Board', 'Client Intake Portal', 'Autonomous AI Agent Workflows', 'Payslip & Finance Dashboard'],
    features: ['Monday.com Custom Work OS', 'n8n AI Agents & Webhooks', 'Automated Payslip Engine', 'Discord & Gmail Bot Sync'],
    deliverables: ['1,800+ Hours Saved Annually', '80% Boost in Productivity', 'Full Workflow Automation'],
    ghlFeaturesUsed: ['n8n Pipelines', 'Monday.com Work OS', 'Custom Webhooks', 'AI Agents'],
    clientName: 'Kyle Astorga',
    clientRole: 'CEO, CreativeVision',
    testimonialExcerpt: 'Working with you is an awesome opportunity... We SAVED a lot of time and allocated it to make money!'
  },
  {
    id: 'ecom-product-launch',
    title: 'Supplement Brand VIP Pre-Launch & Upsell Funnel',
    clientCategory: 'E-Commerce',
    summary: 'Custom order funnel featuring 1-click order bumps, post-purchase upsells, and automated customer re-engagement.',
    metric: '$184K',
    metricLabel: 'Generated in 30 Days',
    image: creativeVisionImg,
    pagesIncluded: ['VIP Pre-Order Page', 'One-Step Checkout with Bump', 'Dynamic Upsell Page 1', 'Order Confirmation'],
    features: ['1-Click Upsell Logic', 'Custom GHL Product Cards', 'Abandoned Cart SMS Recovery', 'VIP Membership Tagging'],
    deliverables: ['Complete E-com Funnel', 'Payment Gateway Integration', 'Inventory Tag Sync'],
    ghlFeaturesUsed: ['GHL Payments', 'Funnel Bumps/Upsells', 'LC Phone Workflows', 'Contact Tags'],
    clientName: 'David Sterling',
    clientRole: 'Co-founder, NutraPeak',
    testimonialExcerpt: 'Rance is the absolute master of GoHighLevel. He built an ecom upsell flow that boosted our average order value by $28.'
  },
  {
    id: 'local-solar-quote',
    title: 'Local Services Solar Savings Calculator Funnel',
    clientCategory: 'Local Service',
    summary: 'Interactive quote questionnaire funnel designed for maximum conversion on mobile devices for local contractors.',
    metric: '38.4%',
    metricLabel: 'Mobile Conversion Rate',
    image: creativeVisionImg,
    pagesIncluded: ['Address Search & Estimate Page', 'Qualifying Question Steps', 'Instant Contact Capture', 'Confirmation & Call Booking'],
    features: ['Zip Code Validation', 'Real-time Lead Distribution', 'Instant Missed Call Text-Back', 'GHL Mobile App Sync'],
    deliverables: ['Custom Mobile Layout', 'Reputation Management Funnel', 'Lead Distribution Snapshot'],
    ghlFeaturesUsed: ['GHL Mobile Surveys', 'Smart Lists', 'LC SMS Engine', 'Opportunity Pipelines'],
    clientName: 'Carlos Ramirez',
    clientRole: 'Managing Director, Apex Solar',
    testimonialExcerpt: 'Our cost per lead dropped by 62% immediately after launching Rance’s GoHighLevel funnel design.'
  },
  {
    id: 'saas-onboarding-portal',
    title: 'Micro-SaaS Free Trial & Membership Portal',
    clientCategory: 'SaaS',
    summary: 'Branded SaaS trial registration funnel paired with a custom GoHighLevel Client Membership & Course Portal.',
    metric: '+190%',
    metricLabel: 'Trial to Paid Conversion',
    image: creativeVisionImg,
    pagesIncluded: ['SaaS Feature Landing Page', '14-Day Free Trial Opt-in', 'Custom Membership Dashboard', 'Onboarding Walkthrough'],
    features: ['Branded CSS Course Portal', 'Automated Access Granting', 'User Activity Tracking', 'Stripe Recurring Billing'],
    deliverables: ['SaaS Landing Funnel', 'Custom Membership Theme', 'Full Onboarding Sequence'],
    ghlFeaturesUsed: ['GHL Courses/Membership', 'Custom Domains', 'Workflow Triggers', 'Stripe SaaS Billing'],
    clientName: 'Elena Rostova',
    clientRole: 'Head of Growth, SyncFlow AI',
    testimonialExcerpt: 'Rance delivered clean, beautiful design alongside airtight GHL workflows. Couldn’t recommend him higher.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'monday-systems',
    title: 'Monday.com Systems',
    tagline: 'Automated Workflows & AI Integrations',
    description: 'Automated Workflows, AI Integrations, and custom Work OS architecture allowing high-volume teams to focus purely on execution.',
    deliverables: [
      'Automated Workflow Engine & Task Routing',
      'AI Integrations for automated processing',
      'Custom Board Architecture & Dashboards',
      'Elimination of administrative bottlenecks'
    ],
    iconName: 'Workflow',
    popularFor: 'High-Volume Agencies & Teams',
    timelineEstimate: '3 - 5 Days',
    image: creativeVisionImg,
    resultsMetrics: [
      { label: 'Hours Saved', value: '1,800+' },
      { label: 'Productivity Boost', value: '80%' },
      { label: 'Team Growth', value: 'Strategic' }
    ],
    caseStudy: {
      client: 'CreativeVision',
      industry: 'Agency Operations',
      metric: '1,800+ Hours Saved Annually',
      outcome: 'Implemented automated systems and Work OS architecture that eliminated redundancies, saving over 1,800 hours annually.',
      highlight: '80% boost in team productivity'
    },
    subServices: [
      { name: 'Automated Workflow Creation', desc: 'Custom triggers, stage movements, and automated task assignments.' },
      { name: 'AI Integration in Monday', desc: 'Automated document processing, AI summary generation, and status alerts.' },
      { name: 'Executive Operations Dashboards', desc: 'Real-time KPI tracking across all active projects and team workloads.' },
      { name: 'Client Onboarding Portals', desc: 'Streamlined client intake forms synced directly to production boards.' }
    ]
  },
  {
    id: 'n8n-automation',
    title: 'N8N Automation',
    tagline: 'AI Agents & Cross-Platform Integrations',
    description: 'AI Agents, cross-platform integrations, APIs, and flexible automations serving as the operational backbone for scaling agencies.',
    deliverables: [
      'Autonomous AI Agents & API Integrations',
      'Cross-Platform Webhook & Data Sync',
      'Automated Payslip & Financial Engines',
      'Automated Email & Notification Workflows'
    ],
    iconName: 'Workflow',
    popularFor: 'High-Volume Agencies & SaaS',
    timelineEstimate: '2 - 4 Days',
    image: creativeVisionImg,
    resultsMetrics: [
      { label: 'Hours Saved', value: '1,800+' },
      { label: 'Productivity Boost', value: '80%' },
      { label: 'Team Growth', value: 'Strategic' }
    ],
    caseStudy: {
      client: 'CreativeVision',
      industry: 'AI Agents & Operations',
      metric: 'AI Agent Ecosystem',
      outcome: 'Built an autonomous AI Agent ecosystem handling communication, follow-ups, finance tracking, and payslip automation.',
      highlight: 'Google Drive, Gmail, Docs & Discord Bots AI Agent'
    },
    subServices: [
      { name: 'Autonomous AI Agents', desc: 'n8n pipelines utilizing LLMs for autonomous email drafting and document triage.' },
      { name: 'Financial & Payslip Automation', desc: 'Automated invoice generation, payment syncing, and payslip distribution.' },
      { name: 'Custom API & Webhook Pipelines', desc: 'Connecting non-native platforms with enterprise reliability.' },
      { name: 'Multi-Channel Email Automation', desc: 'Transactional and nurture email triggers driven by custom business logic.' }
    ]
  },
  {
    id: 'ghl-funnels',
    title: 'GHL Funnels',
    tagline: 'High-Ticket Funnel Architecture',
    description: 'High-converting sales funnels, custom landing pages, VSLs, application flows, and high-ticket conversion architecture in GoHighLevel.',
    deliverables: [
      'VSL, Application, & Squeeze Page Builds',
      'Custom CSS Styling & Brand-Aligned UI',
      '2-Step Checkouts & 1-Click Order Bumps',
      'Native GHL Calendar & Survey Funnels'
    ],
    iconName: 'Layout',
    popularFor: 'Coaches, Consultants & Agencies',
    timelineEstimate: '3 - 5 Days',
    image: justSimplyMarketingImg,
    resultsMetrics: [
      { label: 'Funnels Built', value: '35+' },
      { label: 'Conversion Rate', value: 'High' },
      { label: 'Focus', value: 'Marketing' }
    ],
    caseStudy: {
      client: 'JustSimplyMarketing',
      industry: 'Funnels & Marketing',
      metric: '35+ Funnels Built',
      outcome: 'Engineered over 35+ high-converting sales funnels for leading brands, personal influencers, and high-ticket offers.',
      highlight: '35+ High-Converting Funnels Built'
    },
    subServices: [
      { name: 'VSL & Application Funnels', desc: 'Video sales letter pages with timed call-to-action buttons.' },
      { name: '2-Step Checkout & Order Bumps', desc: 'Streamlined checkout pages engineered for maximum AOV.' },
      { name: 'Custom GHL CSS Styling', desc: 'Eliminating standard template looks with bespoke code.' },
      { name: 'Squeeze & Opt-in Pages', desc: 'High-converting lead capture pages for digital assets.' }
    ]
  },
  {
    id: 'operations-management',
    title: 'Operations & Project Management',
    tagline: 'Team Leadership & Efficiency Optimization',
    description: 'End-to-end operations and project management for teams of 40+ members, eliminating bottlenecks and maximizing execution speed.',
    deliverables: [
      'End-to-End Operations & PM Leadership',
      'Workflow Optimization & Process Audits',
      'Direct Management for Teams of 40+',
      'Execution Speed & Quality Control'
    ],
    iconName: 'GraduationCap',
    popularFor: 'Scaling Agencies & Organizations',
    timelineEstimate: 'Ongoing / Advisory',
    image: justSimplyMarketingImg,
    resultsMetrics: [
      { label: 'Hours Saved', value: '1,800+' },
      { label: 'Systems Built', value: 'Multiple' },
      { label: 'Projects Completed', value: '100+' }
    ],
    caseStudy: {
      client: 'JustSimplyMarketing, Cornerstone, and CreativeVision',
      industry: 'Operations & PM',
      metric: '100+ Projects Completed',
      outcome: 'Handled end-to-end operations and project management across multiple organizations, saving 1,800+ hours across 100+ projects.',
      highlight: '100+ Projects Completed'
    },
    subServices: [
      { name: 'Operations Leadership', desc: 'Structuring agency workflows, communication channels, and SOPs.' },
      { name: 'Project Management & Execution', desc: 'Sprint planning, deadline enforcement, and quality assurance.' },
      { name: 'Team Leadership (40+ People)', desc: 'Direct management, delegation, and performance optimization.' },
      { name: 'Bottleneck Identification & Fixes', desc: 'Auditing friction points in operations and deploying fast solutions.' }
    ]
  },
  {
    id: 'custom-websites',
    title: 'Custom Websites',
    tagline: 'Brand Alignment & Conversion Psychology',
    description: 'Bespoke websites engineered for perfect brand alignment, marketing psychology, sub-second load speeds, and high conversion rates.',
    deliverables: [
      'Brand-Aligned Premium Web Architecture',
      'Conversion Psychology & Strategic Layouts',
      'Ultra-Fast Sub-Second Loading Speeds',
      'Mobile-First Responsive Web Design'
    ],
    iconName: 'Layout',
    popularFor: 'High-Ticket Services & Brands',
    timelineEstimate: '3 - 5 Days',
    subServices: [
      { name: 'High-Converting Landing Pages', desc: 'Designed for immediate trust, clear value props, and conversion.' },
      { name: 'Sales & Marketing Psychology', desc: 'Strategic visual hierarchy, headline framing, and CTA positioning.' },
      { name: 'Custom Responsive Development', desc: 'Pixel-perfect across all screen sizes with smooth motion effects.' },
      { name: 'Speed & SEO Optimization', desc: 'Compressed assets, fast image serving, and semantic HTML structure.' }
    ]
  },
  {
    id: 'custom-systems',
    title: 'Custom Systems',
    tagline: 'Tailored Multi-Platform Tech Stacks',
    description: 'Custom tech ecosystems integrating n8n, Monday.com, custom web platforms, and APIs built specifically around your agency needs.',
    deliverables: [
      'Unified Tech Stack (n8n + Monday + Web)',
      'Custom Web Applications & Portals',
      'Bespoke Database & API Integrations',
      'Tailored End-to-End Agency Solutions'
    ],
    iconName: 'ArrowRightLeft',
    popularFor: 'Complex Agencies & Enterprises',
    timelineEstimate: '4 - 7 Days',
    subServices: [
      { name: 'Multi-Tool Ecosystem Integration', desc: 'Connecting n8n, Monday, GHL, and custom web apps into one flow.' },
      { name: 'Custom Web Applications', desc: 'Bespoke web platforms built with React, Node.js, and custom APIs.' },
      { name: 'Custom Database Architecture', desc: 'Structured data management tailored to complex business logic.' },
      { name: 'Tailored Technical Solutions', desc: 'Solving unique business bottlenecks with custom engineering.' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Lucas Siverns',
    role: 'Marketing Director',
    company: 'JustSimplyMarketing',
    avatar: lucasImg,
    content: "Ray my guy! I don't know how long we worked together tbh, a little over a year? but honestly bro, with your dedication and work ethic it felt like enough hours to fill 10 years haha. I have never questioned your dedication to your craft and have always admired your ability to lock in, focus up, and make sure that the job gets done no matter how impossible of an ask it may seem. You are reliable, trustworthy, hardworking, dedicated, and one of the most loyal people I have had the pleasure to work with. Honestly bro, if any of your clients are questioning your integrity or think that you are promising them is insane, tell them to call me. I don't even have to know what the job is, I know that you'll not only get it done, but get it done to the highest level, with the most care, passion, love, and dedication humanly possible.",
    metric: 'Verified Reference',
    rating: 5
  },
  {
    id: '2',
    name: 'Mark Pascua',
    role: 'Manager',
    company: 'CreativeVision',
    avatar: markImg,
    content: "Working with you has been an incredible experience. You've not only shown me how to lead our team effectively but also helped me understand each editor's unique strengths and personalities. Your approach to leadership is something I truly admire.",
    metric: 'Leadership & Operations',
    rating: 5
  },
  {
    id: '3',
    name: 'Kyle Astorga',
    role: 'CEO',
    company: 'CreativeVision',
    avatar: kyleImg,
    content: "Hey man! Working with you is an awesome opportunity to work with my business. I remember the day I started the business. It was literally from scratch, but you being here makes the money flow in fast! We SAVED a lot of time and allocated it to make money! Also you're a hardworking guy who wants to collaborate with like-minded people, and that's why you're easy to work with. You have a sense of responsibility and can achieve things on your own! Thanks man, and God Bless you!",
    metric: 'Time & Revenue Scale',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How fast can you build and launch my custom sales funnel?',
    answer: 'Most custom funnel builds (Opt-in + VSL / Sales Page + Application + Thank You Page) are completed within 3 to 5 business days once your copy and brand guidelines are approved. Express 48-hour turnarounds are also available upon request.'
  },
  {
    question: 'Which funnel platforms do you build in?',
    answer: 'I build custom, high-converting funnels across all major industry platforms including GoHighLevel, ClickFunnels, Shopify, WordPress/WooCommerce, and custom HTML/CSS frameworks.'
  },
  {
    question: 'Do you help with funnel strategy and conversion rate optimization?',
    answer: 'Yes! Every funnel build includes an architectural strategy audit where we structure your offer hierarchy, page flow, 1-click order bumps, and automated follow-up logic to maximize Average Order Value (AOV) and conversion rate.'
  },
  {
    question: 'Will my sales funnel be fully mobile-optimized?',
    answer: '100% yes. Over 70% of funnel traffic comes from mobile devices. Every page layout, video player, form field, and button target is hand-crafted and tested for high-speed mobile conversion.'
  },
  {
    question: 'What if I need revisions or updates after my funnel launches?',
    answer: 'All projects include 14 days of complimentary post-launch support and conversion monitoring to ensure all webhooks, tracking pixels, and automated sequences perform flawlessly in your live campaigns.'
  }
];

export const QUICK_STATS = [
  { label: 'High-Converting Funnels', value: '65+' },
  { label: 'Avg Conversion Lift', value: '+240%' },
  { label: 'Turnaround Speed', value: '3-5 Days' },
  { label: 'Client Satisfaction', value: '100%' }
];
