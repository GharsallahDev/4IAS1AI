import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Loader,
  Thermometer,
  Activity,
  HeartPulse,
  Timer,
  AlertCircle,
} from "lucide-react";

const DiagnosticForm = ({ onDiagnosisComplete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState({
    age: false,
  });
  const timerRef = useRef(null);
  const [formData, setFormData] = useState({
    age: "",
    hasFever: false,
    hasMusclePain: false,
    hasRespiratoryConditions: false,
  });

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleDiagnostic = async () => {
    setTouched({
      age: true,
    });

    if (!formData.age) {
      setError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/pneumology/diagnose",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to process diagnosis");
      }

      const diagnosisData = await response.json();
      onDiagnosisComplete(diagnosisData);
    } catch (err) {
      setError(err.message);
      console.error("Diagnosis error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const showAgeError = touched.age && !formData.age;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-t-2xl">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Patient Diagnostic
        </h2>
        <p className="text-blue-100">
          Please provide the following information for accurate diagnosis
        </p>
      </div>

      <div className="p-6 space-y-8">
        {/* Age Input with animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Patient Age <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-4">
            <Timer className="w-5 h-5 text-blue-500" />
            <input
              type="number"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              onBlur={() => setTouched({ ...touched, age: true })}
              className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                showAgeError ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter age"
              required
            />
          </div>
          {showAgeError && (
            <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              Age is required
            </p>
          )}
        </motion.div>

        {/* Symptoms Grid */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* ... (Symptoms grid remains unchanged) ... */}
          <div className="relative p-4 border border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <Thermometer className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Fever</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasFever}
                onChange={(e) =>
                  setFormData({ ...formData, hasFever: e.target.checked })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="relative p-4 border border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Muscle Pain</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasMusclePain}
                onChange={(e) =>
                  setFormData({ ...formData, hasMusclePain: e.target.checked })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="relative p-4 border border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <HeartPulse className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Respiratory History</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hasRespiratoryConditions}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    hasRespiratoryConditions: e.target.checked,
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <p className="text-red-600 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {error}
            </p>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleDiagnostic}
          disabled={isLoading}
          className={`w-full py-4 rounded-lg font-medium shadow-lg transition-all flex items-center justify-center space-x-2
            ${
              !isLoading
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-xl"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
        >
          {isLoading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Analyzing symptoms...</span>
            </>
          ) : (
            <span>Diagnostic</span>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DiagnosticForm;