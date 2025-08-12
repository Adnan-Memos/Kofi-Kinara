import Image from "next/image";

export default function Navbar() {
  return (
    <header className="m-4 border-2 md:border-3 rounded-md md:rounded-sm border-black md:h-16 h-12 flex items-center">
      <div className="w-full flex items-center justify-between h-full px-2 sm:px-[1vw]">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>
        {/* Name */}
        <span className="font-manrope font-medium text-xl sm:text-2xl md:text-3xl text-center">
          Kofi Kinara
        </span>
      </div>
    </header>
  );
}
