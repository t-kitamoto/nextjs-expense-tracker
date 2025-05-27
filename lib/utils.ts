export function formatYen(x: number): string {
  return '¥' + x.toLocaleString('ja-JP');
}
