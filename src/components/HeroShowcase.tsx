import { useState, useEffect } from "react";
import art01 from "@/assets/artwork/art-01.jpg";
import art02 from "@/assets/artwork/art-02.jpg";
import art03 from "@/assets/artwork/art-03.jpg";
import art04 from "@/assets/artwork/art-04.jpg";
import art05 from "@/assets/artwork/art-05.jpg";
import art06 from "@/assets/artwork/art-06.jpg";

const featuredArtworks = [
  { id: 1, image: art01, title: "Artwork 1", category: "Character", year: "2025" },
  { id: 2, image: art02, title: "Artwork 2", category: "Character", year: "2025" },
  { id: 3, image: art03, title: "Artwork 3", category: "Illustration", year: "2025" },
  { id: 4, image: art04, title: "Artwork 4", category: "Character", year: "2025" },
  { id: 5, image: art05, title: "Artwork 5", category: "Character", year: "2025" },
  { id: 6, image: art06, title: "Artwork 6", category: "Illustration", year: "2025" },
];

export function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredArtworks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentArtwork = featuredArtworks[currentIndex];

  return (
    <div className="relative w-full max-w-lg">
      {/* Main artwork container */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-card shadow-2xl">
        {featuredArtworks.map((artwork, index) => (
          <img
            key={artwork.id}
            src={artwork.image}
            alt={artwork.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay with artwork info */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-6 pt-20">
          <h3 className="font-display text-xl font-bold text-foreground mb-1">
            {currentArtwork.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {currentArtwork.category} • {currentArtwork.year}
          </p>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-4">
            {featuredArtworks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-foreground"
                    : "w-3 bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
                aria-label={`Go to artwork ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-3xl opacity-20 -z-10" />
    </div>
  );
}
