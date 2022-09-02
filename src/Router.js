import { useEffect } from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Wiki from './pages/Wiki';

function PageRouter() {
  useEffect(() => {
    document.body.classList.add('bg-gray-100');
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
