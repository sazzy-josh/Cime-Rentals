import type { Vehicle } from "@/data/vehicles";

export type FleetVehicle = {
  name: string;
  category: string;
  seats: number;
  location: string;
  image: string;
  from12h: number;
  from24h: number;
  blurb: string;
};

function cld(publicId: string, version: string) {
  return `https://res.cloudinary.com/wugixe2q/image/upload/f_auto,q_auto,w_1200/v${version}/${publicId}.jpg`;
}

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    name: "Rolls-Royce Cullinan",
    category: "Ultra-luxury SUV",
    seats: 4,
    location: "Lagos",
    image: cld("2948b3f3-07ae-42c4-9bb4-37f0d77c5484", "1789156279"),
    from12h: 600000,
    from24h: 1100000,
    blurb: "The pinnacle of chauffeured arrivals — reserved for weddings, red carpets, and VIP transfers.",
  },
  {
    name: "Bentley Bentayga",
    category: "Ultra-luxury SUV",
    seats: 4,
    location: "Lagos",
    image: cld("8f24dc8f-e181-429a-ac1b-9ccb0bf604b1", "1789156279"),
    from12h: 450000,
    from24h: 800000,
    blurb: "Handcrafted British luxury with commanding road presence, for clients who expect the best.",
  },
  {
    name: "Mercedes-Benz Maybach S650",
    category: "Ultra-luxury sedan",
    seats: 4,
    location: "Abuja",
    image: cld("f82ca746-8797-45c6-9126-ba0d38b53d2a", "1789155920"),
    from12h: 420000,
    from24h: 780000,
    blurb: "The executive sedan of choice — silent, spacious, and built for high-profile itineraries.",
  },
  {
    name: "Mercedes-Benz G63 AMG",
    category: "Luxury SUV",
    seats: 5,
    location: "Lagos",
    image: cld("a2f3749d-cca6-47e9-b8a7-ba04baa119c2", "1789156277"),
    from12h: 380000,
    from24h: 700000,
    blurb: "Bold, boxy, and unmistakable — the G-Wagon makes an entrance wherever it goes.",
  },
  {
    name: "Range Rover Velar",
    category: "Luxury SUV",
    seats: 5,
    location: "Abuja",
    image: cld("8442a36f-37ae-4db0-84a5-8d677e1d6a6f", "1789156279"),
    from12h: 240000,
    from24h: 440000,
    blurb: "Sleek, modern, and effortlessly composed — ideal for corporate travel and city touring.",
  },
  {
    name: "Mercedes-Benz GLE Coupe",
    category: "Luxury SUV coupe",
    seats: 5,
    location: "Lagos",
    image: cld("f76c74ee-5767-466b-86f5-b9e27565b231", "1789156281"),
    from12h: 260000,
    from24h: 480000,
    blurb: "Sporty styling meets first-class comfort for clients who want performance with polish.",
  },
  {
    name: "GAC Trumpchi M8",
    category: "Luxury MPV",
    seats: 7,
    location: "Port Harcourt",
    image: cld("791a2c73-82c2-4816-bbfc-23f684541d08", "1789156281"),
    from12h: 150000,
    from24h: 270000,
    blurb: "Roomy, comfortable, and built for groups — perfect for family trips and small delegations.",
  },
  {
    name: "Toyota Hilux",
    category: "Utility pickup",
    seats: 5,
    location: "Lagos",
    image: cld("9faa6664-da82-4151-a182-f9f168839ed4", "1789156278"),
    from12h: 130000,
    from24h: 230000,
    blurb: "Rugged and dependable, for site visits, logistics runs, and off-the-beaten-path jobs.",
  },
];

// Adapts the Cloudinary fleet photos into Vehicle-shaped cards so they can be
// shown alongside the regular rental catalog (Cloudinary assets first).
export const FLEET_AS_VEHICLES: Vehicle[] = FLEET_VEHICLES.map((car) => ({
  name: car.name,
  category: car.category,
  group: "luxury" as const,
  location: car.location,
  seats: car.seats,
  from: `₦${car.from12h.toLocaleString("en-NG")}`,
  per: "12h",
  alt: `₦${car.from24h.toLocaleString("en-NG")} / 24h`,
  image: car.image,
  tag: "Executive",
}));
