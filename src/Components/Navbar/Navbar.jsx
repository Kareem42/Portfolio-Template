import React, { useState, useEffect } from "react";

const Navbar = () => {
    // State to control whether the navbar is visible or hidden
    const [visible, setVisible] = useState(true);
  
    // State to store the last known vertical scroll position
    const [lastScrollY, setLastScrollY] = useState(0);
  
    // State to toggle the mobile menu open/closed
    const [menuOpen, setMenuOpen] = useState(false);
  
    // The useEffect runs after the component mounts and sets up the scroll listener
    useEffect(() => {
      // Function to handle scroll behavior
      const handleScroll = () => {
        const currentScrollY = window.scrollY; // Get current vertical scroll position
  
        // If user scrolls down and has scrolled more than 50px, hide navbar
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setVisible(false); // Hide navbar
        } else {
          setVisible(true); // Show navbar when scrolling up
        }
  
        // Update last scroll position for next comparison
        setLastScrollY(currentScrollY);
      };
  
      // Attach scroll event listener to window
      window.addEventListener("scroll", handleScroll);
  
      // Remove scroll listener when component unmounts
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]); // Re-run effect when lastScrollY changes
 
    const navLinks = [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ];


  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${menuOpen ? "bg-white/10 backdrop-blur-lg shadow-lg" : "bg-white/5 backdrop-blur-md shadow-md"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-indigo-300 transition"
        >
          Enter Your Name Here
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-indigo-300 transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white hover:text-indigo-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block hover:text-indigo-300 transition duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
