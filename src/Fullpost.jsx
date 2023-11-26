// FullPost.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "./firebase";

const FullPost = () => {
  const { title } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const snapshot = await db
          .collection("blogs")
          .where("title", "==", decodeURIComponent(title))
          .get();

        if (snapshot.docs.length > 0) {
          const postData = snapshot.docs[0].data();
          setPost(postData);
        } else {
          // Handle case where post is not found
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching blog post: ", error);
      }
    };

    fetchPost();
  }, [title]);

  if (!post) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="mainfull">
      <img src={post.image} alt="" />
      <h2>{post.title}</h2>
      <div className="p">
        <p>{post.body}</p>
      </div>
      <Link id="link" className="link" to="/">
        Back to Posts
      </Link>
    </div>
  );
};

export default FullPost;
