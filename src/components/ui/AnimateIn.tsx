"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { ReactNode } from "react";

type AnimateInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
};

export function AnimateIn({
  children,
  delay = 0,
  className,
  ...props
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeInUp}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
}
