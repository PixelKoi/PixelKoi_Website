import React, { useState } from "react";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to submit the blog post to your backend or save it to state
  };

  return (
    <div className="p-5">
      <h1>Create a Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBlog;
