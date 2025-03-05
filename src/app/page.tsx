"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MotivationPage() {
  const [quote, setQuote] = useState("");

  

  useEffect(() => {
    const quotes = [
      "Code your dreams into reality.",
      "Every line of code is a step closer to greatness.",
      "Debugging is like being the detective in a crime movie where you are also the murderer.",
      "Great coders are not born, they are self-made.",
      "Your only limit is the one you set yourself."
    ];
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
          Keep Coding, Keep Growing
        </h1>

        <motion.p
          key={quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-2xl italic"
        >
          {quote}
        </motion.p>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, yoyo: Infinity }}
          className="mt-16"
        >
          <button className="px-8 py-4 text-lg font-semibold rounded-2xl bg-purple-600 hover:bg-pink-500 transition-all">
            Stay Motivated!
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
