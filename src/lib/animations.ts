
import { MotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useCounterAnimation = (
  value: number, 
  duration: number = 2, 
  delay: number = 0,
  formatFn?: (value: number) => string
) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 });
  
  const counter = useSpring(0, { 
    stiffness: 50, 
    damping: 30,
    duration: duration * 1000
  });

  useEffect(() => {
    if (isInView) {
      // Use setTimeout for the delay instead of the delay property in useSpring
      const timer = setTimeout(() => {
        counter.set(value);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, counter, value, delay]);

  const displayValue = useTransform(counter, (val) => {
    return formatFn ? formatFn(val) : Math.round(val).toString();
  });

  return { displayValue, ref: nodeRef };
};

export const useGlassScroll = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, 
    [0, 0.1, 0.2, 0.3], 
    [0, 0.6, 0.8, 1]
  );
  
  const blur = useTransform(scrollYProgress,
    [0, 0.1, 0.2, 0.3],
    ["0px", "2px", "4px", "6px"]
  );
  
  return { opacity, blur };
};

export const useWaterRipple = () => {
  return (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement("span");
    ripple.classList.add("absolute", "bg-white/30", "rounded-full", "pointer-events-none");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = "0";
    ripple.style.height = "0";
    ripple.style.transform = "translate(-50%, -50%)";
    
    element.appendChild(ripple);
    
    const size = Math.max(element.offsetWidth, element.offsetHeight) * 2;
    
    ripple.animate(
      [
        { width: "0", height: "0", opacity: 0.5 },
        { width: `${size}px`, height: `${size}px`, opacity: 0 }
      ],
      {
        duration: 600,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    );
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };
};
