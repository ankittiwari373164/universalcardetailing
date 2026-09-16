// Real brand assets for Universal Car Detailing Studio
import logo from '../assets/logo.png';
import shopBannerWide from '../assets/shop-banner-wide.jpeg';
import carGrapheneCloseup from '../assets/car-graphene-closeup.jpeg';
import carStudioWide from '../assets/car-studio-wide.jpeg';
import shopSignboard from '../assets/shop-signboard.jpeg';
import carFrontStudio from '../assets/car-front-studio.jpeg';
import posterRangeRover1 from '../assets/poster-rangerover-1.jpeg';
import posterAudi1 from '../assets/poster-audi-1.jpeg';
import posterBmwGrid from '../assets/poster-bmw-grid.jpeg';
import posterAudi2 from '../assets/poster-audi-2.jpeg';
import posterBmwBlue from '../assets/poster-bmw-blue.jpeg';
import posterRangeRover2 from '../assets/poster-rangerover-2.jpeg';
import posterPpfInstall from '../assets/poster-ppf-install.jpeg';
import posterHandwash from '../assets/poster-handwash.jpeg';

export const brand = {
  name: 'Universal Car Detailing Studio',
  tagline: 'Clean · Protect · Enhance',
  logo: logo,
  phone: '+91 82684 90009',
  whatsapp: '918268490009',
  email: 'info@universalcarstudio.in',
  addressLine1: 'Shop No. 1, Castle Mill Naka',
  addressLine2: 'Old Agra Rd, Uthalsar, near Axis Bank',
  addressLine3: 'Thane West, Thane, Maharashtra 400601',
  address: 'Shop No. 1, Castle Mill Naka, Old Agra Rd, Uthalsar, near Axis Bank, Thane West, Thane, Maharashtra 400601',
  mapQuery: 'Castle Mill Naka, Old Agra Rd, Uthalsar, Thane West, Thane, Maharashtra 400601',
  hours: 'Mon – Sat · 10:00 AM – 8:00 PM',
  years: 30,
  cars: 12000,
  warranty: 10,
  rating: 4.9
};

// Real before/after pair from our studio floor — same detailing bay, dull arrival vs. showroom handover finish.
export const beforeAfter = {
  before: carGrapheneCloseup,
  after: carFrontStudio
};

// Wide-format promo boards from the studio wall — shown uncropped (object-contain) since they're dense infographics.
export const showcaseBoards = [posterPpfInstall, posterHandwash, posterBmwGrid, posterRangeRover1];


export const heroSlides = [
  {
    id: 1,
    label: 'Paint Protection Film',
    title: 'Armour For Your Ride.',
    description: 'The only product that physically stops stone chips and scratches from ever reaching your paint. Self-healing. Invisible. Built to last a decade.',
    image: carStudioWide,
    cta: 'Explore PPF',
    link: '/services/ppf'
  },
  {
    id: 2,
    label: 'Ceramic Coating',
    title: 'Mirror. Gloss. Protected.',
    description: 'A 9H nano-ceramic layer that bonds permanently to your paint — hydrophobic, UV-resistant and mirror-depth gloss that outlasts any wax by years.',
    image: carFrontStudio,
    cta: 'Explore Ceramic',
    link: '/services/ceramic'
  },
  {
    id: 3,
    label: 'Graphene Coating',
    title: 'Next-Gen Protection.',
    description: 'Stronger than ever. A graphene-infused coating that delivers extreme durability, self-healing effect, and unmatched gloss for years of worry-free driving.',
    image: carGrapheneCloseup,
    cta: 'Explore Graphene',
    link: '/services/graphene'
  }
];

export const services = [
  {
    slug: 'ppf',
    title: 'Paint Protection Film',
    short: 'PPF',
    tagline: 'Ultimate Protection Made Invisible',
    color: 'from-amber-500/20 to-yellow-500/10',
    image: carStudioWide,
    description: 'Military-grade urethane film that absorbs stone chips, scratches and road debris — self-healing, virtually invisible, warrantied up to 10 years.',
    features: [
      'Self Healing Technology',
      'Stone Chip Protection',
      'Scratch Resistant',
      'Long Lasting Clarity',
      'Anti-Yellowing',
      'High Gloss Finish'
    ]
  },
  {
    slug: 'ceramic',
    title: 'Ceramic Coating',
    short: 'Ceramic',
    tagline: 'Long Lasting Shine. Deep Gloss.',
    color: 'from-sky-500/20 to-blue-500/10',
    image: carFrontStudio,
    description: 'A 9H nano-ceramic layer that repels water, blocks UV rays and gives your paint a depth of gloss that wax simply cannot match — lasts 3 to 9 years.',
    features: [
      'Hydrophobic Effect',
      'UV & Chemical Resistant',
      'Mirror-Depth Gloss',
      'Easy Maintenance',
      'Scratch Resistant',
      'Long Lasting Shine'
    ]
  },
  {
    slug: 'graphene',
    title: 'Graphene Coating',
    short: 'Graphene',
    tagline: 'Stronger Than Ever. Protection That Lasts.',
    color: 'from-emerald-500/20 to-teal-500/10',
    image: carGrapheneCloseup,
    description: 'Next-generation graphene-infused coating delivering superior hardness, reduced water spotting, and enhanced durability compared to traditional ceramic coatings.',
    features: [
      'Next Gen Protection',
      'Enhanced Durability',
      'Superior Hardness',
      'Extreme Gloss',
      'Anti-Static',
      'Heat Dissipation'
    ]
  },
  {
    slug: 'borophene',
    title: 'Borophene Coating',
    short: 'Borophene',
    tagline: 'The Future of Surface Protection.',
    color: 'from-violet-500/20 to-purple-500/10',
    image: carFrontStudio,
    description: 'Cutting-edge borophene coating — an ultra-thin, ultra-hard layer that offers maximum protection with a slick finish, high heat resistance and unmatched durability.',
    features: [
      'Ultra Thin Protection',
      'High Heat Resistance',
      'Maximum Durability',
      'Chemical Resistant',
      'Molecular Bonding',
      '10-Year Performance'
    ]
  },
  {
    slug: 'interior-detailing',
    title: 'Interior Detailing',
    short: 'Interior',
    tagline: 'Deep Clean. Premium Care.',
    color: 'from-rose-500/20 to-red-500/10',
    image: carStudioWide,
    description: 'Complete cabin restoration — deep steam cleaning, leather conditioning, fabric shampooing, dashboard treatment and odour elimination for a showroom-fresh interior.',
    features: [
      'Deep Steam Cleaning',
      'Leather Conditioning',
      'Stain Removing',
      'Odour Elimination',
      'Fabric Protection',
      'Dashboard Care'
    ]
  }
];

export const ppfBrands = ['Garware', 'Nippon', 'Llumar', 'XPEL', 'Camio', 'ClearProtect'];
export const ceramicBrands = ['3M', 'Würth', 'Garware', 'Nippon'];

export const process = [
  { step: '01', title: 'Consultation', desc: 'We assess your car, discuss your goals and recommend the exact protection package that matches your usage and budget.' },
  { step: '02', title: 'Decontamination & Prep', desc: 'Iron fallout removal, clay bar treatment, paint correction if required — the surface must be flawless before anything goes on.' },
  { step: '03', title: 'Precision Application', desc: 'Film is computer-cut to your exact vehicle template and applied inside our dust-controlled studio by certified hands.' },
  { step: '04', title: 'Quality Inspection', desc: 'Every panel is inspected under high-intensity lighting for edges, bubbles and alignment before we call it done.' },
  { step: '05', title: 'Handover', desc: 'We walk you through the finished work, hand over warranty documents and advise on aftercare — your car leaves armoured.' }
];

export const whyUs = [
  { title: '30 Years of Experience', desc: 'Three decades of hands-on expertise in the automobile industry. Nothing about paint, panels or protection surprises us.' },
  { title: 'Certified Installers', desc: 'Our technicians are factory-trained and certified by every brand we install. No shortcuts, no guesswork.' },
  { title: 'Dust-Controlled Studio', desc: 'A climate-controlled, positive-pressure studio ensures zero contamination during film or coating application.' },
  { title: 'Premium-Grade Products', desc: 'We stock only top-tier films and coatings from globally recognised brands, serialised and authenticated.' },
  { title: 'Written Warranty', desc: 'Every job ships with a written warranty document. If something fails within the period, we fix it — no fine print.' },
  { title: 'Handover Perfection', desc: 'Every car is inspected under studio lighting, hand-cleaned and delivered in showroom condition.' }
];

export const testimonials = [
  { name: 'Rohan Mehta', car: 'BMW X5 Owner · Thane', text: 'Got my BMW X5 done with full-body PPF and the Ultimate package. The team is insanely precise — not a single bubble or lifted edge anywhere. Handed it back cleaner than I left it. Worth every rupee.' },
  { name: 'Priya Nair', car: 'Hyundai Creta Owner · Mulund', text: 'Ceramic coating on my new Creta — the water beading alone is satisfaction enough. Six months in and the car still looks freshly polished. Very professional studio, very honest pricing.' },
  { name: 'Amit Shinde', car: 'Toyota Fortuner Owner · Thane', text: 'Booked for sun films on my Fortuner. They recommended the right grade — cabin is noticeably cooler and I passed my vehicle inspection. Turnaround was fast and the finish is spot-on.' },
  { name: 'Kavitha Krishnan', car: 'Porsche Macan Owner · Powai', text: 'My Porsche Macan deserved the best. Came here after researching every detailing studio in Mumbai. The controlled environment, proper lighting — the PPF looks invisible and flawless.' },
  { name: 'Suresh Patil', car: 'Regular Client · Thane', text: 'Third car I have brought here. From consultation to handover — smooth and transparent. No upselling nonsense, just honest recommendations. I will not go anywhere else.' }
];

export const gallery = [
  { src: shopBannerWide, type: 'photo' },
  { src: shopSignboard, type: 'photo' },
  { src: carStudioWide, type: 'photo' },
  { src: carFrontStudio, type: 'photo' },
  { src: carGrapheneCloseup, type: 'photo' },
  { src: posterPpfInstall, type: 'photo' },
  { src: posterHandwash, type: 'photo' },
  { src: posterAudi1, type: 'board' },
  { src: posterBmwGrid, type: 'board' },
  { src: posterAudi2, type: 'board' },
  { src: posterBmwBlue, type: 'board' },
  { src: posterRangeRover1, type: 'board' },
  { src: posterRangeRover2, type: 'board' }
];

export const faqs = [
  { q: 'How long does PPF installation take?', a: 'A full-body PPF installation typically takes 3–5 days depending on the vehicle. Partial kits (bonnet, bumper, mirrors) can be completed in 1 day.' },
  { q: 'How long does ceramic coating last?', a: 'Depending on the grade selected — anywhere between 3 and 9 years with proper maintenance. Our team walks you through aftercare on handover.' },
  { q: 'Is PPF removable?', a: 'Yes. High-grade urethane PPF is designed to peel off cleanly within its lifespan without damaging the underlying paint.' },
  { q: 'Do you offer warranty?', a: 'Yes. Every service ships with a written warranty document — up to 10 years on premium PPF and up to 9 years on ceramic coating.' },
  { q: 'Can I book a consultation before deciding?', a: 'Absolutely. Book a free walk-in consultation at our Thane studio — we assess the car and recommend the right package with no pressure.' }
];
