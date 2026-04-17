import { motion } from "motion/react";
import { User, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/shop");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface">
      {/* Background Hero */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_MsJIdjlY-My2fOwGcJBwUFE06gY_qJ4DWnRipX3oCbZv7qY8rLAuh7DOWmoMsVvf6T7LdgtytJLO5L44k_ymgvL30iNAJSrC5YZRNOTI7SskK0MxJ7xrJgT0j0PdKRE_10kk93xq3M_4T_WVaBBpaSNBrBuIVhkVMrjiy3492wHBqKrDzCXwKv5CLgI7Mg0ZkAMYJQQs8Li5GlSI578Q2v7z-sEI5ocLfYQUC9CKZopDV0Kx4SHlXMwEno-7BoSJYUFXS_2yXIA"
          className="w-full h-full object-cover opacity-30 grayscale"
          alt="Athlete background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/90 to-surface"></div>
      </div>

      {/* Energy Ticker */}
      <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 select-none z-10">
        <div className="inline-block energy-marquee">
          <span className="font-headline text-[8rem] font-black tracking-tighter text-outline px-10">STRENGTH. RECOVERY. POWER. PRECISION.</span>
          <span className="font-headline text-[8rem] font-black tracking-tighter text-outline px-10">STRENGTH. RECOVERY. POWER. PRECISION.</span>
        </div>
      </div>

      {/* Login Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md px-6 py-12 relative z-20"
      >
        <div className="bg-surface-container/60 backdrop-blur-2xl p-6 md:p-10 shadow-[0px_20px_40px_rgba(0,0,0,0.6)] border border-white/5">
          {/* Branding Header */}
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-black italic tracking-tighter text-white mb-2">KINETIC</h1>
            <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant">Access Your Lab Performance</p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary-dim px-1" htmlFor="email">Identity</label>
              <div className="group relative">
                <input
                  className="w-full bg-surface-container-highest border-none p-4 text-sm font-label tracking-wider placeholder:text-outline focus:ring-0 transition-all border-b-2 border-transparent focus:border-primary text-on-surface"
                  id="email"
                  placeholder="EMAIL ADDRESS"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                  <User className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary-dim" htmlFor="password">Passkey</label>
                <a className="font-label text-[10px] tracking-[0.2em] uppercase text-primary hover:text-white transition-colors" href="#">Forgot?</a>
              </div>
              <div className="group relative">
                <input
                  className="w-full bg-surface-container-highest border-none p-4 text-sm font-label tracking-wider placeholder:text-outline focus:ring-0 transition-all border-b-2 border-transparent focus:border-primary text-on-surface"
                  id="password"
                  placeholder="PASSWORD"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-surface py-5 font-headline font-bold tracking-tighter text-lg uppercase shadow-[0px_4px_20px_rgba(204,151,255,0.3)] active:scale-[0.98] transition-transform"
              type="submit"
            >
              Initiate Session
            </button>
          </form>

          {/* Social/Alternate Auth */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
              <span className="font-label text-[10px] tracking-[0.2em] text-outline">OR CONNECT VIA</span>
              <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-surface-container-high hover:bg-surface-bright p-3 flex justify-center items-center transition-all group">
                <span className="font-label text-[10px] font-bold tracking-widest uppercase group-hover:text-primary">Google</span>
              </button>
              <button className="bg-surface-container-high hover:bg-surface-bright p-3 flex justify-center items-center transition-all group">
                <span className="font-label text-[10px] font-bold tracking-widest uppercase group-hover:text-primary">Apple ID</span>
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-label text-[10px] tracking-widest uppercase text-secondary-dim">
              New to the lab? <Link className="text-primary font-bold hover:underline" to="/">Create Account</Link>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Decorative Asymmetric Element */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
    </main>
  );
}
