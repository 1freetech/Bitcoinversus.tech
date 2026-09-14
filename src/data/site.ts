export const nav = [
  ['Latest', '/'],
  ['Bitcoin Mining', '/category/bitcoin-mining'],
  ['Power Efficiency', '/category/power-efficiency'],
  ['AI', '/category/artificial-intelligence'],
  ['Data Centers', '/category/data-center-news'],
  ['Semiconductors', '/category/semiconductors'],
  ['Energy', '/category/energy'],
  ['TechDocs', '/category/techdocs']
] as const;

export const stories = [
  {
    slug: 'kerberos-network-authenticator',
    title: 'Kerberos: Network Authenticator',
    category: 'Information Technology',
    categorySlug: 'techdocs',
    dek: 'A technician-focused explanation of Kerberos authentication, tickets, trust, and why time synchronization matters.',
    date: '2026-09-13'
  },
  {
    slug: 'bitcoin-mining-efficiency-daily-electricity-costs',
    title: 'How Bitcoin Mining Efficiency Changes Daily Electricity Costs',
    category: 'Bitcoin Mining',
    categorySlug: 'bitcoin-mining',
    dek: 'A practical look at how J/TH, fleet size, and power price translate into operating cost.',
    date: '2026-09-13'
  },
  {
    slug: 'relative-price-power-efficiency-index',
    title: 'Relative Price Explained Through the Power Efficiency Index',
    category: 'Power Efficiency',
    categorySlug: 'power-efficiency',
    dek: 'An efficiency-model view of relative price using compute capability and energy efficiency.',
    date: '2026-09-12'
  },
  {
    slug: 'proof-of-work-power-efficiency-model',
    title: 'Understanding Proof of Work Through the Power Efficiency Model',
    category: 'Power Efficiency',
    categorySlug: 'power-efficiency',
    dek: 'A plain-English framework for connecting proof-of-work capability, energy use, and physical operating constraints.',
    date: '2026-09-11'
  },
  {
    slug: 'pei-vs-stock-to-flow',
    title: 'Bitcoin Valuation Models Compared: PEI Vs. Stock-to-Flow',
    category: 'Power Efficiency',
    categorySlug: 'power-efficiency',
    dek: 'A comparison of an efficiency-based physical model with scarcity-based valuation.',
    date: '2026-09-10'
  },
  {
    slug: 'ethereum-classic-pei-2026',
    title: 'Ethereum Classic PEI Analysis: Is ETC Undervalued in 2026?',
    category: 'Power Efficiency',
    categorySlug: 'power-efficiency',
    dek: 'A proof-of-work efficiency analysis of Ethereum Classic using network and hardware changes.',
    date: '2026-09-09'
  }
] as const;

export const categories = [
  { slug: 'bitcoin-mining', name: 'Bitcoin Mining', description: 'ASICs, hashrate, fleet operations, mining economics, cooling and power.' },
  { slug: 'power-efficiency', name: 'Power Efficiency', description: 'Power Efficiency Index research, physical price analysis and proof-of-work efficiency.' },
  { slug: 'artificial-intelligence', name: 'Artificial Intelligence', description: 'AI systems, infrastructure, models and engineering developments.' },
  { slug: 'data-center-news', name: 'Data Center News', description: 'Power, cooling, networking, commissioning and high-density compute infrastructure.' },
  { slug: 'semiconductors', name: 'Semiconductors', description: 'Chip manufacturing, equipment, process technology and semiconductor engineering.' },
  { slug: 'energy', name: 'Energy', description: 'Grid infrastructure, generation, electrical systems and energy markets.' },
  { slug: 'techdocs', name: 'TechDocs', description: 'Technician-first guides for Linux, networking, electrical and infrastructure work.' }
] as const;
