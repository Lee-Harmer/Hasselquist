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
  metaTitle: string
  metaDescription: string
  hook?: string
}

export const services: Service[] = [
  {
    slug: 'carpentry',
    title: 'Carpentry Services',
    shortTitle: 'Carpentry',
    category: 'handyman',
    image: '/images/services/carpentry.png',
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
    metaTitle: 'Carpentry Services Shakopee MN | Custom Trim & Built-Ins',
    metaDescription:
      'Expert carpentry services in Shakopee, MN. Crown molding, built-ins, door installation, trim work, and custom woodworking throughout the Twin Cities.',
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Services',
    shortTitle: 'Plumbing',
    category: 'handyman',
    image: '/images/services/bathroom-plumbing.png',
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
    metaTitle: 'Plumbing Services Shakopee MN | Fixture Installation & Repairs',
    metaDescription:
      'Reliable plumbing services in Shakopee, MN. Fixture installation, leak repair, toilet replacement, and more. Serving the Twin Cities metro area.',
  },
  {
    slug: 'electrical',
    title: 'Electrical Services',
    shortTitle: 'Electrical',
    category: 'handyman',
    image: '/images/services/electrical.png',
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
    metaTitle: 'Electrical Services Shakopee MN | Outlets, Fixtures & More',
    metaDescription:
      'Licensed electrical services in Shakopee, MN. Outlet installation, light fixtures, ceiling fans, GFCI outlets, and electrical upgrades. Twin Cities area.',
  },
  {
    slug: 'drywall',
    title: 'Drywall Services',
    shortTitle: 'Drywall',
    category: 'handyman',
    image: '/images/services/drywall.png',
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
    metaTitle: 'Drywall Services Shakopee MN | Patching, Installation & Repair',
    metaDescription:
      'Professional drywall services in Shakopee, MN. Patching, installation, taping, mudding, and texture matching. Serving Eden Prairie, Prior Lake, and the Twin Cities.',
  },
  {
    slug: 'flooring',
    title: 'Flooring Services',
    shortTitle: 'Flooring',
    category: 'handyman',
    image: '/images/services/flooring.png',
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
    metaTitle: 'Flooring Installation Shakopee MN | Hardwood, LVP & Tile',
    metaDescription:
      'Expert flooring installation in Shakopee, MN. Hardwood, luxury vinyl plank, tile, and laminate. Serving Shakopee, Burnsville, Eden Prairie, and the Twin Cities.',
  },
  {
    slug: 'decks-fences',
    title: 'Deck & Fence Services',
    shortTitle: 'Decks & Fences',
    category: 'handyman',
    image: '/images/services/decks-fences.png',
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
    metaTitle: 'Deck & Fence Services Shakopee MN | Construction & Repair',
    metaDescription:
      'Professional deck and fence construction and repair in Shakopee, MN. Built for Minnesota\'s climate. Serving the Twin Cities metro area.',
  },
  {
    slug: 'kitchen',
    title: 'Kitchen Remodeling',
    shortTitle: 'Kitchen',
    category: 'remodeling',
    image: '/images/services/kitchen-remodel.png',
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
  },
  {
    slug: 'bathroom',
    title: 'Bathroom Remodeling',
    shortTitle: 'Bathroom',
    category: 'remodeling',
    image: '/images/services/bathroom-remodel.png',
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
  },
  {
    slug: 'basement',
    title: 'Basement Finishing',
    shortTitle: 'Basement',
    category: 'remodeling',
    image: '/images/services/basement-remodel.png',
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
