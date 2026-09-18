export interface GameInfo {
  title: string;
  developer: string;
  publisher: string;
  steamAppId: string;
  releaseDate: string;
  tags: string;
  channel: string;
  wikiSlug: string;
  lastUpdated: string;
  gapProof: {
    steamChartsPeak: string;
    allTimePeak: string;
    copiesSold: string;
    peakCCU: string;
    streamers: string;
    reviewsRating: string;
    reviewsCount: string;
    wishlists: string;
    awards: string;
    missingOnline: string;
    wikiFills: string;
  };
  quickFacts: { label: string; value: string }[];
  shortsHooks: {
    primary: { title: string; desc: string; readyTitles: string[] };
    backup: { title: string; desc: string; readyTitles: string[] };
  };
}

export interface Captain {
  name: string;
  verifiedStatus: 'steam' | 'community';
  evidence: string;
  details: string;
  isVerify: boolean;
}

export interface ModuleItem {
  name: string;
  category: 'starter' | 'silver' | 'upgrade' | 'challenge';
  costOrReq: string;
  roleOrDesc: string;
  isVerify: boolean;
}

export interface Vehicle {
  name: string;
  verifiedStatus: 'steam' | 'community';
  evidence: string;
  notes: string;
  slots?: string;
  unlockCondition?: string;
  traits?: string[];
  isVerify: boolean;
}

export interface BiomeBoss {
  name: string;
  type: 'biome' | 'boss' | 'enemy';
  verifiedStatus: 'steam' | 'community';
  evidenceOrNotes: string;
  isVerify: boolean;
}

export interface SystemFeature {
  title: string;
  description: string;
  detail: string;
}

export interface SourceItem {
  title: string;
  type: 'primary' | 'secondary' | 'gap';
  url?: string;
  notes: string;
  isVerify?: boolean;
}

export const WANDERBURG_GAME_INFO: GameInfo = {
  title: "Wanderburg",
  developer: "Randwerk",
  publisher: "Sidekick Publishing",
  steamAppId: "3624140",
  releaseDate: "Early Access Sep 8, 2026 (NY unlock 9:00 AM EDT)",
  tags: "Minimalist medieval roguelike — drive a modular castle-on-wheels, devour villages, bolt on siege modules, unlock Captains / vehicles between runs",
  channel: "HowDragonborn",
  wikiSlug: "wanderburg",
  lastUpdated: "2026-09-18",
  gapProof: {
    steamChartsPeak: "~3.5k concurrent / 24h peak ~5.0k",
    allTimePeak: "10,550 CCU",
    copiesSold: "150,000+ copies in first 3 days",
    peakCCU: "~9,900 peak CCU",
    streamers: "800+ streamers",
    reviewsRating: "Mostly Positive",
    reviewsCount: "~2,383 reviews (~1,867 positive / ~516 negative)",
    wishlists: "~400,000 wishlists pre-launch",
    awards: "gamescom award 'Most Entertaining' (2026)",
    missingOnline: "No Fandom and no wiki.gg exist for this title. Search only finds SEO guide farms and an empty WikiTactics stub with no closed-set rosters.",
    wikiFills: "Provides Steam-news-verified Captains + Modules, community-documented full 14-captain roster and 20-module unlock tree marked [verify], biomes, vehicles, and systems without fake stats."
  },
  quickFacts: [
    { label: "Core Loop", value: "Drive modular fortress → consume units & villages → draft module upgrades → permanent Silver meta unlocks" },
    { label: "Meta Currency", value: "Silver (earned during runs, spent between runs)" },
    { label: "Module Slot Types", value: "Front / Side / Top / Back / Crew (vehicle chassis dependent)" },
    { label: "Player Vehicles", value: "Tower (Starter), Spiderburg (Spider chassis)" },
    { label: "Known Biomes", value: "Grassland (incl. Meadows), Dark Forest, Desert / Golden Dunes (Boss: Dark Tower)" },
    { label: "Early Access Window", value: "Expected ~6–12 months in Early Access" }
  ],
  shortsHooks: {
    primary: {
      title: "Ranking Every Wanderburg Captain (Closed Set S-D Board)",
      desc: "Finite Silver-shop roster (~14 Captains). Each applies a run-wide tradeoff — perfect S–D tier list format.",
      readyTitles: [
        "Ranking Every Wanderburg Captain #shorts",
        "Wanderburg Captains Ranked — Who Is Worth Your Silver? #shorts",
        "완더버그 캡틴 티어리스트 #shorts"
      ]
    },
    backup: {
      title: "Ranking Every Wanderburg Module Type",
      desc: "Closed module families from unlock guides + Steam patch names.",
      readyTitles: [
        "Ranking Every Wanderburg Module Type #shorts"
      ]
    }
  }
};

export const CAPTAINS_DATA: Captain[] = [
  // Steam Verified
  {
    name: "Dieter the Drunk",
    verifiedStatus: "steam",
    evidence: "Demo-era Steam News ('NEW CAPTAIN AVAILABLE NOW')",
    details: "Official surprise Captain; introduces a unique zig-zag steering challenge.",
    isVerify: false
  },
  {
    name: "PatchyThePirate",
    verifiedStatus: "steam",
    evidence: "Hotfix 0.9.10 Character Buffs",
    details: "Enemy Cannon bonus damage penalty nerfed from 50% → 25%.",
    isVerify: false
  },
  {
    name: "Huntress",
    verifiedStatus: "steam",
    evidence: "Hotfix 0.9.10",
    details: "Extra ability cooldown penalty reduced from 50% → 40%.",
    isVerify: false
  },
  {
    name: "Tankbert",
    verifiedStatus: "steam",
    evidence: "Hotfixes 0.9.6 & 0.9.10",
    details: "Nerfed in 0.9.6; Nitro regen penalty adjusted from 50% → 30% slower in 0.9.10.",
    isVerify: false
  },
  {
    name: "Kapital(i)stus Maximus",
    verifiedStatus: "steam",
    evidence: "Hotfix 0.9.10 (spelled 'Kapitalstus')",
    details: "Gold penalty reduced from −30% → −15%.",
    isVerify: false
  },
  {
    name: "Duelist",
    verifiedStatus: "steam",
    evidence: "Hotfix 0.9.10",
    details: "Extra damage taken while boosting reduced from 50% → 20%.",
    isVerify: false
  },
  // Community Documented [verify]
  {
    name: "Racer Ruth",
    verifiedStatus: "community",
    evidence: "Community Guides (Sep 9–13, 2026)",
    details: "Nitro / boosted-speed tradeoff vs normal movement speed.",
    isVerify: true
  },
  {
    name: "Empress",
    verifiedStatus: "community",
    evidence: "Community Guides (Sep 9–13, 2026)",
    details: "Spawns more friendly units in exchange for a fortress movement speed penalty.",
    isVerify: true
  },
  {
    name: "The Count",
    verifiedStatus: "community",
    evidence: "Community Guides (Sep 9–13, 2026)",
    details: "Heals from consuming enemy units; Health Boxes stop spawning on map.",
    isVerify: true
  },
  {
    name: "Pyromaniac",
    verifiedStatus: "community",
    evidence: "Community Guides (Sep 9–13, 2026)",
    details: "Grants contact ignition to vehicle; removes Luck stat entirely.",
    isVerify: true
  },
  {
    name: "Lumberjack",
    verifiedStatus: "community",
    evidence: "Community Guides (Sep 9–13, 2026)",
    details: "Gains Nitro from destroying trees vs standard passive Nitro regeneration.",
    isVerify: true
  },
  {
    name: "Sire Jonah",
    verifiedStatus: "community",
    evidence: "Community Guides (Sep 9–13, 2026)",
    details: "Techno soundtrack novelty Captain with custom audio behavior.",
    isVerify: true
  },
  {
    name: "Time Witch",
    verifiedStatus: "community",
    evidence: "Community Guides (Sep 9–13, 2026)",
    details: "Runs game at 2× speed multiplier.",
    isVerify: true
  },
  {
    name: "Norbert the Normal",
    verifiedStatus: "community",
    evidence: "Community Guides (Sep 9–13, 2026)",
    details: "Neutral starter baseline Captain with no positive or negative modifiers.",
    isVerify: true
  }
];

export const MODULES_DATA: ModuleItem[] = [
  // Starter
  { name: "Cannon", category: "starter", costOrReq: "Default Starter", roleOrDesc: "Fires side cannonballs", isVerify: false },
  { name: "Ram", category: "starter", costOrReq: "Default Starter", roleOrDesc: "Frontal ramming damage and knockback", isVerify: false },
  { name: "Top Mortar", category: "starter", costOrReq: "Default Starter", roleOrDesc: "Vertical high-arc mortar fire from top slot", isVerify: false },
  { name: "Mine Layer", category: "starter", costOrReq: "Default Starter", roleOrDesc: "Drops trailing explosive landmines behind vehicle", isVerify: false },

  // Silver Shop
  { name: "Dash", category: "silver", costOrReq: "600 Silver", roleOrDesc: "Forward boost action + rear flame exhaust", isVerify: true },
  { name: "Side Barracks", category: "silver", costOrReq: "800 Silver", roleOrDesc: "Spawns friendly infantry units into battle", isVerify: true },
  { name: "Side Ballista", category: "silver", costOrReq: "1,200 Silver", roleOrDesc: "Fires piercing giant ballista arrows", isVerify: true },
  { name: "Force Mage", category: "silver", costOrReq: "1,600 Silver", roleOrDesc: "Emits kinetic forcewaves pushing nearby enemies", isVerify: true },
  { name: "Fire Mage", category: "silver", costOrReq: "2,000 Silver", roleOrDesc: "Deploys pyromancer mage unit onto vehicle", isVerify: true },

  // In-run Upgrades
  { name: "Teleporter", category: "upgrade", costOrReq: "Dash → Level 10", roleOrDesc: "Short-distance instant phase teleportation", isVerify: true },
  { name: "Arms", category: "upgrade", costOrReq: "Ram → Level 10", roleOrDesc: "Mechanical battering arms for devastating melee crush", isVerify: true },
  { name: "Side Flamethrower", category: "upgrade", costOrReq: "Fire Mage → Level 10", roleOrDesc: "Continuous cone of flame along side chassis", isVerify: true },
  { name: "Turret Layer", category: "upgrade", costOrReq: "Mine Layer → Level 10", roleOrDesc: "Deploys stationary auto-turrets behind vehicle", isVerify: true },
  { name: "Frontcannon", category: "upgrade", costOrReq: "Side Cannons → Level 10", roleOrDesc: "Heavy front-facing artillery cannons", isVerify: true },
  { name: "Front Barracks", category: "upgrade", costOrReq: "Side Barracks → Level 10", roleOrDesc: "Advanced frontal squad deployment hub", isVerify: true },
  { name: "Lightning Mage", category: "upgrade", costOrReq: "Mage Crew → Level 5", roleOrDesc: "Chain lightning electrical projectile attacks", isVerify: true },
  { name: "Cannon Tower", category: "upgrade", costOrReq: "Cannon Crew → Level 5", roleOrDesc: "Elevated 360-degree turret tower", isVerify: true },
  { name: "Archer Tower", category: "upgrade", costOrReq: "Archer Crew → Level 5", roleOrDesc: "Rapid-fire archer watchtower", isVerify: true },

  // Challenge Unlocks
  { name: "Companion", category: "challenge", costOrReq: "Destroy 120 walking enemies", roleOrDesc: "Autonomous escort drone unit", isVerify: true },
  { name: "Catapult", category: "challenge", costOrReq: "Consume 300 Cows across runs", roleOrDesc: "Heavy siege catapult firing boulder projectiles", isVerify: true }
];

export const VEHICLES_DATA: Vehicle[] = [
  {
    name: "Tower (Default Chassis)",
    verifiedStatus: "steam",
    evidence: "Hotfix 0.9.9 driving physics tweaks",
    notes: "Default starter castle-on-wheels chassis. Balanced slot layout for early runs.",
    slots: "Balanced (Front, Side, Top, Back, Crew)",
    unlockCondition: "Unlocked by default at start of game",
    traits: ["Balanced mobility", "Standard turning radius", "Standard slot distribution"],
    isVerify: false
  },
  {
    name: "Spider (Spiderburg)",
    verifiedStatus: "steam",
    evidence: "Hotfixes 0.9.7, 0.9.8, 0.9.9 (speed buffed, loadout safety added)",
    notes: "Mechanical arachnid chassis. Extremely high mobility, stomps terrain, but restrictive slot layout.",
    slots: "2 Top · 1 Front · 1 Back · 0 Side",
    unlockCondition: "Complete all four bosses in Golden Dunes (Desert biome Land)",
    traits: [
      "Nimble articulated legs chassis",
      "Stomps enemies underfoot",
      "Ignores specific terrain obstacles (e.g. water)",
      "Zero Side module slots",
      "Requires owning at least 2 Top modules before run start [verify]"
    ],
    isVerify: true
  }
];

export const BIOMES_DATA: BiomeBoss[] = [
  // Steam Named Biomes & Bosses
  {
    name: "Grassland (incl. Meadows)",
    type: "biome",
    verifiedStatus: "steam",
    evidenceOrNotes: "Hotfixes 0.9.6, 0.9.9 — Difficulty 1 & Difficulty 2 ('Meadows') starter biome.",
    isVerify: false
  },
  {
    name: "Dark Forest",
    type: "biome",
    verifiedStatus: "steam",
    evidenceOrNotes: "Hotfix 0.9.6 — Dense tree terrain with Difficulty 2 & 3 compositions.",
    isVerify: false
  },
  {
    name: "Desert / Desert Overtime",
    type: "biome",
    verifiedStatus: "steam",
    evidenceOrNotes: "Hotfix 0.9.8 & Gamescom sneak peek — High-difficulty land featuring Overtime modifiers.",
    isVerify: false
  },
  {
    name: "Dark Tower",
    type: "boss",
    verifiedStatus: "steam",
    evidenceOrNotes: "Hotfix 0.9.6 — Difficulty 1 climax boss (HP rebalanced 12,000 → 10,000).",
    isVerify: false
  },
  {
    name: "Taurus Drillus",
    type: "boss",
    verifiedStatus: "steam",
    evidenceOrNotes: "Hotfix 0.9.9 — Grassland 2 boss encounter.",
    isVerify: false
  },
  {
    name: "Enemy Vehicle Mole",
    type: "enemy",
    verifiedStatus: "steam",
    evidenceOrNotes: "Hotfix 0.9.9 — Burrowing siege enemy unit.",
    isVerify: false
  },
  {
    name: "Enemy Ballista / Metzelmann",
    type: "enemy",
    verifiedStatus: "steam",
    evidenceOrNotes: "Hotfix 0.9.6 — Heavy ranged enemy threats.",
    isVerify: false
  },

  // Community Names [verify]
  {
    name: "Green Plains",
    type: "biome",
    verifiedStatus: "community",
    evidenceOrNotes: "Guide name for early Grassland route.",
    isVerify: true
  },
  {
    name: "Golden Dunes",
    type: "biome",
    verifiedStatus: "community",
    evidenceOrNotes: "Desert Land cleared to unlock Spiderburg chassis.",
    isVerify: true
  }
];

export const SYSTEMS_DATA: SystemFeature[] = [
  {
    title: "Core Run Loop",
    description: "Drive, Consume, Draft, Upgrade",
    detail: "Drive your castle-on-wheels through biomes, consume enemy units/villages/fortresses to gain resources, draft module upgrades during runs, and extract with Silver for meta-progression."
  },
  {
    title: "Silver Meta Currency",
    description: "Permanent Between-Run Unlocks",
    detail: "Earned from completing runs, defeating bosses, and collecting boss tombstone drops (Hotfix 0.9.9). Spent in the shop between runs to purchase new Captains, Modules, and Chassis."
  },
  {
    title: "Module & Artifact Rerolls",
    description: "+1 Reroll per 6 Unlocked Items",
    detail: "Hotfix 0.9.10 mechanic: Every 6 unlocked Modules grants +1 permanent New Module Reroll per run. Every 6 unlocked Artifacts grants +1 Artifact Reroll."
  },
  {
    title: "Nitro Boost System",
    description: "Thrust & Regen Mechanics",
    detail: "Allows short bursts of high-speed propulsion. Nitro regen has a 0.5s delay after boosting (Hotfix 0.9.8). Captain choices (like Tankbert) impact regen speed."
  },
  {
    title: "Overtime Mode",
    description: "Endgame Survival Challenge",
    detail: "Available post-clear (e.g. Desert Overtime). Enemies scale aggressively, and special weapon modules like Overtime Mortar gain balance buffs."
  },
  {
    title: "Steam Achievements",
    description: "26 Total Achievements",
    detail: "Covers milestones for distance traveled, bosses defeated, and total units consumed across all runs."
  },
  {
    title: "Early Access Scope",
    description: "6–12 Month EA Roadmap",
    detail: "Randwerk targets 6 to 12 months in EA, actively updating balance, expanding module combinations, and iterating based on Steam & Discord community feedback."
  }
];

export const SOURCES_DATA: SourceItem[] = [
  {
    title: "Steam Store Page (App ID 3624140)",
    type: "primary",
    url: "https://store.steampowered.com/app/3624140/Wanderburg/",
    notes: "Official game store page with tags, developer details, platform requirements, and EA scope."
  },
  {
    title: "Steam News Hub / Patch Notes API",
    type: "primary",
    url: "https://store.steampowered.com/news/app/3624140",
    notes: "Includes Hotfixes 0.9.6 through 0.9.10, Dieter announcement, 150k launch milestone post, and Gamescom award."
  },
  {
    title: "Steam Reviews API & SteamCharts",
    type: "primary",
    url: "https://steamcharts.com/app/3624140",
    notes: "Live metrics sampled 2026-09-18 (~3.5k CCU, 10.5k launch peak, ~2.3k reviews, Mostly Positive rating)."
  },
  {
    title: "AllThingsHow Module Unlock Guide",
    type: "secondary",
    url: "https://allthings.how/wanderburg-how-to-unlock-every-module/",
    notes: "Community guide sourcing the 20-module unlock tree.",
    isVerify: true
  },
  {
    title: "GrindNStrat & WhisperOfTheHouse Tier Lists",
    type: "secondary",
    url: "https://grindnstrat.com/wanderburg-captains-tier-list/",
    notes: "Community guide listing 14 total Captains and ability details.",
    isVerify: true
  },
  {
    title: "WikiTactics & Online Search Gap Analysis",
    type: "gap",
    notes: "Confirms absence of official Fandom or wiki.gg sites as of 2026-09-18."
  }
];
