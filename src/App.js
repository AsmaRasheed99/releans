import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/404';
import Section from "./components/Albums/Section"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from './actions/posts';
import { fetchComments } from './actions/comments';
import { fetchPhotos } from './actions/photos';
import { useEffect } from 'react';


function App() {

  const { loading: postsLoading, data: postsData, error: postsError } = useSelector((state) => state.Posts);
  const { loading: commentsLoading, data: commentsData, error: commentsError } = useSelector((state) => state.Comments);
  const { loading: photosLoading, data: photosData, error: photosError } = useSelector((state) => state.Photos);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchPosts())
    dispatch(fetchComments())
    dispatch(fetchPhotos())
  },[dispatch]);
  // console.log(postsData);
  // console.log(commentsData);
  // console.log(photosData);

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="LogIn" element={<LogIn/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="Profile" element={<Profile/>}/>
      <Route path="Section" element={<Section/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
