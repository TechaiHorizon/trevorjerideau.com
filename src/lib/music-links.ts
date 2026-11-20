export type MusicDestination = { title: string; url: string; service: string };
export type ArtistMusicLinks = { artist: string; albums: MusicDestination[]; singles: MusicDestination[] };
export type MusicNotePart = { text: string; destination?: MusicDestination };

const normalize = (value: string) => value.normalize('NFKC').replace(/[‘’]/g, "'").trim().toLowerCase();

function destinations(catalog: ArtistMusicLinks[], artist: string, kind: 'albums' | 'singles') {
  const names = artist === 'Swizz Beatz' ? ['Swizz Beatz', 'Cassidy', 'Yung Wun', 'Mashonda'] : [artist];
  return catalog.filter(row => names.includes(row.artist)).flatMap(row => row[kind]);
}

export function albumDestination(catalog: ArtistMusicLinks[], artist: string, title: string) {
  return destinations(catalog, artist, 'albums').find(item => normalize(item.title) === normalize(title));
}

export function linkedMusicNote(catalog: ArtistMusicLinks[], artist: string, note: string): MusicNotePart[] {
  const songs = destinations(catalog, artist, 'singles');
  const parts: MusicNotePart[] = [];
  let cursor = 0;
  for (const match of note.matchAll(/“([^”]+)”/g)) {
    const start = match.index!;
    if (start > cursor) parts.push({ text: note.slice(cursor, start) });
    const songTitle = normalize(match[1]);
    const withoutEditorialPunctuation = normalize(match[1].replace(/[.,;:]+$/, ''));
    const destination = songs.find(item => normalize(item.title) === songTitle || normalize(item.title) === withoutEditorialPunctuation);
    parts.push({ text: match[0], ...(destination ? { destination } : {}) });
    cursor = start + match[0].length;
  }
  if (cursor < note.length) parts.push({ text: note.slice(cursor) });
  return parts;
}
