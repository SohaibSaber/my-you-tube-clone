import { Link } from "react-router-dom";
import { formatDuration, formatViews, timeAgo } from "../utils/format";


export default function VideoCard({ video, compact = false }) {
  const duration = formatDuration(video.duration);

  return (
    <Link
      to={`/watch?v=${encodeURIComponent(video.id)}`}
      className={`group block min-w-0 rounded-2xl transition ${compact ? "flex gap-3" : ""}`}
    >
      <div className={`relative shrink-0 overflow-hidden rounded-xl bg-neutral-100 shadow-sm ${compact ? "w-40 sm:w-44" : "w-full"}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={video.thumbnail}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.045]"
          />
        </div>
        {duration && (
          <span className="absolute bottom-2 right-2 rounded bg-black/85 px-1.5 py-0.5 text-xs font-semibold text-white">
            {duration}
          </span>
        )}
      </div>

      <div className={`min-w-0 ${compact ? "flex-1" : "mt-3 flex gap-3"}`}>
        {!compact && (
          <div
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-orange-200 text-sm font-bold text-rose-700"
          >
            {video.channel.charAt(0).toUpperCase()}
          </div>
        )}

        <div className="min-w-0">
          <h2 className={`line-clamp-2 font-semibold leading-snug text-neutral-950 transition-colors group-hover:text-neutral-700 ${compact ? "text-sm" : "text-[15px]"}`}>
            {video.title}
          </h2>
          <p className="mt-1.5 truncate text-[13px] text-neutral-600">
            {video.channel}
          </p>
          <p className="mt-0.5 text-[13px] text-neutral-500">
            {formatViews(video.views)}
            {video.publishedAt ? ` · ${timeAgo(video.publishedAt)}` : ""}
          </p>
        </div>
      </div>
    </Link>
  );
}
