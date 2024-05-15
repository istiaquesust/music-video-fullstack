import { useEffect, useRef } from 'react'

export default function VideoPlayer({ video_id }) {
  useEffect(() => {
    const video = document.getElementById("video-player")
    const handleContextMenu = (event) => {
      event.preventDefault()
      video.loop = true
    }
    if (video) {
      video.addEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  return (
    <video
    id="video-player"
      controls
      autoPlay
      muted
      playsInline
      width="950"
      height="auto"
      preload="none"
      controlsList="nodownload noplaybackrate"
    >
      <source src={`/api/video-watch?video_id=${video_id}`} type="video/mp4"></source>
      Your browser does not support the video tag.
    </video>
  )
}
