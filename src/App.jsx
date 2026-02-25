import { ThemeProvider } from './context/ThemeContext';
import DataStream from './components/DataStream';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VaultProcess from './components/VaultProcess';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <DataStream />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Services />
          <VaultProcess />
          <TrustSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
