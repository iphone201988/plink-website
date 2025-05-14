import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Community from './components/Community';
import Download from './components/Download';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        <Header />
        <Hero />
        <Features />
        <HowItWorks/>
        <Community />
        <Download />
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;