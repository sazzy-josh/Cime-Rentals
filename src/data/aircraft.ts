export type Aircraft = {
  slug: string;
  registration: string;
  manufacturer: string;
  model: string;
  classification: string;
  type: "Jet" | "Helicopter";
  seats: number;
  speedKnots: number;
  rangeNm: number;
  luggageCuFt: number;
  cabinHeight: string;
  cabinWidth: string;
  summary: string;
  location: string;
  features: string[];
  images: string[];
};

const CLOUDINARY = "https://res.cloudinary.com/dzv98o7ds/image/upload";

// "v123/abc.jpg" -> full Cloudinary URL in the aircraft photo folder
function img(path: string) {
  const [version, file] = path.split("/");
  return `${CLOUDINARY}/${version}/switf_jet_dev_staging/${file}`;
}

type Spec = Omit<Aircraft, "slug" | "registration" | "location" | "features" | "images">;
type Unit = {
  registration: string;
  location: string;
  features?: string[];
  images: string[];
  spec?: Partial<Spec>;
  // Cloudinary returns 404 for this unit's photos (checked 2026-09-19). The
  // URLs are kept below; delete this flag once the photos are re-uploaded.
  photosUnavailable?: boolean;
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function make(base: Spec, unit: Unit): Aircraft {
  const spec = { ...base, ...unit.spec };
  return {
    ...spec,
    slug: slugify(`${spec.model}-${unit.registration.replace(/^SJAC-/, "")}`),
    registration: unit.registration,
    location: unit.location,
    features: unit.features ?? [],
    images: unit.photosUnavailable ? [] : unit.images.map(img),
  };
}

const WIFI = ["Wifi available on demand"];

/* ─── Base specs (shared between tail numbers of the same model) ─── */

const AW109E: Spec = {
  manufacturer: "AgustaWestland",
  model: "AW109E",
  classification: "Lightweight Helicopter",
  type: "Helicopter",
  seats: 6,
  speedKnots: 168,
  rangeNm: 512,
  luggageCuFt: 30,
  cabinHeight: "4 ft 2 in",
  cabinWidth: "5 ft 3 in",
  summary:
    "The Agusta AW109 is a lightweight, twin-engine, multi-purpose helicopter renowned for its speed, agility, and versatility. Developed by Agusta (now part of Leonardo Helicopters), it is widely used for corporate transport, emergency medical services (EMS), law enforcement, and military operations.",
};

const HAWKER_800XP: Spec = {
  manufacturer: "Hawker Beechcraft",
  model: "Hawker 800XP",
  classification: "Light Jet",
  type: "Jet",
  seats: 8,
  speedKnots: 447,
  rangeNm: 2920,
  luggageCuFt: 48,
  cabinHeight: "5 ft 9 in",
  cabinWidth: "6 ft",
  summary:
    "The Hawker 800XP is a popular midsize business jet known for its reliability and performance. It offers a comfortable and efficient means of travel for both business and leisure purposes.",
};

const HAWKER_850XP: Spec = {
  manufacturer: "Hawker Beechcraft",
  model: "Hawker 850XP",
  classification: "Light Jet",
  type: "Jet",
  seats: 8,
  speedKnots: 448,
  rangeNm: 2642,
  luggageCuFt: 50,
  cabinHeight: "5 ft 9 in",
  cabinWidth: "6 ft",
  summary:
    "The Hawker 850XP is a midsize business jet introduced in 2006 as an upgrade to the popular Hawker 800 series. Powered by two Honeywell TFE-731-5BR engines and featuring blended winglets, it delivers improved climb performance, fuel efficiency, and an extended range of up to 2,600 nautical miles. With a typical cruise speed of about 440–448 knots (Mach 0.75–0.80), it balances speed and efficiency for regional and transcontinental flights.",
};

const H155: Spec = {
  manufacturer: "Airbus",
  model: "H155",
  classification: "Medium Twin-Engine Helicopter",
  type: "Helicopter",
  seats: 8,
  speedKnots: 150,
  rangeNm: 460,
  luggageCuFt: 81,
  cabinHeight: "4 ft 4 in",
  cabinWidth: "6 ft 9 in",
  summary:
    "The Airbus H155 (formerly Eurocopter EC155) is a medium-sized, twin-engine helicopter designed for a mix of VIP transport, offshore operations, public service, and medical evacuation. It’s part of the Airbus Dauphin family but has been stretched and upgraded for more space, comfort, and range.",
};

const HAWKER_900XP: Spec = {
  manufacturer: "Hawker Beechcraft",
  model: "Hawker 900XP",
  classification: "Light Jet",
  type: "Jet",
  seats: 8,
  speedKnots: 452,
  rangeNm: 2930,
  luggageCuFt: 50,
  cabinHeight: "5 ft 9 in",
  cabinWidth: "6 ft",
  summary:
    "The Hawker 900XP is a versatile and popular mid-size business jet developed by Hawker Beechcraft. As a continuation of the successful Hawker 800 series, the 900XP offers a blend of performance, comfort, and efficiency, making it a favored choice among business travelers and private jet owners. Introduced in 2007, the aircraft builds on the strengths of its predecessors while incorporating key enhancements in range, engine performance, and avionics.",
};

const CHALLENGER_604: Spec = {
  manufacturer: "Bombardier",
  model: "Challenger 604",
  classification: "Mid Sized Jet",
  type: "Jet",
  seats: 10,
  speedKnots: 468,
  rangeNm: 4696,
  luggageCuFt: 115,
  cabinHeight: "6 ft",
  cabinWidth: "8.2 ft",
  summary:
    "The Challenger 604 is a reliable and versatile mid-size business jet known for its long-range capabilities, comfortable cabin, and advanced avionics. It offers a blend of performance, comfort, and efficiency for corporate and private jet travel.",
};

const GULFSTREAM_G200: Spec = {
  manufacturer: "Gulfstream Aerospace",
  model: "Gulfstream G200",
  classification: "Mid Sized Jet",
  type: "Jet",
  seats: 10,
  speedKnots: 470,
  rangeNm: 3400,
  luggageCuFt: 150,
  cabinHeight: "6 ft 3 in",
  cabinWidth: "7 ft 2 in",
  summary:
    "The Gulfstream G200, originally developed by Israel Aircraft Industries (IAI) and marketed by Gulfstream Aerospace, is a super mid-size business jet that offers a combination of range, speed, and comfort. Introduced in the late 1990s, the G200 quickly became a popular choice for corporate and private aviation due to its spacious cabin and long-range capabilities.",
};

const CHALLENGER_605: Spec = {
  manufacturer: "Bombardier",
  model: "Challenger 605",
  classification: "Mid Sized Jet",
  type: "Jet",
  seats: 12,
  speedKnots: 488,
  rangeNm: 4600,
  luggageCuFt: 115,
  cabinHeight: "6 ft",
  cabinWidth: "8.17 ft",
  summary:
    "The Challenger 605 is a popular choice among business jet operators due to its range, performance, and comfort. It features advanced avionics, a well-appointed cabin, and reliable performance.",
};

const LEGACY_600: Spec = {
  manufacturer: "Embraer",
  model: "Legacy 600",
  classification: "Super Mid Sized Jet",
  type: "Jet",
  seats: 13,
  speedKnots: 455,
  rangeNm: 3400,
  luggageCuFt: 286,
  cabinHeight: "6 ft",
  cabinWidth: "6.9 ft",
  summary:
    "The Embraer Legacy 600 is a popular mid-size business jet known for its long-range capabilities and luxurious cabin amenities. It offers a comfortable and efficient means of travel for corporate and private purposes.",
};

/* ─── Fleet ──────────────────────────────────────────────────────── */

// Every aircraft is treated as available, regardless of its status in the
// source data. Ordered by seat count, smallest first.
const ALL_AIRCRAFT: Aircraft[] = [
  make(AW109E, {
    registration: "5N-BVT",
    location: "Lagos",
    images: [
      "v1777543917/inued0mrtdpfkciueacr.jpg",
      "v1777543919/oinqizhbxqfuha8dqcuo.jpg",
      "v1777543919/xmt3vx49eaeg5rbuzy3m.jpg",
      "v1777543918/relk8o5mwv0msgttdkk3.jpg",
    ],
  }),
  make(HAWKER_800XP, {
    registration: "5N-BMT",
    location: "Lagos",
    images: [
      "v1777473499/u1tt4gdyf9bytsggj927.jpg",
      "v1777473499/pp9hdiw7quxipopwqxto.jpg",
      "v1777473499/ql7sxromclm717su60w0.jpg",
      "v1777473499/ltdq4uowqktqh82pbao2.jpg",
    ],
  }),
  make(HAWKER_800XP, {
    registration: "5N-SPG",
    photosUnavailable: true,
    location: "Lagos",
    features: WIFI,
    spec: { speedKnots: 448, rangeNm: 2642 },
    images: [
      "v1777909174/ky8pnno7nfpiofzrwel9.png",
      "v1777909174/drisnzgtpc6tvtl3ssfj.png",
      "v1777909175/tkzzrkyzhk7wuzlwomnw.png",
      "v1777909175/k6wwsfcxmpvx1qbknpqi.png",
    ],
  }),
  make(HAWKER_850XP, {
    registration: "5N-JAZ",
    photosUnavailable: true,
    location: "Lagos",
    features: WIFI,
    images: [
      "v1779572866/ny0mu3hk9doqjtnck8yv.png",
      "v1779572866/k4i9kpnngqlfbr7fhpdi.png",
      "v1779572867/wxjdckkv2zg5x5bxsqmn.png",
      "v1779572867/zpzku9o9xocfzaju3b2p.png",
    ],
  }),
  make(H155, {
    registration: "5N-BDM",
    photosUnavailable: true,
    location: "Port Harcourt",
    features: ["Available for offshore oil & gas transport"],
    images: [
      "v1781602370/be5owkbydo5jriilimt2.jpg",
      "v1781602370/nxq56zifwrxpzefdjk6y.jpg",
      "v1781602371/ivbclpnqbm5kwl84jqii.jpg",
      "v1781602371/sr76mpzpmcvtjymqvpbm.jpg",
    ],
  }),
  make(HAWKER_900XP, {
    registration: "5N-OSA",
    location: "Lagos",
    images: [
      "v1777634004/eorz4ozo0ctl2zqqtzk5.jpg",
      "v1777634009/cxyurmnm07c1mvulqhxu.jpg",
      "v1777634012/gvmj4px3qmnkludlqzv6.jpg",
      "v1777634014/cd168esaq6dw3gicpmel.jpg",
    ],
  }),
  make(CHALLENGER_604, {
    registration: "5N-FEL",
    photosUnavailable: true,
    location: "Lagos",
    features: WIFI,
    images: [
      "v1781384624/hdh6hu82kxe2rbfbykae.png",
      "v1781384625/mqxqsb4adv2gpgg74gpk.png",
      "v1781384626/impt8zzctljok5enog4r.png",
      "v1781384627/fl6nmjuymiq7uorkkzd3.png",
    ],
  }),
  make(CHALLENGER_604, {
    registration: "N441PJ",
    location: "Lagos",
    features: WIFI,
    images: [
      "v1774279053/ifbfya8zijf9hwaj9saz.jpg",
      "v1774279054/b9xgrdf60al4tv7uha7q.jpg",
      "v1774279054/o9ixjzh2qvm7puv5navb.jpg",
      "v1774279054/kkd21svbnwcsa0hqamum.jpg",
    ],
  }),
  make(CHALLENGER_604, {
    registration: "T7-SEI",
    location: "Lagos",
    features: WIFI,
    images: [
      "v1774279078/pugqeq1ssq9yjmdrcw3b.jpg",
      "v1774279078/rr5oecf39vfu2d6g50m8.jpg",
      "v1774279079/nefi6c93foplaug3t90l.jpg",
      "v1774279078/fc8djiv8wzdndqcitqip.jpg",
    ],
  }),
  make(CHALLENGER_604, {
    registration: "T7-OAK",
    location: "Lagos",
    features: WIFI,
    images: [
      "v1774279155/wjhqh8zguzdconwpgx2x.jpg",
      "v1774279156/rdgxp1kmmmsfgsifq6uy.jpg",
      "v1774279156/oadrkfo3ybh5gqakgkhf.jpg",
      "v1774279156/tqlsr7ctqodjsivuchnu.jpg",
    ],
  }),
  make(CHALLENGER_604, {
    registration: "5N-EGL",
    photosUnavailable: true,
    location: "Lagos",
    images: [
      "v1781602460/rh7q3uuzsheieqqjgwvg.jpg",
      "v1781602458/f507qkxhkcsggupq8f52.png",
      "v1781602458/ndktcgo4kenftz0pj8ja.png",
      "v1781602459/lshbwntda0xtrymhki0c.png",
    ],
  }),
  make(GULFSTREAM_G200, {
    registration: "T7-XAM",
    location: "Abuja",
    images: [
      "v1777634089/pmx3pnbaf4heqqfoxng3.jpg",
      "v1777634095/wvuw79hjjmyrq6qrplvg.jpg",
      "v1777634091/fonjulgqeupi5efcoynl.jpg",
      "v1777634093/mhwkfem8hzhyu2cboddi.jpg",
    ],
  }),
  make(CHALLENGER_605, {
    registration: "5N-A00",
    location: "Lagos",
    images: [
      "v1777634189/gj7hinlwlxga6egdbb7y.jpg",
      "v1777634194/cbg7z1l3uvbirqbwhgjv.jpg",
      "v1777634192/epwq3dls5xegymk8zs47.jpg",
      "v1777634196/b4yjk5mlrdzux6yaznxs.jpg",
    ],
  }),
  make(CHALLENGER_605, {
    registration: "5N-DSY",
    photosUnavailable: true,
    location: "Abuja",
    features: WIFI,
    images: [
      "v1779563072/vvu8byxxoeyt7ptpmr5u.png",
      "v1779563075/aoidpbpde8yqknfnvkzr.png",
      "v1779563077/ptto7z2a6ifzsjyvng2j.png",
      "v1779563078/ylriepeetpmgisoewvqv.png",
    ],
  }),
  make(CHALLENGER_605, {
    registration: "5N-CDY",
    location: "Lagos",
    features: WIFI,
    images: [
      "v1774279228/yx4tm8mucbjtm19e8yl9.jpg",
      "v1774279229/oxl7585lnlf6qwrqpbyk.jpg",
      "v1774279228/sz4uruab17w8zstkifev.jpg",
      "v1774279229/fm8ftr3jjyscuq73pe4a.jpg",
    ],
  }),
  make(CHALLENGER_605, {
    registration: "SJAC-52711",
    location: "Europe",
    features: WIFI,
    spec: {
      rangeNm: 4000,
      cabinHeight: "6 ft 3 in",
      cabinWidth: "8 ft 3 in",
      summary:
        "The Bombardier Challenger 605 is a super-midsize business jet known for its spacious cabin, long-range capabilities, and performance. Key features include a stand-up cabin, seating for up to 12 passengers, two General Electric CF34-3B engines, and modern Collins Pro Line 21 avionics.",
    },
    images: [
      "v1772628211/i2tvkdohtfrpspnbmb6e.jpg",
      "v1772628212/fr2urgegoduz6fo3btph.jpg",
      "v1772628212/iw4iswngnxqan1naep5i.jpg",
      "v1772628212/mpah0rtnvrwrn9dktviu.jpg",
    ],
  }),
  make(
    {
      manufacturer: "Embraer",
      model: "Legacy 650E",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 13,
      speedKnots: 460,
      rangeNm: 3800,
      luggageCuFt: 286,
      cabinHeight: "6 ft",
      cabinWidth: "6.88 ft",
      summary:
        "The Embraer Legacy 650E is a large-cabin business jet known for its long-range capabilities, luxurious three-zone cabin, and advanced avionics.",
    },
    {
      registration: "SJAC-58553",
      location: "Europe",
      features: WIFI,
      images: [
        "v1772629018/l2ettyxe1mucs920ctfe.jpg",
        "v1772629018/mx21hqvvriujgifiqr2j.jpg",
        "v1772629018/edc1wb4a9slgopud9pdc.jpg",
        "v1772629018/o7dsijmp1t1vevdups67.jpg",
      ],
    }
  ),
  make(LEGACY_600, {
    registration: "5N-BTX",
    photosUnavailable: true,
    location: "Lagos",
    images: [
      "v1779573120/p2ru7duhigubjslgywxg.png",
      "v1779573122/nd8bxtmwimkw0g7dmk7i.png",
      "v1779573123/fulhsatlt9f3nyipdtkb.png",
      "v1779573124/zdtzgloewdxvhbum2hs6.png",
    ],
  }),
  make(LEGACY_600, {
    registration: "5N-ONC",
    location: "Abuja",
    images: [
      "v1777635005/ren6k5uzmir2l871f5pd.jpg",
      "v1777635005/tz600lo2xrmofe6lazde.jpg",
      "v1777635006/ol1eidyh1cgj9jfaa7hm.jpg",
      "v1777635006/voti9iimmngz3wjonibh.jpg",
    ],
  }),
  make(
    {
      manufacturer: "Bombardier",
      model: "Global 5000",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 13,
      speedKnots: 499,
      rangeNm: 5200,
      luggageCuFt: 195,
      cabinHeight: "6 ft 11 in",
      cabinWidth: "7 ft 11 in",
      summary:
        "The Bombardier Global 5000 is a high-performance long-range business jet, designed for speed, luxury, and efficiency. It is an excellent choice for executives and VIP travelers who require intercontinental capabilities with maximum comfort.",
    },
    {
      registration: "SJAC-62950",
      location: "Abuja",
      images: [
        "v1772628706/wqklcwmthgzaieod1rss.jpg",
        "v1772628706/geo4of9z3m1bczfvhh1c.jpg",
        "v1772628706/xbndxz7uylmrb7qgtzgy.jpg",
        "v1772628706/otcaccss3ys49tny2krg.jpg",
      ],
    }
  ),
  make(LEGACY_600, {
    registration: "5N-LRK",
    location: "Abuja",
    features: WIFI,
    images: [
      "v1774279249/f0sbjge86lsqz5lwdvbv.jpg",
      "v1774279250/lvo2wpa7whkl8jav5a7d.jpg",
      "v1774279250/xbnncalw61io3tlwtpb4.jpg",
      "v1774279250/uh1lws4eyazofbxyxyzg.jpg",
    ],
  }),
  make(
    {
      manufacturer: "Embraer",
      model: "Legacy 650",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 13,
      speedKnots: 460,
      rangeNm: 3900,
      luggageCuFt: 240,
      cabinHeight: "6 ft",
      cabinWidth: "6 ft 11 in",
      summary:
        "The Embraer Legacy 650 is a large business jet that offers a blend of long-range capability, luxurious cabin comfort, and advanced technology. Derived from the successful Legacy 600, the Legacy 650 was introduced by Brazilian aerospace manufacturer Embraer in 2010 as an upgraded version with enhanced range and performance, making it a popular choice for corporate travel and private ownership.",
    },
    {
      registration: "5N-SJI",
      photosUnavailable: true,
      location: "Lagos",
      images: [
        "v1781602303/lqqqwdlc0z4q4hdbtt8d.jpg",
        "v1781602301/dmaljaiqi9pkpnddbl30.png",
        "v1781602302/zm3slgr7k4n8cdpfgi1u.png",
        "v1781602302/tgclbp2ietkmkkavsmx2.png",
      ],
    }
  ),
  make(
    {
      manufacturer: "Bombardier",
      model: "Global 6000",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 14,
      speedKnots: 511,
      rangeNm: 6000,
      luggageCuFt: 195,
      cabinHeight: "6 ft 2 in",
      cabinWidth: "7 ft 11 in",
      summary:
        "The Bombardier Global 6000 is an ultra-long-range business jet known for its extensive range of approximately 6,000 nautical miles, spacious cabin, and advanced technology. It features a quiet interior designed for comfort and productivity, a sophisticated flight deck, and is powered by two Rolls-Royce engines. It is ideal for intercontinental travel, accommodating up to 19 passengers, and offers a blend of speed, performance, and amenities like a full galley and WiFi.",
    },
    {
      registration: "SJAC-17409",
      location: "Europe",
      features: WIFI,
      images: [
        "v1772629682/wcq7bqwljjhxva4vghtp.jpg",
        "v1772629682/tbn0bbfbqyejt0feucyk.jpg",
        "v1772629682/xek773g8hud41b2sfruq.jpg",
        "v1772629682/wa97ubxrtbkrbfvsme0l.jpg",
      ],
    }
  ),
  make(
    {
      manufacturer: "Gulfstream Aerospace",
      model: "Gulfstream G400",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 14,
      speedKnots: 500,
      rangeNm: 4220,
      luggageCuFt: 169,
      cabinHeight: "6 ft 2 in",
      cabinWidth: "7 ft 4 in",
      summary:
        "The Gulfstream GIV is a high-performance, mid-size business jet developed by Gulfstream Aerospace, a subsidiary of General Dynamics. Introduced in the late 1980s, the GIV quickly became a popular choice among corporate executives, governments, and high-net-worth individuals due to its advanced features, long-range capabilities, and luxurious cabin.",
    },
    {
      registration: "5N-BOD",
      photosUnavailable: true,
      location: "Abuja",
      images: [
        "v1781384776/yk21wpcn2hixsp2mz2py.jpg",
        "v1781384783/o7l4vmlx4rfcp2bc78yx.png",
        "v1781384787/dcikvye1rwo80adsltdq.png",
        "v1781384789/lrlc2wmdconbxymkj5ra.png",
      ],
    }
  ),
  make(
    {
      manufacturer: "Gulfstream Aerospace",
      model: "Gulfstream G450",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 16,
      speedKnots: 500,
      rangeNm: 4350,
      luggageCuFt: 169,
      cabinHeight: "6 ft 2 in",
      cabinWidth: "7 ft 4 in",
      summary:
        "The Gulfstream G450 is a premier long-range business jet renowned for its speed, luxury, and efficiency. With a maximum range of 4,350 nautical miles, it effortlessly connects major international destinations, such as New York to London or Los Angeles to Tokyo, without refueling.",
    },
    {
      registration: "N770KS",
      photosUnavailable: true,
      location: "Lagos",
      images: [
        "v1781984304/x1tyjojdu8bin7xxjf4h.jpg",
        "v1781984305/aky4zptjods4jhbuc6vn.jpg",
        "v1781984305/l9t4drxxnlskhclmkrss.jpg",
        "v1781984305/ycndjplhtnqv2yfgtigy.jpg",
      ],
    }
  ),
  make(
    {
      manufacturer: "Embraer",
      model: "ERJ 140LR",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 19,
      speedKnots: 450,
      rangeNm: 1650,
      luggageCuFt: 325,
      cabinHeight: "6 ft",
      cabinWidth: "6 ft 11 in",
      summary:
        "The Embraer ERJ 140LR is a reliable and efficient regional jet designed to deliver comfortable, cost-effective air travel for short to medium-haul routes. With a typical seating capacity of up to 44 passengers in a spacious 1–2 configuration, it offers a balanced blend of performance and passenger comfort without the congestion of larger aircraft. Powered by twin Rolls-Royce turbofan engines, the ERJ 140LR cruises at high speed while maintaining strong fuel efficiency, making it ideal for corporate shuttles, group charters, and regional operations. Its ability to operate from relatively shorter runways further enhances its versatility, positioning it as a practical solution for connecting key cities and underserved destinations.",
    },
    {
      registration: "5N-JLA",
      photosUnavailable: true,
      location: "Abuja",
      features: WIFI,
      images: [
        "v1779372333/woapgoratqcbgceetx6g.png",
        "v1779372333/qpeemlo6mognoomlx3ak.png",
        "v1779372333/m29fbn17zxjihig8lp5p.png",
        "v1779372334/pblfmpimxs9u9ph7o3tj.png",
      ],
    }
  ),
  make(
    {
      manufacturer: "Bombardier",
      model: "CRJ 200ER",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 24,
      speedKnots: 464,
      rangeNm: 1180,
      luggageCuFt: 630,
      cabinHeight: "6 ft 2 in",
      cabinWidth: "8 ft 10 in",
      summary:
        "The CRJ 200 is a popular regional jet manufactured by Bombardier Aerospace. It is known for its efficiency and reliability, making it a popular choice for regional airlines around the world. The aircraft can accommodate a considerable number of passengers and offers good performance for short to medium-range flights.",
    },
    {
      registration: "5N-XEJ",
      photosUnavailable: true,
      location: "Abuja",
      images: [
        "v1777635646/ejskcd2tlcmcwgjmtcxk.jpg",
        "v1777635647/akj5hrygwtxtxeevswvq.jpg",
        "v1777635649/dbzhyxapsupkhrhsmq2j.jpg",
        "v1777635648/ultxraczmykrxtyc2onx.jpg",
      ],
    }
  ),
  make(
    {
      manufacturer: "Embraer",
      model: "ERJ 135LR",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 24,
      speedKnots: 450,
      rangeNm: 1750,
      luggageCuFt: 325,
      cabinHeight: "6 ft",
      cabinWidth: "6 ft 11 in",
      summary:
        "The Embraer ERJ 135LR is a compact and efficient regional jet built for short- to medium-haul operations. Designed by Embraer, the aircraft typically accommodates up to 24 passengers and is well suited for corporate shuttles, regional airline services, and private group charters. Powered by twin Rolls-Royce turbofan engines, the ERJ 135LR delivers reliable performance, fuel efficiency, and fast cruise speeds while maintaining low operating costs. Its ability to operate from shorter runways and access smaller airports makes it a versatile option for connecting key business and regional destinations comfortably and efficiently.",
    },
    {
      registration: "5N-CEI",
      photosUnavailable: true,
      location: "Lagos",
      features: WIFI,
      images: [
        "v1779372450/cxtqzalriag9afgf496p.png",
        "v1779372451/mnuoxzu08jpnzf8hdrqu.png",
        "v1779372450/rds3nlhiiycjadhigrrw.png",
        "v1779372451/i57kxqjmrpani8jpe55g.png",
      ],
    }
  ),
  make(
    {
      manufacturer: "Embraer",
      model: "ERJ 145ER",
      classification: "Super Mid Sized Jet",
      type: "Jet",
      seats: 50,
      speedKnots: 453,
      rangeNm: 1600,
      luggageCuFt: 325,
      cabinHeight: "6 ft",
      cabinWidth: "6 ft 11 in",
      summary:
        "The Embraer ERJ 145 is a reliable 50-seat regional jet, designed for efficiency, comfort, and flexibility. It is widely used for short to medium-haul routes, providing smooth and cost-effective air travel for both corporate and group charter flights.",
    },
    {
      registration: "5N-BYX",
      location: "Lagos",
      images: [
        "v1776958654/m6gspts3bjwvzntowtxg.png",
        "v1776958656/tl01ogxcmk3obddy2peb.png",
        "v1776958657/xwpayye7y6a88dpptuk4.png",
        "v1776958658/vdswlkfrpv6px0kjo7ys.png",
      ],
    }
  ),
];

// Only aircraft with working photos are listed on the site. Units flagged
// `photosUnavailable` above reappear automatically once the flag is removed.
export const AIRCRAFT: Aircraft[] = ALL_AIRCRAFT.filter((a) => a.images.length > 0);

/* ─── Helpers ────────────────────────────────────────────────────── */

export function getAircraft(slug: string) {
  return AIRCRAFT.find((a) => a.slug === slug);
}

// SJAC-xxxxx values are internal reference codes, not tail numbers, so they
// are never shown on the site.
export function getTailNumber(a: Aircraft) {
  return a.registration.startsWith("SJAC-") ? null : a.registration;
}

export function getDisplayName(a: Aircraft) {
  const tail = getTailNumber(a);
  return tail ? `${a.model} (${tail})` : a.model;
}

export const KNOTS_TO_KMH = 1.852;

export function formatSpeed(a: Aircraft) {
  return `${a.speedKnots} kt`;
}

export function formatSpeedKmh(a: Aircraft) {
  return `${Math.round(a.speedKnots * KNOTS_TO_KMH).toLocaleString("en-US")} km/h`;
}

export function formatRange(a: Aircraft) {
  return `${a.rangeNm.toLocaleString("en-US")} nm`;
}

export function formatRangeKm(a: Aircraft) {
  return `${Math.round(a.rangeNm * KNOTS_TO_KMH).toLocaleString("en-US")} km`;
}

// Closest aircraft to `current` by type, then seat count — one per model.
export function getRelatedAircraft(current: Aircraft, count = 3) {
  const seen = new Set([current.model]);
  return AIRCRAFT.filter((a) => a.slug !== current.slug)
    .sort(
      (a, b) =>
        Number(a.type !== current.type) - Number(b.type !== current.type) ||
        Math.abs(a.seats - current.seats) - Math.abs(b.seats - current.seats)
    )
    .filter((a) => {
      if (seen.has(a.model)) return false;
      seen.add(a.model);
      return true;
    })
    .slice(0, count);
}
