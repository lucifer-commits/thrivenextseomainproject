import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface MotionWrapperProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const getDirectionOffset = (direction: Direction): { x: number; y: number } => {
  switch (direction) {
    case "up":
      return { x: 0, y: 40 };
    case "down":
      return { x: 0, y: -40 };
    case "left":
      return { x: 40, y: 0 };
    case "right":
      return { x: -40, y: 0 };
    default:
      return { x: 0, y: 40 };
  }
};

const MotionWrapper = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.2,
  ...props
}: MotionWrapperProps) => {
  const offset = getDirectionOffset(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
