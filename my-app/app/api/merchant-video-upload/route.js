import { writeFile } from 'fs/promises'

export async function POST(Request) {
    try {
        const data = await Request.formData()
        const file = data.get('file')
        const title = data.get('title')
        const description = data.get('description')
        if (!file || !title || !description) {
            return Response.json({ message: 'Title, description, & file required!' }, { status: 400 })
        }
        if (file.type !== 'video/mp4') {
            return Response.json({ message: 'mp4 file only!' }, { status: 400 })
        }
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const fileName = `video-${Date.now()}.${fileType}`
        const path = `./app/video-file/${fileName}`
        await writeFile(path, buffer)

        return Response.json({ message: 'Upload Successful!' }, { status: 200 })
    } catch (error) {
        console.log("video-upload api error: ", error)
        return Response.json({ message: 'Something went wrong!' }, { status: 400 })
    }
}
