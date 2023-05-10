import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [editorState, setEditorState] = useState("");
  // TODO connect createBlog with supabase to pass blogs to dB
  // https://blog.logrocket.com/build-a-wysiwyg-text-editor-using-quill/
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
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
      <form onSubmit={handleSubmit}>
        <div className="py-3">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="py-3">
          <label htmlFor="subtitle">Subtitle:</label>
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={handleSubtitleChange}
          />
        </div>

        <div className="py-3">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>

        <div className="py-3">
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>

        <div className="py-3">
          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            value={tags.join(",")}
            onChange={handleTagsChange}
          />
        </div>

        <ReactQuill modules={modules} theme="snow" className="p-5 text-black" />

        <button className="m-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
