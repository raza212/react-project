import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ((props) => {
  
  let postsElements = props.posts.map((post) => <Post message={post.message} likeCount={post.likeCount} />);

  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
