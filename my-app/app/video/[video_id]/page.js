'use client'
import { useParams } from 'next/navigation';
import VideoPlayer from "../../components/video-player"
import Navbar from "@/app/components/nav-bar";

export default function Video() {
  const {video_id}= useParams()

  //console.log("Video page video_id: ", {video_id})
    return (
        <>
        <Navbar/>
        <main className="flex flex-col min-h-screen font-mono text-sm">
        <div className="mt-20  w-full items-center justify-center lg:flex">
          <VideoPlayer video_id={video_id}/>
          </div>
        </main>
        </>
      );

   
}