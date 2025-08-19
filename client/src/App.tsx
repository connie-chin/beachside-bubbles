import { Header } from './Components/Header';
import { HeroSection } from './Components/HeroSection';
import { About } from './Components/About';
import { Reviews } from './Components/Reviews';
import { Services } from './Components/Services';
import { VideoPOV } from './Components/VideoPOV';
import { Footer } from './Components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Services />
        <Reviews />
        <VideoPOV />
      </main>
      <Footer />
    </>
  );
}
