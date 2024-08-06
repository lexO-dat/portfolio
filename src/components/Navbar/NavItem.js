import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <motion.button
      className={`p-3 text-xl bg-gray-900 hover:bg-gray-800 rounded-md ${id === 0 ? 'lg:mt-10' : 'lg:mt-1'} transition-colors relative ${selected ? 'text-black' : 'text-white'}`}
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md bg-white z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default NavItem;
