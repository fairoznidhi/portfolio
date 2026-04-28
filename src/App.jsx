import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

