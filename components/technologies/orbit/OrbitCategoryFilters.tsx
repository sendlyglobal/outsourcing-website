import React from 'react'

interface CategoryItem {
  id: string
  label: string
  count: number
}

interface OrbitCategoryFiltersProps {
  categories: CategoryItem[]
  activeCategory: string
  setActiveCategory: (id: string) => void
  isDark: boolean
}

export const OrbitCategoryFilters: React.FC<OrbitCategoryFiltersProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  isDark,
}) => {
  return (
    <div className="absolute bottom-6 left-6 z-30 flex flex-wrap items-center gap-1.5 max-w-xl pointer-events-auto">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 backdrop-blur-md border cursor-pointer ${
            activeCategory === cat.id
              ? 'bg-(--teal) text-white font-bold border-(--teal) shadow-lg shadow-(--teal)/25'
              : isDark
                ? 'bg-black text-zinc-400 hover:text-white hover:bg-zinc-900 border-zinc-800'
                : 'bg-white text-zinc-700 hover:text-black hover:bg-zinc-50 border-zinc-200 shadow-sm'
          }`}
        >
          <span>{cat.label}</span>
          <span
            className={`text-[10px] opacity-75 px-1 py-0.2 rounded-full ${
              isDark ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
            }`}
          >
            {cat.count}
          </span>
        </button>
      ))}
    </div>
  )
}
