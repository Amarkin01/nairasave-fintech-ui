import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-100 mt-2">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between mt-6">
        {/* Logo */}
        <div className="flex items-center">
            <img
                src="/images/logo.png"
                alt="NairaSave Logo"
                className="h-10 w-auto"
            />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <li>
            <a href="#features" className="hover:text-teal-700">
              Features
            </a>
          </li>
          <li>
            <a href="#calculator" className="hover:text-teal-700">
              Calculator
            </a>
          </li>
          <li>
            <a href="#security" className="hover:text-teal-700">
              Security
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-teal-700">
              FAQ
            </a>
          </li>
        </ul>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700 hover:text-teal-700">
            Login
          </button>

          <button className="bg-teal-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-800 transition">
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;