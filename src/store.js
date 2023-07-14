import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import usersDataReducer from '../src/actions/users'
import AlbumsReducer from '../src/actions/albums'
import PostsReducer from '../src/actions/posts'
import PhotosReducer from '../src/actions/photos'
import PostCommentsReducer from '../src/actions/postComments'
import PostDetailsReducer from '../src/actions/postDetails'

const store = configureStore({
    reducer: {
   usersData:usersDataReducer,
   Albums:AlbumsReducer,
   Posts:PostsReducer,
   Photos:PhotosReducer,
   PostComments:PostCommentsReducer,
   PostDetails:PostDetailsReducer,
  
    },
    middleware: [thunkMiddleware],
  });
  export default store;

