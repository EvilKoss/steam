

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const ADD_ALL_POSTS = "ADD_ALL_POSTS";
const EDIT_POST = "EDIT_POST";

const initialState = { posts : []};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      let post = action.post;
      let newPosts = [...state.posts,post];
      return { ...state, posts: newPosts };
    }

    case DELETE_POST: {
      let newPosts = [...state.posts];
      newPosts = newPosts.filter((el) => {
        return el.id !== action.id;
      });
      return { ...state, posts: newPosts };
    }

    case EDIT_POST: {
      let newPosts = [...state.posts];
      let post = action.post;
      let index = newPosts.findIndex((el) => {
        return el.id === action.post.id;
      });
      newPosts[index] = post;
      return { ...state, posts: newPosts };
    }

    case ADD_ALL_POSTS: {
      return { ...state, posts: action.posts };
    }

    default:
      return { ...state };
  }
}

export const addPost = (post) => ({type:ADD_POST,post});

export const delPost = (id) => ({type:DELETE_POST,id});

export const editPost = (post) => ({type:EDIT_POST,post});

export const addAllPosts = (posts) => ({type:ADD_ALL_POSTS,posts});