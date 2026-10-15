import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { demoVideos } from "../data/demoVideos";
import { formatViews, timeAgo } from "../utils/format";


export default function WatchPage() {
  const [params] = useSearchParams();
  const video = demoVideos.find((item) => item.id === params.get("v"));

  if (!video) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-2xl font-bold">Demo video not found</h1>
        <Link to="/" className="mt-4 inline-block text-blue-600">Back to Home</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-3 py-7 sm:px-6">
      <Link to="/" className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-red-600">
        <ArrowLeft size={18} /> Back to videos
      </Link>

      <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-950">
        <img src={video.thumbnail} alt="" className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-white">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/95 shadow-lg">
            <Play size={32} fill="white" />
          </span>
          <span className="rounded-full bg-black/50 px-4 py-1 text-xs font-semibold">
             Playback coming
          </span>
        </div>
      </div>

      <h1 className="mt-5 text-xl font-bold sm:text-2xl">{video.title}</h1>
      <p className="mt-2 text-sm text-neutral-600">{video.channel}</p>
      <p className="mt-1 text-sm text-neutral-500">
        {formatViews(video.views)} · {timeAgo(video.publishedAt)}
      </p>
      <div className="mt-5 rounded-xl bg-neutral-100 p-4 text-sm text-neutral-700">
        These are illustrative videos for practicing
      </div>
    </section>
  );
}
