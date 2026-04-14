import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Outdoor landscape"
            className="w-full h-full object-cover"
            data-alt="Cinematic wide shot of a rugged mountain ridge at dawn with misty valleys below and a lone hiker in technical gear looking towards the horizon"
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1440&q=80&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-12 max-w-[1440px] mx-auto w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase">
              New Arrival: The Alpine Series
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-on-primary tracking-tight leading-[0.9] mb-8">
              Built for the Wild.
            </h1>
            <p className="text-xl text-on-primary/90 font-light max-w-md mb-10 leading-relaxed">
              Technical precision meets environmental stewardship. Our new recycled nylon packs are engineered for the
              world's most demanding terrain.
            </p>
            <div className="flex space-x-4">
              <Link href="/products" className="bg-primary text-on-primary px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase rounded-md hover:bg-primary-container transition-colors active:scale-95 inline-block">
                Shop The Collection
              </Link>
              <button className="bg-surface/10 backdrop-blur-md border border-white/20 text-on-primary px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase rounded-md hover:bg-white/20 transition-colors">
                Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-32 px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-headline font-bold text-primary tracking-tight mb-4">
              Engineered for Every Journey.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              From cross-continental expeditions to the daily commute, find the specialized gear designed for your specific
              environment.
            </p>
          </div>
          <Link
            className="text-secondary font-bold border-b border-secondary/30 pb-1 hover:text-primary transition-colors"
            href="/products"
          >
            View All Equipment
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[700px]">
          {/* Travel Card */}
          <Link href="/products" className="md:col-span-7 relative group overflow-hidden rounded-xl bg-surface-container-low block">
            <img
              alt="Travel Pack"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600&q=80&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-tertiary-fixed text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Global Transit
              </span>
              <h3 className="text-3xl font-headline font-bold mb-4">Travel</h3>
              <div className="flex items-center space-x-2 text-sm font-bold tracking-widest uppercase hover:opacity-80">
                Explore <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </Link>
          {/* Trail Card */}
          <Link href="/products" className="md:col-span-5 relative group overflow-hidden rounded-xl bg-surface-container-low block">
            <img
              alt="Trail Pack"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-tertiary-fixed text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Summit Bound
              </span>
              <h3 className="text-3xl font-headline font-bold mb-4">Trail</h3>
              <div className="flex items-center space-x-2 text-sm font-bold tracking-widest uppercase hover:opacity-80">
                Explore <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </Link>
          {/* Everyday Card */}
          <Link href="/products" className="md:col-span-12 relative group overflow-hidden rounded-xl h-80 md:h-auto bg-surface-container-low block">
            <img
              alt="Everyday Pack"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-tertiary-fixed text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Daily Utility
              </span>
              <h3 className="text-3xl font-headline font-bold mb-4">Everyday</h3>
              <div className="flex items-center space-x-2 text-sm font-bold tracking-widest uppercase hover:opacity-80">
                Explore <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-surface-container py-32 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10 shadow-xl">
              <img
                alt="Recycled Materials"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1490425712530-0eb11c6d8601?w=600&q=80&fit=crop"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary p-8 rounded-lg z-20 hidden md:block">
              <h4 className="text-tertiary-fixed font-headline font-bold text-3xl mb-4">100%</h4>
              <p className="text-on-primary text-sm leading-relaxed">
                Recycled ocean plastics used in all our 2024 waterproof linings.
              </p>
            </div>
          </div>
          <div>
            <span className="text-tertiary font-bold tracking-widest uppercase text-xs block mb-6">Our Core Mission</span>
            <h2 className="text-5xl font-headline font-extrabold text-primary mb-8 leading-[1.1]">
              Preserving the very wild we explore.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              At WILDERNESS, sustainability isn't a marketing department—it's our primary engineering constraint. We use
              post-consumer recycled fabrics, PFC-free water repellents, and fair-trade labor to ensure our gear leaves no
              trace, except the memories you make.
            </p>
            <ul className="space-y-6 mb-12">
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-full">eco</span>
                <div>
                  <h5 className="font-bold text-primary">Regenerative Design</h5>
                  <p className="text-sm text-on-surface-variant">
                    Every backpack is designed to be easily disassembled and recycled at end-of-life.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-full">handshake</span>
                <div>
                  <h5 className="font-bold text-primary">Radical Transparency</h5>
                  <p className="text-sm text-on-surface-variant">
                    Track the supply chain of your gear from raw fiber to final stitch.
                  </p>
                </div>
              </li>
            </ul>
            <button className="bg-primary text-on-primary px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase rounded-md hover:bg-primary-container transition-all">
              Read Our Sustainability Report
            </button>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-32 px-12 max-w-[1440px] mx-auto overflow-hidden">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 z-10">
              <h2 className="text-5xl font-headline font-extrabold text-primary mb-6">The Technical Naturalist.</h2>
              <p className="text-on-surface-variant mb-10 leading-relaxed">
                Introducing the Summit 45. A masterclass in weight distribution and weather protection. Optimized for 3-day treks
                into the alpine backcountry.
              </p>
              <div className="flex items-center space-x-8 mb-10">
                <div>
                  <p className="text-2xl font-bold text-primary">1.2kg</p>
                  <p className="text-xs uppercase tracking-tighter opacity-60">Total Weight</p>
                </div>
                <div className="w-px h-10 bg-outline-variant/30"></div>
                <div>
                  <p className="text-2xl font-bold text-primary">45L</p>
                  <p className="text-xs uppercase tracking-tighter opacity-60">Internal Capacity</p>
                </div>
                <div className="w-px h-10 bg-outline-variant/30"></div>
                <div>
                  <p className="text-2xl font-bold text-primary">IPX6</p>
                  <p className="text-xs uppercase tracking-tighter opacity-60">Weather Rating</p>
                </div>
              </div>
              <button className="border-b-2 border-primary pb-1 font-bold text-primary hover:text-secondary hover:border-secondary transition-colors uppercase tracking-widest text-sm">
                View Technical Specs
              </button>
            </div>
            <div className="md:col-span-7 relative">
              <img
                alt="Summit 45 Pack"
                className="w-full h-auto object-cover rounded-lg shadow-2xl scale-110 translate-x-12"
                src="https://images.unsplash.com/photo-1579737107775-816f1a8cbed1?w=600&q=80&fit=crop"
              />
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-tertiary-fixed/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
