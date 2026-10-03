/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Skill, Discipline, Venture } from './types';

// Image paths imported as static assets for reliable Vite bundling
import ZAMAR_PHOTO_URL from './assets/images/zamar_portrait.png';

// Pulse Images
import PULSE_MOCKUP_URL from './assets/images/pulse_hero_mockup_1783840232190.jpg';
import PULSE_HISTORY_URL from './assets/images/pulse_history_mockup_1783840247985.jpg';
import PULSE_SLA_URL from './assets/images/pulse_sla_mockup_1783840264776.jpg';
import PULSE_REPORT_URL from './assets/images/pulse_reporting_mockup_1783840279037.jpg';

// Chop Betta Images
import CHOPBETTA_MOCKUP_URL from './assets/images/chopbetta_hero_mockup_1783841606727.jpg';
import CHOPBETTA_MENU_URL from './assets/images/chopbetta_menu_mockup_1783841621220.jpg';
import CHOPBETTA_CHECKOUT_URL from './assets/images/chopbetta_checkout_mockup_1783841633902.jpg';
import CHOPBETTA_FOOD_DETAIL_URL from './assets/images/chopbetta_food_detail_mockup_1783841644939.jpg';

// Waaka Images
import WAAKA_MOCKUP_URL from './assets/images/waaka_explore_mockup_916_1783841033350.jpg';
import WAAKA_EXPLORE_URL from './assets/images/waaka_sunset_mockup_916_1783841050373.jpg';
import WAAKA_BOOKING_URL from './assets/images/waaka_booking_mockup_916_1783841066041.jpg';
import WAAKA_SAVED_URL from './assets/images/waaka_saved_mockup_916_1783841078422.jpg';

// WeMatch Images
import WEMATCH_MOCKUP_URL from './assets/images/wematch_hero_mockup_1783842303225.jpg';
import WEMATCH_DISCOVERY_URL from './assets/images/wematch_discovery_mockup_1783842315446.jpg';
import WEMATCH_CHAT_URL from './assets/images/wematch_chat_mockup_1783842347667.jpg';
import WEMATCH_SUCCESS_URL from './assets/images/wematch_success_mockup_1783842332715.jpg';

// Authoritative Uploaded Project Screenshots
// Mahr's Place
import MAHRS_PLACE_01 from './assets/images/mahrs place 01.png';
import MAHRS_PLACE_02 from './assets/images/mahrs place 02.png';
import MAHRS_PLACE_03 from './assets/images/mahrs place 03.png';

// Soccer Queens
import SOCCER_QUEENS_01 from './assets/images/soccer queens 01.png';
import SOCCER_QUEENS_02 from './assets/images/soccer queens 02.png';
import SOCCER_QUEENS_03 from './assets/images/soccer queens 03.png';
import SOCCER_QUEENS_04 from './assets/images/soccer queens 04.png';

// Waaka Landing Page
import WAAKA_LANDING_01 from './assets/images/waaka landing page 01.png';
import WAAKA_LANDING_02 from './assets/images/waaka landing page 02.png';
import WAAKA_LANDING_03 from './assets/images/waaka landing page 03.png';

// Waaka Waitlist Page
import WAAKA_WAITLIST_01 from './assets/images/waaka waitlist page 01.png';
import WAAKA_WAITLIST_02 from './assets/images/waaka waitlist page 02.png';
import WAAKA_WAITLIST_03 from './assets/images/waaka waitlist page 03.png';

export {
  ZAMAR_PHOTO_URL,
  PULSE_MOCKUP_URL,
  PULSE_HISTORY_URL,
  PULSE_SLA_URL,
  PULSE_REPORT_URL,
  CHOPBETTA_MOCKUP_URL,
  CHOPBETTA_MENU_URL,
  CHOPBETTA_CHECKOUT_URL,
  CHOPBETTA_FOOD_DETAIL_URL,
  WAAKA_MOCKUP_URL,
  WAAKA_EXPLORE_URL,
  WAAKA_BOOKING_URL,
  WAAKA_SAVED_URL,
  WEMATCH_MOCKUP_URL,
  WEMATCH_DISCOVERY_URL,
  WEMATCH_CHAT_URL,
  WEMATCH_SUCCESS_URL,
  MAHRS_PLACE_01,
  MAHRS_PLACE_02,
  MAHRS_PLACE_03,
  SOCCER_QUEENS_01,
  SOCCER_QUEENS_02,
  SOCCER_QUEENS_03,
  SOCCER_QUEENS_04,
  WAAKA_LANDING_01,
  WAAKA_LANDING_02,
  WAAKA_LANDING_03,
  WAAKA_WAITLIST_01,
  WAAKA_WAITLIST_02,
  WAAKA_WAITLIST_03,
};

export const PERSONAL_INSTINCTS = [
  { id: '1', phrase: 'MAKE IT LOOK GOOD.', nuance: 'Aesthetics, typography, proportion and intentional form.' },
  { id: '2', phrase: 'MAKE IT WORK.', nuance: 'Resilient architecture, responsive interactions and dependable systems.' },
  { id: '3', phrase: 'FIGURE IT OUT.', nuance: 'Tenacity in the face of ambiguity; diagnosing root causes.' },
  { id: '4', phrase: 'SOLVE THE PROBLEM.', nuance: 'Delivering clarity and value without unnecessary noise.' }
];

export const DISCIPLINES: Discipline[] = [
  {
    id: 'frontend',
    label: 'Frontend Developer',
    pillLabel: 'FRONTEND',
    title: 'Digital Systems & Browser Craft',
    tagline: 'Code as an instrument of design fidelity.',
    quote: 'I turn ideas and interfaces into working digital experiences.',
    description: 'Bridging high-craft design and solid software architecture. Building responsive, lightweight web applications in React, TypeScript, and modern browser standards with fluid animations and zero lag.',
    accentHex: '#3B82F6',
    accentRgb: '59, 130, 246',
    visualThemes: ['Clean Component Architecture', 'Tailwind Precision', 'Fluid Motion Physics', 'Cross-Device Responsiveness'],
    evidencePillars: [
      { title: 'Interactive Web Apps', description: 'Engineered client portals, interactive booking flows, and stateful interfaces like Waaka and Soccer Queens.' },
      { title: 'Modern Tooling', description: 'TypeScript, React 19, Vite, responsive layouts, modular component design, and zero-runtime style discipline.' }
    ]
  },
  {
    id: 'uiux',
    label: 'UI/UX Designer',
    pillLabel: 'UI/UX',
    title: 'Interface Systems & Product Thinking',
    tagline: 'Architecture for human attention and intuitive ease.',
    quote: 'I think through how things should look, feel and work.',
    description: 'Deep spatial hierarchy, friction reduction, and thoughtful user journeys. Designing products that reduce cognitive fatigue while delivering high tactile joy and commercial impact.',
    accentHex: '#8B5CF6',
    accentRgb: '139, 92, 246',
    visualThemes: ['User Journey Mapping', 'Design Systems & Tokens', 'High-Density Dashboards', 'Mobile-First Patterns'],
    evidencePillars: [
      { title: 'Calm & Cohesive Workspaces', description: 'Crafted the Calm Abundance system for Waaka, intent-first mechanics for WeMatch, and operational clarity for Pulse.' },
      { title: 'Figma to Production', description: 'Design tokens, auto-layout rigor, interactive prototyping, and seamless developer handoff.' }
    ]
  },
  {
    id: 'graphics',
    label: 'Graphics Designer',
    pillLabel: 'GRAPHICS',
    title: 'Visual Identity & Graphic Composition',
    tagline: 'Composing visual weight, typography, and memorable identity.',
    quote: 'I make ideas visible.',
    description: 'Editorial layout, poster compositions, brand assets, and digital media graphics. Giving abstract ideas distinct shape, unforgettable color harmony, and immediate cultural resonance.',
    accentHex: '#EC4899',
    accentRgb: '236, 72, 153',
    visualThemes: ['Editorial Typography', 'Brand Identity Systems', 'Spatial Hierarchy', 'Social & Event Media'],
    evidencePillars: [
      { title: 'Tournament & Media Identity', description: 'Branded editorial collateral, event banners, and match graphics for sports and cultural initiatives.' },
      { title: 'Print & Digital Harmony', description: 'Balancing negative space, stark typography, and striking contrast for immediate visual punch.' }
    ]
  },
  {
    id: 'styling',
    label: 'Stylist',
    pillLabel: 'STYLING',
    title: 'Wardrobe, Silhouette & Texture',
    tagline: 'Curating mood, cut, and character through garments.',
    quote: 'I put things together with intention.',
    description: 'Form, fabric weight, layering, and silhouette curation. Treating fashion as a 3D extension of visual design where balance, texture interplay, and quiet confidence define the mood.',
    accentHex: '#EAB308',
    accentRgb: '234, 179, 8',
    visualThemes: ['Silhouette & Proportion', 'Monochrome & Earth Palettes', 'Textural Contrast', 'Garment Curation'],
    evidencePillars: [
      { title: 'Intentional Wardrobe', description: 'Composing outfits with deliberate color stories, tailored cuts, and personal presence.' },
      { title: 'Editorial Cohesion', description: 'Curating garments that tell a clear story under camera lighting and across editorial spreads.' }
    ]
  },
  {
    id: 'it',
    label: 'IT Support & Connectivity',
    pillLabel: 'IT & CONNECTIVITY',
    title: 'Infrastructure, Networks & Troubleshooting',
    tagline: 'Rock-solid systems, connectivity, and diagnostic tenacity.',
    quote: "When something doesn't work, I figure out why.",
    description: 'Ground-level IT infrastructure, network diagnostics, hardware reliability, and enterprise technical troubleshooting. Grounded in a Computer Science background and hands-on enterprise IT experience.',
    accentHex: '#06B6D4',
    accentRgb: '6, 182, 212',
    visualThemes: ['Network Topology & Uptime', 'Hardware Diagnostics', 'Enterprise Systems Support', 'Root-Cause Analysis'],
    evidencePillars: [
      { title: 'Enterprise IT at TDS Hitech', description: 'Hands-on hardware troubleshooting, local network connectivity support, and service delivery.' },
      { title: 'Computer Science Foundation', description: 'Understanding computing from the physical layer up to the cloud infrastructure.' }
    ]
  },
  {
    id: 'model',
    label: 'Model',
    pillLabel: 'MODEL',
    title: 'Presence, Frame & Poise',
    tagline: 'Embodying the vision in front of the lens.',
    quote: 'Sometimes the creative work is me.',
    description: 'Body language, stillness, and camera confidence. Bringing life to garments and artistic concepts through poise, expression, and natural visual charisma.',
    accentHex: '#F97316',
    accentRgb: '249, 115, 22',
    visualThemes: ['Camera Poise & Stillness', 'Fashion & Editorial Presence', 'Lighting Awareness', 'Storytelling through Pose'],
    evidencePillars: [
      { title: 'Camera Confidence', description: 'Natural poise and posture designed for high-end fashion campaigns, lookbooks, and brand storytelling.' },
      { title: 'Living the Aesthetic', description: 'Unifying personal styling with direct in-frame execution for a complete editorial experience.' }
    ]
  }
];

export const VENTURES: Venture[] = [
  {
    id: 'alpha-z',
    name: 'Alpha-Z',
    tagline: 'Autonomous digital infrastructure & creative technology lab.',
    status: 'COMING SOON',
    description: 'An independent venture exploring autonomous creator workflows, specialized digital software, and purposeful product systems under the ZAMAR parent umbrella.',
    highlights: ['Specialized creative software tools', 'Autonomous digital workflows', 'Experimental user interfaces'],
    accentHex: '#38BDF8'
  },
  {
    id: 'mahrs-place',
    name: "Mahr's Place",
    tagline: 'Next-generation 5-a-side football & community recreation hub.',
    status: 'COMING SOON',
    description: 'A physical-meets-digital sports venture uniting high-performance 5-a-side astroturf pitches, community leagues, sports culture, and an integrated reservation platform.',
    highlights: ['Floodlit 5-a-side football facilities', 'Digital booking & league management', 'Community recreation & culture space'],
    accentHex: '#22C55E'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'waaka',
    title: 'Waaka Landing Page',
    subtitle: 'City Culture & Urban Exploration Infrastructure',
    description: 'The social infrastructure layer for modern cities. Frontend implementation of the landing and waitlist website based on product and design direction, built with zero layout shift and fluid performance.',
    category: 'Client Project • Web Build',
    year: '2025',
    type: 'desktop',
    accentColor: 'rose',
    accentHex: '#E11D48',
    image: WAAKA_LANDING_01,
    disciplines: ['uiux', 'frontend'],
    facets: [
      { label: 'Landing Page', role: 'Frontend Implementation', summary: 'Clean aesthetic presence introducing the Calm Abundance philosophy and culture tracks.' },
      { label: 'Waitlist Experience', role: 'Conversion Flow', summary: 'Engaging early-access flow with real-time invitation tracking and social loops.' },
      { label: 'Responsive Architecture', role: 'Frontend Engineering', summary: 'Modular React & Tailwind components with zero layout shift across all viewports.' }
    ],
    caseStudy: {
      heroTitle: 'Waaka Landing Page',
      heroSubtitle: 'Frontend implementation of the responsive city exploration landing page and waitlist website based on product and design direction.',
      heroImage: WAAKA_LANDING_01,
      challengeLabel: 'THE OBJECTIVE',
      challengeTitle: 'Communicating Calm Abundance on the Web',
      challengeText: 'Urban discovery platforms are often cluttered, noisy, and visually overwhelming. Waaka required a clean, high-craft web presence to introduce its curated city tracks and motivate early-access waitlist signups without visual fatigue.',
      challengePoints: [
        'Translating the Calm Abundance philosophy into a serene, responsive web experience.',
        'Showcasing curated city tracks, events, and culture itineraries with generous whitespace.',
        'Ensuring zero layout shift and rapid mobile rendering across all devices.'
      ],
      solutionLabel: 'THE FRONTEND CRAFT',
      solutionTitle: 'Clean Component Architecture & Fluid Grid',
      solutionText: 'Engineered a lightweight, responsive landing experience with modular component trees, fluid typography scaling, and subtle CSS transitions.',
      challengePoints2: [
        'Clean surfaces built on confident whitespace and structural balance.',
        'Interactive preview of discovery tracks matching different city vibes.',
        'Seamless integration with the early-access waitlist conversion flow.'
      ],
      solutionMetrics: [
        { value: '3 Views', label: 'LANDING MODULES' },
        { value: 'Frontend', label: 'ZAMAR SCOPE' }
      ],
      featuresTitle: 'Frontend Architecture.',
      featuresSubtitle: 'Polished digital craft designed for effortless exploration.',
      features: [
        {
          id: 'p3_f1',
          title: 'Hero Architecture',
          description: 'Serene introductory section establishing the Calm Abundance brand ethos with confident typography and search preview.',
          icon: 'Sparkles'
        },
        {
          id: 'p3_f2',
          title: 'Discovery Tracks Grid',
          description: 'Responsive multi-column showcase categorizing curated city itineraries by mood, time, and cultural rhythm.',
          icon: 'Sliders'
        },
        {
          id: 'p3_f3',
          title: 'Community Curation Flow',
          description: 'Spacious editorial blocks highlighting verified local hosts, secret spots, and exclusive urban events.',
          icon: 'QrCode'
        },
        {
          id: 'p3_f4',
          title: 'Waitlist Gateway',
          description: 'Clean conversion section channeling visitors directly into the priority invitation queue.',
          icon: 'Target'
        }
      ],
      techFoundation: [
        { id: 'p3_t1', category: 'ROLE', title: 'Frontend Developer', description: 'Frontend implementation of the landing and waitlist website based on product and design direction.' },
        { id: 'p3_t2', category: 'STACK', title: 'React & Tailwind', description: 'Component-driven frontend built with strict CSS utility discipline and Vite.' },
        { id: 'p3_t3', category: 'PRINCIPLES', title: 'Calm Abundance', description: 'Generous whitespace, subtle borders, and low-cognitive-load layouts.' },
        { id: 'p3_t4', category: 'PERFORMANCE', title: 'CLS 0.00', description: 'Engineered for zero layout shift and rapid mobile loading.' }
      ],
      visualJourneyText: 'Widescreen view of the Waaka landing page hierarchy from hero introduction to culture tracks and community ecosystem.',
      visualJourneyImages: [WAAKA_LANDING_02, WAAKA_LANDING_03],
      outcomeLabel: 'OUTCOME',
      outcomeTitle: 'A Serene Gateway to City Culture',
      outcomeText: 'The Waaka landing page demonstrates how disciplined frontend engineering can turn a complex multi-layered product vision into a clean, inviting web experience.',
      outcomeActionLabel: "Let's collaborate on a web platform",
      designedFeatures: [
        'Hero section architecture',
        'Culture discovery tracks grid',
        'Community host spotlight',
        'Responsive layout scaling',
        'Waitlist portal entry'
      ],
      nextProject: { id: 'waaka-waitlist', title: 'Waaka Waitlist' }
    }
  },
  {
    id: 'waaka-waitlist',
    title: 'Waaka Waitlist Experience',
    subtitle: 'Interactive Priority Access & Referral Conversion Engine',
    description: 'Designed and built the interactive waitlist web experience and its interaction/presentation details, featuring live queue position tracking, single-field entry, and social referral acceleration loops.',
    category: 'Client Project • Web Experience',
    year: '2025',
    type: 'desktop',
    accentColor: 'rose',
    accentHex: '#E11D48',
    image: WAAKA_WAITLIST_01,
    disciplines: ['uiux', 'frontend'],
    facets: [
      { label: 'Single-Field Entry', role: 'Input Ergonomics', summary: 'Low-friction email entry with instant inline validation.' },
      { label: 'Queue Position', role: 'Real-time State', summary: 'Dynamic queue ticket displaying current position in line.' },
      { label: 'Referral Loops', role: 'Viral Mechanics', summary: 'Unique link generation accelerating user position on shares.' }
    ],
    caseStudy: {
      heroTitle: 'Waaka Waitlist Experience',
      heroSubtitle: 'An interactive early-access funnel engineered around tactile feedback, real-time queue visibility, and friction-free social sharing loops.',
      heroImage: WAAKA_WAITLIST_01,
      challengeLabel: 'THE CONVERSION CHALLENGE',
      challengeTitle: 'Overcoming Waitlist Drop-off',
      challengeText: 'Standard email waitlists suffer from passive abandonment. Users enter an email and forget. Waaka required an engaging, tactile web journey that rewarded early supporters with immediate queue status and motivated them to invite friends.',
      challengePoints: [
        'Traditional waitlists lack immediate feedback and perceived value.',
        'High drop-off between email submission and social sharing.',
        'Need for an ultra-fast, single-field access input with zero friction.'
      ],
      solutionLabel: 'THE CONVERSION ENGINE',
      solutionTitle: 'Tactile Queue Progression & Referral Loops',
      solutionText: 'An interactive 3-stage conversion experience: single-field access entry with instant validation, dynamic queue position reveal with custom invite codes, and an affirmation state with direct sharing triggers.',
      challengePoints2: [
        'Single-field entry with instantaneous inline state validation.',
        'Dynamic priority card revealing live queue rank and countdown status.',
        'Integrated viral share shortcuts (WhatsApp, X, copy link) that accelerate queue position.'
      ],
      solutionMetrics: [
        { value: '3 Stages', label: 'FUNNEL JOURNEY' },
        { value: 'Web Build', label: 'ZAMAR SCOPE' }
      ],
      featuresTitle: 'Interaction & Micro-Interaction Details.',
      featuresSubtitle: 'Specific interaction patterns visible in the build.',
      features: [
        {
          id: 'ww_f1',
          title: 'Single-Field Access Input',
          description: 'Low-friction email entry with instant tactile button state feedback and zero layout shift.',
          icon: 'Sparkles'
        },
        {
          id: 'ww_f2',
          title: 'Dynamic Queue Ticket',
          description: 'Personalized digital ticket card displaying current position in line and tier status.',
          icon: 'QrCode'
        },
        {
          id: 'ww_f3',
          title: 'Referral Acceleration Loop',
          description: 'Unique invitation link generator that visibly advances the user in queue for every friend who joins.',
          icon: 'Target'
        },
        {
          id: 'ww_f4',
          title: 'High-Contrast Affirmation State',
          description: 'Bold confirmation celebration with smooth spring animations that foster confidence and brand buzz.',
          icon: 'Sliders'
        }
      ],
      techFoundation: [
        { id: 'ww_t1', category: 'ROLE', title: 'Waitlist Designer & Builder', description: 'Designed and built the complete waitlist web experience and its interaction details.' },
        { id: 'ww_t2', category: 'SCOPE', title: 'Conversion Funnel', description: 'Frontend implementation with real-time feedback and state transitions.' },
        { id: 'ww_t3', category: 'STACK', title: 'React & Tailwind', description: 'Lightweight web experience with smooth Framer Motion spring physics.' },
        { id: 'ww_t4', category: 'EXPERIENCE', title: 'Viral Growth Loops', description: 'Engineered to convert passive interest into active community advocates.' }
      ],
      visualJourneyText: 'Step-by-step walkthrough of the 3 conversion stages from invitation to viral queue sharing.',
      visualJourneyImages: [WAAKA_WAITLIST_02, WAAKA_WAITLIST_03],
      outcomeLabel: 'OUTCOME',
      outcomeTitle: 'Turning Waitlists into Movement',
      outcomeText: 'The Waaka waitlist proves that even a simple early-access page can become a memorable, tactile product experience that generates genuine community excitement.',
      outcomeActionLabel: 'Discuss Interactive Conversion Funnels',
      designedFeatures: [
        'Single-field email input',
        'Dynamic queue ticket card',
        'Referral code generator',
        'Social share acceleration loops',
        'Celebratory confirmation state'
      ],
      nextProject: { id: 'soccerqueens', title: 'Soccer Queens' }
    }
  },
  {
    id: 'soccerqueens',
    title: 'Soccer Queens',
    subtitle: "The Premier Digital Home for Women's Football in Nigeria",
    description: "A comprehensive digital media and tournament hub dedicated to Nigerian and African women's football—covering news, active league competitions, player profiles, club directories, match galleries, annual awards, and live event coverage.",
    category: 'Digital Platform',
    year: '2024',
    type: 'platform',
    accentColor: 'emerald',
    accentHex: '#10B981',
    image: SOCCER_QUEENS_01,
    disciplines: ['uiux', 'frontend', 'graphics'],
    facets: [
      { label: 'Media & News', role: 'Content Architecture', summary: 'Structured editorial engine for match reports, transfer updates, and spotlights.' },
      { label: 'Tournament Center', role: 'UX & Data Layout', summary: 'Live tables, fixture tracking, club directories, and player performance stats.' },
      { label: 'Awards & Events', role: 'Visual & Graphic Design', summary: 'High-impact awards showcase, celebratory gala galleries, and partner sponsorship displays.' }
    ],
    caseStudy: {
      heroTitle: 'Soccer Queens Platform',
      heroSubtitle: "A dedicated digital home elevating women's football in Nigeria and across the African continent with enterprise-grade media architecture.",
      heroImage: SOCCER_QUEENS_01,
      challengeLabel: 'THE CHALLENGE',
      challengeTitle: "Visibility & Structural Media Access",
      challengeText: "Despite exceptional talent and international acclaim, women's football in Nigeria frequently lacked a consolidated, modern digital headquarters. Media coverage, competition tables, club histories, and player statistics were scattered across disparate social accounts.",
      challengePoints: [
        'Lack of a centralized digital hub for tournament tables and fixtures.',
        'Underrepresented player records and club roster data.',
        'Limited institutional space for prestigious awards and gala ceremonies.'
      ],
      solutionLabel: 'THE SOLUTION',
      solutionTitle: 'The Complete Football Ecosystem',
      solutionText: 'An authoritative web platform designed to celebrate and document the game at every level: real-time competition standings, comprehensive club and player directories, curated media galleries, and an awards portal.',
      challengePoints2: [
        'Dedicated competition trackers with fixtures, results, and table standings.',
        'High-visibility player profiles highlighting career milestones and stats.',
        'Sponsorship and partnership integration channels for sustainable growth.'
      ],
      solutionMetrics: [
        { value: '4 Modules', label: 'PLATFORM REACH' },
        { value: 'Platform', label: 'PROJECT TYPE' }
      ],
      featuresTitle: 'Platform Architecture.',
      featuresSubtitle: "Everything required to champion women's sports at an international standard.",
      features: [
        {
          id: 'sq_f1',
          title: 'News & Media Feed',
          description: 'Editorial layout delivering timely reports, post-match analysis, and feature interviews.',
          icon: 'Sparkles'
        },
        {
          id: 'sq_f2',
          title: 'Competitions & Tables',
          description: 'Interactive league tables, tournament brackets, and live score updates.',
          icon: 'LayoutDashboard'
        },
        {
          id: 'sq_f3',
          title: 'Clubs & Players Roster',
          description: 'In-depth directories showcasing squads, athlete biographies, and performance metrics.',
          icon: 'Users'
        },
        {
          id: 'sq_f4',
          title: 'Awards & Gala Portal',
          description: 'Prestigious voting and recognition platform honoring outstanding athletic excellence.',
          icon: 'Target'
        }
      ],
      techFoundation: [
        { id: 'sq_t1', category: 'ROLE', title: 'Platform Designer & Builder', description: 'Designed and built the platform experience from information architecture to responsive frontend.' },
        { id: 'sq_t2', category: 'DOMAIN', title: "Women's Sports", description: "Dedicated to the growth, visibility, and commercial elevation of African women's football." },
        { id: 'sq_t3', category: 'COVERAGE', title: 'Competitions & News', description: 'Structured for leagues, national teams, player profiles, and event archives.' },
        { id: 'sq_t4', category: 'STACK', title: 'React & Tailwind', description: 'High-performance responsive web application built for fast mobile browsing.' }
      ],
      visualJourneyText: 'Clean athletic aesthetic with bold typography, live tournament center, and structured stats presentation.',
      visualJourneyImages: [SOCCER_QUEENS_02, SOCCER_QUEENS_03, SOCCER_QUEENS_04],
      outcomeLabel: 'OUTCOME',
      outcomeTitle: 'Championing Women in Sport',
      outcomeText: 'Soccer Queens demonstrates how purposeful digital craft can provide visibility, legitimacy, and modern infrastructure to sporting communities.',
      outcomeActionLabel: 'Discuss Sports & Media Platforms',
      designedFeatures: [
        'News & editorial feed',
        'League tables & fixtures',
        'Club directories',
        'Player profile showcases',
        'High-resolution photo galleries',
        'Annual awards voting system',
        'Event calendars',
        'Sponsorship & advertising contact portal'
      ],
      nextProject: { id: 'pulse', title: 'Pulse' }
    }
  },
  {
    id: 'pulse',
    title: 'Pulse',
    subtitle: 'Enterprise Network Operations Center (NOC) Dashboard',
    description: 'Pulse is an enterprise UX/UI exploration for a modern NOC dashboard focused on real-time uptime monitoring, incident awareness, automated SLA calculation, and operational clarity under pressure.',
    category: 'Concept Project',
    year: '2026',
    type: 'desktop',
    accentColor: 'amber',
    accentHex: '#F59E0B',
    image: PULSE_MOCKUP_URL,
    disciplines: ['uiux', 'it', 'frontend'],
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
    subtitle: 'Tactile Restaurant Ordering & Commerce Flow',
    description: 'Chop Betta is a responsive food ordering web experience designed to eliminate friction from menu browsing to checkout, featuring seamless cart drawers and direct WhatsApp fulfillment routing.',
    category: 'Concept Project',
    year: '2024',
    type: 'desktop',
    accentColor: 'orange',
    accentHex: '#EA580C',
    image: CHOPBETTA_MOCKUP_URL,
    disciplines: ['uiux', 'frontend'],
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
      nextProject: { id: 'wematch', title: 'WeMatch' }
    }
  },
  {
    id: 'wematch',
    title: 'WeMatch',
    subtitle: 'Intentional Dating & Community Connections',
    description: 'WeMatch is a dating and community matching platform designed to curb visual burnout and superficial swipe mechanics through intent-based matching, interest hubs, and active 24-hour reply countdowns.',
    category: 'Concept Project',
    year: '2024',
    type: 'mobile',
    accentColor: 'teal',
    accentHex: '#0D9488',
    image: WEMATCH_MOCKUP_URL,
    disciplines: ['uiux', 'frontend'],
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
      outcomeText: "We transform ideas into tactile, beautiful mobile interactions. Let's build your product.",
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
      nextProject: { id: 'mahrs', title: "Mahr's Place" }
    }
  },
  {
    id: 'mahrs',
    title: "Mahr's Place",
    subtitle: '5-a-Side Football & Recreation Hub Investor Website',
    description: 'Designed and built the investor-facing website and presentation experience for the next-generation 5-a-side football and lounge recreation concept.',
    category: 'Venture & Investor Platform',
    year: '2025',
    type: 'desktop',
    accentColor: 'emerald',
    accentHex: '#22C55E',
    image: MAHRS_PLACE_01,
    disciplines: ['uiux', 'frontend'],
    facets: [
      { label: 'Investor Pitch', role: 'Presentation Architecture', summary: 'Cinematic pitch website engineered for institutional investor meetings.' },
      { label: 'Pitch Facilities', role: 'Specification Layout', summary: 'Interactive breakdown of floodlit astroturf pitches and amenities.' },
      { label: 'Lounge Concept', role: 'Hospitality Brand', summary: 'Community culture hub uniting recreation with lifestyle lounge spaces.' }
    ],
    caseStudy: {
      heroTitle: "Mahr's Place Investor Experience",
      heroSubtitle: 'A cinematic investor-facing presentation website uniting floodlit 5-a-side football facilities, hospitality lounge concept, and pitch deck economics.',
      heroImage: MAHRS_PLACE_01,
      challengeLabel: 'THE VISION',
      challengeTitle: 'Physical Sports Meets Digital Experience',
      challengeText: "Traditional grassroots recreation pitches often lack modern brand prestige and investor clarity. Mahr's Place needed an authoritative digital presentation to communicate the sports-and-lounge concept to prospective backers and partners.",
      challengePoints: [
        'Communicating dual-purpose recreation: floodlit 5-a-side pitches and lifestyle lounge.',
        'Presenting digital reservation infrastructure and community league management.',
        'Establishing a cinematic, premium visual presence that commands investor confidence.'
      ],
      solutionLabel: 'THE PLATFORM',
      solutionTitle: 'Cinematic Investor Presentation',
      solutionText: 'An immersive dark-mode web experience showcasing architectural specs, pitch layout dimensions, lounge hospitality, and projected commercial metrics.',
      challengePoints2: [
        'Dark, dramatic visual language with floodlit pitch aesthetics.',
        'Clear interactive breakdown of facility amenities and booking platform.',
        'Investor deck integration tailored for partnership discussions.'
      ],
      solutionMetrics: [
        { value: '5-a-Side', label: 'FACILITY CONCEPT' },
        { value: 'Website', label: 'ZAMAR BUILD' }
      ],
      featuresTitle: 'Website Architecture.',
      featuresSubtitle: 'Engineered to communicate commercial viability and sports culture.',
      features: [
        {
          id: 'mp_f1',
          title: 'Cinematic Hero Pitch',
          description: 'Dramatic full-bleed introduction establishing the recreation ethos and high-end brand tier.',
          icon: 'Sparkles'
        },
        {
          id: 'mp_f2',
          title: 'Facility Specifications',
          description: 'Detailed interactive breakdown of astroturf pitch dimensions, lighting, and hospitality amenities.',
          icon: 'LayoutDashboard'
        },
        {
          id: 'mp_f3',
          title: 'Digital Reservation Flow',
          description: 'Preview of the player booking engine, team league portal, and calendar slot system.',
          icon: 'QrCode'
        },
        {
          id: 'mp_f4',
          title: 'Investor Proposition',
          description: 'Commercial projections, revenue streams, and partnership contact mechanics.',
          icon: 'Target'
        }
      ],
      techFoundation: [
        { id: 'mp_t1', category: 'ROLE', title: 'Website Designer & Builder', description: 'Designed and built the website and presentation experience for investor meetings.' },
        { id: 'mp_t2', category: 'SCOPE', title: 'Digital Website', description: 'Represents the digital presentation website Zamar built, not the physical venue.' },
        { id: 'mp_t3', category: 'STACK', title: 'React & Tailwind', description: 'Custom responsive web experience with fluid animations and responsive layout.' },
        { id: 'mp_t4', category: 'FOCUS', title: 'Sports & Hospitality', description: 'Uniting grassroots athletic culture with premium lounge hospitality.' }
      ],
      visualJourneyText: 'Cinematic dark aesthetics, floodlit pitch textures, and clear architectural specs.',
      visualJourneyImages: [MAHRS_PLACE_02],
      outcomeLabel: 'OUTCOME',
      outcomeTitle: 'Pitching with Confidence',
      outcomeText: "Mahr's Place demonstrates how a custom presentation website can elevate a physical recreation concept into an institutional-grade investment narrative.",
      outcomeActionLabel: 'Discuss Sports & Presentation Builds',
      designedFeatures: [
        'Cinematic hero presentation',
        'Pitch dimensions & specs',
        'Lounge & recreation concept',
        'Booking platform preview',
        'Investor pitch highlights'
      ],
      nextProject: { id: 'waaka', title: 'Waaka' }
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    yearRange: '2022 — PRESENT',
    role: 'IT Operations & Technical Support',
    company: 'TDS HITECH',
    responsibilities: [
      'Diagnose and resolve enterprise hardware, local connectivity, and operating systems issues.',
      'Maintain reliable infrastructure, service delivery, and network continuity for technical teams.'
    ]
  },
  {
    id: 'exp2',
    yearRange: '2020 — 2022',
    role: 'Web Development & UI Implementation',
    company: 'MAXFRONT TECHNOLOGIES',
    responsibilities: [
      'Developed responsive frontend interfaces, translating design specifications into scalable web code.',
      'Collaborated closely across design and engineering teams to refine interactive web user journeys.'
    ]
  },
  {
    id: 'exp3',
    yearRange: '2018 — 2020',
    role: 'Digital Solutions & Enterprise Systems',
    company: 'LAGETRONIX NIGERIA LIMITED',
    responsibilities: [
      'Contributed to enterprise software deployments and gained foundational exposure to system environments.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'TYPESCRIPT' },
  { name: 'REACT' },
  { name: 'NEXT.JS' },
  { name: 'FIGMA' },
  { name: 'TAILWIND CSS' },
  { name: 'MOTION' },
  { name: 'IT TROUBLESHOOTING' },
  { name: 'NETWORK CONNECTIVITY' },
  { name: 'WARDROBE STYLING' },
  { name: 'CREATIVE DIRECTION' }
];
