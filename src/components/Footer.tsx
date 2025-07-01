import Image from 'next/image';

export default function Footer() {
  return (
  <footer className="text-center py-6 text-sm text-[#334E68] bg-white border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/beaker.png"
            alt="Tiny Site Lab Logo"
            width={28}
            height={28}
            className="h-6 w-auto -mt-1"
          />
          <span className="text-[#0C2D48] font-medium">Tiny Site Lab</span>
        </div>
        <p className="text-[#334E68] sm:ml-2">
          Built with purpose. Small by design. Made to matter.
        </p>
      </div>
      <p className="mt-2">&copy; {new Date().getFullYear()} Tiny Site Lab LLC</p>
    </footer>
  );
}
