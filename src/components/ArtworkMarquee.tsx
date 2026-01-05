import art01 from "@/assets/artwork/art-01.jpg";
import art02 from "@/assets/artwork/art-02.jpg";
import art03 from "@/assets/artwork/art-03.jpg";
import art04 from "@/assets/artwork/art-04.jpg";
import art05 from "@/assets/artwork/art-05.jpg";
import art06 from "@/assets/artwork/art-06.jpg";
import art07 from "@/assets/artwork/art-07.jpg";
import art08 from "@/assets/artwork/art-08.jpg";
import art09 from "@/assets/artwork/art-09.jpg";
import art10 from "@/assets/artwork/art-10.jpg";
import art11 from "@/assets/artwork/art-11.jpg";
import art12 from "@/assets/artwork/art-12.jpg";
import art13 from "@/assets/artwork/art-13.jpg";

const artworks = [
  art01, art02, art03, art04, art05, art06, art07,
  art08, art09, art10, art11, art12, art13
];

interface ArtworkMarqueeProps {
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

export function ArtworkMarquee({ direction = "left", speed = "normal" }: ArtworkMarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed];

  const directionClass = direction === "right" ? "animate-marquee-reverse" : speedClass;

  return (
    <div className="overflow-hidden relative">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className={`flex gap-4 ${direction === "right" ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {/* First set of images */}
        {artworks.map((art, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-48 h-64 rounded-lg overflow-hidden"
          >
            <img
              src={art}
              alt={`Artwork ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {artworks.map((art, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-48 h-64 rounded-lg overflow-hidden"
          >
            <img
              src={art}
              alt={`Artwork ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
