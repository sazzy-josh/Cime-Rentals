export type Jet = {
  name: string;
  category: string;
  seats: number;
  location: string;
  rangeNm: number;
  blurb: string;
};

export const JETS: Jet[] = [
  {
    name: "AW109E",
    category: "Helicopter",
    seats: 6,
    location: "Lagos",
    rangeNm: 480,
    blurb: "Fast point-to-point transfers over Lagos traffic — ideal for airport hops and short regional runs.",
  },
  {
    name: "Hawker 800XP",
    category: "Midsize jet",
    seats: 8,
    location: "Lagos",
    rangeNm: 2540,
    blurb: "A dependable midsize jet with a spacious stand-up cabin, well suited to regional business travel.",
  },
  {
    name: "Challenger 604",
    category: "Midsize jet",
    seats: 10,
    location: "Lagos",
    rangeNm: 4000,
    blurb: "Long-range comfort with a wide cabin — a favourite for cross-country and international charters.",
  },
  {
    name: "Gulfstream G200",
    category: "Super-midsize jet",
    seats: 10,
    location: "Abuja",
    rangeNm: 3400,
    blurb: "Super-midsize performance with a quiet cabin, built for longer trips without compromising comfort.",
  },
  {
    name: "Hawker 850XP",
    category: "Midsize jet",
    seats: 8,
    location: "Port Harcourt",
    rangeNm: 2700,
    blurb: "An upgraded 800-series jet with improved range and winglets for smoother, more efficient flights.",
  },
];
