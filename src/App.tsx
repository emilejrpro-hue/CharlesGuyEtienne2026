/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LandingPage from './components/LandingPage';
import MainSite from './components/MainSite';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div className="min-h-screen w-full">
      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full"
          >
            <LandingPage onEnter={() => setShowLanding(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full"
          >
            <MainSite />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

