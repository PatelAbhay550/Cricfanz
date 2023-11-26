// Create.jsx
import React, { useState } from "react";
import db from "./firebase";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const addBlog = async () => {
    try {
      // Create a new document in the 'blogs' collection
      await db.collection("blogs").add({
        title: title,
        body: body,
        image: image,
      });

      // Clear input fields after adding a blog post
      setTitle("");
      setBody("");
      setImage("");

      console.log("Blog post added successfully!");
    } catch (error) {
      console.error("Error adding blog post: ", error);
    }
  };

  return (
    <div className="naincreate">
      <h2 className="h2">Create a Blog Post</h2>
      <div className="contcr">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <label>Imageurl:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button id="link" className="link" onClick={addBlog}>
          Add Post
        </button>
      </div>
    </div>
  );
};

export default Create;
