//Animations for Navigation
export const item = {
  hidden: { width: 10 },
  enter: {
    width: "auto",
    transition: {
      duration: 0.6,
      type: "linear",
    },
  },
};

export const variants = {
  enter: {
    width: "auto",
    transition: {
      staggerChildren: 0.4,
    },
  },
};
//End of animations for navigation

//Animations for Image Slideshow
export const imageSLideshow = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "linear",
    },
  },
};
