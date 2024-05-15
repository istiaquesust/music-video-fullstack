import React, { useState } from "react"

export default function VideoUploadForm() {
  const [file, setFile] = useState(undefined)
  const [title, setTitle] = useState(undefined)
  const [description, setDescription] = useState(undefined)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)

  async function handleSubmit() {
    try {
      if (!file) return
      const formData = new FormData()
      formData.append("file", file)
      formData.append("title", title)
      formData.append("description", description)

      const response = await fetch('/api/merchant-video-upload', {
        method: 'POST',
        body: formData
      })

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
    } catch (e) {
      console.log("video-upload error: ", e)
      setError(e.message);
    }
  }

  function handleSetFile(event) {
    const files = event.target.files;
    if (files && files.length) {
      setFile(files[0]);
    }
  }

  function handleSetTitle(event) {
    setTitle(event.target.value);
  }

  function handleSetDescription(event) {
    setDescription(event.target.value);
  }

  return (
    <div className="upload-div max-w-lg mx-auto rounded-md px-8 py-8">
      {error && <p className="text-red-500">{error}</p>}
      <form action="POST">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">Title*</label>
          <input required id="title" name="title" placeholder="Title of the video" className="form-input w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"  maxLength="100" onChange={handleSetTitle}/>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description*</label>
          <textarea rows="3"  id="description" name="description" placeholder="Write some description..." className="form-input w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required  maxLength="500" onChange={handleSetDescription}/>
        </div>
        <div className="p-4">
          <label htmlFor="file">File </label>
          <input type="file" id="file" accept="video/mp4" onChange={handleSetFile} />
        </div>
      </form>
      <button onClick={handleSubmit} type="button" className="bg-white text-black font-bold py-2 px-4 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
        Upload video
      </button>
    </div>
  );
}
