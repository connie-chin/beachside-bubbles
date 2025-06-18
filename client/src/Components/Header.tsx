import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//working on this still! converting to links, so menu items can be navigate-able

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-[#EAD6BC]">
      {/* Header bar */}
      <div className="flex justify-between items-center p-4">
        <div className="text-[#29C8FF] text-xl font-bold">
          Beachside Bubbles
        </div>
        <div className="hidden sm:block text-black font-semibold">
          (562)280-3755
        </div>
        <div className="text-black sm:hidden text-2xl" onClick={toggleMenu}>
          <IoMdMenu />
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-[#EAD6BC] fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center space-y-6 text-xl text-black">
          {/* Close button */}
          <div className="absolute top-4 right-4 text-3xl" onClick={toggleMenu}>
            <IoMdClose />
          </div>
          <Link to="/" onClick={toggleMenu} className="hover:underline">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="hover:underline">
            About
          </Link>
          <a href="#services" onClick={toggleMenu} className="hover:underline">
            Services
          </a>
          <a href="reviews" onClick={toggleMenu} className="hover:underline">
            Reviews
          </a>
          <div className="font-semibold">(562)280-3755</div>
        </div>
      )}
    </div>
  );
}
