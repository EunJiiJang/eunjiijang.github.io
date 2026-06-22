import { useRef, useState, useEffect } from 'react';
import { ListMusic, SkipBack, Play, Pause, SkipForward, Volume2 } from 'lucide-react';

interface MusicCardProps {
  title: string;
  artist: string;
  album: string;
  artwork: string;
  previewUrl: string;
  appleMusicUrl: string;
}

export function MusicCard({ title, artist, album, artwork, previewUrl, appleMusicUrl }: MusicCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    setProgress(0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  return (
    <div className="bg-[#f7f7f9] rounded-3xl p-4 flex flex-col gap-3 justify-center h-full">
      <audio ref={audioRef} src={previewUrl} preload="metadata" />

      <div className="flex items-start gap-3">
        <img
          src={artwork}
          alt={title}
          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0 pt-1">
          <p className="font-semibold text-gray-900 truncate">{title}</p>
          <p className="text-sm text-gray-500 truncate">{artist} — {album}</p>
        </div>
        <a
          href={appleMusicUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.769-.73 7.3 7.3 0 0 0-1.428-.112c-.877-.01-11.52 0-11.52 0A6.536 6.536 0 0 0 5.942.05C4.814.138 3.823.46 2.953 1.09 2.11 1.7 1.463 2.557 1.094 3.6a7.58 7.58 0 0 0-.37 1.913C.69 6.24.689 6.98.689 6.98v10.03c0 .97.09 1.94.37 2.88.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 0 0 1.769.73 7.3 7.3 0 0 0 1.428.112c.877.01 11.52 0 11.52 0a6.536 6.536 0 0 0 .915-.05c1.128-.088 2.119-.41 2.989-1.04.843-.61 1.49-1.467 1.859-2.51a7.58 7.58 0 0 0 .37-1.913c.035-.727.035-1.467.035-1.467V6.124zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm4.5-6.3a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          </svg>
        </a>
      </div>

      {/* Progress bar */}
      <div
        className="w-full h-1 bg-gray-200 rounded-full cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="h-full bg-gray-800 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 -mt-2">
        <span>{fmt(currentTime)}</span>
        <span>{duration ? fmt(duration) : '--:--'}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-1">
        <ListMusic size={18} className="text-gray-400" />
        <button onClick={handleRestart} className="p-1 hover:text-gray-700 text-gray-400 transition-colors">
          <SkipBack size={18} />
        </button>
        <button
          onClick={togglePlay}
          className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          {isPlaying
            ? <Pause size={16} className="text-white fill-white" />
            : <Play size={16} className="text-white fill-white ml-0.5" />
          }
        </button>
        <button className="p-1 text-gray-400">
          <SkipForward size={18} />
        </button>
        <Volume2 size={18} className="text-gray-400" />
      </div>
    </div>
  );
}
