import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import usersDataReducer from '../src/actions/users'
import AlbumsReducer from '../src/actions/albums'
import PostsReducer from '../src/actions/posts'
import CommentsReducer from '../src/actions/comments'
import PhotosReducer from '../src/actions/photos'

const store = configureStore({
    reducer: {
   usersData:usersDataReducer,
   Albums:AlbumsReducer,
   Posts:PostsReducer,
   Comments:CommentsReducer,
   Photos:PhotosReducer,
   
  
    },
    middleware: [thunkMiddleware],
  });
  export default store;

