export default function VideoSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-video rounded-xl bg-neutral-200" />
      <div className="mt-3 flex gap-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-neutral-200" />
        <div className="w-full space-y-2"><div className="h-4 w-5/6 rounded bg-neutral-200" /><div className="h-3 w-2/3 rounded bg-neutral-200" /><div className="h-3 w-1/3 rounded bg-neutral-200" /></div>
      </div>
    </div>
  );
}
