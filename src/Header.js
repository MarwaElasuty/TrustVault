import { useState } from 'react';
import trustLogo from './images/trustvault.svg';
import downloadBtnBorder from './images/downloadBtnBorder.svg'; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-evenly items-center p-4 relative">
      {/* Logo Section */}
      <div className="flex gap-x-4 items-center">
        <img src={trustLogo} alt="TrustLogo" />
      </div>

      {/* Menu Section for larger screens */}
      <div className="hidden md:flex text-white items-center gap-x-7">
        <ul className="flex items-center gap-x-6 text-lg">
          <li className="hover:text-gray-300">Home</li>
          <li className="hover:text-gray-300">SafeSend</li>
          <li className="hover:text-gray-300">Press & Partners</li>
          <li className="hover:text-gray-300">Blog</li>
        </ul>
        <div className="flex gap-x-4 relative">
          <img src={downloadBtnBorder} className="absolute top-2 right-0 hidden lg:block" alt="Download Button Border" />
          <button className="border-2 border-zinc-900 rounded-3xl px-4 py-2 lg:px-8 lg:py-3">Download</button>
        </div>
        <button className="ml-4 text-white hover:text-gray-300">Get in touch</button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden">
        <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {/* Hamburger Icon */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute text-center cursor-pointer top-24 left-0 w-full z-50 bg-gradient-to-t from-neutral-950 to-zinc-900 text-white p-4 flex flex-col space-y-4 md:hidden">
          <ul className="space-y-4">
            <li className="hover:text-gray-300">Home</li>
            <li className="hover:text-gray-300">SafeSend</li>
            <li className="hover:text-gray-300">Press & Partners</li>
            <li className="hover:text-gray-300">Blog</li>
          </ul>
          <button className="border-2 border-zinc-900 rounded-3xl px-8 py-3">Download</button>
          <button className="text-white hover:text-gray-300 mt-4">Get in touch</button>
        </div>
      )}
    </header>
  );
}
