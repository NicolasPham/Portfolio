export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const slideLeft = (delay, duration) => {
  return {
    hidden: { opacity: 0, x: "-100%" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

export const slideRight = (delay, duration) => {
  return {
    hidden: { opacity: 0, x: "100%" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};