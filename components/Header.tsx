import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/20">
      <nav className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter text-primary font-headline">
            WILDERNESS
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/products" className="font-body text-sm tracking-wide text-primary border-b-2 border-primary pb-1 font-bold">
              Shop
            </Link>
            <Link href="#" className="font-body text-sm tracking-wide text-secondary hover:text-primary transition-colors font-bold">
              About
            </Link>
            <Link href="#" className="font-body text-sm tracking-wide text-secondary hover:text-primary transition-colors font-bold">
              Mission
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hover:opacity-80 transition-opacity active:scale-95 duration-150 relative">
            <span className="material-symbols-outlined text-primary">search</span>
          </button>
          <button className="hover:opacity-80 transition-opacity active:scale-95 duration-150 relative">
            <span className="material-symbols-outlined text-primary">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-tertiary text-on-tertiary text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
              2
            </span>
          </button>
          <button className="hover:opacity-80 transition-opacity active:scale-95 duration-150 relative">
            <span className="material-symbols-outlined text-primary">person</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
