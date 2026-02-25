import { ThemeProvider } from './context/ThemeContext';
import DataStream from './components/DataStream';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SampleMessages from './components/SampleMessages';
import VaultProcess from './components/VaultProcess';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <DataStream />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Services />
          <SampleMessages />
          <VaultProcess />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider >
  );
}

export default App;
