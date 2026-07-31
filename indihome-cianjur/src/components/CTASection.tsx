import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const ctaButtons = [
  {
    title: 'Kontak / WhatsApp Sales',
    icon: Phone,
    color: 'bg-red-600 text-white shadow-lg shadow-red-200',
    iconBg: 'bg-red-500',
    url: 'https://wa.me/6281214073654?text=Halo%20IndiHome%20Cianjur,%20saya%20ingin%20tanya%20paket%20internet.'
  },
  {
    title: 'Email Kami',
    icon: Mail,
    color: 'bg-zinc-900 text-white',
    iconBg: 'bg-zinc-800',
    url: 'mailto:gbk.wok.cjr@gmail.com'
  },
  {
    title: 'Lokasi Kantor / Maps',
    icon: MapPin,
    color: 'bg-zinc-100 text-zinc-900',
    iconBg: 'bg-zinc-200',
    url: 'https://maps.app.goo.gl/At7JuMXc5V4HNarm7?g_st=ic'
  }
];

export default function CTASection() {
  return (
    <div className="px-6 py-4 space-y-3" id="kontak">
      {ctaButtons.map((btn, idx) => (
        <motion.a
          key={idx}
          href={btn.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center p-3 rounded-xl font-black transition-all duration-300 ${btn.color}`}
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${btn.iconBg}`}>
            <btn.icon className="w-5 h-5" />
          </div>
          <span className="flex-1 text-sm tracking-tight">{btn.title}</span>
        </motion.a>
      ))}
    </div>
  );
}
