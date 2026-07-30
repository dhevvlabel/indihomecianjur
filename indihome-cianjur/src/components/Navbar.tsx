import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-sm">
      <div className="max-w-[400px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/indihome_telkomsel_logo_1785230681405.jpg" alt="Logo" className="h-8 w-auto object-contain" />
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-zinc-900 hover:bg-zinc-50 rounded-full transition-colors outline-none focus:outline-none focus:ring-0 select-none [-webkit-tap-highlight-color:transparent]"
          id="menu-toggle"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-[400px] mx-auto bg-white border-t border-zinc-100 overflow-hidden shadow-xl pointer-events-auto"
          >
            <div className="px-6 py-6 space-y-1">
              {['Galeri', 'Hubungi Kami'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().split(' ')[0]}`} 
                  onClick={() => setIsOpen(false)} 
                  className="block py-3 px-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
