import { useEffect, useRef, useState } from 'react'
import singing0 from '../assets/images/hachiware_singing_0.png'
import singing1 from '../assets/images/hachiware_singing_1.png'
import song from "../assets/audio/hachiware's_song.mp3"

// Tap to play/pause Hachiware's song. The song loops, and pausing resumes
// from the same spot on the next tap.
export default function SingingHachiware() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    return () => audio?.pause()
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Pause Hachiware's song" : "Play Hachiware's song"}
      className="relative aspect-[330.446/294.347] w-full max-w-[330.446px] shrink-0 cursor-pointer"
    >
      {/* Both frames stay mounted so swapping doesn't flicker while loading. */}
      <img
        src={singing0}
        alt=""
        className={`absolute inset-0 size-full object-cover ${isPlaying ? 'invisible' : ''}`}
      />
      <img
        src={singing1}
        alt=""
        className={`absolute inset-0 size-full object-cover ${isPlaying ? '' : 'invisible'}`}
      />
      <audio
        ref={audioRef}
        src={song}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </button>
  )
}
