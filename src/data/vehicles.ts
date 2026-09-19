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
  // ── SUVs ───────────────────────────────────────────────────────────
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
];
