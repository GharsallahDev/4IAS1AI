import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeScreen from "./WelcomeScreen";
import DiagnosticForm from "./DiagnosticForm";
import DiagnosticResults from "./DiagnosticResults";

const STAGES = {
  WELCOME: "welcome",
  DIAGNOSTIC: "diagnostic",
  RESULTS: "results",
};

const PneumologyDashboard = () => {
  const [currentStage, setCurrentStage] = useState(STAGES.WELCOME);
  const [diagnosisData, setDiagnosisData] = useState(null);

  const handleDiagnosisComplete = (data) => {
    setDiagnosisData(data);
    setCurrentStage(STAGES.RESULTS);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <AnimatePresence mode="wait">
        {currentStage === STAGES.WELCOME && (
          <WelcomeScreen
            key="welcome"
            onStart={() => setCurrentStage(STAGES.DIAGNOSTIC)}
          />
        )}

        {currentStage === STAGES.DIAGNOSTIC && (
          <motion.div
            key="diagnostic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <DiagnosticForm onDiagnosisComplete={handleDiagnosisComplete} />
          </motion.div>
        )}

        {currentStage === STAGES.RESULTS && diagnosisData && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="grid  gap-6">
              <DiagnosticResults
                diagnosis={diagnosisData.type}
                confidence={diagnosisData.confidence}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <button
                onClick={() => setCurrentStage(STAGES.DIAGNOSTIC)}
                className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                New Diagnostic
              </button>
              <button
                onClick={() => window.print()}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Export Results
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PneumologyDashboard;