// All prices are original muvment.ng prices + ₦20,000 Cime markup

export type Vehicle = {
  name: string;
  category: string;
  group: "sedan" | "suv" | "luxury" | "bus";
  location: string;
  seats: number;
  from: string;
  per: string;
  alt: string | null;
  image: string;
  tag: string | null;
  slug?: string;
};

export const VEHICLES: Vehicle[] = [
  // ── Sedans ─────────────────────────────────────────────────────────
  {
    name: "2019 Toyota Corolla",
    category: "Sedan",
    group: "sedan",
    location: "Lagos",
    seats: 5,
    from: "₦148,000",
    per: "12h",
    alt: "₦271,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/fa3c6a2a-e90c-4fdc-b325-7a0ae083fd84/photos/c647b87f-cf5d-4abb-9af9-4dbdcfe3fa78-hakyngbnbu1uczfbghuv.jpg",
    tag: "Popular",
    slug: "toyota-corolla-2019-lagos-irs7zb",
  },
  {
    name: "2018 Toyota Corolla",
    category: "Sedan",
    group: "sedan",
    location: "Lagos",
    seats: 5,
    from: "₦142,000",
    per: "12h",
    alt: "₦259,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/2bee363e-a705-45a8-8647-72844a7358a7/photos/baeec3de-2034-47c1-b8db-03e81a90a846-hxb4own0udo54znszopq.jpg",
    tag: null,
    slug: "toyota-corolla-2018-lagos-phygo6",
  },
  {
    name: "2016 Toyota Camry",
    category: "Sedan",
    group: "sedan",
    location: "Lagos",
    seats: 5,
    from: "₦128,000",
    per: "12h",
    alt: "₦236,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/577ee5ae-c409-4ad6-91d4-82f765f1eaef/photos/f0b38aff-ef88-453a-a131-6cef7ef0e57c-q9xmmlyqpelnzgke3zdp.jpg",
    tag: null,
    slug: "toyota-camry-2016-lagos-nf050s",
  },
  {
    name: "2013 Honda Accord",
    category: "Sedan",
    group: "sedan",
    location: "Lagos",
    seats: 5,
    from: "₦124,000",
    per: "12h",
    alt: "₦223,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/fb62c60f-67c3-4100-8849-39b0d3df7a00/photos/28f74c78-edaf-445d-9415-7e1b8e5a70b6-eskpacboutgvrvbr49gq.jpg",
    tag: null,
    slug: "honda-accord-2013-lagos-4jwviy",
  },
  {
    name: "2013 Mercedes E350",
    category: "Sedan",
    group: "sedan",
    location: "Lagos",
    seats: 5,
    from: "₦130,000",
    per: "12h",
    alt: "₦235,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/7532be8b-048f-4e4e-9207-8919c6d2663c/photos/57a540d2-d794-4715-a85a-928ad7bee87a-w2zott6yoagoanwz3js2.jpg",
    tag: null,
    slug: "mercedes-sprinter-2013-lagos-66igrt",
  },
  {
    name: "2014 Toyota Avalon",
    category: "Sedan",
    group: "sedan",
    location: "Abuja",
    seats: 5,
    from: "₦130,000",
    per: "12h",
    alt: "₦235,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/d61a77a6-e531-49c6-a392-ac76b436a839/photos/c36a9a31-d029-4323-9895-485c416c34ec-my08lt5isqa1b8fd1b2q.jpg",
    tag: null,
    slug: "toyota-avalon-2014-abuja-xgehl8",
  },

  // ── SUVs ───────────────────────────────────────────────────────────
  {
    name: "2013 Hyundai SantaFe",
    category: "Mid-Size SUV",
    group: "suv",
    location: "Lagos",
    seats: 5,
    from: "₦118,000",
    per: "12h",
    alt: "₦211,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/a171cdf8-6b93-402a-97d7-7f73f3615b5b/photos/20fa13fe-75d6-427f-a117-409f14a761bb-kfwgqf6rmr6okh9tujjg.jpg",
    tag: null,
    slug: "hyundai-santafe-2013-lagos-qgzlsl",
  },
  {
    name: "2010 Toyota Venza",
    category: "Mid-Size SUV",
    group: "suv",
    location: "Lagos",
    seats: 5,
    from: "₦118,000",
    per: "12h",
    alt: "₦211,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/d11f4ced-fdd3-4b86-b44d-bf51a3ba7280/photos/d1ff9c3f-2460-40b8-b1b5-330f9cbea8f1-cy1eynxzlodxaumvm5cq.jpg",
    tag: null,
    slug: "toyota-venza-2010-lagos-2rvzw5",
  },
  {
    name: "2014 Mercedes GLK350",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 5,
    from: "₦136,000",
    per: "12h",
    alt: "₦247,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/7e562491-1f2c-4635-a280-eed19e8e0c2c/photos/6c06ffff-12ca-4893-ac74-3951de90c019-pufftm1xmoo0boahzmtl.jpg",
    tag: null,
    slug: "mercedes-glk350-2014-lagos-x9hapr",
  },
  {
    name: "2018 Lexus RX350",
    category: "Mid-Size SUV",
    group: "suv",
    location: "Lagos",
    seats: 5,
    from: "₦202,000",
    per: "12h",
    alt: "₦379,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/310ef448-e21f-462d-8f76-a7c4f47f04c0/photos/e3db3441-2ef5-47ca-8c0d-c69d5c7b739a-wn2aycusybxiw2psepoo.jpg",
    tag: null,
    slug: "lexus-rx350-2018-lagos-vtyn33",
  },
  {
    name: "2024 GAC GS3 Turbo",
    category: "SUV",
    group: "suv",
    location: "Port Harcourt",
    seats: 5,
    from: "₦226,000",
    per: "12h",
    alt: "₦427,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/54e61609-3117-4b0d-9899-7cd2412f79ab/photos/b1c53cb4-41c6-452c-af2c-2fb2187c269e-uj0mydbf8kzdcjlsr7dz.jpg",
    tag: null,
    slug: "gac-gs3-2024-rivers-sozoqj",
  },
  {
    name: "2019 Toyota Prado",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 7,
    from: "₦215,000",
    per: "12h",
    alt: "₦410,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/d37ffdd2-96da-4cce-87b6-9ca6440a0ba4/photos/576970d8-2c58-445d-948d-e808a1bb8eaf-x8ppbvl4gyc2xssfe7rx.jpg",
    tag: "Top pick",
    slug: "toyota-prado-2019-lagos-hoeu8n",
  },
  {
    name: "2017 Lexus GX460",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 5,
    from: "₦214,000",
    per: "12h",
    alt: "₦403,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/2a80fc82-a86f-4fe5-ac57-dcac83ed03fd/photos/ba49adea-bd8a-49af-b67d-d5dc4046ba53-rd96fzu4nu53zml1azoi.jpg",
    tag: null,
    slug: "lexus-gx460-2017-lagos-xclwmk",
  },
  {
    name: "2018 Toyota Highlander",
    category: "SUV",
    group: "suv",
    location: "Ibadan",
    seats: 8,
    from: "₦265,000",
    per: "12h",
    alt: "₦505,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/6bcf3782-23e5-4fdb-900c-a587d801d586/photos/d10ec2cb-007a-4119-8d34-3532d3f12e9d-wcazcbuaewqom8r07itx.png",
    tag: null,
    slug: "toyota-highlander-2018-ibadan-rfa16n",
  },
  {
    name: "2017 Mercedes GLS550",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 7,
    from: "₦274,000",
    per: "12h",
    alt: "₦523,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/4523275d-ceda-4c15-aff9-94d49cb9c6dd/photos/a133e87c-59ea-45b6-872b-7e9df8111ac0-uty3xywt3prcpdkag6y2.jpg",
    tag: null,
    slug: "mercedes-gls-2017-lagos-jo9sbn",
  },

  // ── Luxury ─────────────────────────────────────────────────────────
  {
    name: "2019 Range Rover Autobiography",
    category: "Luxury SUV",
    group: "luxury",
    location: "Lagos",
    seats: 5,
    from: "₦454,000",
    per: "12h",
    alt: "₦883,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/e6721e43-ee26-4fdc-b277-b6db09d6c216/photos/8d2b1bd2-8288-48d1-8f80-7fc03f18177c-oatvivz5cyrroznzmvdq.jpg",
    tag: "Luxury",
    slug: "range-rover-autobiography-2019-lagos-wcubdn",
  },
  {
    name: "2020 Mercedes Maybach",
    category: "Luxury Sedan",
    group: "luxury",
    location: "Lagos",
    seats: 5,
    from: "₦649,000",
    per: "12h",
    alt: null,
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/fd15d33c-b642-494e-8641-c1bf426d7cd6/photos/dff8cdbd-4e92-44a2-bac8-64fb83b962da-eee5n1wshgp8g0bdw3hi.jpg",
    tag: "Luxury",
    slug: "mercedes-maybach-2020-lagos-kon62v",
  },
  {
    name: "2023 Lexus LX570",
    category: "Luxury SUV",
    group: "luxury",
    location: "Port Harcourt",
    seats: 8,
    from: "₦781,000",
    per: "12h",
    alt: "₦1,537,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/64f0fab9-b01d-4bda-a622-0fb4002f8637/photos/0b5b2b83-f0d6-4c96-afae-e5ce69445289-lav1niw1agrg2nwnkcbx.png",
    tag: null,
    slug: "lexus-lx570-2023-rivers-ohpgfx",
  },
  {
    name: "2020 Mercedes G-Wagon",
    category: "Luxury SUV",
    group: "luxury",
    location: "Lagos",
    seats: 5,
    from: "₦1,114,000",
    per: "12h",
    alt: "₦2,203,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/c553f40c-62b7-4aea-8f4b-c5b00a681506/photos/acf34022-4530-45af-b8d0-6c2be8ec9707-jkwnwtruucipyhos42xw.jpg",
    tag: "Luxury",
    slug: "mercedes-gwagon-2020-lagos-wqbzq7",
  },

  // ── Bus ────────────────────────────────────────────────────────────
  {
    name: "2025 VIP Executive Hiace",
    category: "Bus",
    group: "bus",
    location: "Lagos",
    seats: 9,
    from: "₦481,000",
    per: "12h",
    alt: null,
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/f0fe09e4-56f6-4b81-beb6-a3ae3e10730e/photos/8e7f48df-e7f5-4875-ae30-6a7fc6b313b1-qcisp4ehiwxshw0aqfyf.jpg",
    tag: null,
    slug: "toyota-hiace-2025-lagos-b2p09m",
  },
  {
    name: "2015 Toyota Hiace Bus",
    category: "Bus",
    group: "bus",
    location: "Abuja",
    seats: 14,
    from: "₦250,000",
    per: "12h",
    alt: "₦475,000 / 24h",
    image:
      "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles/b982f422-db6e-4d0e-a4cc-4ab34f5ec4b0/photos/f1c2f9c4-1487-48a5-8dec-9218c8f76749-xry3d6peujsef01bcvhw.jpg",
    tag: null,
    slug: "toyota-hiace-2015-abuja-uvm5vt",
  },
];
