import React, { useState, useMemo } from "react";
import styles from "./EditRequest.module.css";
import axios from "axios";
import { connect } from "react-redux";
import {
  addPost,
  addAllPosts,
  delPost,
  editPost,
} from "../../redux/reducers/posts";



function EditRequest(props) {
  let postId = parseInt(props.match.params.postId);
  let posts = props.posts;

  const post = posts.find((el) => {
    return postId === el.id;
  });
  
  if (!post) {
    props.history.push("/requests");
  }

  const [id, setId] = useState(post ? post.id : "");
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");
  const [userId, setUserId] = useState(post ? post.userId : "");

  const handleEditPost = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(function (response) {
        props.editPost({ id, title, body, userId });
        props.history.push("/requests");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(function (response) {
        props.delPost(postId);
        props.history.push("/requests");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const isDisabled = useMemo(() => {
    const arr = [id, title, body, userId];
    return (
      arr.find((el) => {
        return el === "";
      }) !== undefined
    );
  }, [id, title, body, userId]);

  return (
    <div className={styles.container}>
      <div>
        <input
          value={id}
          className={styles.input}
          onChange={(newValue) => {
            setId(newValue.target.value);
          }}
        />
        <input
          value={title}
          className={styles.input}
          onChange={(newValue) => {
            setTitle(newValue.target.value);
          }}
        />
        <input
          value={body}
          className={styles.input}
          onChange={(newValue) => {
            setBody(newValue.target.value);
          }}
        />
        <input
          value={userId}
          className={styles.input}
          onChange={(newValue) => {
            setUserId(newValue.target.value);
          }}
        />
        <button
          className={styles.button}
          disabled={isDisabled}
          onClick={handleEditPost}
        >
          ИЗМЕНИТЬ
        </button>
        <button className={styles.button} onClick={handleDelete}>
          УДАЛИТЬ
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),

    addAllPosts: (posts) => dispatch(addAllPosts(posts)),

    delPost: (id) => dispatch(delPost(id)),

    editPost: (post) => dispatch(editPost(post)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(EditRequest);
