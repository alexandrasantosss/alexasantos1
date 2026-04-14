import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container mt-20 font-body text-sm tracking-wide">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-[1440px] mx-auto text-on-surface">
        <div className="space-y-6">
          <div className="text-lg font-bold text-primary font-headline">WILDERNESS</div>
          <p className="text-on-secondary-container leading-relaxed max-w-xs">
            Premium technical equipment built for the wild, crafted with a conscience. We design carry systems that protect your gear and the wild places you explore.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary text-secondary transition-colors">
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link href="#" className="hover:text-primary text-secondary transition-colors">
              <span className="material-symbols-outlined">camera</span>
            </Link>
            <Link href="#" className="hover:text-primary text-secondary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-primary mb-6">Explore</h4>
          <ul className="space-y-4 text-on-secondary-container">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Journal
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors underline">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-primary mb-6">Support</h4>
          <ul className="space-y-4 text-on-secondary-container">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Customer Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Returns & Repair
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-primary">Stay Informed</h4>
          <p className="text-on-secondary-container text-sm">Monthly field notes on expeditions and gear.</p>
          <form className="relative flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-outline-variant py-2 text-sm focus:outline-none focus:border-tertiary transition-colors text-on-surface"
            />
            <button
              type="submit"
              className="absolute right-0 bottom-2 text-xs font-bold uppercase tracking-widest text-primary"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-outline-variant/10 text-center text-[10px] uppercase tracking-[0.3em] text-on-secondary-container">
        © 2024 Editorial Wilderness. Built for the Technical Naturalist.
      </div>
    </footer>
  );
}
