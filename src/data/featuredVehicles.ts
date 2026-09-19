// All prices are original muvment.ng prices + ₦20,000 Cime markup

export type FeaturedVehicle = {
  name: string;
  category: string;
  group: "sedan" | "suv" | "bus";
  location: string;
  seats: number;
  from: string;
  per: string;
  alt: string | null;
  image: string;
  slug?: string;
};

const BASE = "https://muvment-prod.s3.eu-west-1.amazonaws.com/production/vehicles";

export const FEATURED_VEHICLES: FeaturedVehicle[] = [
  {
    name: "2013 Toyota Prado",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 7,
    from: "₦145,000",
    per: "12h",
    alt: "₦270,000 / 24h",
    image: `${BASE}/fa15f38f-812f-4358-a49f-61db3c22aa2c/photos/80c684bd-15a0-4c72-aa10-503596eca0bb-trwjbnab3qhvkouaiyhf.jpg`,
  },
  {
    name: "2023 Upgraded VIP Lexus GX460",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 5,
    from: "₦225,000",
    per: "12h",
    alt: "₦430,000 / 24h",
    image: `${BASE}/4bce1b26-b693-4c1a-95da-2a1ed816b6bf/photos/6f77eea4-0467-4012-9887-d375b2d9d348-q12ov1v8jufmqayztitf.jpg`,
    slug: "lexus-gx460-2012-lagos-83m11h",
  },
  {
    name: "2016 Toyota Prado",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 5,
    from: "₦174,000",
    per: "12h",
    alt: "₦328,000 / 24h",
    image: `${BASE}/bc7048af-3fb7-48ac-9b23-2fecdf39d6ec/photos/1f5e5001-cf1a-4c5e-8df2-ac67153d6f0a-rsks1rgytqdhhumgyv1p.jpg`,
    slug: "toyota-prado-2023-lagos-obzunr",
  },
  {
    name: "2020 Upgraded Lexus GX460",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 5,
    from: "₦205,000",
    per: "12h",
    alt: "₦390,000 / 24h",
    image: `${BASE}/05f48555-59dc-4165-9dd4-9a6817ea062e/photos/d8b01ed0-2179-409c-bcaf-65fb633ce38b-eq0cm9xhhnybpbatqata.jpg`,
    slug: "lexus-gx460-2018-lagos-coxnkc",
  },
  {
    name: "2022 Upgraded Lexus GX460",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 7,
    from: "₦222,000",
    per: "12h",
    alt: "₦424,000 / 24h",
    image: `${BASE}/df2fa85d-84ef-4f5d-9278-ddb2f6abbc38/photos/62dac84f-9c27-48eb-91b6-b291e89fb6f0-tyabhtboffbzwyhqxp6h.jpg`,
    slug: "lexus-gx460-2018-lagos-yc9yfn",
  },
  {
    name: "2020 Upgraded Toyota Prado",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 7,
    from: "₦175,000",
    per: "12h",
    alt: "₦330,000 / 24h",
    image: `${BASE}/5e3a88c1-01ed-42e4-9c1e-9244be654a38/photos/dfecbd1d-a7ef-491f-99dc-eb7240f2cac5-ayx5rw1xgs4fzuerbfhd.jpg`,
    slug: "toyota-prado-2016-lagos-qazmb6",
  },
  {
    name: "2022 Upgraded Toyota Prado",
    category: "SUV",
    group: "suv",
    location: "Lagos",
    seats: 7,
    from: "₦180,000",
    per: "12h",
    alt: "₦340,000 / 24h",
    image: `${BASE}/5333f194-d034-47cb-8aca-6391487d3261/photos/51bc84a2-8260-4da2-8c30-27fe1be88990-pa1uqfdkzmycxpbsu6i1.jpg`,
    slug: "toyota-prado-2022-lagos-zl1uf1",
  },
];
