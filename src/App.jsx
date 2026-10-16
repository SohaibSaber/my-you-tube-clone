import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import HomeFeed from './components/HomeFeed';
import WatchPage from './components/WatchPage';


function ComingSoon({ title, description }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-3 text-neutral-600">{description}</p>
    </section>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(() => window.innerWidth >= 1300);

  function toggleMenu() {
    if (window.innerWidth < 770) {
      setMobileOpen((open) => !open);
    } else {
      setExpanded((open) => !open);
    }
  }

  return (
    <>
      <Header onMenuClick={toggleMenu} />
      <Sidebar mobileOpen={mobileOpen} expanded={expanded} onClose={() => setMobileOpen(false)} />
      <BottomNav />
      <main className={`min-h-screen bg-white pt-16 pb-8 transition-[margin] duration-200 max-[500px]:pb-24 ${
        expanded ? 'min-[770px]:ml-60' : 'min-[770px]:ml-[75px]'
      }`}>
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/shorts" element={<ComingSoon title="Shorts" description="A Shorts viewer isn't part of this educational clone yet." />} />
          <Route path="/subscriptions" element={<ComingSoon title="Subscriptions" description="Personal subscriptions require signing in with YouTube OAuth; they aren't implemented yet." />} />
          <Route path="/library" element={<ComingSoon title="Library" description="Your personal YouTube library requires authenticated access; it isn't implemented yet." />} />
          <Route path="*" element={<ComingSoon title="Page not found" description="Select Home to return to the video feed." />} />
        </Routes>
      </main>
    </>
  );
}
