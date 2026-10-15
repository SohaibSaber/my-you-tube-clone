import { useNavigate } from "react-router-dom";


const categories = [
  "All",
  "Programming",
  "Music",
  "Gaming",
  "Technology",
  "News",
  "Sports",
  "Cooking",
  "Travel",
  "Education",
  "Science",
  "Lifestyle",
];

export default function CategoryBar({ active = "" }) {
  const navigate = useNavigate();

  function selectCategory(category) {
    navigate(category === "All" ? "/" : `/?q=${encodeURIComponent(category.toLowerCase())}`);
  }

  return (
    <div
      aria-label="Video categories"
      className="hide-scrollbar sticky top-16 z-20 -mx-3 flex gap-2 overflow-x-auto border-b border-neutral-100 bg-white/95 px-3 py-3 backdrop-blur-md sm:-mx-6 sm:gap-3 sm:px-6"
    >
      {categories.map((category) => {
        const selected =
          (category === "All" && !active) ||
          category.toLowerCase() === active.toLowerCase();

        return (
          <button
            key={category}
            type="button"
            onClick={() => selectCategory(category)}
            aria-pressed={selected}
            className={`shrink-0 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              selected
                ? "bg-neutral-950 text-white shadow-sm"
                : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
