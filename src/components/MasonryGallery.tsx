import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { FilterBar } from "./FilterBar";
import { Lightbox } from "./Lightbox";

// Import artwork images
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

export interface Artwork {
  id: string;
  title: string;
  category: string;
  year: number;
  image: string;
}

// Ana's artwork collection
const placeholderArtworks: Artwork[] = [
  { id: "1", title: "Daydreamer", category: "Character Design", year: 2024, image: art01 },
  { id: "2", title: "Brooding Soul", category: "Character Design", year: 2024, image: art02 },
  { id: "3", title: "Sparkle", category: "Character Design", year: 2024, image: art03 },
  { id: "4", title: "Skater Boy", category: "Character Design", year: 2023, image: art04 },
  { id: "5", title: "Pink Fringe", category: "Character Design", year: 2024, image: art05 },
  { id: "6", title: "Golden Hour", category: "Character Design", year: 2023, image: art06 },
  { id: "7", title: "City Nights", category: "Digital Illustration", year: 2024, image: art07 },
  { id: "8", title: "Falling", category: "Digital Illustration", year: 2024, image: art08 },
  { id: "9", title: "Violet Glow", category: "Character Design", year: 2023, image: art09 },
  { id: "10", title: "Beach Day", category: "Digital Illustration", year: 2024, image: art10 },
  { id: "11", title: "School Boy", category: "Character Design", year: 2024, image: art11 },
  { id: "12", title: "Turnaround Sheet", category: "Character Design", year: 2024, image: art12 },
  { id: "13", title: "Firefly Magic", category: "Digital Illustration", year: 2024, image: art13 },
];

interface MasonryGalleryProps {
  artworks?: Artwork[];
}

export function MasonryGallery({ artworks = placeholderArtworks }: MasonryGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const categories = useMemo(() => 
    Array.from(new Set(artworks.map((a) => a.category))),
    [artworks]
  );

  const years = useMemo(() => 
    Array.from(new Set(artworks.map((a) => a.year))).sort((a, b) => b - a),
    [artworks]
  );

  const filteredArtworks = useMemo(() => {
    return artworks.filter((artwork) => {
      const categoryMatch = activeCategory === "All" || artwork.category === activeCategory;
      const yearMatch = activeYear === null || artwork.year === activeYear;
      return categoryMatch && yearMatch;
    });
  }, [artworks, activeCategory, activeYear]);

  const currentIndex = selectedArtwork 
    ? filteredArtworks.findIndex((a) => a.id === selectedArtwork.id)
    : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedArtwork(filteredArtworks[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredArtworks.length - 1) {
      setSelectedArtwork(filteredArtworks[currentIndex + 1]);
    }
  };

  return (
    <>
      <FilterBar
        categories={categories}
        years={years}
        activeCategory={activeCategory}
        activeYear={activeYear}
        onCategoryChange={setActiveCategory}
        onYearChange={setActiveYear}
      />

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredArtworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className="break-inside-avoid group cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => setSelectedArtwork(artwork)}
          >
            <div className="relative overflow-hidden rounded-lg bg-card">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {artwork.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                      {artwork.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {artwork.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredArtworks.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No artworks found with the selected filters.</p>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={currentIndex > 0}
        hasNext={currentIndex < filteredArtworks.length - 1}
      />
    </>
  );
}
