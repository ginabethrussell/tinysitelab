import Image from "next/image";
import Navbar from "./Navbar";

export default function Header({ activeId }: { activeId: string }) {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="min-h-20 max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/beaker.png"
            alt="Tiny Site Lab Logo"
            width={80}
            height={80}
            className="h-10 w-auto transition-transform hover:scale-105 -mr-4 -mt-2"
            priority
          />
          <span className="text-xl font-bold text-[#0C2D48]">Tiny Site Lab</span>
        </div>
        <Navbar activeId={activeId} />
      </div>
    </header>
  );
}