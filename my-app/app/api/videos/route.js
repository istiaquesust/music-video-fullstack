import { headers as getHeaders } from 'next/headers'; // Renamed to avoid conflict with the variable name 'headers'
import fs from 'fs';

export async function GET(request) {
  try {
    const range = await request.headers.get('range')
    //console.log("range: ", range)
    if (!range) {
      //console.log("Video API range:", range)
      return new Response.json({ message: 'No range in request header!' }, { status: 400 })
    }

    const videoId = request.nextUrl.searchParams.get("video_id");
    const videoPath = `./app/video-file/${videoId}.mp4`;
    const videoSizeInBytes = fs.statSync(videoPath).size;

    const [start, end] = range.replace(/bytes=/, "").split("-");
    console.log("Video API start: " + start + " end: " + end)
    const chunkStart = parseInt(start, 10);
    const CHUNK_SIZE_IN_BYTES = 1000000 // 1 MB
    const chunkEnd = end ? parseInt(end, 10) : Math.min(
      chunkStart + CHUNK_SIZE_IN_BYTES,
      videoSizeInBytes - 1);
    const contentLength = chunkEnd - chunkStart + 1;
    console.log("Video API: " + range + " " + chunkStart + " " + chunkEnd)
    const videoStream = fs.createReadStream(
      videoPath,
      {
        start: chunkStart,
        end: chunkEnd
      })
    // Set the headers directly
    const headers = {
      "Content-Range": `bytes ${chunkStart}-${chunkEnd}/${videoSizeInBytes}`,
      "Accept-Ranges": 'bytes',
      "Content-Length": contentLength,
      "Content-Type": 'video/mp4',
      //"Content-Type": 'video/webm',
    }

    return new Response(videoStream, {
      status: 206,
      headers: new Headers(headers)
    })
  } catch (error) {
    console.log("Video API error: " + error)
    return new Response.json({ message: 'Something went wrong!' }, { status: 400 })
  }
}
