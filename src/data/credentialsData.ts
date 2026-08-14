import mondayCertImg from '../assets/images/monday_cert_1.jpg';
import n8nBadge1Img from '../assets/images/n8n_badge_1.png';
import n8nBadge2Img from '../assets/images/n8n_badge_2.png';

export interface ExperienceItem {
  role: string;
  company: string;
  period?: string;
  description: string;
  bullets?: string[];
}

export interface SocialItem {
  name: string;
  url: string;
  handle?: string;
  type?: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  company: string;
  location?: string;
  phone?: string;
  email?: string;
  projectScope?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeColor?: string;
  description: string;
  certId?: string;
  issueDate?: string;
  skills?: string[];
  image?: string;
  images?: string[];
}

export const resumeData = {
  name: 'Ray Francis Coon',
  title: 'Operations & Automation Specialist',
  location: 'Rizal, Philippines',
  email: 'rancecoonbusiness@gmail.com',
  phone: '+(63) 945 571 5348',
  summary: 'Certified Operations & Automation Specialist with 4 years of experience scaling 6 and 7-figure agencies. I specialize in identifying bottlenecks before they break a business. I build the systems that let agencies focus on execution. Proven track record of saving 1,800+ hours annually and driving 80% efficiency gains through Monday.com architecture and n8n automation.',
  education: {
    degree: 'Senior Highschool Graduate - Accountancy and Business Management',
    school: 'Far Eastern University - Roosevelt'
  },
  languages: ['English', 'Tagalog'],
  experience: [
    {
      role: 'Chief Operations Officer',
      company: 'Creative Vision',
      period: 'Recent',
      description: 'Saved 1,800+ hours annually by architecting a custom Work OS in Monday.com and implementing n8n automations. Delivered an 80% efficiency boost by auditing project chaos and building scalable video production infrastructure. Managed end-to-end production pipelines (100% on-time asset delivery). Integrated AI-driven systems (n8n, Gemini, Claude Code) reducing manual tasks by 60%.',
      bullets: [
        'Saved 1,800+ hours annually by architecting a custom Work OS in Monday.com and implementing n8n automations to eliminate manual data entry.',
        'Delivered an 80% efficiency boost by auditing existing "project chaos" and building a scalable infrastructure for video production and content creation.',
        'Managed end-to-end production pipelines as measured by 100% on-time delivery of creative assets across all internal and client-facing departments.',
        'Integrated AI-driven systems (n8n, Gemini, Claude Code) to reduce manual tasks by 60%, allowing the leadership team to focus on high-level growth.'
      ]
    },
    {
      role: 'Video Editing Director',
      company: 'Creative Vision',
      period: 'Previous Role',
      description: 'Reduced post-production turnaround time by 35% with standardized workflows and automations. Directed a high-performing video editor team maintaining 90%+ client satisfaction. Streamlined revision lifecycle with a centralized feedback system.',
      bullets: [
        'Reduced post-production turnaround time by 35% by developing and refining standardized workflows and automations.',
        'Directed a high-performing team of video editors, overseeing creative quality and storytelling for social media assets while maintaining a 90%+ client satisfaction rate.',
        'Streamlined the revision lifecycle by implementing a centralized feedback system.'
      ]
    },
    {
      role: 'Marketing Director',
      company: 'Just Simply Marketing',
      location: 'Toronto, Canada - Remote',
      period: 'Previous Role',
      description: 'Supervised and led marketing projects (Lead Magnets, Webinars, Sales Funnels, Offer Creation). Contributed in annual revenue to $1M+ by building a scalable operational foundation and automating core workflows. Engineered high-converting sales funnels using GoHighLevel and ClickFunnels. Success stories featured in The Business LA Mag.',
      bullets: [
        'Supervised and led marketing projects, including Lead Magnets, Webinars, Sales Funnels, and Offer Creation.',
        'Contributed in annual revenue to $1M+ by building a scalable operational foundation from the ground up, automating core video editing and marketing workflows.',
        'Engineered high-converting sales funnels using GoHighLevel and ClickFunnels.',
        'Contributed in media recognition for the agency, with success stories featured in The Business LA Mag.'
      ]
    },
    {
      role: 'Executive Assistant',
      company: 'Just Simply Marketing',
      location: 'Toronto, Canada - Remote',
      period: 'Previous Role',
      description: 'Provided multi-department support across Video Editing, Graphics Design, Social Media, Marketing, and Sales. Assisted in day-to-day operations and project management. Built Automated Systems, SOPs, and operational documentation.',
      bullets: [
        'Provided support across various departments, including Video Editing, Graphics Design, Social Media, Marketing, and Sales.',
        'Assisted in day-to-day operations and contributed to the management of different projects.',
        'Built Automated Systems, SOP’s, and other related documents to streamline and automate our operations.'
      ]
    },
    {
      role: 'Assistant Manager, Video Editing Department',
      company: 'Just Simply Marketing',
      location: 'Toronto, Canada - Remote',
      period: 'Previous Role',
      description: 'Managed video editing projects, ensuring quality control and deadline compliance. Innovated editing styles to improve output quality. Built Automated Systems and SOPs.',
      bullets: [
        'Managed and supervised video editing projects, ensuring quality control and adherence to deadlines.',
        'Innovated editing styles to improve creative output and streamline editing workflows.',
        'Built Automated Systems, SOP’s, and other related documents to streamline and automate our operations.'
      ]
    },
    {
      role: 'Video Editor',
      company: 'Just Simply Marketing',
      location: 'Toronto, Canada - Remote',
      period: 'Previous Role',
      description: 'Specialized in editing IG Reels, TikTok videos, and long-form video content aligned with client brand voice.',
      bullets: [
        'Specialized in editing IG Reels and TikTok videos, while also proficient in long-form video editing.',
        'Collaborated with clients to deliver engaging and creative video content that aligned with their brand voice.'
      ]
    }
  ],
  skillsGrouped: {
    operations: ['Monday.com', 'ClickUp', 'n8n', 'Notion', 'Slack', 'Discord', 'Project Management', 'Operations Management'],
    funnels: ['GoHighLevel', 'ClickFunnels', 'Funnelytics'],
    aiTech: ['Gemini', 'Google Antigravity', 'Claude Code', 'Bolt.new'],
    leadership: ['System Automation', 'System Creation', 'Team Development', 'Leadership']
  },
  skills: [
    'Monday.com',
    'ClickUp',
    'n8n',
    'Gemini',
    'Project Management',
    'Operations Management',
    'ClickFunnels',
    'GoHighLevel',
    'Google Antigravity',
    'Claude Code',
    'System Automation',
    'System Creation',
    'Funnelytics',
    'Notion',
    'Bolt.new',
    'Team Development',
    'Leadership',
    'Slack',
    'Discord'
  ],
  socials: [
    {
      name: 'Email Direct',
      url: 'mailto:rancecoonbusiness@gmail.com'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/639455715348'
    }
  ],
  references: [
    {
      name: 'Aubtin Golizadeh',
      role: 'Chief Operations Officer',
      company: 'JustSimplyMarketing LTD.',
      location: 'Canada',
      phone: '+1 (647) 779-2724'
    },
    {
      name: 'Kyle Astorga',
      role: 'Chief Executive Officer',
      company: 'CreativeVision',
      location: 'Caloocan, Philippines',
      phone: '+63 960 620 7919'
    }
  ],
  discProfile: {
    title: 'My DISC Profile',
    tagline: 'Understanding how I work and collaborate to deliver exceptional results',
    badge: 'DISC Assessment',
    traits: [
      {
        trait: 'Dominance',
        percentage: 47,
        label: 'Results-Driven',
        description: 'Results-oriented, decisive, and direct. I focus on achieving goals and overcoming challenges efficiently.'
      },
      {
        trait: 'Influence',
        percentage: 17,
        label: 'Communicative',
        description: 'Collaborative and communicative when needed, but prefer to let results speak for themselves.'
      },
      {
        trait: 'Steadiness',
        percentage: 26,
        label: 'Reliable & Consistent',
        description: 'Reliable and consistent in delivering quality work, creating stable systems that teams can depend on.'
      },
      {
        trait: 'Compliance',
        percentage: 10,
        label: 'Action-Focused',
        description: 'Action-focused over perfectionism, prioritizing practical solutions that drive real business outcomes.'
      }
    ]
  }
};

export const certificationsData: CertificationItem[] = [
  {
    id: 'monday-cert',
    title: 'Work Management Core Certification (Workflow & Automation Specialist)',
    issuer: 'Monday.com',
    year: 'Verified Certification',
    description: 'Certified Specialist in Work OS architecture, cross-departmental workflow optimization, custom board structures, and high-impact automations.',
    image: mondayCertImg
  },
  {
    id: 'google-pm',
    title: 'Project Management Professional Certificate',
    issuer: 'Google',
    year: 'In Progress',
    description: 'Professional certification covering end-to-end project lifecycle management, Agile/Scrum frameworks, risk mitigation, and operational leadership.'
  },
  {
    id: 'n8n-badges',
    title: 'n8n Course Level 1 & Level 2 Badges',
    issuer: 'n8n',
    year: 'Verified Credentials',
    description: 'Specialized badge certification in advanced node automation, API webhooks, data transformation, and AI tool integrations.',
    images: [n8nBadge1Img, n8nBadge2Img]
  }
];
