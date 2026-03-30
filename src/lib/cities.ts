export interface City {
  name: string
  slug: string
  county: string
  distanceMiles: number
  population: string
  description: string
  neighborhoods?: string[]
}

export const cities: City[] = [
  {
    name: 'Eden Prairie',
    slug: 'eden-prairie',
    county: 'Hennepin',
    distanceMiles: 14,
    population: '68,000',
    description:
      'Eden Prairie is one of the Twin Cities\' most sought-after suburbs, known for its excellent schools, abundant green space, and a mix of established neighborhoods and newer developments. Homeowners here take pride in well-maintained, beautifully updated homes.',
    neighborhoods: ['Flying Cloud', 'Round Lake', 'Purgatory Creek'],
  },
  {
    name: 'Chanhassen',
    slug: 'chanhassen',
    county: 'Carver',
    distanceMiles: 10,
    population: '26,000',
    description:
      'Just northwest of Shakopee, Chanhassen blends small-town character with upscale suburban living. The city\'s newer subdivisions and lakeside homes represent some of the most desirable real estate in the southwest metro.',
  },
  {
    name: 'Chaska',
    slug: 'chaska',
    county: 'Carver',
    distanceMiles: 8,
    population: '26,000',
    description:
      'Chaska sits along the Minnesota River corridor with a charming historic downtown and steadily growing residential neighborhoods. Its mix of older homes and new builds means a constant demand for quality remodeling and handyman services.',
  },
  {
    name: 'Savage',
    slug: 'savage',
    county: 'Scott',
    distanceMiles: 6,
    population: '36,000',
    description:
      'Immediately east of Shakopee, Savage is a fast-growing community with a blend of established subdivisions and new construction. Homeowners here frequently update kitchens, bathrooms, and basements to match the neighborhood\'s upward trajectory.',
  },
  {
    name: 'Prior Lake',
    slug: 'prior-lake',
    county: 'Scott',
    distanceMiles: 10,
    population: '28,000',
    description:
      'Prior Lake is a lakeside community with some of the most beautiful homes in Scott County. The area\'s lake cabins, executive homes, and growing suburban neighborhoods all benefit from expert craftsmanship that respects the natural surroundings.',
  },
  {
    name: 'Burnsville',
    slug: 'burnsville',
    county: 'Dakota',
    distanceMiles: 15,
    population: '63,000',
    description:
      'One of the Twin Cities\' most established southern suburbs, Burnsville offers a mix of 1970s-era ranch homes and newer townhomes — many of which are prime candidates for kitchen and bathroom updates that bring them into the modern era.',
  },
  {
    name: 'Apple Valley',
    slug: 'apple-valley',
    county: 'Dakota',
    distanceMiles: 20,
    population: '55,000',
    description:
      'Apple Valley\'s family-friendly neighborhoods and strong school district attract homeowners who invest in their properties. Regular remodeling projects here range from basement finishing to full kitchen renovations.',
  },
  {
    name: 'Eagan',
    slug: 'eagan',
    county: 'Dakota',
    distanceMiles: 22,
    population: '68,000',
    description:
      'Eagan is a dynamic suburban city with a strong corporate presence and diverse housing stock. From townhomes to custom-built single-family homes, Eagan residents regularly invest in quality remodeling work.',
  },
  {
    name: 'Lakeville',
    slug: 'lakeville',
    county: 'Dakota',
    distanceMiles: 22,
    population: '72,000',
    description:
      'One of the fastest-growing cities in Minnesota, Lakeville attracts families who want space, good schools, and a community feel. Both newer and older homes here see regular remodeling activity as residents put down roots.',
  },
  {
    name: 'Bloomington',
    slug: 'bloomington',
    county: 'Hennepin',
    distanceMiles: 18,
    population: '89,000',
    description:
      'Minnesota\'s fourth-largest city has a large stock of mid-century ranch and split-level homes that are ripe for thoughtful renovation. Basement finishing and kitchen remodeling are among the most popular projects here.',
  },
  {
    name: 'Edina',
    slug: 'edina',
    county: 'Hennepin',
    distanceMiles: 22,
    population: '53,000',
    description:
      'Edina is synonymous with upscale suburban living in the Twin Cities. Discerning homeowners here expect exceptional craftsmanship — whether updating a 1950s colonial or renovating a newer luxury home.',
  },
  {
    name: 'Minnetonka',
    slug: 'minnetonka',
    county: 'Hennepin',
    distanceMiles: 22,
    population: '53,000',
    description:
      'Minnetonka\'s wooded lots and mix of architectural styles — from mid-century modern to traditional colonial — create a constant demand for skilled craftsmen who can work sensitively within the existing character of each home.',
  },
  {
    name: 'Hopkins',
    slug: 'hopkins',
    county: 'Hennepin',
    distanceMiles: 22,
    population: '20,000',
    description:
      'Hopkins\' revitalized downtown and walkable neighborhoods have made it one of the inner-ring suburbs most popular with homeowners looking to renovate and improve rather than move.',
  },
  {
    name: 'St. Louis Park',
    slug: 'st-louis-park',
    county: 'Hennepin',
    distanceMiles: 24,
    population: '49,000',
    description:
      'St. Louis Park is one of the Twin Cities\' most vibrant inner-ring suburbs, with a large stock of 1940s–1960s homes that homeowners regularly update to blend classic character with modern function.',
  },
  {
    name: 'Richfield',
    slug: 'richfield',
    county: 'Hennepin',
    distanceMiles: 22,
    population: '37,000',
    description:
      'Richfield sits adjacent to Minneapolis and the Mall of America, with a housing stock of post-war bungalows and ramblers that have tremendous potential with the right renovation partner.',
  },
  {
    name: 'Jordan',
    slug: 'jordan',
    county: 'Scott',
    distanceMiles: 15,
    population: '7,000',
    description:
      'Just south of Shakopee, Jordan is a small city with a tight-knit community and a growing number of new subdivisions attracting young families investing in their first homes — and their first remodels.',
  },
  {
    name: 'Waconia',
    slug: 'waconia',
    county: 'Carver',
    distanceMiles: 18,
    population: '14,000',
    description:
      'Waconia is a growing lakeside community west of the Twin Cities. Its mix of established neighborhoods and newer developments creates strong demand for both routine handyman services and complete home renovations.',
  },
  {
    name: 'Victoria',
    slug: 'victoria',
    county: 'Carver',
    distanceMiles: 16,
    population: '10,000',
    description:
      'Victoria is a charming small city surrounded by lakes and natural areas. Its upscale residential neighborhoods feature homes where quality craftsmanship is not just appreciated — it\'s expected.',
  },
  {
    name: 'Carver',
    slug: 'carver',
    county: 'Carver',
    distanceMiles: 12,
    population: '5,000',
    description:
      'The small city of Carver along the Minnesota River is growing steadily, with new subdivisions bringing in homeowners eager to personalize and improve their new builds alongside longtime residents maintaining established properties.',
  },
  {
    name: 'Farmington',
    slug: 'farmington',
    county: 'Dakota',
    distanceMiles: 28,
    population: '24,000',
    description:
      'Farmington has grown significantly over the past decade, transitioning from a rural small town to a suburb with a strong residential building activity. New homeowners here regularly invest in personalization and upgrades.',
  },
  {
    name: 'Rosemount',
    slug: 'rosemount',
    county: 'Dakota',
    distanceMiles: 25,
    population: '26,000',
    description:
      'Rosemount\'s family-friendly neighborhoods and ongoing residential growth make it one of the most active communities for home improvement in the southeast metro. Kitchen and basement projects are especially popular.',
  },
  {
    name: 'New Prague',
    slug: 'new-prague',
    county: 'Scott',
    distanceMiles: 22,
    population: '8,000',
    description:
      'New Prague retains a strong small-town identity while welcoming new residential development. Homeowners here value reliable, skilled local contractors — exactly the standard Hasselquist Contracting brings to every project.',
  },
  {
    name: 'Minneapolis',
    slug: 'minneapolis',
    county: 'Hennepin',
    distanceMiles: 24,
    population: '425,000',
    description:
      'South Minneapolis neighborhoods like Tangletown, Kenny, and Fulton are filled with character-rich craftsman bungalows and colonial revivals. These homes have tremendous bones and even greater potential when renovated with care.',
    neighborhoods: ['Tangletown', 'Kenny', 'Fulton', 'Nokomis', 'Longfellow'],
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug)
}
