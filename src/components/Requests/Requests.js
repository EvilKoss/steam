import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import styles from "./Requests.module.css";
import { connect } from "react-redux";
import { addPost, addAllPosts } from "../../redux/reducers/posts";
import { Link } from "react-router-dom";

function Requests(props) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  let posts = props.posts;
  const addAllPosts = props.addAllPosts;

  const isDisabled = useMemo(() => {
    const arr = [id, title, body, userId];
    return (
      arr.find((el) => {
        return el === "";
      }) !== undefined
    );
  }, [id, title, body, userId]);

  const handleAddPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        props.addPost({id: parseInt( id ), title, body, userId: parseInt( userId ) });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    if ( posts.length > 0) {
      return;
    }
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        let post = response.data.slice(0, 25);
        addAllPosts(post);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [addAllPosts, posts]);

  return (
    <div className={styles.container}>
      <div>
        {posts.map((element) => (
          <Link className={styles.links} to={`/requests/${element.id}`} key={element.id}>
            <button className={styles.button}>пост {element.id}</button>
          </Link>
        ))}
      </div>
      <div className={styles.inputs}>
        <input
          className={styles.input}
          value={id}
          onChange={(newValue) => {
            setId(newValue.target.value);
          }}
        />
        <input
          className={styles.input}
          value={title}
          onChange={(newValue) => {
            setTitle(newValue.target.value);
          }}
        />
        <input
          className={styles.input}
          value={body}
          onChange={(newValue) => {
            setBody(newValue.target.value);
          }}
        />
        <input
          className={styles.input}
          value={userId}
          onChange={(newValue) => {
            setUserId(newValue.target.value);
          }}
        />
        <button
          className={styles.button}
          disabled={isDisabled}
          onClick={handleAddPost}
        >
          подтвердить
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
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(Requests);
