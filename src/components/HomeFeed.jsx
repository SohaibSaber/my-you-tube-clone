import { useLocation } from "react-router-dom";
import { demoVideos } from "../data/demoVideos";
import CategoryBar from "./CategoryBar";
import VideoCard from "./VideoCard";


export default function HomeFeed() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.trim() || "";

  const visibleVideos = demoVideos.filter((video) => {
    const searchable = `${video.title} ${video.channel} ${video.category}`.toLowerCase();
    return searchable.includes(query.toLowerCase());
  });

  return (
    <div className="mx-auto max-w-[1900px] px-3 pb-10 sm:px-6">
      <CategoryBar active={query} />

      <div className="mb-6 mt-7 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.13em] text-neutral-400">
           Demooooo library
          </p>
          <h1 className="text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
            {query ? `Results for “${query}”` : "Recommended videos"}
          </h1>
        </div>
        <p className="text-sm text-neutral-500">
          {visibleVideos.length} {visibleVideos.length === 1 ? "video" : "videos"}
        </p>
      </div>

      {visibleVideos.length === 0 ? (
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-14 text-center">
          <h2 className="text-lg font-semibold">No matching videos</h2>
          <p className="mt-2 text-sm text-neutral-500">Try searching for React, Music, Sports, or Science.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {visibleVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
