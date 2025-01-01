import { motion } from "framer-motion";
import { Stethoscope, ArrowRight } from "lucide-react";

const WelcomeScreen = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto text-center py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8"
      >
        <Stethoscope className="w-10 h-10 text-blue-500" />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        Welcome to AI Therapy Assistant
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
      >
        I'm your AI-powered pneumology assistant. Using advanced diagnostics and
         visualization, I'll help analyze respiratory symptoms and provide
        personalized recommendations.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto mb-8"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          How it works:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Share Symptoms",
              desc: "Provide basic information and record a cough sample",
            },
            {
              title: "Analysis",
              desc: "AI analyzes symptoms and visualizes affected areas",
            },
            {
              title: "Get Results",
              desc: "Receive personalized diagnosis and natural remedies",
            },
          ].map((step, idx) => (
            <div key={idx} className="text-left">
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold mr-2">
                  {idx + 1}
                </span>
                <h3 className="font-medium text-gray-800">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center mx-auto space-x-2 shadow-lg hover:shadow-xl transition-shadow"
      >
        <span>Start Diagnostic</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default WelcomeScreen;