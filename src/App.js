import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/404';
import Section from "./components/Albums/Section"
import Photos from './pages/Photos';
import Contact from './pages/Contact';
import About from './pages/About';
import PostDetails from './components/Posts/PostDetails';
import AllPosts from './components/Posts/AllPosts';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="LogIn" element={<LogIn/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="Profile" element={<Profile/>}/>
      <Route path="Section" element={<Section/>}/>
      <Route path="Photos/:id" element={<Photos/>}/>
      <Route path="PostDetails/:id" element={<PostDetails/>}/>
      <Route path="AllPosts" element={<AllPosts/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="About" element={<About/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
