'use client'
import { useParams } from 'next/navigation';
import VideoPlayer from "../../components/video-player"
import Navbar from "@/app/components/nav-bar";

export default function Video() {
  const { video_id } = useParams()

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen text-sm">
        <div className=' flex-col items-center justify-center lg:flex'>
        <div className="mt-20 items-center justify-center lg:flex">
          <VideoPlayer video_id={video_id} />
        </div>
        <div className="text-xl mx-4 my-2 pl-2 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl mx-auto md:w-full">
          <p>This is the title of the video.</p>
        </div>
        </div>
      </main>
    </>
  );
}