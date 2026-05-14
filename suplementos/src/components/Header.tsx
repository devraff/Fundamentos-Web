import { ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isAuthPage = ["/", "/login"].includes(location.pathname);

  if (isAuthPage) return null;

  return (
    <header className="bg-zinc-950/80 backdrop-blur-2xl fixed top-0 w-full z-50 shadow-[0px_20px_40px_rgba(0,0,0,0.6)]">
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 w-full max-w-full mx-auto">
        <div className="flex items-center gap-6 md:gap-12">
          <Link to="/shop" className="text-2xl md:text-3xl font-black italic tracking-tighter text-white font-headline">KINETIC</Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link 
              to="/shop" 
              className={`font-headline tracking-tighter uppercase font-bold transition-colors duration-300 ${
                location.pathname === "/shop" ? "text-primary border-b-2 border-primary pb-1" : "text-zinc-400 hover:text-white"
              }`}
            >
              SHOP
            </Link>
            <a href="#" className="font-headline tracking-tighter uppercase font-bold text-zinc-400 hover:text-white transition-colors duration-300">LABS</a>
            <a href="#" className="font-headline tracking-tighter uppercase font-bold text-zinc-400 hover:text-white transition-colors duration-300">ATHLETES</a>
            <a href="#" className="font-headline tracking-tighter uppercase font-bold text-zinc-400 hover:text-white transition-colors duration-300">STORY</a>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/login" className="active:scale-95 transform transition-transform hover:bg-zinc-800/30 p-2 rounded-full">
            <User className="w-6 h-6 text-white" />
          </Link>
          <button className="active:scale-95 transform transition-transform hover:bg-zinc-800/30 p-2 rounded-full relative">
            <ShoppingCart className="w-6 h-6 text-white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
