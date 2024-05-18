import { Route, Routes  } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/AllPages/HomePage';
import AboutPage from './Pages/AllPages/AboutPage';
import ContactPage from './Pages/AllPages/ContactPage';
import BlogPage from './Pages/AllPages/BlogPage';

function App() {
  return (
   <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<BlogPage/>} /> 
      </Routes>



   </div>
  );
}

export default App;
