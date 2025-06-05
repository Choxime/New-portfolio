import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Layout from './Layout';

// Pages
import Home from './Home';
import MotionDesign from './MotionDesign';
import VisualIdentity from './VisualIdentity';
import Illustration from './Illustration';
import ThreeD from './ThreeD';
import SocialMedia from './SocialMedia';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

// Context
import { CursorProvider } from './CursorContext';

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