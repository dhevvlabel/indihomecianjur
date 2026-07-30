import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const galleryItems = [
  { id: '1', url: 'https://user19182.na.imgto.link/public/20260730/1.avif', title: 'Paket Dynamic 20 Mbps - Rp 170K/Bulan' },
  { id: '2', url: 'https://user19182.na.imgto.link/public/20260730/2.avif', title: 'Makin Banyak Pilihan Makin Puas' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="px-6 py-6" id="galeri">
      <h3 className="text-sm font-black text-zinc-800 uppercase mb-4 px-1 tracking-widest">Galeri</h3>
      
      <div className="grid grid-cols-2 gap-2">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-sm border-2 border-zinc-50"
            onClick={() => setSelectedImg(item.url)}
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-[10px] font-black text-white uppercase leading-tight">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg}
              alt="Preview"
              className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
