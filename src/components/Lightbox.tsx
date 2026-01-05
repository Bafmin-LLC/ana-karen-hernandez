import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Artwork {
  id: string;
  title: string;
  category: string;
  year: number;
  image: string;
}

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

export function Lightbox({ 
  artwork, 
  onClose, 
  onPrevious, 
  onNext, 
  hasPrevious = false, 
  hasNext = false 
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) onPrevious();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext, hasPrevious, hasNext]);

  if (!artwork) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-muted/50 text-foreground hover:bg-muted hover:text-primary transition-all z-10"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      {hasPrevious && onPrevious && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrevious(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted/50 text-foreground hover:bg-muted hover:text-primary transition-all z-10"
          aria-label="Previous artwork"
        >
          <ChevronLeft size={28} />
        </button>
      )}
      {hasNext && onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted/50 text-foreground hover:bg-muted hover:text-primary transition-all z-10"
          aria-label="Next artwork"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Content */}
      <div 
        className="flex flex-col items-center justify-center h-full p-6 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative max-w-5xl max-h-[70vh] w-full flex items-center justify-center">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-scale-in"
          />
        </div>

        {/* Info */}
        <div className="mt-6 text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {artwork.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              {artwork.category}
            </span>
            <span className="text-muted-foreground text-sm">
              {artwork.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
