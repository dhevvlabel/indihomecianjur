import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

const bannerImg = '/src/assets/images/5g_sim_banner_1785231358162.jpg';
const profileImg = '/src/assets/images/indihome_telkomsel_logo_1785230681405.jpg';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.89 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.35 0 .68.07 1 .19V9.45a6.35 6.35 0 00-1-.08 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.3 8.3 0 004.83 1.54V7.15a4.85 4.85 0 01-1.06-.46z" />
  </svg>
);

export default function Hero() {
  return (
    <div className="relative pt-16">
      {/* Banner - Image replaced as per user request */}
      <div className="h-44 sm:h-48 w-full relative overflow-hidden">
        <img src={bannerImg} alt="5G Banner" className="w-full h-full object-cover" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900/20 rounded-full hidden sm:block"></div>
      </div>

      {/* Profile Info */}
      <div className="relative px-6 -mt-12 flex flex-col items-center text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-zinc-100"
        >
          <img 
            src={profileImg} 
            alt="IndiHome Cianjur" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="mt-3">
          <h1 className="text-2xl font-black text-zinc-900 leading-tight">IndiHome Cianjur</h1>
          <p className="text-[10px] font-black text-zinc-500 mt-1 uppercase tracking-[0.2em]">PT GLOBAL BAHANA KARYA</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-5 mb-2">
          {[
            { Icon: Facebook, url: 'https://www.facebook.com/share/18Pk6D1CFD/?mibextid=wwXIfr', label: 'Facebook' },
            { Icon: TikTokIcon, url: 'https://www.tiktok.com/@insidegbk.official', label: 'TikTok' },
            { Icon: Instagram, url: 'https://www.instagram.com/insidegbk.official?igsh=MWNhYmx5Y3I2MWVyaw%3D%3D&utm_source=qr', label: 'Instagram' }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:text-red-600 hover:bg-red-50 transition-colors"
              aria-label={social.label}
            >
              <social.Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
