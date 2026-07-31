import logo from '../assets/images/indihome_telkomsel_logo_1785230681405.jpg';

export default function Footer() {
  return (
    <footer className="px-6 py-12 text-center border-t border-zinc-100 bg-white">
      <div className="mb-4 flex flex-col items-center gap-1">
        <img src={logo} alt="IndiHome Logo" className="h-10 w-auto object-contain" />
      </div>
      
      <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-tighter max-w-[200px] mx-auto leading-relaxed">
        © {new Date().getFullYear()} PT Global Bahana Karya. All rights reserved.
      </p>
    </footer>
  );
}
