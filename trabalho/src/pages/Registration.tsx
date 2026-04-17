import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";

export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/shop");
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-surface">
      {/* Form Section */}
      <section className="relative w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20">
        <div className="absolute top-10 left-10 z-20">
          <h1 className="text-3xl font-black italic tracking-tighter text-white font-headline">KINETIC</h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-md w-full mx-auto md:mx-0"
        >
          <div className="mb-12">
            <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 leading-none">
              ELITE <br />
              <span className="bg-gradient-to-r from-primary to-primary-dim bg-clip-text text-transparent">ACCESS.</span>
            </h2>
            <p className="text-secondary font-medium leading-relaxed max-w-sm">
              Join the performance lab where science meets athletic dominance. Precision engineered supplements for the 1%.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label text-xs tracking-widest uppercase text-on-surface-variant font-bold">Full Name</label>
              <input 
                className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline p-4 transition-all duration-300" 
                placeholder="Enter your name" 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs tracking-widest uppercase text-on-surface-variant font-bold">Email Address</label>
              <input 
                className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline p-4 transition-all duration-300" 
                placeholder="email@kinetic-lab.com" 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs tracking-widest uppercase text-on-surface-variant font-bold">Password</label>
              <input 
                className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 text-on-surface placeholder:text-outline p-4 transition-all duration-300" 
                placeholder="••••••••" 
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div className="pt-4">
              <button 
                className="group relative w-full overflow-hidden bg-gradient-to-r from-primary to-primary-dim py-5 px-8 flex justify-between items-center transition-all active:scale-[0.98]" 
                type="submit"
              >
                <span className="font-headline font-bold text-on-surface tracking-widest uppercase text-sm">Create Account</span>
                <ArrowRight className="w-5 h-5 text-on-surface transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-xs text-on-surface-variant font-medium">Already a member?</p>
            <Link to="/login" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors duration-200">Log In</Link>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none select-none">
          <span className="font-headline text-6xl md:text-8xl font-black italic text-outline uppercase">ENGINEERED</span>
        </div>
      </section>

      {/* Visual Section */}
      <section className="hidden md:flex relative w-1/2 bg-surface-container-low overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5 }}
          alt="Elite athlete training" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity grayscale" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpcPz5Hs9igiwiYN6nYrrxyUzohZVqCgmHsD4TgsnmACCf11Pp_WAkoFAlBMuEYh5g-7Kbjguy4AiG8dW__juLYlY5itcaV__SHkbCXq9C9ngCUh9wE8ydvQ9eB-ptqNxPlvQmxqCcEsJtJBDYI3HqaXyCXubqju5ZYg31iRyPNDDo2f07FkjrKiK45km_wOW0tW56Y93j3Mar7IxmDpJDLE_l7Sg8AePZX8bSQ-Lif71YWxLqkUPd_P0wAOoZYPLphxLFzDWJD3w" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-primary/10"></div>
        <div className="relative z-10 w-full h-full flex flex-col justify-end p-20">
          <div className="space-y-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 bg-primary"></span>
                <span className="font-headline text-xs font-black tracking-widest uppercase text-primary">Membership Perks</span>
              </div>
              <div className="grid grid-cols-1 gap-8">
                <div className="group cursor-default">
                  <h3 className="font-headline text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Early Access</h3>
                  <p className="text-on-surface-variant text-sm max-w-xs">Secure new batch drops of Kinetic Labs formulations 48 hours before general release.</p>
                </div>
                <div className="group cursor-default">
                  <h3 className="font-headline text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Pro Metrics</h3>
                  <p className="text-on-surface-variant text-sm max-w-xs">Sync your biometric data to receive personalized supplement stack recommendations.</p>
                </div>
                <div className="group cursor-default">
                  <h3 className="font-headline text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Exclusive Community</h3>
                  <p className="text-on-surface-variant text-sm max-w-xs">Connect with our roster of elite athletes and performance scientists.</p>
                </div>
              </div>
            </div>

            <div className="bg-surface/80 backdrop-blur-xl p-8 border-l-4 border-primary max-w-sm">
              <p className="font-body text-secondary italic mb-4">"The precision of Kinetic products changed my recovery profile entirely. This is the gold standard."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center overflow-hidden rounded-sm">
                  <img 
                    alt="Athlete Portrait" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4UjdOnY_K2TOzO3QtekPE3zP2CkpOaWUtijWwBEvG-7fBOtQxdQ_y1A7ITh9v_cVAWwccWpxV8m68BsTNAe9aWJk2_rF49gUTh2VYd96A3GEeqfHNNqcBpoqAFmlA8thgeolXWgkAv9MZ-gZ9yjQcVXsPxDRn1BLU73Anhguui8dCLLkddl0AfNHi5BO9FLl1-SQXBiAIoccoekuYFL7MzkjCwyS6F1mZR5H_tjEuUU-m-SmhtCSfXfrgS5Q2Fk3DI1io0TG9og8" 
                  />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-white">Alex Rivera</span>
                  <span className="block text-[10px] uppercase tracking-widest text-primary">Pro Endurance Athlete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -right-20 top-1/4 rotate-90 origin-center whitespace-nowrap opacity-10 pointer-events-none select-none">
          <div className="flex items-center gap-12 energy-marquee">
            <span className="font-headline text-[120px] font-black italic text-outline uppercase">STRENGTH. RECOVERY. POWER.</span>
            <span className="font-headline text-[120px] font-black italic text-outline uppercase">STRENGTH. RECOVERY. POWER.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
