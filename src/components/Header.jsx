import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, CircleUserRound, Menu, Search } from "lucide-react";


export default function Header({ onMenuClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  
  useEffect(() => {
    if (location.pathname === "/") {
      setText(new URLSearchParams(location.search).get("q") || "");
    }
    setMobileSearchOpen(false);
    setProfileOpen(false);
  }, [location.pathname, location.search]);

  function handleSearch(event) {
    event.preventDefault(); 
    const query = text.trim();
    navigate(query ? `/?q=${encodeURIComponent(query)}` : "/");
    setMobileSearchOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-neutral-200/70 bg-white/95 shadow-[0_1px_8px_rgba(0,0,0,0.025)] backdrop-blur-lg">
      <div className="flex h-full items-center justify-between gap-3 px-3 sm:gap-5 sm:px-5 lg:px-7">
        
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-800 transition hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <Menu size={23} strokeWidth={1.8} />
          </button>

          <Link
            to="/"
            className="flex items-start gap-1"
            aria-label="YouTube homepage"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
              alt="YouTube"
              className="h-6 w-[103px] object-contain sm:h-7 sm:w-[125px]"
            />
            <span className="mt-0.5 hidden text-[9px] font-semibold tracking-wide text-neutral-400 lg:block">
              DEMO
            </span>
          </Link>
        </div>

        
        <form
          onSubmit={handleSearch}
          role="search"
          className="hidden min-w-0 max-w-[690px] flex-1 items-center justify-center sm:flex"
        >
          <div className="flex h-11 w-full min-w-0 overflow-hidden rounded-full border border-neutral-300 bg-white shadow-sm transition focus-within:border-blue-500 focus-within:shadow-[0_0_0_1px_#3b82f6]">
            <input
              type="search"
              aria-label="Search videos"
              placeholder="Search"
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-5 text-[15px] text-neutral-900 outline-none placeholder:text-neutral-500"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex w-16 shrink-0 items-center justify-center border-l border-neutral-300 bg-neutral-50 text-neutral-800 transition hover:bg-neutral-100"
            >
              <Search size={21} strokeWidth={1.9} />
            </button>
          </div>
        </form>

        
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <button
            type="button"
            onClick={() => setMobileSearchOpen(true)}
            aria-label="Open search"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-100 sm:hidden"
          >
            <Search size={23} />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen((open) => !open)}
              aria-label="Demo profile"
              aria-expanded={profileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm ring-2 ring-white transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600 sm:h-10 sm:w-10"
            >
              <CircleUserRound size={24} strokeWidth={1.8} />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-12 z-50 w-64 rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl">
                <p className="text-sm font-semibold text-neutral-900">Demo profile</p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                   Google sign-in is not included. it is demmmmooooo
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      
      {mobileSearchOpen && (
        <div className="absolute inset-0 z-20 flex items-center gap-2 bg-white px-3 sm:hidden">
          <button
            type="button"
            onClick={() => setMobileSearchOpen(false)}
            aria-label="Close search"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-neutral-100"
          >
            <ArrowLeft size={22} />
          </button>

          <form onSubmit={handleSearch} role="search" className="flex min-w-0 flex-1">
            <input
              autoFocus
              type="search"
              aria-label="Search videos"
              placeholder="Search videos"
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="h-10 min-w-0 flex-1 rounded-l-full border border-neutral-300 px-4 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="flex h-10 w-12 shrink-0 items-center justify-center rounded-r-full border border-l-0 border-neutral-300 bg-neutral-100"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
