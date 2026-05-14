import { motion } from "motion/react";
import { ShoppingCart, ExternalLink, Beaker, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  badge: string;
  image: string;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const categories = ["ALL", "PROTEIN", "PRE-WORKOUT", "CREATINE", "LAB SERIES"];

  const filteredProducts = filter === "ALL" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <main className="pt-28 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[819px] flex items-center px-6 md:px-10 mb-20 overflow-hidden">
        <div className="z-10 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-6"
          >
            PEAK <span className="text-primary">KINETIC</span><br />POTENTIAL.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl text-secondary max-w-xl mb-8 leading-relaxed"
          >
            Engineered in the lab. Proven on the field. High-potency formulas for athletes who refuse to accept biological limits.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-br from-primary to-primary-dim text-on-surface font-headline font-bold tracking-tight rounded-lg hover:shadow-[0_0_30px_rgba(204,151,255,0.4)] transition-all uppercase text-sm">
              EXPLORE THE LINEUP
            </button>
          </motion.div>
        </div>
        <div className="absolute right-0 top-0 w-full md:w-3/5 h-full opacity-40 md:opacity-60">
          <img 
            alt="Athletic focus" 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7LfXAlq3_sD8tppKFQ6q_QpoLY4o5A51QylMBHLq-6nazJ9cjTj6VKLi_0GgESVMnR4-iai7ktCTQS1MQMOOd-UWWZtRTD81ctXEAIZ98XN57l2yB53kauA8UlEpdWks0EJUYuvz-48kyOhPaOaKWQFwgN5Zl1roP2TaLRWOP53Xosa4Zni4RI4eUNLLl-dAd_CCN-f5KbS3zAAM0cP3gG1eKiVZrrGK5O0vru0OZfyBpDNUokxH7Qowrt5vUrfRgTRsSSgffVmU" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-6 md:px-10 mb-12">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-headline text-xs tracking-widest text-outline uppercase mr-4">Filter By Category</span>
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 font-bold rounded-full text-sm transition-all ${
                filter === cat 
                  ? "bg-primary text-on-surface shadow-[0_0_15px_rgba(204,151,255,0.3)]" 
                  : "bg-surface-container-high hover:bg-surface-container-highest text-on-surface"
              }`}
            >
              {cat === "ALL" ? "ALL PRODUCTS" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-[500px] bg-surface-container animate-pulse rounded-lg"></div>
          ))
        ) : (
          <>
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={product.id}
                className="group bg-surface-container hover:bg-surface-container-high transition-all duration-500 relative flex flex-col p-8 rounded-lg"
              >
                <div className="relative h-80 mb-8 overflow-hidden flex items-center justify-center">
                  <img 
                    alt={product.name} 
                    className="w-full h-full object-contain transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700" 
                    src={product.image} 
                  />
                  <div className="absolute top-0 right-0 bg-primary/20 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-primary tracking-widest uppercase">
                    {product.badge}
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="font-headline text-2xl font-bold tracking-tight mb-1">{product.name}</h3>
                      <p className="font-body text-sm text-secondary-dim">{product.description}</p>
                    </div>
                    <span className="font-headline text-xl font-bold text-primary">${product.price}</span>
                  </div>
                  <button className="w-full py-4 bg-surface-container-highest group-hover:bg-gradient-to-r from-primary to-primary-dim group-hover:text-on-surface transition-all font-bold flex items-center justify-center gap-2 uppercase text-xs tracking-widest">
                    <ShoppingCart className="w-4 h-4" />
                    ADD TO PERFORMANCE STACK
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Feature Card: Lab Stats */}
            <div className="bg-surface-container-low p-8 rounded-lg flex flex-col justify-center border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
              <h4 className="font-headline text-sm tracking-widest text-primary font-bold mb-4 uppercase">ENGINEERING SPECS</h4>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-4xl font-headline font-black tracking-tighter">100%</span>
                  <span className="text-xs text-outline tracking-widest uppercase">Ingredient Transparency</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-headline font-black tracking-tighter">0g</span>
                  <span className="text-xs text-outline tracking-widest uppercase">Artificial Fillers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-headline font-black tracking-tighter uppercase italic leading-none">CLINICAL</span>
                  <span className="text-xs text-outline tracking-widest uppercase">Dosage Standards</span>
                </div>
              </div>
              <button className="mt-12 text-primary font-headline font-bold text-sm underline underline-offset-8 decoration-2 flex items-center gap-2 hover:text-white transition-colors">
                VIEW LAB REPORTS <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </section>

      {/* Performance Ticker */}
      <div className="w-full bg-surface-container-low py-8 overflow-hidden whitespace-nowrap mb-32 border-y border-white/5 select-none opacity-50">
        <div className="energy-marquee inline-block">
          <span className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-outline px-10">UNCOMPROMISING SPEED</span>
          <span className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-outline px-10">ELITE STRENGTH</span>
          <span className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-outline px-10">NEURAL FOCUS</span>
        </div>
        <div className="energy-marquee inline-block">
          <span className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-outline px-10">UNCOMPROMISING SPEED</span>
          <span className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-outline px-10">ELITE STRENGTH</span>
          <span className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-outline px-10">NEURAL FOCUS</span>
        </div>
      </div>

      {/* Featured Stack Bento Grid */}
      <section className="px-6 md:px-10 pb-32">
        <h2 className="font-headline text-3xl md:text-4xl font-black italic tracking-tighter mb-12 uppercase">THE CHAMPION'S <span className="text-primary">STACK</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 min-h-[700px]">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container rounded-lg overflow-hidden relative group">
            <img 
              alt="Athletic training" 
              className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s] grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_MpVIcPzu3GKuVQOkSJpQ3cVwpJhg9wjBoLnM6s25QY5bW6Uw32QjRQ7MCgN24_ye6zN3kkQOOoGD4ItSS6caHebrncgqUrn9HSJJTGVFZk4MjNariDrajpbo7yvOiwkAFqFmLnwvPND9PBa22VecSAIMvdtfqNg6fs4FLuhaR8sQl-yDnE4V4xnimwKv61Gjy-nkyN2dRWkyh8zyRPP9TKJ7D-tdjnZFuwPFp5jIEVfoP8zonrClngH8sKlF12EqvohgLVqexI4" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 max-w-md">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">LIMITED EDITION RELEASE</span>
              <h3 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-4 italic uppercase">OLYMPIAN PROTOCOL</h3>
              <p className="text-secondary opacity-70 mb-6 font-body text-sm md:text-base">A complete 30-day transformation system including Iso-Kinetic, Plasma Pump, and Neural Focus. Designed for peak competition preparation.</p>
              <button className="bg-primary text-on-surface px-8 py-3 font-bold tracking-tight rounded uppercase text-xs">GET THE PROTOCOL</button>
            </div>
          </div>
          <div className="bg-surface-container-high rounded-lg p-8 flex flex-col justify-end">
            <Beaker className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-xl font-headline font-bold tracking-tight mb-2 uppercase">LAB TESTED</h4>
            <p className="text-sm text-secondary-dim opacity-60">Every batch undergoes triple-blind testing for purity and potency.</p>
          </div>
          <div className="bg-surface-container-high rounded-lg p-8 flex flex-col justify-end">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-xl font-headline font-bold tracking-tight mb-2 uppercase">RAPID ABSORPTION</h4>
            <p className="text-sm text-secondary-dim opacity-60">Advanced delivery systems for immediate biological uptake.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
