import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Not_Found: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-6 relative">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[120px] md:text-[150px] font-extrabold text-white select-none"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold mb-3"
      >
        Page Not Found
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-400 mb-8 max-w-md"
      >
        The page you’re looking for doesn’t exist or might have been removed.
        Don’t worry — let’s take you back home.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Link
          to="/"
          className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 text-xs text-gray-500"
      >
        © {new Date().getFullYear()} SQ Bros. All rights reserved.
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}f
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_60%)] blur-3xl"></div>
      </motion.div>
    </div>
  )
}

export default Not_Found
