import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const Logo = () => {
  return (
    <motion.div
      className="flex items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <motion.div 
        className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0593fe] to-[#c4ff00] mr-3 overflow-hidden"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
          <Activity size={24} className="text-[#0593fe]" />
        </div>
      </motion.div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0593fe] to-[#c4ff00]">
        Plink
      </span>
    </motion.div>
  );
};

export default Logo;