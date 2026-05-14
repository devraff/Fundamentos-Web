import { Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 w-full py-12 px-6 md:px-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 font-label text-xs tracking-widest uppercase text-zinc-500">
      <div className="text-xl font-black tracking-tighter text-zinc-200 font-headline">KINETIC</div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        <a className="text-zinc-500 hover:text-primary transition-colors hover:translate-x-1 duration-300" href="#">PRIVACY</a>
        <a className="text-zinc-500 hover:text-primary transition-colors hover:translate-x-1 duration-300" href="#">TERMS</a>
        <a className="text-zinc-500 hover:text-primary transition-colors hover:translate-x-1 duration-300" href="#">RETURNS</a>
        <a className="text-zinc-500 hover:text-primary transition-colors hover:translate-x-1 duration-300" href="#">NEWSLETTER</a>
      </div>
      <div className="flex flex-col items-center md:items-right gap-4">
        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-all"><Youtube className="w-5 h-5" /></a>
        </div>
        <div className="text-center md:text-right opacity-50">
          © 2024 KINETIC PERFORMANCE LAB. ENGINEERED FOR ELITES.
        </div>
      </div>
    </footer>
  );
}
