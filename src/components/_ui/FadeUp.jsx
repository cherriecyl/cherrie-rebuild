import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const FadeUp = ( {children, delay} ) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ 
          duration: 0.5,
          ease: "easeInOut", 
          delay: `${delay}`
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  export default FadeUp;