import { motion } from 'framer-motion';

function OnScrollFadeIn({ children, delay = 0.4, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -15 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: delay, ease: 'easeIn' }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default OnScrollFadeIn;
