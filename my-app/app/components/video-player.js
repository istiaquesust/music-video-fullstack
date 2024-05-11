import { useEffect, useRef } from 'react'

export default function VideoPlayer({ video_id }) {
  //console.log("VideoPlayer video_id: ", video_id)
  /*useEffect(() => {
      const video = document.getElementById("video-player")
  
      const handleContextMenu = (event) => {
        event.preventDefault()
        video.loop = true
      }
  
      if (video) {
        video.addEventListener("contextmenu", handleContextMenu)
      }
  
     
    }, [])*/
  return (
    <video
      controls autoPlay muted playsInline
      width="853"
      height="auto"
      //src={`/api/videos?video_id=${video_id}`}
      //src="/video.mp4"
      //type='video/mp4'
      //type='video/webm'
      id="video-player"
      preload="none"
    //controlsList="nodownload noplaybackrate"
    >
      <source src={`/api/videos?video_id=${video_id}`} type="video/mp4"></source>
      Your browser does not support the video tag.
    </video>
  )
}
//<source src={`/api/videos?video_id=${video_id}`} type="video/mp4"></source>