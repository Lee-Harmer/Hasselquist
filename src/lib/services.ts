export interface PricingItem {
  name: string
  description: string
  price: string
}

export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  category: 'handyman' | 'remodeling'
  image: string
  icon: string
  highlights: string[]
  pricing?: PricingItem[]
  metaTitle: string
  metaDescription: string
  hook?: string
  quirkyComment?: {
    text: string
    arrow?: 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right'
    rotate?: number
    align?: 'left' | 'center' | 'right'
  }
}

export const services: Service[] = [
  {
    slug: 'carpentry',
    title: 'Carpentry Services',
    shortTitle: 'Carpentry',
    category: 'handyman',
    image: '/images/services/carpentry.jpg',
    icon: '🪵',
    description: 'Custom trim work, built-ins, doors, and fine woodworking throughout your home.',
    longDescription:
      'From crown molding and custom built-ins to door installations and trim repairs, our carpentry work is measured in millimeters. Every joint is tight, every surface smooth, every detail considered  -  because that\'s what separates a house from a home.',
    highlights: [
      'Crown molding & trim installation',
      'Custom built-in shelving & cabinetry',
      'Interior & exterior door installation',
      'Wainscoting & board and batten',
      'Stair railing & baluster work',
      'Window casing & sill replacement',
    ],
    pricing: [
      { name: 'Door Repair/Replacement', description: 'Ensure your doors are secure and stylish with expert repairs or new installations.', price: '$100–$300 per door' },
      { name: 'Window Repair/Replacement', description: 'Improve energy efficiency and enhance your home\'s look with professional window repairs or replacements.', price: '$150–$500 per window' },
      { name: 'Cabinet Installation', description: 'Transform your kitchen or bathroom with beautiful, custom cabinet installations.', price: '$200–$500 per cabinet' },
      { name: 'Trim & Molding Installation', description: 'Add sophistication to any room with expertly installed trim and molding.', price: '$50–$100 per linear foot' },
      { name: 'Baseboard Installation', description: 'Give your walls a clean, finished look with precise baseboard installations.', price: '$2–$5 per linear foot' },
    ],
    metaTitle: 'Carpentry Services Shakopee MN | Custom Trim & Built-Ins',
    metaDescription:
      'Expert carpentry services in Shakopee, MN. Crown molding, built-ins, door installation, trim work, and custom woodworking throughout the Twin Cities.',
    quirkyComment: {
      text: "You'll notice bad trim every single day. So will your guests.",
      arrow: 'down-right',
      rotate: -2,
    },
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Services',
    shortTitle: 'Plumbing',
    category: 'handyman',
    image: '/images/services/plumbing.jpg',
    icon: '🔧',
    description: 'Fixture installations, leak repairs, and plumbing upgrades done right the first time.',
    longDescription:
      'Whether you\'re upgrading a fixture or dealing with a persistent leak, we handle residential plumbing with the same precision we bring to every project. No shortcuts, no guesswork  -  just clean, code-compliant work that lasts.',
    highlights: [
      'Faucet & fixture installation',
      'Toilet repair & replacement',
      'Leak detection & repair',
      'Garbage disposal installation',
      'Shut-off valve replacement',
      'Bathroom & kitchen plumbing rough-in',
    ],
    pricing: [
      { name: 'Faucet Repair/Replacement', description: 'Fix or upgrade your faucet for improved efficiency and style.', price: '$75–$150' },
      { name: 'Leak Detection', description: 'Quickly find and repair hidden leaks to prevent costly water damage.', price: '$50–$100' },
      { name: 'Toilet Repair', description: 'Restore your toilet\'s function with fast and reliable repairs or replacements.', price: '$75–$150' },
      { name: 'Garbage Disposal Repair', description: 'Get your kitchen back on track with expert garbage disposal repairs or new installations.', price: '$100–$200' },
    ],
    metaTitle: 'Plumbing Services Shakopee MN | Fixture Installation & Repairs',
    metaDescription:
      'Reliable plumbing services in Shakopee, MN. Fixture installation, leak repair, toilet replacement, and more. Serving the Twin Cities metro area.',
    quirkyComment: {
      text: 'That dripping faucet has been keeping you up. Let\'s fix it.',
      arrow: 'up-right',
      rotate: 2,
      align: 'right',
    },
  },
  {
    slug: 'electrical',
    title: 'Electrical Services',
    shortTitle: 'Electrical',
    category: 'handyman',
    image: '/images/services/electrical.jpg',
    icon: '⚡',
    description: 'Safe, licensed electrical work  -  outlets, fixtures, fans, and panel upgrades.',
    longDescription:
      'Electrical work demands precision and respect for safety. We handle a range of residential electrical services, always to code, always permitted where required. From a single outlet to a full pre-remodel electrical upgrade.',
    highlights: [
      'Outlet & switch installation',
      'Light fixture & ceiling fan mounting',
      'Dimmer switch installation',
      'GFCI outlet installation',
      'Circuit breaker replacement',
      'Pre-remodel electrical rough-in',
    ],
    pricing: [
      { name: 'Light Fixture Installation', description: 'Upgrade your lighting with expertly installed fixtures for a brighter, more efficient home.', price: '$50–$150 per fixture' },
      { name: 'Outlet Repair/Replacement', description: 'Fix faulty outlets or upgrade to new ones for a safer, more reliable electrical system.', price: '$50–$100 per outlet' },
      { name: 'Switch Repair', description: 'Quick and reliable repairs for malfunctioning light switches, restoring control and safety.', price: '$50–$100 per switch' },
      { name: 'Small Appliance Repair', description: 'Get your small appliances back in working order with professional electrical repairs.', price: '$50–$150 per appliance' },
    ],
    metaTitle: 'Electrical Services Shakopee MN | Outlets, Fixtures & More',
    metaDescription:
      'Licensed electrical services in Shakopee, MN. Outlet installation, light fixtures, ceiling fans, GFCI outlets, and electrical upgrades. Twin Cities area.',
    quirkyComment: {
      text: "Bad lighting is why you think you can't cook.",
      arrow: 'down-right',
      rotate: -3,
    },
  },
  {
    slug: 'drywall',
    title: 'Drywall Services',
    shortTitle: 'Drywall',
    category: 'handyman',
    image: '/images/services/drywall.jpg',
    icon: '🪣',
    description: 'Seamless drywall installation, patching, and finishing with a paint-ready surface.',
    longDescription:
      'Good drywall work is invisible  -  and that\'s exactly the point. Whether we\'re patching a small hole or hanging an entire room, our finishing is smooth, crisp, and indistinguishable from the surrounding wall.',
    highlights: [
      'Hole & crack patching',
      'Full room drywall installation',
      'Drywall taping & mudding',
      'Texture matching',
      'Water damage repair',
      'Popcorn ceiling removal',
    ],
    pricing: [
      { name: 'Repair', description: 'Quick and reliable drywall repairs to fix holes and damage, restoring a seamless finish.', price: '$50–$150 per hole' },
      { name: 'Patching', description: 'Professional patching services for larger wall damage, blending perfectly with existing walls.', price: '$1–$2 per sq ft' },
      { name: 'Texturing', description: 'Add depth and character to your walls with expertly applied drywall texturing.', price: '$2–$4 per sq ft' },
    ],
    metaTitle: 'Drywall Services Shakopee MN | Patching, Installation & Repair',
    metaDescription:
      'Professional drywall services in Shakopee, MN. Patching, installation, taping, mudding, and texture matching. Serving Eden Prairie, Prior Lake, and the Twin Cities.',
    quirkyComment: {
      text: 'You\'ve been moving the canvas to cover that wall for two years now.',
      arrow: 'up-left',
      rotate: 3,
      align: 'right',
    },
  },
  {
    slug: 'flooring',
    title: 'Flooring Services',
    shortTitle: 'Flooring',
    category: 'handyman',
    image: '/images/services/flooring.jpg',
    icon: '🏠',
    description: 'Hardwood, LVP, tile, and laminate installation  -  level, tight, and built to last.',
    longDescription:
      'Flooring sets the tone for every room. We install hardwood, luxury vinyl plank, tile, and laminate with the attention to layout and detail that makes the difference between good and exceptional.',
    highlights: [
      'Hardwood floor installation',
      'Luxury vinyl plank (LVP) installation',
      'Tile floor installation',
      'Laminate flooring',
      'Subfloor repair & leveling',
      'Transition strips & thresholds',
    ],
    pricing: [
      { name: 'Laminate Installation', description: 'Durable and stylish laminate flooring, expertly installed to fit your space and budget.', price: '$3–$5 per sq ft' },
      { name: 'Hardwood Installation', description: 'Bring timeless beauty to your home with professional hardwood flooring installation.', price: '$5–$8 per sq ft' },
      { name: 'Carpet Installation', description: 'Create a cozy, comfortable atmosphere with expertly installed carpet flooring.', price: '$2–$4 per sq ft' },
      { name: 'Tile Installation', description: 'Enhance your home\'s style with precision tile installations, perfect for small or high-traffic areas.', price: '$5–$10 per sq ft' },
    ],
    metaTitle: 'Flooring Installation Shakopee MN | Hardwood, LVP & Tile',
    metaDescription:
      'Expert flooring installation in Shakopee, MN. Hardwood, luxury vinyl plank, tile, and laminate. Serving Shakopee, Burnsville, Eden Prairie, and the Twin Cities.',
    quirkyComment: {
      text: "Turns out you've hated that floor for years. Admit it.",
      arrow: 'down-right',
      rotate: -2,
    },
  },
  {
    slug: 'decks-fences',
    title: 'Deck & Fence Services',
    shortTitle: 'Decks & Fences',
    category: 'handyman',
    image: '/images/services/decks-fences.jpg',
    icon: '🌿',
    description: 'Deck construction, repairs, and fence installation that stand up to Minnesota winters.',
    longDescription:
      'Minnesota outdoor structures need to be built for extremes. We design and build decks and fences using materials and techniques that hold up through freeze-thaw cycles, UV exposure, and everything in between.',
    highlights: [
      'New deck design & construction',
      'Deck board replacement & repair',
      'Railing installation & repair',
      'Privacy fence construction',
      'Fence post repair & replacement',
      'Deck staining & sealing prep',
    ],
    pricing: [
      { name: 'Deck Repair', description: 'Restore your deck\'s structure and appearance with expert repair services for long-lasting results.', price: '$500–$2,000' },
      { name: 'Deck Staining/Sealing', description: 'Protect and beautify your deck with professional staining and sealing that stands up to the elements.', price: '$200–$500' },
      { name: 'Deck Cleaning', description: 'Keep your deck looking fresh and clean with thorough cleaning services that remove dirt and grime.', price: '$150–$300' },
      { name: 'Fence Repair', description: 'Repair damaged sections of your fence for enhanced privacy, security, and curb appeal.', price: '$100–$300 per section' },
      { name: 'Fence Installation', description: 'Professional fence installations tailored to your home\'s style and security needs.', price: '$10–$20 per linear foot' },
      { name: 'Gutter Cleaning', description: 'Prevent water damage with regular gutter cleaning to ensure proper drainage and protection for your home.', price: '$75–$150' },
      { name: 'Pressure Washing', description: 'Revitalize your home\'s exterior with professional pressure washing, perfect for driveways, decks, and siding.', price: '$100 per hour' },
    ],
    metaTitle: 'Deck & Fence Services Shakopee MN | Construction & Repair',
    metaDescription:
      'Professional deck and fence construction and repair in Shakopee, MN. Built for Minnesota\'s climate. Serving the Twin Cities metro area.',
    quirkyComment: {
      text: 'Imagine coffee out there on a Tuesday morning.',
      arrow: 'up-right',
      rotate: 2,
      align: 'right',
    },
  },
  {
    slug: 'other',
    title: 'Additional Handyman Services',
    shortTitle: 'Other Services',
    category: 'handyman',
    image: '/images/services/other.png',
    icon: '🔨',
    description: 'Versatile handyman services for all your unique needs — garage doors, furniture assembly, small remodels, and debris removal.',
    longDescription:
      'We go beyond standard repairs and installations with a variety of additional services to meet your home improvement needs. From garage door repairs to furniture assembly and small remodels, we are your go-to solution for any project that requires skilled workmanship and attention to detail. No project is too big or too small, and we tailor our services to fit your specific requirements.',
    highlights: [
      'Garage door spring & track repair',
      'Furniture assembly',
      'Small bathroom & kitchen updates',
      'Cabinet installation & upgrades',
      'Construction debris removal',
      'General home improvement tasks',
    ],
    pricing: [
      { name: 'Garage Door Repair', description: 'Ensure the smooth and safe operation of your garage door with expert repair services.', price: '$150–$300 + parts' },
      { name: 'Furniture Assembly', description: 'Quick and accurate furniture assembly for a hassle-free experience and a stable result.', price: '$50–$100 per item' },
      { name: 'Small Remodels', description: 'Transform your space with expertly planned and executed small remodel projects.', price: 'Varies by scope' },
      { name: 'Construction Debris Removal', description: 'Efficiently clear out construction debris to leave your space clean and safe after any project.', price: 'Varies by volume' },
    ],
    metaTitle: 'Additional Handyman Services Shakopee MN | Garage Doors, Assembly & More',
    metaDescription:
      'Versatile handyman services in Shakopee, MN. Garage door repair, furniture assembly, small remodels, and construction debris removal. Serving the Twin Cities metro area.',
    quirkyComment: {
      text: "If you're not sure who to call — call us.",
      arrow: 'down-right',
      rotate: -2,
    },
  },
  {
    slug: 'adu',
    title: 'ADU & In-Law Suite Construction',
    shortTitle: 'ADU',
    category: 'remodeling',
    image: '/images/services/ADU.webp',
    icon: '🏡',
    description: 'Fully self-contained accessory dwelling units - backyard cottages, garage conversions, and basement apartments built to Minnesota code.',
    longDescription:
      'An ADU lets your family stay close without living on top of each other. Whether you\'re building for aging parents, a returning adult child, rental income, or your own eventual downsizing - we design and build ADUs that function like real homes, because they are. Fully independent, code-compliant, and built for Minnesota winters.',
    highlights: [
      'Detached backyard cottages & garage conversions',
      'Basement apartment with separate entrance',
      'Full kitchen, bathroom & living space',
      'Fire separation & code-compliant utilities',
      'Minnesota State Building Code compliance',
      'Permit acquisition & city approval support',
    ],
    metaTitle: 'ADU Construction Shakopee MN | In-Law Suites & Backyard Cottages',
    metaDescription:
      'ADU and accessory dwelling unit construction in Shakopee, MN. In-law suites, backyard cottages, garage conversions, and basement apartments. Serving the Twin Cities metro.',
    hook: 'Close enough to help. Independent enough to thrive.',
    quirkyComment: {
      text: 'Close enough to be there. Far enough for everyone to breathe.',
      arrow: 'down-right',
      rotate: -2,
    },
  },
  {
    slug: 'kitchen',
    title: 'Kitchen Remodeling',
    shortTitle: 'Kitchen',
    category: 'remodeling',
    image: '/images/services/kitchen-remodel.jpg',
    icon: '🍳',
    description: 'Full kitchen transformations  -  from layout changes to custom cabinetry and finish work.',
    longDescription:
      'The kitchen is the heart of the home, and a well-executed remodel changes how you experience it every single day. We manage kitchen projects from concept through completion  -  demolition, rough-in work, cabinetry, countertops, tile, and all finish details.',
    highlights: [
      'Full kitchen demolition & layout changes',
      'Cabinet installation & custom cabinetry',
      'Countertop installation (quartz, granite, butcher block)',
      'Backsplash tile installation',
      'Kitchen island construction',
      'Appliance installation & integration',
    ],
    metaTitle: 'Kitchen Remodeling Shakopee MN | Twin Cities Kitchen Renovation',
    metaDescription:
      'Full-service kitchen remodeling in Shakopee, MN. Custom cabinetry, countertops, tile backsplash, and complete kitchen renovations serving the Twin Cities.',
    hook: 'Where everything comes together',
    quirkyComment: {
      text: "That kitchen has held you hostage long enough.",
      arrow: 'down-right',
      rotate: -2,
    },
  },
  {
    slug: 'bathroom',
    title: 'Bathroom Remodeling',
    shortTitle: 'Bathroom',
    category: 'remodeling',
    image: '/images/services/bathroom-remodel.jpg',
    icon: '🛁',
    description: 'Bathroom renovations from powder rooms to master suites  -  every tile, fixture, and finish.',
    longDescription:
      'A beautifully renovated bathroom is one of the highest-return investments in your home  -  and one of the most rewarding spaces to live with. We handle everything from tile layout to plumbing rough-in, ensuring every detail is executed with care.',
    highlights: [
      'Shower & tub installation and surround tile',
      'Vanity & fixture installation',
      'Floor tile installation',
      'Bathroom layout reconfiguration',
      'Heated floor installation',
      'Custom niche & built-in storage',
    ],
    metaTitle: 'Bathroom Remodeling Shakopee MN | Renovation & Renovation',
    metaDescription:
      'Expert bathroom remodeling in Shakopee, MN. Shower tile, vanities, floor tile, and complete bathroom renovations. Serving Eden Prairie, Prior Lake, and the Twin Cities.',
    hook: 'Your space to unwind',
    quirkyComment: {
      text: "The bathroom you apologise for before guests use it. Yeah, that one.",
      arrow: 'up-right',
      rotate: 3,
      align: 'right',
    },
  },
  {
    slug: 'basement',
    title: 'Basement Finishing',
    shortTitle: 'Basement',
    category: 'remodeling',
    image: '/images/services/basement-remodel.jpg',
    icon: '🏗️',
    description: 'Transform your unfinished basement into a living space your family will love.',
    longDescription:
      'An unfinished basement is a home\'s greatest untapped potential. We turn raw concrete and exposed joists into finished family rooms, home offices, gyms, guest suites, and bars  -  fully framed, insulated, wired, and finished to match your vision.',
    highlights: [
      'Full basement framing & insulation',
      'Drywall installation & finishing',
      'Egress window installation',
      'Basement bathroom rough-in & finish',
      'Drop ceiling & drywall ceiling options',
      'Bar & entertainment room buildout',
    ],
    metaTitle: 'Basement Finishing Shakopee MN | Basement Remodeling Twin Cities',
    metaDescription:
      'Professional basement finishing and remodeling in Shakopee, MN. Full basement renovations, home theater, bars, and guest suites. Serving the Twin Cities metro area.',
    hook: 'Made for living, not just storage',
    quirkyComment: {
      text: 'There\'s a whole floor of your house you\'re not living on yet.',
      arrow: 'down-right',
      rotate: -2,
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByCategory(category: 'handyman' | 'remodeling'): Service[] {
  return services.filter((s) => s.category === category)
}

export const handymanServices = services.filter((s) => s.category === 'handyman')
export const remodelingServices = services.filter((s) => s.category === 'remodeling')
