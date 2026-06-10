import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/images/logo.png"
                alt="NairaSave Logo"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              Securing African wealth through global currency access.
              Registered and regulated with the CBN.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Product</h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-teal-700 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-700 transition">
                  Savings Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-700 transition">
                  Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-teal-700 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-700 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-700 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>support@nairasave.com</li>
              <li>Lagos, Nigeria</li>
            </ul>

            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-700 hover:text-white transition"
              >
                <FaTwitter size={14} />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-700 hover:text-white transition"
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-700 hover:text-white transition"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-700 hover:text-white transition"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 NairaSave. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built for the NTTS Frontend Challenge
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;