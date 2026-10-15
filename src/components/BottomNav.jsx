import { NavLink } from 'react-router-dom';
import { House, Clapperboard, TvMinimalPlay, LibraryBig } from 'lucide-react';


const links = [
  { label: 'Home', to: '/', icon: House },
  { label: 'Shorts', to: '/shorts', icon: Clapperboard },
  { label: 'Subscriptions', to: '/subscriptions', icon: TvMinimalPlay },
  { label: 'Library', to: '/library', icon: LibraryBig },
];

export default function BottomNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 hidden h-[70px] items-center justify-around border-t border-neutral-200 bg-white pb-[env(safe-area-inset-bottom)] max-[500px]:flex"
    >
      {links.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={label}
          to={to}
          end={to === '/'}
          className={({ isActive }) => `flex h-full min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 text-[10px] ${isActive ? 'font-semibold text-neutral-950' : 'text-neutral-600'}`}
        >
          <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
