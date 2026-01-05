import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { FilterBar } from "./FilterBar";
import { Lightbox } from "./Lightbox";

export interface Artwork {
  id: string;
  title: string;
  category: string;
  year: number;
  image: string;
}

// Placeholder artworks - replace with uploaded images
const placeholderArtworks: Artwork[] = [
  { id: "1", title: "Cosmic Wanderer", category: "Character Design", year: 2024, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop" },
  { id: "2", title: "Neon Dreams", category: "Digital Illustration", year: 2024, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop" },
  { id: "3", title: "Forest Spirit", category: "Character Design", year: 2023, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=900&fit=crop" },
  { id: "4", title: "City Lights", category: "Digital Illustration", year: 2024, image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=500&fit=crop" },
  { id: "5", title: "Ocean Guardian", category: "Character Design", year: 2023, image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&h=750&fit=crop" },
  { id: "6", title: "Abstract Emotions", category: "Digital Illustration", year: 2023, image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700&h=700&fit=crop" },
  { id: "7", title: "Cyber Punk", category: "Character Design", year: 2024, image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=850&fit=crop" },
  { id: "8", title: "Sunset Valley", category: "Digital Illustration", year: 2022, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop" },
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
