import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editorState, setEditorState] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to submit the blog post to your backend or save it to state
  };
  const styles = {};
  const modules = {
    toolbar: [
      ["font", "header"],
      ["bold", "underline"],
    ],
  };
  return (
    <div className="p-5 bg-white m-5">
      <h1>Create a Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="p-3">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <ReactQuill modules={modules} theme="snow" className="p-5" />

        <button className="m-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
