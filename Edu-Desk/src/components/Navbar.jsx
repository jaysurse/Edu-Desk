import { useState, useEffect } from "react";

const Navbar = ({ onLoginClick, user, onLogoutClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Edu<span className="text-gray-800 dark:text-white">Desk</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium items-center">
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>

          {user ? (
            <>
              <li className="text-blue-600 dark:text-blue-400 font-semibold">
                Hello, {user}
              </li>
              <li>
                <button
                  onClick={onLogoutClick}
                  className="hover:text-red-600 transition font-semibold focus:outline-none"
                >
                  Log out
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={onLoginClick}
                className="hover:text-blue-600 transition focus:outline-none"
              >
                Log in / Sign up
              </button>
            </li>
          )}
        </ul>

        {/* Desktop Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:block text-gray-600 dark:text-gray-300 hover:text-blue-600 text-xl"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 font-medium">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-600 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>

            {user ? (
              <>
                <li className="text-blue-600 dark:text-blue-400 font-semibold">
                  Hello, {user}
                </li>
                <li>
                  <button
                    onClick={onLogoutClick}
                    className="hover:text-red-600 transition font-semibold focus:outline-none"
                  >
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={onLoginClick}
                  className="hover:text-blue-600 transition focus:outline-none"
                >
                  Log in / Sign up
                </button>
              </li>
            )}
          </ul>

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 block text-gray-600 dark:text-gray-300 hover:text-blue-600 text-xl"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
