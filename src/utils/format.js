export function formatViews(count) {
  if (count == null) return 'Views unavailable';
  const n = Number(count);
  if (!Number.isFinite(n)) return 'Views unavailable';
  return `${new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n)} views`;
}

export function timeAgo(dateString) {
  const ms = Date.parse(dateString);
  if (!Number.isFinite(ms)) return '';
  const seconds = Math.max(0, Math.floor((Date.now() - ms) / 1000));
  const units = [
    [31536000, 'year'], [2592000, 'month'], [604800, 'week'],
    [86400, 'day'], [3600, 'hour'], [60, 'minute'], [1, 'second'],
  ];
  for (const [duration, label] of units) {
    const amount = Math.floor(seconds / duration);
    if (amount >= 1) return `${amount} ${label}${amount === 1 ? '' : 's'} ago`;
  }
  return 'just now';
}

export function formatDuration(iso) {
  if (!iso) return '';
  const match = iso.match(/^P(?:\d+D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!match) return '';
  const hours = Number(match[1] || 0);
  const minutes = Number(match[2] || 0);
  const seconds = Number(match[3] || 0);
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${minutes}:${String(seconds).padStart(2, '0')}`;
}
