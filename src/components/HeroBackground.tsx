import Image from "next/image";
import { connection } from "next/server";

type HeroImage = { src: string; alt: string };

// Picks a random image from `images` on every request. `connection()` opts the
// page out of static prerendering, otherwise the pick would be frozen at build.
export default async function HeroBackground({ images }: { images: HeroImage[] }) {
  await connection();
  const pick = images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <Image
        src={pick.src}
        alt={pick.alt}
        fill
        priority
        className="object-cover opacity-65"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#0a0a0a]" />
    </>
  );
}
