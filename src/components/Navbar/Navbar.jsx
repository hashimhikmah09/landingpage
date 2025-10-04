import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/images/logo.svg";

// SVG icons
import TodoIcon from "../../assets/images/icon-todo.svg";
import CalendarIcon from "../../assets/images/icon-calendar.svg";
import ReminderIcon from "../../assets/images/icon-reminders.svg";
import PlanningIcon from "../../assets/images/icon-planning.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) =>
    setOpenDropdown(openDropdown === menu ? null : menu);

  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="h-6 w-auto" />
      </Link>

      {/* ===== Desktop Navigation ===== */}
      <nav className="hidden md:flex space-x-10 text-gray-700 font-medium relative">
        {/* Features Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("features")}
            className="flex items-center hover:text-black transition"
          >
            Features
            {openDropdown === "features" ? (
              <ChevronUp className="ml-1 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-1 w-4 h-4" />
            )}
          </button>

          {openDropdown === "features" && (
            <div className="absolute left-0 mt-3 w-72 bg-white border border-gray-100 shadow-2xl rounded-xl py-4 z-50">
              <ul className="space-y-2 text-[15px] text-gray-700">
                <li className="flex items-center px-6 py-2 hover:bg-gray-50 rounded-md transition">
                  <img src={TodoIcon} alt="Todo" className="w-4 h-4 mr-2" />
                  Todo List
                </li>
                <li className="flex items-center px-6 py-2 hover:bg-gray-50 rounded-md transition">
                  <img src={CalendarIcon} alt="Calendar" className="w-4 h-4 mr-2" />
                  Calendar
                </li>
                <li className="flex items-center px-6 py-2 hover:bg-gray-50 rounded-md transition">
                  <img src={ReminderIcon} alt="Reminders" className="w-4 h-4 mr-2" />
                  Reminders
                </li>
                <li className="flex items-center px-6 py-2 hover:bg-gray-50 rounded-md transition">
                  <img src={PlanningIcon} alt="Planning" className="w-4 h-4 mr-2" />
                  Planning
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Company Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("company")}
            className="flex items-center hover:text-black transition"
          >
            Company
            {openDropdown === "company" ? (
              <ChevronUp className="ml-1 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-1 w-4 h-4" />
            )}
          </button>

          {openDropdown === "company" && (
            <div className="absolute left-0 mt-3 w-72 bg-white border border-gray-100 shadow-2xl rounded-xl py-4 z-50">
              <ul className="text-[15px] text-gray-700">
                <li>
                  <Link
                    to="/history"
                    className="block px-6 py-3 hover:bg-gray-50 rounded-md transition"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-team"
                    className="block px-6 py-3 hover:bg-gray-50 rounded-md transition"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="block px-6 py-3 hover:bg-gray-50 rounded-md transition"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/careers" className="hover:text-black transition">
          Careers
        </Link>
        <Link to="/about" className="hover:text-black transition">
          About
        </Link>
      </nav>

      {/* ===== Desktop Buttons ===== */}
      <div className="hidden md:flex space-x-4">
        <button className="text-gray-600 hover:text-black">Login</button>
        <button className="border border-gray-600 px-5 py-1.5 rounded-lg hover:bg-gray-100 transition">
          Register
        </button>
      </div>

      {/* ===== Mobile Menu Toggle ===== */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== Mobile Drawer ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 z-50 md:hidden"
            >
              <div className="flex justify-end mb-6">
                <button onClick={toggleMenu}>
                  <X size={28} />
                </button>
              </div>

              {/* Mobile Nav */}
              <nav className="space-y-4 text-gray-700">
                {/* Features */}
                <div>
                  <button
                    className="flex items-center justify-between w-full"
                    onClick={() => toggleDropdown("features")}
                  >
                    Features
                    {openDropdown === "features" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {openDropdown === "features" && (
                    <ul className="pl-4 mt-2 space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <img src={TodoIcon} alt="Todo" className="w-4 h-4" />
                        <span>Todo List</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <img src={CalendarIcon} alt="Calendar" className="w-4 h-4" />
                        <span>Calendar</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <img src={ReminderIcon} alt="Reminders" className="w-4 h-4" />
                        <span>Reminders</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <img src={PlanningIcon} alt="Planning" className="w-4 h-4" />
                        <span>Planning</span>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Company */}
                <div>
                  <button
                    className="flex items-center justify-between w-full"
                    onClick={() => toggleDropdown("company")}
                  >
                    Company
                    {openDropdown === "company" ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {openDropdown === "company" && (
                    <ul className="pl-4 mt-2 space-y-2 text-sm">
                      <li><Link to="/history">History</Link></li>
                      <li><Link to="/our-team">Our Team</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                    </ul>
                  )}
                </div>

                <Link to="/careers" className="block">Careers</Link>
                <Link to="/about" className="block">About</Link>
              </nav>

              {/* Buttons */}
              <div className="mt-6 space-y-3">
                <button className="block w-full text-gray-600">Login</button>
                <button className="block w-full border border-gray-600 px-4 py-2 rounded-lg">
                  Register
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
