import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { supabase } from "../../../config";

export default function CreateBlog({ session }) {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [editorState, setEditorState] = useState("");
  // TODO connect createBlog with supabase to pass blogs to dB

  // TODO Only allow Blog Posts from ALLOWED users
  // https://blog.logrocket.com/build-a-wysiwyg-text-editor-using-quill/

  async function updateProfile(event) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates = {
      id: user.id,
      title,
      subtitle,
      author,
      date,
      content,
    };

    let { error } = await supabase.from("Blog").upsert(updates);

    if (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
    console.log(subtitle);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
    console.log(author);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log(date);
  };

  const handleTagsChange = (event) => {
    const tagsString = event.target.value;
    const tagsArray = tagsString.split(",");
    setTags(tagsArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to submit the blog post to your backend or save it to state
  };

  const modules = {
    toolbar: [
      [{ font: [], color: "black" }],
      [{ header: [1, 2, 3, 4, 5, 6, false], color: "black" }],
      ["bold", "italic", "underline", "strike", { color: "black" }],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [], color: "black" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className="p-5 bg-white m-5">
      <h1>Create a Blog Post</h1>
      <form onSubmit={updateProfile}>
        <div className="grid grid-cols-5 gap-4 m-5 p-1">
          <div className="col-span-1">
            <label htmlFor="title">Title:</label>
            <input
              className="rounded text-pink-500"
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="subtitle">Subtitle:</label>
            <input
              className="rounded text-pink-500"
              type="text"
              id="subtitle"
              value={subtitle}
              onChange={handleSubtitleChange}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="author">Author:</label>
            <input
              className="rounded text-pink-500"
              type="text"
              id="author"
              value={author}
              onChange={handleAuthorChange}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="date">Date:</label>
            <input
              className="rounded text-pink-500"
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="tags">Tags:</label>
            <input
              className="rounded text-pink-500"
              type="text"
              id="tags"
              value={tags.join(",")}
              onChange={handleTagsChange}
            />
          </div>
        </div>

        <ReactQuill
          modules={modules}
          theme="snow"
          className="p-5 text-black vh-100"
        />

        <button className="m-5" type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  );
}
