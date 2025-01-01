import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const DiagnosticResults = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg p-6 h-[650px] flex flex-col w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Activity className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-semibold text-gray-800">
            Diagnostic Results
          </h2>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
        >
          AI Analysis
        </motion.div>
      </div>

      <div className="flex flex-col flex-grow space-y-4">
        {/* Main Diagnostic Card Skeleton */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-100 p-4 rounded-xl animate-pulse"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gray-200 w-12 h-12" />
            <div className="flex-1">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        </motion.div>

        {/* Confidence Score Skeleton */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="px-1"
        >
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="h-6 bg-gray-200 rounded w-32" />
              <div className="h-6 bg-gray-200 rounded w-12" />
            </div>
            <div className="h-2 bg-gray-200 rounded w-full" />
          </div>
        </motion.div>

        {/* Analysis Details and Key Indicators Skeleton */}
        <div className="flex-grow overflow-y-auto space-y-4 pr-2">
          {/* Analysis Details Skeleton */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 p-4 rounded-xl"
          >
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-full bg-gray-200 w-9 h-9" />
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-gray-200" />
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Indicators Skeleton */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-50 p-4 rounded-xl"
          >
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-3 rounded-lg">
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-1" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiagnosticResults;