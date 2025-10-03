import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/images/logo.svg";

// import your SVG icons
import TodoIcon from "../../assets/images/icon-todo.svg";
import CalendarIcon from "../../assets/images/icon-calendar.svg";  
import ReminderIcon from "../../assets/images/icon-reminders.svg";
import PlanningIcon from "../../assets/images/icon-planning.svg";
                 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = ( menu) =>
    setOpenDropdown(openDropdown === menu ? null : menu);

  return ( 
    <header className="flex items-center justify-between px-8 py-6">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="h-6 w-auto" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-gray-600">
        {/* Features with SVG icons */}
        <div className="relative cursor-pointer"> 
          <button
            onClick={() => toggleDropdown("features")}
            className="flex items-center"
          >
            Features
            {openDropdown === "features" ? (
              <ChevronUp className="ml-1 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-1 w-4 h-4" />
            )}
          </button>
          {openDropdown === "features" && (
            <div className="absolute left-0 bg-white shadow-md rounded-md p-4 mt-2 z-50">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <img src={TodoIcon} alt="Todo" className="w-2 h-2" /> 
                  <span>Todo List</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={CalendarIcon} alt="Calendar" className="w-2 h-2" /> 
                  <span>Calendar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={ReminderIcon} alt="Reminders" className="w-2 h-2" /> 
                  <span>Reminders</span> 
                </li>
                <li className="flex items-center space-x-2">
                  <img src={PlanningIcon} alt="Planning" className="w-2 h-2" /> 
                  <span>Planning</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Company without icons */}
        <div className="relative cursor-pointer">
          <button
            onClick={() => toggleDropdown("company")}
            className="flex items-center"
          >
            Company
            {openDropdown === "company" ? (
              <ChevronUp className="ml-1 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-1 w-4 h-4" />
            )}
          </button>
          {openDropdown === "company" && (
            <div className="absolute left-0 bg-white shadow-md rounded-md p-4 mt-2 z-50">
              <ul className="space-y-2 text-sm">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </div>
          )}
        </div>

        <span>Careers</span>
        <span>About</span>
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="text-gray-600">Login</button>
        <button className="border border-gray-600 px-4 py-1 rounded-lg">
          Register
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== Mobile Slide-in Menu ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
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
              {/* Close button */}
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
                        <img src={TodoIcon} alt="Todo" className="w-2 h-2" />
                        <span>Todo List</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <img src={CalendarIcon} alt="Calendar" className="w-2 h-2" />
                        <span>Calendar</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <img src={ReminderIcon} alt="Reminders" className="w-2 h-2" />
                        <span>Reminders</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <img src={PlanningIcon} alt="Planning" className="w-2 h-2" />
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
                      <li>History</li>
                      <li>Our Team</li>
                      <li>Blog</li>
                    </ul>
                  )}
                </div>

                <span className="block">Careers</span>
                <span className="block">About</span>
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
