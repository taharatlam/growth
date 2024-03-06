'use client'
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation  } from 'framer-motion';
import { useInView } from "react-intersection-observer";



const Animated = ({ variant = 'scale', threshold= 0, delay = 0, children }) => {

    const control = useAnimation();
    const [ref, inView] = useInView({ threshold });

    useEffect(() => {
        if (inView) {
        control.start("visible");
        }else {
        control.start("hidden");
        }
    }, [control, inView]);
  

    const variants = {
        scale :{
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay  } },
            hidden: { opacity: 0, scale: 0 }
        },
        fadeUp: {
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay  } },
            hidden: { opacity: 0, y: 50 }
        },
        fadeLeft: {
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay  } },
            hidden: { opacity: 0, x: -100 }
        },
        fadeRigth: {
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay  } },
            hidden: { opacity: 0, x: 100 }
        },
        fadeDown: {
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay  } },
            hidden: { opacity: 0, y: -50 }
        },
    }

  return (
    <motion.div
    ref={ref}
    variants={variants[variant]}
    initial="hidden"
    animate={control}>
      {children}
    </motion.div>
  );
};

export default Animated;
