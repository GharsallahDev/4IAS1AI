import  { useState } from "react";
import PneumologyDashboard from "../specialties/pneumology";
import TherapyDashboard from "../specialties/therapy";
import DermatologyDashboard from "../specialties/dermatology";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Brain,
  Fingerprint,
  Menu,
  X,
  Home,
  Settings,
  HelpCircle,
} from "lucide-react";

const specialties = [
  {
    id: "pneumology",
    name: "Pneumology",
    icon: Stethoscope,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "therapy",
    name: "Therapy",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: Fingerprint,
    color: "from-green-500 to-green-600",
  },
];

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSpecialty, setActiveSpecialty] = useState("pneumology");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50"
      >
        {/* Sidebar Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold text-gray-800"
          >
            AI Project
          </motion.div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4 space-y-2">
          {specialties.map((specialty) => (
            <motion.button
              key={specialty.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSpecialty(specialty.id)}
              className={`w-full p-3 rounded-xl flex items-center space-x-3 transition-all
                ${
                  activeSpecialty === specialty.id
                    ? `bg-gradient-to-r ${specialty.color} text-white`
                    : "hover:bg-gray-100 text-gray-600"
                }`}
            >
              <specialty.icon className="w-5 h-5" />
              <span className="font-medium">{specialty.name}</span>
            </motion.button>
          ))}
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <div className="flex justify-around">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Home className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Settings className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <HelpCircle className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`flex-1 ${
          isOpen ? "ml-72" : "ml-0"
        } transition-all duration-300`}
      >
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpecialty}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full"
            >
              {/* HOUNI */}
              {activeSpecialty === "pneumology" && <PneumologyDashboard />}
              {activeSpecialty === "therapy" && <TherapyDashboard />}
              {activeSpecialty === "dermatology" && <DermatologyDashboard />}
              {/* HOUNI */}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default MainLayout;