import React from "react";

interface InsightCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function InsightCategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: InsightCategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`rounded-full px-4 py-2 text-xs font-extrabold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-[#FF5F00] text-white shadow-xs"
                : "border border-[#EAE3D9] bg-white text-[#0F172A] hover:border-[#FF5F00] hover:text-[#FF5F00]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
