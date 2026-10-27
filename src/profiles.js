/**
 * Curated domain intelligence & aesthetic metadata for the Top 30 Flagship Sites,
 * grounded in the real extracted DOM/CSS telemetry in /workspace/taste-skill/extracted/<slug>.json.
 */

const SITE_METADATA = {
  linear: {
    name: 'Linear',
    domain: 'linear.app',
    url: 'https://linear.app',
    category: 'DevTools & SaaS',
    mode: 'dark',
    archetype: 'Dark Precision SaaS & Industrial Craftsmanship',
    vibe: 'Ultra-dark #08090A carbon canvas + 1px rgba(255,255,255,0.08) translucent hairlines + Inter Variable 510 weight (-0.022em) + Berkeley Mono telemetry.',
    tags: ['dark', 'precision', 'saas', 'linear', 'hairline-borders', 'bento-grid', 'issue-tracker', 'minimalist', 'micro-shadows', 'indigo', 'carbon-black', 'dashboard', 'ai-agents'],
    paletteOverride: {
      canvas: '#08090A',
      surface: '#0F1011',
      text: '#F7F8F8',
      muted: '#8A8F98',
      accent: '#5E6AD2',
      border: 'rgba(255, 255, 255, 0.08)'
    },
    fontsOverride: {
      heading: 'Inter Variable',
      body: 'Inter Variable',
      mono: 'Berkeley Mono'
    },
    metricsOverride: {
      h1Size: '64px / -0.022em (w510)',
      buttonRadius: '9999px (Pill) / 6px',
      borderStyle: '1px rgba(255,255,255,0.08)'
    }
  },
  stripe: {
    name: 'Stripe',
    domain: 'stripe.com',
    url: 'https://stripe.com',
    category: 'Fintech & Enterprise',
    mode: 'dual',
    archetype: 'High-Craft Financial Infrastructure & Editorial Light/Navy Dual-Mode',
    vibe: 'Daylight #FFFFFF & cool ice-slate #E5EDF5 bento grids contrasted with #0D1738 deep navy sections, light-weight 300 Söhne Variable typography, and 4px #533AFD CTAs.',
    tags: ['light', 'dual', 'fintech', 'payments', 'billing', 'pricing', 'enterprise', 'stripe', 'mesh-gradient', 'editorial', 'navy', 'indigo', 'bento', 'revenue'],
    paletteOverride: {
      canvas: '#FFFFFF',
      surface: '#F8FAFD',
      text: '#061B31',
      muted: '#50617A',
      accent: '#533AFD',
      border: '#E5EDF5'
    },
    fontsOverride: {
      heading: 'Söhne Variable (sohne-var)',
      body: 'Söhne Variable',
      mono: 'SourceCodePro'
    },
    metricsOverride: {
      h1Size: '48px–56px / -0.025em (w300)',
      buttonRadius: '4px (Crisp HDS)',
      borderStyle: '1px solid #E5EDF5'
    }
  },
  resend: {
    name: 'Resend',
    domain: 'resend.com',
    url: 'https://resend.com',
    category: 'DevTools & Infra',
    mode: 'dark',
    archetype: 'Obsidian Developer Luxury & Editorial Serif-Meets-Mono',
    vibe: 'True #000000 obsidian canvas with rgba(212,234,255,0.19) ice-tinted borders, 96px Domaine editorial serif H1, -0.05em ABC Favorit H2, CommitMono code, and blur(25px) glass CTAs.',
    tags: ['dark', 'obsidian', 'pitch-black', 'devtools', 'developer', 'email', 'api', 'resend', 'serif', 'editorial', 'mono', 'frosted-glass', 'ice-slate-border', 'luxury'],
    paletteOverride: {
      canvas: '#000000',
      surface: '#141517',
      text: '#F0F0F0',
      muted: '#A1A4A5',
      accent: '#00A3FF',
      border: 'rgba(212, 234, 255, 0.19)'
    },
    fontsOverride: {
      heading: 'Domaine / ABC Favorit',
      body: 'Inter',
      mono: 'CommitMono'
    },
    metricsOverride: {
      h1Size: '96px / -0.01em (Domaine)',
      buttonRadius: '16px (Blur 25px Glass)',
      borderStyle: '1px rgba(212,234,255,0.19)'
    }
  },
  vercel: {
    name: 'Vercel',
    domain: 'vercel.com',
    url: 'https://vercel.com',
    category: 'DevTools & Infra',
    mode: 'light',
    archetype: 'Geist Architectural Grid & Swiss Precision Monochrome',
    vibe: 'Architectural #FAFAFA / #FFFFFF daylight grid with exposed 1px #EBEBEB structural hairlines, corner crosshair markers, ultra-tight -0.06em GeistSans display type, and #171717 monochrome CTAs.',
    tags: ['light', 'monochrome', 'grid', 'crosshairs', 'geist', 'vercel', 'developer', 'cloud', 'infra', 'minimal', 'swiss', 'high-contrast', '1px-grid'],
    paletteOverride: {
      canvas: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#171717',
      muted: '#4D4D4D',
      accent: '#0070F3',
      border: '#EBEBEB'
    },
    fontsOverride: {
      heading: 'GeistSans',
      body: 'GeistSans',
      mono: 'GeistMono'
    },
    metricsOverride: {
      h1Size: '64px / -0.06em (w400)',
      buttonRadius: '6px / 9999px',
      borderStyle: '1px solid #EBEBEB'
    }
  },
  supabase: {
    name: 'Supabase',
    domain: 'supabase.com',
    url: 'https://supabase.com',
    category: 'DevTools & Infra',
    mode: 'light',
    archetype: 'Postgres Emerald Technical Clarity & Clean Modular Bento',
    vibe: 'Crisp #FDFDFD canvas with rgba(0,0,0,0.08) hairline bento modules, geometric Manrope headings, Source Code Pro SQL snippets, and signature #0E7E4E / #3ECF8E Postgres emerald accents.',
    tags: ['light', 'database', 'postgres', 'emerald', 'green', 'devtools', 'backend', 'supabase', 'bento', 'sql', 'monospace', 'open-source'],
    paletteOverride: {
      canvas: '#FDFDFD',
      surface: '#FFFFFF',
      text: '#030303',
      muted: '#696969',
      accent: '#0E7E4E',
      border: 'rgba(0, 0, 0, 0.08)'
    },
    fontsOverride: {
      heading: 'Manrope',
      body: 'Inter / Manrope',
      mono: 'Source Code Pro'
    },
    metricsOverride: {
      h1Size: '46px / 0em (w500)',
      buttonRadius: '8px',
      borderStyle: '1px rgba(0,0,0,0.08)'
    }
  },
  raycast: {
    name: 'Raycast',
    domain: 'raycast.com',
    url: 'https://www.raycast.com',
    category: 'AI & Productivity',
    mode: 'dark',
    archetype: 'Desktop-Class macOS Acrylic Glass & Crimson Spotlight',
    vibe: 'Deep #07080A midnight canvas with rgba(255,255,255,0.02) translucent acrylic panels, 1px rgba(255,255,255,0.08) specular rims, keyboard shortcut kbd badges, and #FF6363 ruby glow.',
    tags: ['dark', 'glassmorphism', 'macos', 'desktop', 'launcher', 'productivity', 'raycast', 'crimson', 'keyboard', 'command-palette', 'acrylic'],
    paletteOverride: {
      canvas: '#07080A',
      surface: '#141517',
      text: '#FFFFFF',
      muted: '#9CA3AF',
      accent: '#FF6363',
      border: 'rgba(255, 255, 255, 0.08)'
    },
    fontsOverride: {
      heading: 'Inter',
      body: 'Inter',
      mono: 'JetBrains Mono'
    },
    metricsOverride: {
      h1Size: '64px / 1.1 (w600)',
      buttonRadius: '10px',
      borderStyle: '1px rgba(255,255,255,0.08)'
    }
  },
  cursor: {
    name: 'Cursor',
    domain: 'cursor.com',
    url: 'https://www.cursor.com',
    category: 'AI & Productivity',
    mode: 'light',
    archetype: 'Warm Archival Paper & Frontier AI Research Craft',
    vibe: 'Warm archival paper canvas (#F7F7F4 / #F2F1ED) with deep charcoal-olive ink (#26251E), bespoke CursorGothic + EB Garamond editorial quotes + BerkeleyMono diff blocks and timeline tokens.',
    tags: ['light', 'warm', 'paper', 'editorial', 'ai', 'coding-agent', 'cursor', 'serif', 'berkeley-mono', 'minimalist', 'research', 'ide'],
    paletteOverride: {
      canvas: '#F7F7F4',
      surface: '#F2F1ED',
      text: '#26251E',
      muted: 'rgba(38, 36, 29, 0.55)',
      accent: '#26251E',
      border: 'rgba(39, 39, 29, 0.1)'
    },
    fontsOverride: {
      heading: 'CursorGothic',
      body: 'CursorGothic / EB Garamond',
      mono: 'berkeleyMono'
    },
    metricsOverride: {
      h1Size: '36px / -0.02em (w400)',
      buttonRadius: '9999px (Pill)',
      borderStyle: '1px rgba(39,39,29,0.1)'
    }
  },
  clerk: {
    name: 'Clerk',
    domain: 'clerk.com',
    url: 'https://clerk.com',
    category: 'DevTools & Infra',
    mode: 'light',
    archetype: 'Tactile Micro-Shadow Auth Components & Electric Violet',
    vibe: 'Cool alabaster #F7F7F8 canvas with floating #FFFFFF auth cards, multi-layered ring micro-shadows, tight -0.035em Geist headings, SoehneMono snippets, and #6C47FF electric violet accents.',
    tags: ['light', 'auth', 'components', 'micro-shadows', 'violet', 'purple', 'clerk', 'devtools', 'saas', 'tactile', 'bento'],
    paletteOverride: {
      canvas: '#F7F7F8',
      surface: '#FFFFFF',
      text: '#131316',
      muted: '#747686',
      accent: '#6C47FF',
      border: 'rgba(0, 0, 0, 0.06)'
    },
    fontsOverride: {
      heading: 'Geist / geistNumbers',
      body: 'Inter / Geist',
      mono: 'soehneMono'
    },
    metricsOverride: {
      h1Size: '56px / -0.035em (w700)',
      buttonRadius: '9999px / 6px',
      borderStyle: '1px rgba(0,0,0,0.06)'
    }
  },
  mintlify: {
    name: 'Mintlify',
    domain: 'mintlify.com',
    url: 'https://mintlify.com',
    category: 'DevTools & SaaS',
    mode: 'light',
    archetype: 'Warm Daylight Documentation & Editorial Arizona Flare Serif',
    vibe: 'Clean #FFFFFF & warm sand #F9F6F3 surfaces paired with deep forest ink #121715, 50px ArizonaFlare editorial display typography (-0.04em tracking), and crisp 4px #08090A / #0077A6 CTAs.',
    tags: ['light', 'docs', 'documentation', 'serif', 'warm', 'mintlify', 'ai', 'devtools', 'editorial', 'clean'],
    paletteOverride: {
      canvas: '#FFFFFF',
      surface: '#F9F6F3',
      text: '#121715',
      muted: 'rgba(8, 9, 10, 0.8)',
      accent: '#0077A6',
      border: '#F1F0EE'
    },
    fontsOverride: {
      heading: 'arizonaFlare',
      body: 'Inter',
      mono: 'JetBrains Mono'
    },
    metricsOverride: {
      h1Size: '50px / -0.04em (w400)',
      buttonRadius: '4px',
      borderStyle: '1px solid #F1F0EE'
    }
  },
  cal: {
    name: 'Cal.com',
    domain: 'cal.com',
    url: 'https://cal.com',
    category: 'DevTools & SaaS',
    mode: 'light',
    archetype: 'Neo-Brutalist Swiss Scheduling & Geometric Cal Sans',
    vibe: 'Tactile #F4F4F4 industrial stone canvas with crisp #FFFFFF widget cards, bold 64px geometric Cal Sans display headings, high-contrast #242424 ink, and #AA61F1 violet scheduling accents.',
    tags: ['light', 'scheduling', 'calendar', 'open-source', 'cal', 'calsans', 'geometric', 'bento', 'saas', 'stone'],
    paletteOverride: {
      canvas: '#F4F4F4',
      surface: '#FFFFFF',
      text: '#242424',
      muted: '#898989',
      accent: '#242424',
      border: '#E5E5E5'
    },
    fontsOverride: {
      heading: 'Cal Sans',
      body: 'Inter',
      mono: 'Roboto Mono'
    },
    metricsOverride: {
      h1Size: '64px / 1.1 (w600)',
      buttonRadius: '12px',
      borderStyle: '1px solid #E5E5E5'
    }
  },
  dub: {
    name: 'Dub',
    domain: 'dub.co',
    url: 'https://dub.co',
    category: 'DevTools & SaaS',
    mode: 'light',
    archetype: 'Modern Link Attribution & Crisp Satoshi/Geist Minimalist',
    vibe: 'Airy #FAFAFA canvas with #FFFFFF analytics cards, #E5E5E5 1px borders, geometric Satoshi 48px display headings, GeistMono shortlinks, and high-contrast #000000 8px-radius primary buttons.',
    tags: ['light', 'analytics', 'marketing', 'saas', 'dub', 'satoshi', 'geist-mono', 'minimalist', 'clean', 'bento'],
    paletteOverride: {
      canvas: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#171717',
      muted: '#737373',
      accent: '#000000',
      border: '#E5E5E5'
    },
    fontsOverride: {
      heading: 'Satoshi',
      body: 'Inter / Satoshi',
      mono: 'GeistMono'
    },
    metricsOverride: {
      h1Size: '48px / 1.15 (w500)',
      buttonRadius: '8px',
      borderStyle: '1px solid #E5E5E5'
    }
  },
  trigger: {
    name: 'Trigger.dev',
    domain: 'trigger.dev',
    url: 'https://trigger.dev',
    category: 'DevTools & Infra',
    mode: 'dark',
    archetype: 'Industrial Dark Slate & Electric Acid-Lime Telemetry',
    vibe: 'Deep gunmetal #121317 canvas with #15171A / #212327 workflow nodes, #1C1E21 structural borders, 60px Satoshi-Variable headings, Geist Mono logs, and #A8FF53 electric lime status accents.',
    tags: ['dark', 'devtools', 'background-jobs', 'workflows', 'acid-lime', 'neon-green', 'trigger', 'satoshi', 'geist-mono', 'industrial'],
    paletteOverride: {
      canvas: '#121317',
      surface: '#15171A',
      text: '#D7D9DD',
      muted: '#878C99',
      accent: '#A8FF53',
      border: '#1C1E21'
    },
    fontsOverride: {
      heading: 'Satoshi-Variable',
      body: 'Inter / Satoshi',
      mono: 'Geist Mono'
    },
    metricsOverride: {
      h1Size: '60px / 1.0 (w600)',
      buttonRadius: '4px',
      borderStyle: '1px solid #1C1E21'
    }
  },
  railway: {
    name: 'Railway',
    domain: 'railway.com',
    url: 'https://railway.com',
    category: 'DevTools & Infra',
    mode: 'dark',
    archetype: 'Deep Cosmic Violet Infrastructure & IBM Plex Serif Editorial',
    vibe: 'Atmospheric #13111C cosmic violet-black canvas with #1B2132 / #291839 elevated deployment cards, rgba(255,255,255,0.1) hairlines, and 54px IBM Plex Serif display headings (-0.036em tracking).',
    tags: ['dark', 'cloud', 'infra', 'deployment', 'violet', 'purple', 'serif', 'railway', 'ibm-plex-serif', 'devtools'],
    paletteOverride: {
      canvas: '#13111C',
      surface: '#1B2132',
      text: '#FFFFFF',
      muted: '#9593A8',
      accent: '#8B5CF6',
      border: 'rgba(255, 255, 255, 0.1)'
    },
    fontsOverride: {
      heading: 'IBM Plex Serif',
      body: 'Inter',
      mono: 'IBM Plex Mono'
    },
    metricsOverride: {
      h1Size: '54px / -0.036em (w500)',
      buttonRadius: '8px',
      borderStyle: '1px rgba(255,255,255,0.1)'
    }
  },
  planetscale: {
    name: 'PlanetScale',
    domain: 'planetscale.com',
    url: 'https://planetscale.com',
    category: 'DevTools & Infra',
    mode: 'light',
    archetype: 'Pure Monospace ASCII Engineering Manual & Zero-Radius Brutalism',
    vibe: 'Stark #FAFAFA technical manual canvas set entirely in system monospace with ASCII box-drawing diagrams, 1px #C1C1C1 / #414141 borders, 0px sharp corners, and #F35815 signal orange CTAs.',
    tags: ['light', 'monospace', 'ascii', 'brutalist', 'database', 'mysql', 'postgres', 'planetscale', 'zero-radius', 'engineering', 'orange'],
    paletteOverride: {
      canvas: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#111111',
      muted: '#414141',
      accent: '#F35815',
      border: '#C1C1C1'
    },
    fontsOverride: {
      heading: 'SF Mono / ui-monospace',
      body: 'SF Mono / ui-monospace',
      mono: 'SF Mono / ui-monospace'
    },
    metricsOverride: {
      h1Size: '20px Mono / -0.02em (w700)',
      buttonRadius: '0px (Sharp Brutalist)',
      borderStyle: '1px solid #C1C1C1'
    }
  },
  turso: {
    name: 'Turso',
    domain: 'turso.tech',
    url: 'https://turso.tech',
    category: 'DevTools & Infra',
    mode: 'dark',
    archetype: 'Deep Oceanic Teal & Neon Aquamarine Edge Database',
    vibe: 'Dark oceanic #0F1317 / #0D1318 canvas with rgba(40,57,68,0.6) slate-teal borders, heavy 800-weight 60px Inter display headlines (-0.025em), and high-contrast #4FF8D2 aquamarine pill CTAs.',
    tags: ['dark', 'database', 'sqlite', 'edge', 'aquamarine', 'teal', 'cyan', 'turso', 'devtools', 'neon'],
    paletteOverride: {
      canvas: '#0F1317',
      surface: '#0D1318',
      text: '#FFFFFF',
      muted: 'rgba(255, 255, 255, 0.5)',
      accent: '#4FF8D2',
      border: '#283945'
    },
    fontsOverride: {
      heading: 'Inter (800 ExtraBold)',
      body: 'Inter',
      mono: 'JetBrains Mono'
    },
    metricsOverride: {
      h1Size: '60px / -0.025em (w800)',
      buttonRadius: '9999px (Pill)',
      borderStyle: '1px solid #283945'
    }
  },
  neon: {
    name: 'Neon',
    domain: 'neon.tech',
    url: 'https://neon.tech',
    category: 'DevTools & Infra',
    mode: 'dark',
    archetype: 'Serverless Pitch-Black & Luminous Cyber-Mint Postgres',
    vibe: 'Pitch-black #000000 canvas with #242628 / #303236 dark structural borders, 56px tight -0.04em Inter display headings, and #34D59A / #00E599 luminous cyber-mint accents.',
    tags: ['dark', 'postgres', 'serverless', 'database', 'mint', 'neon-green', 'pitch-black', 'neon', 'devtools'],
    paletteOverride: {
      canvas: '#000000',
      surface: '#131415',
      text: '#FFFFFF',
      muted: '#94979E',
      accent: '#34D59A',
      border: '#242628'
    },
    fontsOverride: {
      heading: 'Inter',
      body: 'Inter',
      mono: 'JetBrains Mono'
    },
    metricsOverride: {
      h1Size: '56px / -0.04em (w400)',
      buttonRadius: '9999px (Pill)',
      borderStyle: '1px solid #242628'
    }
  },
  upstash: {
    name: 'Upstash',
    domain: 'upstash.com',
    url: 'https://upstash.com',
    category: 'DevTools & Infra',
    mode: 'light',
    archetype: 'Oversized Emerald Typography & Clean Serverless Daylight',
    vibe: 'Soft #F5F5F5 daylight canvas with #FFFFFF cards, deep forest-emerald #022C22 monumental 128px Inter Tight headlines (-0.025em), JetBrains Mono snippets, and #00BC7D emerald accents.',
    tags: ['light', 'serverless', 'redis', 'kafka', 'emerald', 'green', 'oversized-type', 'upstash', 'inter-tight', 'devtools'],
    paletteOverride: {
      canvas: '#F5F5F5',
      surface: '#FFFFFF',
      text: '#022C22',
      muted: '#71717B',
      accent: '#00BC7D',
      border: 'rgba(0, 0, 0, 0.05)'
    },
    fontsOverride: {
      heading: 'Inter Tight',
      body: 'Inter',
      mono: 'JetBrains Mono'
    },
    metricsOverride: {
      h1Size: '128px / -0.025em (w700)',
      buttonRadius: '10px',
      borderStyle: '1px rgba(0,0,0,0.05)'
    }
  },
  inngest: {
    name: 'Inngest',
    domain: 'inngest.com',
    url: 'https://www.inngest.com',
    category: 'DevTools & Infra',
    mode: 'dark',
    archetype: 'Warm Obsidian Stone & Swiss Whyte / Coral-Cobalt Contrast',
    vibe: 'Warm obsidian stone #0C0A09 canvas with rgba(28,28,28,0.85) surfaces, 72px WhyteV1 architectural display headings (0.95 line-height), CircularXXMono code, and #F76246 coral + #013CF6 cobalt accents.',
    tags: ['dark', 'workflows', 'queues', 'ai-orchestration', 'inngest', 'whyte', 'coral', 'cobalt', 'devtools', 'warm-dark'],
    paletteOverride: {
      canvas: '#0C0A09',
      surface: '#1C1C1C',
      text: '#FFFFFF',
      muted: '#A8A29E',
      accent: '#F76246',
      border: 'rgba(255, 255, 255, 0.08)'
    },
    fontsOverride: {
      heading: 'WhyteV1',
      body: 'Inter / Whyte',
      mono: 'CircularXXMono'
    },
    metricsOverride: {
      h1Size: '72px / 0.95 (w400)',
      buttonRadius: '6px',
      borderStyle: '1px rgba(255,255,255,0.08)'
    }
  },
  workos: {
    name: 'WorkOS',
    domain: 'workos.com',
    url: 'https://workos.com',
    category: 'Fintech & Enterprise',
    mode: 'light',
    archetype: 'Enterprise-Ready Architectural Precision & Untitled Sans',
    vibe: 'Cool porcelain #F9F9FB canvas with #FFFFFF enterprise cards, #E8EAED 1px hairlines, monumental 80px Untitled Sans headings with ultra-tight -0.07em tracking, and #6363F1 indigo + #23F0C3 mint accents.',
    tags: ['light', 'enterprise', 'sso', 'auth', 'saas', 'workos', 'untitled-sans', 'indigo', 'mint', 'b2b'],
    paletteOverride: {
      canvas: '#F9F9FB',
      surface: '#FFFFFF',
      text: '#29363D',
      muted: '#5E6C75',
      accent: '#6363F1',
      border: '#E8EAED'
    },
    fontsOverride: {
      heading: 'Untitled Sans',
      body: 'Untitled Sans',
      mono: 'IBM Plex Mono'
    },
    metricsOverride: {
      h1Size: '80px / -0.07em (w500)',
      buttonRadius: '100px (Pill)',
      borderStyle: '1px solid #E8EAED'
    }
  },
  loops: {
    name: 'Loops',
    domain: 'loops.so',
    url: 'https://loops.so',
    category: 'DevTools & SaaS',
    mode: 'light',
    archetype: 'Warm Editorial SaaS & Newsreader Serif Craft',
    vibe: 'Warm ivory #FDFDFC / #F9F9F8 canvas with #E9E8E6 stone borders, #21201C espresso ink, refined 44px Newsreader serif display headlines (-0.02em), and #7D1B0C oxblood / #21201C pill CTAs.',
    tags: ['light', 'warm', 'editorial', 'serif', 'newsreader', 'email', 'saas', 'loops', 'minimalist', 'ivory'],
    paletteOverride: {
      canvas: '#FDFDFC',
      surface: '#F9F9F8',
      text: '#21201C',
      muted: '#63625E',
      accent: '#7D1B0C',
      border: '#E9E8E6'
    },
    fontsOverride: {
      heading: 'Newsreader',
      body: 'Inter',
      mono: 'SF Mono'
    },
    metricsOverride: {
      h1Size: '44px / -0.02em (w500)',
      buttonRadius: '40px (Pill)',
      borderStyle: '1px solid #E9E8E6'
    }
  },
  attio: {
    name: 'Attio',
    domain: 'attio.com',
    url: 'https://attio.com',
    category: 'Fintech & Enterprise',
    mode: 'light',
    archetype: 'Next-Gen CRM Spreadsheet-Grid Precision & Inter Display',
    vibe: 'Crisp #F3F4F6 / #FFFFFF daylight UI with exposed #E4E7EC 1px data-table grid lines, 64px Inter Display headlines (0.95 line-height, -0.02em), JetBrains Mono badges, and #1C1D1F monochrome controls.',
    tags: ['light', 'crm', 'saas', 'data-grid', 'bento', 'attio', 'inter-display', 'precision', 'b2b', 'clean'],
    paletteOverride: {
      canvas: '#FFFFFF',
      surface: '#F3F4F6',
      text: '#1C1D1F',
      muted: '#6F7988',
      accent: '#1C1D1F',
      border: '#E4E7EC'
    },
    fontsOverride: {
      heading: 'interDisplay',
      body: 'Inter',
      mono: 'JetBrains Mono'
    },
    metricsOverride: {
      h1Size: '64px / 0.95 (w600)',
      buttonRadius: '10px',
      borderStyle: '1px solid #E4E7EC'
    }
  },
  ashby: {
    name: 'Ashby',
    domain: 'ashbyhq.com',
    url: 'https://www.ashbyhq.com',
    category: 'Fintech & Enterprise',
    mode: 'light',
    archetype: 'Analytics-Driven Recruiting SaaS & Royal Indigo TTNormsPro',
    vibe: 'Bright #FFFFFF / #FCFCFE canvas with #EEEDEF soft lavender-gray borders, 72px TTNormsPro geometric display headings (-0.04em tracking, 575 weight), and #473BCE royal indigo CTAs.',
    tags: ['light', 'hr', 'recruiting', 'analytics', 'saas', 'ashby', 'indigo', 'b2b', 'geometric'],
    paletteOverride: {
      canvas: '#FFFFFF',
      surface: '#FCFCFE',
      text: '#141415',
      muted: '#717075',
      accent: '#473BCE',
      border: '#EEEDEF'
    },
    fontsOverride: {
      heading: 'TTNormsPro',
      body: 'TTNormsPro / Inter',
      mono: 'SF Mono'
    },
    metricsOverride: {
      h1Size: '72px / -0.04em (w575)',
      buttonRadius: '6px',
      borderStyle: '1px solid #EEEDEF'
    }
  },
  notion: {
    name: 'Notion',
    domain: 'notion.so',
    url: 'https://www.notion.so',
    category: 'AI & Productivity',
    mode: 'light',
    archetype: 'Warm Workspace Canvas & Monumental NotionInter Display',
    vibe: 'Crisp #FFFFFF & warm stone #F6F5F4 workspace surfaces with rgba(0,0,0,0.1) hairlines, monumental 96px NotionInter headlines (-0.048em tracking), and #0075DE cobalt + #FFB110 amber accents.',
    tags: ['light', 'workspace', 'productivity', 'docs', 'wiki', 'ai', 'notion', 'warm-gray', 'minimalist'],
    paletteOverride: {
      canvas: '#FFFFFF',
      surface: '#F6F5F4',
      text: '#000000',
      muted: '#615D59',
      accent: '#0075DE',
      border: 'rgba(0, 0, 0, 0.1)'
    },
    fontsOverride: {
      heading: 'NotionInter',
      body: 'NotionInter',
      mono: 'SFMono-Regular'
    },
    metricsOverride: {
      h1Size: '96px / -0.048em (w600)',
      buttonRadius: '8px',
      borderStyle: '1px rgba(0,0,0,0.1)'
    }
  },
  framer: {
    name: 'Framer',
    domain: 'framer.com',
    url: 'https://www.framer.com',
    category: 'Design & Creative',
    mode: 'dark',
    archetype: 'Pitch-Black Interactive Canvas & Electric #0099FF Blue Glow',
    vibe: 'Pure #000000 canvas with #111111 elevated stage cards, glowing rgba(0,153,255,0.42) borders, 54px GT Walsheim Medium headlines (-0.04em tracking), and #0099FF electric blue + #FFFFFF 8px CTAs.',
    tags: ['dark', 'design', 'web-builder', 'no-code', 'framer', 'electric-blue', 'gt-walsheim', 'creative', 'motion'],
    paletteOverride: {
      canvas: '#000000',
      surface: '#111111',
      text: '#FFFFFF',
      muted: '#999999',
      accent: '#0099FF',
      border: 'rgba(0, 153, 255, 0.42)'
    },
    fontsOverride: {
      heading: 'GT Walsheim Medium',
      body: 'Inter',
      mono: 'JetBrains Mono'
    },
    metricsOverride: {
      h1Size: '54px / -0.04em (w500)',
      buttonRadius: '8px',
      borderStyle: '1px rgba(0,153,255,0.42)'
    }
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    domain: 'tailwindcss.com',
    url: 'https://tailwindcss.com',
    category: 'Design & Creative',
    mode: 'light',
    archetype: 'Engineered CSS Grid Lines & Technical Blueprint Precision',
    vibe: 'Daylight #FFFFFF canvas overlaid with exposed 1px rgba(0,0,20,0.05) blueprint construction lines, monumental 96px Inter headlines (-0.05em), PlexMono utility classes, and #38BDF8 / #F6339A accents.',
    tags: ['light', 'css', 'design-system', 'grid-lines', 'blueprint', 'tailwind', 'devtools', 'plex-mono', 'precision'],
    paletteOverride: {
      canvas: '#FFFFFF',
      surface: '#F8FAFC',
      text: '#030712',
      muted: '#4A5565',
      accent: '#0EA5E9',
      border: 'rgba(0, 0, 20, 0.05)'
    },
    fontsOverride: {
      heading: 'Inter',
      body: 'Inter',
      mono: 'IBM Plex Mono (plexMono)'
    },
    metricsOverride: {
      h1Size: '96px / -0.05em (w400)',
      buttonRadius: '16px / 9999px',
      borderStyle: '1px rgba(0,0,20,0.05)'
    }
  },
  shadcn: {
    name: 'shadcn/ui',
    domain: 'ui.shadcn.com',
    url: 'https://ui.shadcn.com',
    category: 'Design & Creative',
    mode: 'light',
    archetype: 'Zinc Monochrome Component Primitives & Zero-Distraction Craft',
    vibe: 'Pure #FFFFFF / #F5F5F5 zinc monochrome palette with 1px #E5E5E5 borders, 48px Geist display typography (-0.05em tracking), 10px radius primitives, and strict #171717 / #737373 hierarchy.',
    tags: ['light', 'components', 'ui-kit', 'radix', 'tailwind', 'shadcn', 'monochrome', 'zinc', 'geist', 'minimal'],
    paletteOverride: {
      canvas: '#FFFFFF',
      surface: '#F5F5F5',
      text: '#0A0A0A',
      muted: '#737373',
      accent: '#171717',
      border: '#E5E5E5'
    },
    fontsOverride: {
      heading: 'Geist',
      body: 'Geist',
      mono: 'Geist Mono'
    },
    metricsOverride: {
      h1Size: '48px / -0.05em (w600)',
      buttonRadius: '8px / 10px',
      borderStyle: '1px solid #E5E5E5'
    }
  },
  anthropic: {
    name: 'Anthropic',
    domain: 'anthropic.com',
    url: 'https://www.anthropic.com',
    category: 'AI & Productivity',
    mode: 'light',
    archetype: 'Humanist Warm Parchment & Literary AI Safety Editorial',
    vibe: 'Warm parchment #FAF9F5 canvas with #F5F4ED cards and #DEDCD1 stone borders, #141413 charcoal ink, bespoke anthropicSerif literary headings, and #D97757 terracotta clay accents.',
    tags: ['light', 'warm', 'parchment', 'serif', 'editorial', 'ai', 'llm', 'claude', 'anthropic', 'humanist', 'minimalist'],
    paletteOverride: {
      canvas: '#FAF9F5',
      surface: '#F5F4ED',
      text: '#141413',
      muted: '#5E5D59',
      accent: '#D97757',
      border: '#DEDCD1'
    },
    fontsOverride: {
      heading: 'anthropicSerif',
      body: 'anthropicSans',
      mono: 'JetBrains Mono'
    },
    metricsOverride: {
      h1Size: '40.8px / -0.01em (w400)',
      buttonRadius: '9999px (Pill) / 8px',
      borderStyle: '1px solid #DEDCD1'
    }
  },
  elevenlabs: {
    name: 'ElevenLabs',
    domain: 'elevenlabs.io',
    url: 'https://elevenlabs.io',
    category: 'AI & Productivity',
    mode: 'light',
    archetype: 'Swiss Audio Minimalist & Light-Weight Waldenburg Precision',
    vibe: 'Warm alabaster #FDFCFC canvas with #F5F3F1 audio player cards, rgba(0,0,0,0.06) subtle borders, light-weight 300 Waldenburg 48px display typography (-0.02em), and Geist Mono waveform metrics.',
    tags: ['light', 'ai', 'voice', 'audio', 'minimalist', 'swiss', 'elevenlabs', 'waldenburg', 'geist-mono', 'clean'],
    paletteOverride: {
      canvas: '#FDFCFC',
      surface: '#F5F3F1',
      text: '#000000',
      muted: '#666462',
      accent: '#000000',
      border: 'rgba(0, 0, 0, 0.07)'
    },
    fontsOverride: {
      heading: 'Waldenburg (w300)',
      body: 'Waldenburg / Inter',
      mono: 'Geist Mono'
    },
    metricsOverride: {
      h1Size: '48px / -0.02em (w300)',
      buttonRadius: '9999px (Pill)',
      borderStyle: '1px rgba(0,0,0,0.07)'
    }
  },
  polar: {
    name: 'Polar',
    domain: 'polar.sh',
    url: 'https://polar.sh',
    category: 'Fintech & Enterprise',
    mode: 'dark',
    archetype: 'Nordic Dark Monetization & PP Neue Montreal Minimalist',
    vibe: 'Deep #090909 obsidian canvas with #111111 cards and #181818 / #212121 borders, refined 36px PP Neue Montreal display headings, GeistMono revenue counters, and #FFFFFF pill CTAs.',
    tags: ['dark', 'fintech', 'monetization', 'billing', 'open-source', 'polar', 'neue-montreal', 'geist-mono', 'minimalist', 'nordic'],
    paletteOverride: {
      canvas: '#090909',
      surface: '#111111',
      text: '#FFFFFF',
      muted: '#858585',
      accent: '#FFFFFF',
      border: '#212121'
    },
    fontsOverride: {
      heading: 'PP Neue Montreal',
      body: 'Inter / PP Neue Montreal',
      mono: 'GeistMono'
    },
    metricsOverride: {
      h1Size: '36px / 1.25 (w400)',
      buttonRadius: '9999px (Pill)',
      borderStyle: '1px solid #212121'
    }
  },
  posthog: {
    name: 'PostHog',
    domain: 'posthog.com',
    url: 'https://posthog.com',
    category: 'DevTools & SaaS',
    mode: 'light',
    archetype: 'Tactile Retro-OS Brutalist & Warm Sand / Amber Craft',
    vibe: 'Playful tactile #EEEFE9 warm putty canvas with 3D raised bevel buttons (#CD8407 / #EB9D2A amber border #B17816), chunky 800-weight RoundHog headings, and Source Code Pro developer docs.',
    tags: ['light', 'brutalist', 'retro', 'tactile', 'analytics', 'devtools', 'posthog', 'amber', 'warm', 'playful'],
    paletteOverride: {
      canvas: '#EEEFE9',
      surface: '#E5E7E0',
      text: '#23251D',
      muted: '#5A5E52',
      accent: '#EB9D2A',
      border: '#B17816'
    },
    fontsOverride: {
      heading: 'RoundHog / Matter',
      body: 'IBM Plex Sans',
      mono: 'Source Code Pro'
    },
    metricsOverride: {
      h1Size: '36px / -0.025em (w800)',
      buttonRadius: '6px (3D Bevel)',
      borderStyle: '1px solid #B17816'
    }
  }
};

module.exports = {
  SITE_METADATA
};
