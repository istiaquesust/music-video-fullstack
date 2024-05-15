'use client'

import Navbar from "@/app/components/nav-bar"
import VideoUploadForm from "@/app/components/video-upload-form";

export default function UploadVideo() {
    return (
        <>
        <Navbar/>
        <main className="flex flex-col min-h-screen font-mono text-sm">
        <div className="mt-20  w-full items-center justify-center lg:flex">
          <VideoUploadForm/>
          </div>
        </main>
        </>
      );

   
}