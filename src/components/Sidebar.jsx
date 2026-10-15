import { NavLink } from 'react-router-dom';
import {
  House, Clapperboard, TvMinimalPlay, LibraryBig,
  Flame, Music2, Gamepad2, Newspaper, Trophy, GraduationCap, Laptop,
} from 'lucide-react';

const mainLinks = [
  { label: 'Home', to: '/', icon: House },
  { label: 'Shorts', to: '/shorts', icon: Clapperboard },
  { label: 'Subscriptions', to: '/subscriptions', icon: TvMinimalPlay },
  { label: 'Library', to: '/library', icon: LibraryBig },
];
const exploreLinks = [
  { label: 'Trending', to: '/?mode=trending', icon: Flame },
  { label: 'Music', to: '/?q=music', icon: Music2 },
  { label: 'Gaming', to: '/?q=gaming', icon: Gamepad2 },
  { label: 'News', to: '/?q=news', icon: Newspaper },
  { label: 'Sports', to: '/?q=sports', icon: Trophy },
  { label: 'Learning', to: '/?q=education', icon: GraduationCap },
  { label: 'Technology', to: '/?q=technology', icon: Laptop },
];

export default function Sidebar({ mobileOpen, expanded, onClose }) {
  return (
    <>
      {mobileOpen && (
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="fixed inset-0 top-16 z-30 bg-black/40 min-[770px]:hidden"
        />
      )}
      <aside className={`fixed bottom-0 left-0 top-16 z-40 w-60 overflow-y-auto border-r border-neutral-200 bg-white px-2 py-3 transition-[width,transform] duration-200 min-[770px]:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      } ${expanded ? 'min-[770px]:w-60' : 'min-[770px]:w-[75px]'}`}>
        <nav aria-label="Desktop navigation">
          <div className="space-y-1">
            {mainLinks.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                onClick={onClose}
                className={({ isActive }) => `flex items-center gap-4 rounded-xl px-3 py-3 text-sm hover:bg-neutral-100 min-[770px]:justify-center min-[770px]:gap-1 min-[770px]:px-1 ${expanded ? 'min-[770px]:flex-row min-[770px]:justify-start min-[770px]:gap-4 min-[770px]:px-3' : 'min-[770px]:flex-col min-[770px]:text-[10px]'} ${isActive ? 'bg-neutral-100 font-semibold' : ''}`}
              >
                <Icon size={22} strokeWidth={1.8} className="shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>

          <div className={`mt-5 border-t border-neutral-200 pt-4 ${expanded ? '' : 'min-[770px]:hidden'}`}>
            <h2 className="px-3 pb-2 text-sm font-semibold">Explore</h2>
            {exploreLinks.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={label}
                to={to}
                onClick={onClose}
                className="flex items-center gap-4 rounded-xl px-3 py-3 text-sm hover:bg-neutral-100"
              >
                <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                {label}
              </NavLink>
            ))}
          </div>
          <p className={`mt-5 border-t border-neutral-200 px-3 pt-4 text-xs leading-relaxed text-neutral-500 ${expanded ? '' : 'min-[770px]:hidden'}`}>
            Unofficial educational project. Not affiliated with YouTube.
          </p>
        </nav>
      </aside>
    </>
  );
}
