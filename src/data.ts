/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Skill } from './types';

// Image paths are imported or used directly as string variables that match the generated paths
export const ZAMAR_PHOTO_URL = '/src/assets/images/zamar_portrait.png';

// Pulse Images
export const PULSE_MOCKUP_URL = '/src/assets/images/pulse_hero_mockup_1783840232190.jpg';
export const PULSE_HISTORY_URL = '/src/assets/images/pulse_history_mockup_1783840247985.jpg';
export const PULSE_SLA_URL = '/src/assets/images/pulse_sla_mockup_1783840264776.jpg';
export const PULSE_REPORT_URL = '/src/assets/images/pulse_reporting_mockup_1783840279037.jpg';

// Chop Betta Images
export const CHOPBETTA_MOCKUP_URL = '/src/assets/images/chopbetta_hero_mockup_1783841606727.jpg';
export const CHOPBETTA_MENU_URL = '/src/assets/images/chopbetta_menu_mockup_1783841621220.jpg';
export const CHOPBETTA_CHECKOUT_URL = '/src/assets/images/chopbetta_checkout_mockup_1783841633902.jpg';
export const CHOPBETTA_FOOD_DETAIL_URL = '/src/assets/images/chopbetta_food_detail_mockup_1783841644939.jpg';

// Waaka Images
export const WAAKA_MOCKUP_URL = '/src/assets/images/waaka_explore_mockup_916_1783841033350.jpg';
export const WAAKA_EXPLORE_URL = '/src/assets/images/waaka_sunset_mockup_916_1783841050373.jpg';
export const WAAKA_BOOKING_URL = '/src/assets/images/waaka_booking_mockup_916_1783841066041.jpg';
export const WAAKA_SAVED_URL = '/src/assets/images/waaka_saved_mockup_916_1783841078422.jpg';

// WeMatch Images
export const WEMATCH_MOCKUP_URL = '/src/assets/images/wematch_hero_mockup_1783842303225.jpg';
export const WEMATCH_DISCOVERY_URL = '/src/assets/images/wematch_discovery_mockup_1783842315446.jpg';
export const WEMATCH_CHAT_URL = '/src/assets/images/wematch_chat_mockup_1783842347667.jpg';
export const WEMATCH_SUCCESS_URL = '/src/assets/images/wematch_success_mockup_1783842332715.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'pulse',
    title: 'Pulse',
    subtitle: 'Concept Project  •  UX/UI Designer',
    description: 'Pulse is a UX/UI design exploration for a modern Network Operations Center dashboard focused on uptime visibility, incident awareness, and operational clarity for technical teams.',
    category: 'Concept Project',
    year: '2026',
    type: 'desktop',
    accentColor: 'amber',
    accentHex: '#F59E0B',
    image: PULSE_MOCKUP_URL,
    caseStudy: {
      heroTitle: 'Pulse',
      heroSubtitle: 'A UX/UI design exploration for a modern Network Operations Center dashboard focused on uptime visibility, incident awareness, and operational clarity for technical teams.',
      heroImage: PULSE_MOCKUP_URL,
      challengeLabel: 'THE PROBLEM',
      challengeTitle: 'Complexity in Chaos',
      challengeText: 'Network Operations Centers struggle with fragmented data across multiple legacy systems. Calculating downtime manually is extremely slow and error-prone, which compromises real-time incident responses and degrades overall SLA compliance reporting.',
      challengePoints: [
        'Manual spreadsheet operations taking hours of daily developer time.',
        'Fragmented infrastructure visibility across isolated alert managers.',
        'Significant risk of financial penalties due to inaccurate SLA calculations.'
      ],
      solutionLabel: 'THE SOLUTION',
      solutionTitle: 'Pulse: A Unified Heartbeat',
      solutionText: 'A unified high-performance workspace that aggregates live metrics into a single control panel. It automates downtime audits and presents proactive compliance trackers to elevate overall operational speed and clarity.',
      challengePoints2: [
        'Consolidated infrastructure health monitoring in one glass pane.',
        'Instant visual SLA warning indicators before breach thresholds.',
        'Automated history audit logs for rapid post-incident investigation.'
      ],
      solutionMetrics: [
        { value: '4', label: 'SCREENS DESIGNED' },
        { value: 'Concept', label: 'PROJECT TYPE' }
      ],
      featuresTitle: 'Screens Designed.',
      featuresSubtitle: 'High-fidelity user interfaces designed to streamline network operations.',
      features: [
        {
          id: 'p1_f1',
          title: 'Dashboard Overview',
          description: 'Aggregates real-time service health, live uptime metrics, and overall incident activity in a unified control center.',
          icon: 'LayoutDashboard'
        },
        {
          id: 'p1_f2',
          title: 'SLA Monitoring',
          description: 'Monitors compliance thresholds, warning markers, and contractual uptime parameters per client SLA agreement.',
          icon: 'Calculator'
        },
        {
          id: 'p1_f3',
          title: 'Incident Reporting',
          description: 'Enables operators to log and track active network outages, critical response stages, and downtime indicators.',
          icon: 'ShieldAlert'
        },
        {
          id: 'p1_f4',
          title: 'Historical Analytics',
          description: 'A comprehensive trend viewer to analyze long-term system stability metrics and historical incident patterns.',
          icon: 'FileSpreadsheet'
        }
      ],
      techFoundation: [
        { id: 'p1_t1', category: 'ROLE', title: 'UX/UI Designer', description: 'Led user experience design, layout hierarchy, and high-fidelity visual exploration.' },
        { id: 'p1_t2', category: 'TYPE', title: 'Concept Project', description: 'Independent design exploration focused on solving complex dashboard usability challenges.' },
        { id: 'p1_t3', category: 'METRICS', title: 'SLA Tracking', description: 'Crafted to show automated compliance parameters and downtime reports.' },
        { id: 'p1_t4', category: 'STACK', title: 'Figma & React', description: 'Designed in Figma and translated to a responsive interactive prototype.' }
      ],
      visualJourneyText: 'A high-fidelity layout designed for extreme informational density and visual clarity under intense operation conditions.',
      visualJourneyImages: [PULSE_HISTORY_URL, PULSE_SLA_URL, PULSE_REPORT_URL],
      outcomeLabel: 'OUTCOME',
      outcomeTitle: 'Ready to evolve your NOC?',
      outcomeText: 'This concept design transforms complex system visibility into an intuitive, high-performance operational hub.',
      outcomeActionLabel: 'Inquire About This Project',
      designedFeatures: [
        'Uptime monitoring dashboard',
        'Downtime reporting',
        'SLA tracking',
        'Incident reporting',
        'Historical analytics',
        'Service health visibility',
        'Reporting dashboards'
      ],
      nextProject: { id: 'chopbetta', title: 'Chop Betta' }
    }
  },
  {
    id: 'chopbetta',
    title: 'Chop Betta',
    subtitle: 'Concept Project  •  UX/UI Designer',
    description: 'Chop Betta is a restaurant ordering experience designed to simplify food discovery and checkout for customers ordering for delivery, pickup, or WhatsApp fulfillment.',
    category: 'Concept Project',
    year: '2024',
    type: 'desktop',
    accentColor: 'orange',
    accentHex: '#EA580C',
    image: CHOPBETTA_MOCKUP_URL,
    caseStudy: {
      heroTitle: 'Chop Betta',
      heroSubtitle: 'A restaurant ordering experience designed to simplify food discovery and checkout for customers ordering for delivery, pickup, or WhatsApp fulfillment.',
      heroImage: CHOPBETTA_MOCKUP_URL,
      challengeLabel: 'THE PROBLEM',
      challengeTitle: 'The Friction of Hunger',
      challengeText: 'Diners often face slow, non-responsive static menus and complicated cart steps that result in high user drop-offs and lost direct revenue for local culinary brands.',
      challengePoints: [
        'Static PDF menus that are difficult to read and navigate on mobile.',
        'Complex checkout flows leading to high shopping cart abandonment.',
        'Lack of direct communication channels for custom order instructions.'
      ],
      solutionLabel: 'THE SOLUTION',
      solutionTitle: 'Immersive Digital Dining',
      solutionText: 'A fast, tactile web application presenting responsive food categories and a fluid sliding order drawer. It reduces ordering steps by integrating streamlined checkout pathways alongside WhatsApp order receipt generation.',
      challengePoints2: [
        'A highly visual interactive menu designed to increase user appetite.',
        'Simplified checkout layout requiring minimal user input.',
        'Automated order summary output designed for WhatsApp direct routing.'
      ],
      solutionMetrics: [
        { value: '4', label: 'SCREENS DESIGNED' },
        { value: 'Concept', label: 'PROJECT TYPE' }
      ],
      featuresTitle: 'Screens Designed.',
      featuresSubtitle: 'Beautiful visual screens engineered for seamless food commerce.',
      features: [
        {
          id: 'p2_f1',
          title: 'Homepage',
          description: 'Captivates users with vivid brand imagery, popular dish highlights, and localized quick-start ordering choices.',
          icon: 'Sparkles'
        },
        {
          id: 'p2_f2',
          title: 'Menu',
          description: 'Browse menu items categorized cleanly with intuitive filters, quick-add toggles, and rich nutritional highlights.',
          icon: 'Flame'
        },
        {
          id: 'p2_f3',
          title: 'Cart',
          description: 'A compact sliding drawer indicating selected items, quantity adjustments, and clear price breakdowns.',
          icon: 'ShoppingBag'
        },
        {
          id: 'p2_f4',
          title: 'Checkout',
          description: 'A simplified payment step offering instant configuration for delivery, pickup, or direct WhatsApp fulfillment.',
          icon: 'ShoppingBag'
        }
      ],
      techFoundation: [
        { id: 'p2_t1', category: 'ROLE', title: 'UX/UI Designer', description: 'Authored consumer-facing layouts, responsive flows, and sensory dining aesthetics.' },
        { id: 'p2_t2', category: 'TYPE', title: 'Concept Project', description: 'Design exploration aiming to eliminate friction from local food commerce.' },
        { id: 'p2_t3', category: 'FLOWS', title: 'WhatsApp Orders', description: 'Direct checkout generation sending fully formatted order receipts via WhatsApp API.' },
        { id: 'p2_t4', category: 'STACK', title: 'Figma & Tailwind', description: 'Designed in Figma and built using zero-runtime responsive styles.' }
      ],
      visualJourneyText: 'Rich warmth, dark-mode visual comfort, and beautiful food imagery layout.',
      visualJourneyImages: [CHOPBETTA_MENU_URL, CHOPBETTA_CHECKOUT_URL, CHOPBETTA_FOOD_DETAIL_URL],
      outcomeLabel: 'OUTCOME',
      outcomeTitle: 'Ready to elevate your menu?',
      outcomeText: 'Transform simple menus into high-converting digital storefronts that diners adore. Fast, responsive, and appetizing.',
      outcomeActionLabel: 'Book a Culinary Product Call',
      designedFeatures: [
        'Browse menu',
        'Food categories',
        'Add to cart',
        'Checkout flow',
        'Delivery ordering',
        'Pickup ordering',
        'WhatsApp ordering'
      ],
      nextProject: { id: 'waaka', title: 'Waaka' }
    }
  },
  {
    id: 'waaka',
    title: 'Waaka',
    subtitle: 'Client Project  •  Lead UX/UI Designer',
    description: 'Waaka is the social infrastructure layer for modern cities. Built around the philosophy of Calm Abundance, Waaka transforms city complexity into simple, confident, and enjoyable exploration experiences. The platform helps users discover experiences and navigate urban life without planning fatigue.',
    category: 'Client Project',
    year: '2025',
    type: 'mobile',
    accentColor: 'rose',
    accentHex: '#E11D48',
    image: WAAKA_MOCKUP_URL,
    caseStudy: {
      heroTitle: 'Waaka',
      heroSubtitle: 'The social infrastructure layer for modern cities. Built around the philosophy of Calm Abundance, Waaka transforms city complexity into simple, confident, and enjoyable exploration experiences. The platform helps users discover experiences and navigate urban life without planning fatigue.',
      heroImage: WAAKA_MOCKUP_URL,
      challengeLabel: 'THE PROBLEM',
      challengeTitle: 'Urban Informational Noise',
      challengeText: 'Discovering verified events and distinctive local spots is often chaotic. Users struggle with fragmented social updates and overly busy booking pages that induce planning fatigue.',
      challengePoints: [
        'Scattered social media flyer channels with unverified information.',
        'Complex booking flows that increase user cognitive friction.',
        'Lack of a calm, curated portal for verified city events.'
      ],
      solutionLabel: 'THE SOLUTION',
      solutionTitle: 'Calm Abundance Discovery',
      solutionText: 'A serene mobile workspace that replaces noise with airy, spacious layouts. Waaka organizes urban exploration into themed tracks and simple, direct ticket booking pathways.',
      challengePoints2: [
        'Clean layouts built on spacious whitespace and structural beauty.',
        'Themed exploration pathways to streamline local decision-making.',
        'Hassle-free ticket booking flows that optimize user trust.'
      ],
      solutionMetrics: [
        { value: '4', label: 'SCREENS DESIGNED' },
        { value: 'Client', label: 'PROJECT TYPE' }
      ],
      featuresTitle: 'Screens Designed.',
      featuresSubtitle: 'Slogan: "Go out, explore." Built on Calm Abundance brand principles.',
      features: [
        {
          id: 'p3_f1',
          title: 'Explore Experience',
          description: 'Clean surfaces and confident whitespace allow users to explore curated city activities and secret local spaces without planning fatigue.',
          icon: 'Sparkles'
        },
        {
          id: 'p3_f2',
          title: 'Discovery Journeys',
          description: 'Explore city rhythms through beautifully curated, themed exploration tracks matching different user vibes.',
          icon: 'Sliders'
        },
        {
          id: 'p3_f3',
          title: 'Booking Flow',
          description: 'Purposeful color usage and reduced cognitive load create a friction-free booking and instant ticket reservation interface.',
          icon: 'QrCode'
        },
        {
          id: 'p3_f4',
          title: 'Saved Experiences',
          description: 'An elegant personal repository where curated experiences, bookings, and custom travel folders are organized.',
          icon: 'Target'
        }
      ],
      techFoundation: [
        { id: 'p3_t1', category: 'ROLE', title: 'Lead UX/UI Designer', description: 'Created visual design language, curated aesthetic guidelines, and mapped navigation hierarchy.' },
        { id: 'p3_t2', category: 'TYPE', title: 'Client Project', description: 'A comprehensive production-grade mobile application designed for launch in Lagos.' },
        { id: 'p3_t3', category: 'PRINCIPLES', title: 'Calm Abundance', description: 'Designed around clean surfaces, quality imagery, and zero cognitive overload.' },
        { id: 'p3_t4', category: 'SLOGAN', title: '"Go out, explore."', description: 'The guiding vision animating every screen and user flow designed for the platform.' }
      ],
      visualJourneyText: 'Vibrant visuals combined with clean surfaces and purposeful color usage designed for a premium, low-cognitive-load urban lifestyle.',
      visualJourneyImages: [WAAKA_EXPLORE_URL, WAAKA_BOOKING_URL, WAAKA_SAVED_URL],
      outcomeLabel: 'OUTCOME',
      outcomeTitle: 'Want to launch an experience?',
      outcomeText: 'We build beautiful, pocket-sized concierges that connect users directly to culture and city rhythms.',
      outcomeActionLabel: "Let's collaborate on an app",
      designedFeatures: [
        'Discovery experiences',
        'Exploration journeys',
        'Curated city experiences',
        'Saved experiences',
        'Booking flows'
      ],
      nextProject: { id: 'wematch', title: 'WeMatch' }
    }
  },
  {
    id: 'wematch',
    title: 'WeMatch',
    subtitle: 'Concept Project  •  UX/UI Designer',
    description: 'WeMatch is a dating platform focused on intent-based matching, community-driven discovery, and meaningful connections.',
    category: 'Concept Project',
    year: '2024',
    type: 'mobile',
    accentColor: 'teal',
    accentHex: '#0D9488',
    image: WEMATCH_MOCKUP_URL,
    caseStudy: {
      heroTitle: 'WeMatch',
      heroSubtitle: 'A dating platform focused on intent-based matching, community-driven discovery, and meaningful connections.',
      heroImage: WEMATCH_MOCKUP_URL,
      challengeLabel: 'THE PROBLEM',
      challengeTitle: 'Burnout and Superficiality',
      challengeText: 'Most mainstream dating applications optimize for continuous swiping volume rather than authentic communication, creating high user exhaustion, ghosting, and hollow match experiences.',
      challengePoints: [
        'Fatiguing swipe mechanics that lead to fast visual burnout.',
        'Inactivity and ghosting in match queues with no intent guidance.',
        'Lack of shared interest contexts leading to flat conversation starters.'
      ],
      solutionLabel: 'THE SOLUTION',
      solutionTitle: 'Intentional Synergy',
      solutionText: 'A clean platform centered on deliberate pacing and communication. WeMatch features dedicated community hubs and focused conversation steps with active time limits to motivate sincere interaction.',
      challengePoints2: [
        'High-fidelity, distraction-free home feed focused on profile depth.',
        'Active reply window limits to ensure rapid engagement.',
        'Niche interest-centered hubs matching comic, nerd, and hobby circles.'
      ],
      solutionMetrics: [
        { value: '4', label: 'SCREENS DESIGNED' },
        { value: 'Concept', label: 'PROJECT TYPE' }
      ],
      featuresTitle: 'Screens Designed.',
      featuresSubtitle: 'Distraction-free screens designed to encourage meaningful relationship journeys.',
      features: [
        {
          id: 'p4_f1',
          title: 'Homepage',
          description: 'The primary discovery deck, displaying one card at a time with a clear focus on shared communication style.',
          icon: 'Sparkles'
        },
        {
          id: 'p4_f2',
          title: 'Chat',
          description: 'Elegant, clutter-free message threads pre-loaded with personalized icebreaker questions.',
          icon: 'Hash'
        },
        {
          id: 'p4_f3',
          title: 'Liked Profiles',
          description: 'A private bookmark panel displaying profiles you have admired and hope to connect with.',
          icon: 'Target'
        },
        {
          id: 'p4_f4',
          title: 'Matches',
          description: 'Active conversations subject to a 24-hour reply window to foster actual conversations.',
          icon: 'Clock'
        }
      ],
      techFoundation: [
        { id: 'p4_t1', category: 'ROLE', title: 'UX/UI Designer', description: 'Designed user flows, matching heuristics interfaces, and profile architecture.' },
        { id: 'p4_t2', category: 'TYPE', title: 'Concept Project', description: 'Design research centered around mitigating dating app burnout and match-ghosting.' },
        { id: 'p4_t3', category: 'COMMUNITY', title: 'Interest Hubs', description: 'Tailored spaces for Nerd communities, anime fans, and comic enthusiasts.' },
        { id: 'p4_t4', category: 'STACK', title: 'React Native', description: 'Crafted for responsive layouts and high-performance interactive views.' }
      ],
      visualJourneyText: 'Elegant dark layout with teal accents. Fluid transitions and micro-animations designed to elevate feelings of calm and intimacy.',
      visualJourneyImages: [WEMATCH_DISCOVERY_URL, WEMATCH_CHAT_URL, WEMATCH_SUCCESS_URL],
      outcomeLabel: 'OUTCOME',
      outcomeTitle: 'Ready to build an App?',
      outcomeText: 'We transform ideas into tactile, beautiful mobile interactions. Let\'s build your product.',
      outcomeActionLabel: 'Inquire About This Project',
      designedFeatures: [
        'Home feed',
        'Matches',
        'Liked profiles',
        'Chat',
        '24-hour connect',
        'Community mode',
        'Intent-based matching',
        'Fluid discovery'
      ],
      nextProject: { id: 'pulse', title: 'Pulse' }
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    yearRange: '2022 — PRESENT',
    role: 'Intern',
    company: 'TDS HITECH',
    responsibilities: [
      'Support enterprise IT operations through technical troubleshooting, infrastructure support, and service delivery assistance.'
    ]
  },
  {
    id: 'exp2',
    yearRange: '2020 — 2022',
    role: 'Intern',
    company: 'MAXFRONT TECHNOLIGIES',
    responsibilities: [
      'Contributed to responsive web development projects while collaborating with designers and engineers to build scalable digital experiences.'
    ]
  },
  {
    id: 'exp3',
    yearRange: '2018 — 2020',
    role: 'Intern',
    company: 'LAGETRONIX NIGERIA LIMITED',
    responsibilities: [
      'Assisted in building and maintaining digital solutions while gaining exposure to enterprise software and IT infrastructure environments.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'TYPESCRIPT' },
  { name: 'REACT' },
  { name: 'NEXT.JS' },
  { name: 'FIGMA' },
  { name: 'PRODUCT STRATEGY' },
  { name: 'TAILWIND CSS' },
  { name: 'MOTION GRAPHICS' },
  { name: 'D3.JS' }
];
