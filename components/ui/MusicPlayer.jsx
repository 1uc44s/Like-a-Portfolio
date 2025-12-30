'use client'

import { useRef, useState, useEffect } from "react"
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa"

export default function MusicPlayer() {
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.6)
  const [muted, setMuted] = useState(true)

  // 🔥 AUTOPLAY (browser policy uyumlu)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
    audio.muted = true

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {})
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.muted = false
      setMuted(false)
      await audio.play()
      setIsPlaying(true)
    }
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const time = percent * duration
    audioRef.current.currentTime = time
    setCurrentTime(time)
  }

  const handleVolume = (e) => {
    const v = Number(e.target.value)
    setVolume(v)
    audioRef.current.volume = v
    audioRef.current.muted = v === 0
    setMuted(v === 0)
  }

  const formatTime = (t) => {
    if (!t || isNaN(t)) return "0:00"
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60)
    return `${m}:${s < 10 ? "0" : ""}${s}`
  }

  const progress = (currentTime / duration) * 100 || 0

  return (
    <div className="w-full max-w-md rounded-xl bg-neutral-900 p-4 text-white shadow-xl">
      <audio
        ref={audioRef}
        src="/music.mp3"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* WAVE */}
      <div className=" mb-3 flex h-8 items-center justify-center gap-1">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className={`w-1 rounded bg-cyan-400 ${
              isPlaying ? "animate-wave" : ""
            }`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      {/* SEEK BAR */}
      <div
        className="relative mb-2 h-2 w-full cursor-pointer rounded bg-gray-700"
        onClick={handleSeek}
      >
        <div
          className="h-full rounded bg-gradient-to-r from-cyan-400 to-purple-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* TIME */}
      <div className="mb-3 flex justify-between text-xs text-gray-400">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black hover:scale-105 transition"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* VOLUME */}
        <div className="flex items-center gap-2">
          {muted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolume}
            className="accent-cyan-400"
          />
        </div>
      </div>
    </div>
  )
}
