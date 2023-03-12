import { motion } from 'framer-motion';

function SectionTitle({ text }) {
  return (
    <div className="flex items-center my-3 md:mt-5 md:mb-10">
      <motion.div
        className="flex-grow border-t border-gray-400"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>
      <motion.span
        className="mx-4 flex-shrink text-2xl font-mono font-semibold"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {text}
      </motion.span>
      <motion.div
        className="flex-grow border-t border-gray-400"
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>
    </div>
  );
}

export default SectionTitle;
