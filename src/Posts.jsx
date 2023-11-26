// Posts.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const snapshot = await db.collection("blogs").get();
        const postsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching blog posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mainhome">
      <div className="head">
        <img
          src="https://blogger.googleusercontent.com/img/a/AVvXsEiAD0FI_UdTYHUsnaWyFWzkB-7tLJqKDHCw7Iy5CRC1ek005mRZOwU457tOisuVtFL6MkenvEZt7T7xOvBl5NsKbkmCl8Ifr1GBDxElvxYeuQs1eZwIfirS0RL21re9jBL3zhQo4GhYzMDt8xs8ai3AScxlTeThtTO54wTghOZ64-z8fA1zJzIOuCtPNv8=s16000"
          alt="image"
        />
        <h2>Cric Fanz</h2>
      </div>
      <div className="cont">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div className="img">
                <img src={post.image} alt="image" />
              </div>
              <div className="snippet">
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 100)}...</p>

                <Link
                  className="link"
                  to={`/post/${encodeURIComponent(post.title)}`}
                >
                  Read More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
