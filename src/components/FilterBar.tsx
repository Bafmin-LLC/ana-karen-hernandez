import { cn } from "@/lib/utils";

interface FilterBarProps {
  categories: string[];
  years: number[];
  activeCategory: string;
  activeYear: number | null;
  onCategoryChange: (category: string) => void;
  onYearChange: (year: number | null) => void;
}

export function FilterBar({
  categories,
  years,
  activeCategory,
  activeYear,
  onCategoryChange,
  onYearChange,
}: FilterBarProps) {
  return (
    <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between mb-8">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("All")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all",
            activeCategory === "All"
              ? "bg-gradient-primary text-primary-foreground"
              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === category
                ? "bg-gradient-primary text-primary-foreground"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Year Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onYearChange(null)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
            activeYear === null
              ? "bg-secondary text-secondary-foreground"
              : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          )}
        >
          All Years
        </button>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
              activeYear === year
                ? "bg-secondary text-secondary-foreground"
                : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
