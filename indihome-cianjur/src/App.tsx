import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-100 selection:bg-red-100 selection:text-red-600 flex items-center justify-center p-0 sm:p-4">
      <Navbar />
      
      <main className="w-full max-w-[400px] bg-white min-h-screen sm:min-h-[85vh] sm:rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col border-0 sm:border-8 border-zinc-900">
        <Hero />
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <CTASection />
          <Gallery />
          <Footer />
        </div>
      </main>

      {/* Desktop Sidebar Info */}
      <div className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 max-w-xs">
        <h2 className="text-5xl font-black text-zinc-900 leading-tight mb-6">
          KONEKSI<br/>
          <span className="text-red-600">TANPA<br/>BATAS.</span>
        </h2>
        <p className="text-zinc-500 font-bold uppercase tracking-wider text-sm">
          PT Global Bahana Karya melayani kebutuhan digital masa depan Anda.
        </p>
      </div>
    </div>
  );
}
