import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import MotionDesign from './pages/MotionDesign';
import VisualIdentity from './pages/VisualIdentity';
import Illustration from './pages/Illustration';
import ThreeD from './pages/ThreeD';
import SocialMedia from './pages/SocialMedia';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Context
import { CursorProvider } from './context/CursorContext';

function App() {
  const location = useLocation();

  return (
    <CursorProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/motion-design" element={<MotionDesign />} />
            <Route path="/visual-identity" element={<VisualIdentity />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/3d" element={<ThreeD />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </CursorProvider>
  );
}

export default App;