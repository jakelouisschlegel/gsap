 // SVG Path GSAP Sphere Animation for Desktop
  gsap.registerPlugin(MotionPathPlugin);

  // Animate the motion path with ScrollTrigger
  gsap.to("#rect", {
    duration: 10,
    yoyo: true,
    ease: "power1.inOut",
    motionPath: {
      path: "#path",
      align: "#path",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
    scrollTrigger: {
      trigger: "#target", // Set the trigger element
      start: "top bottom", 
      end: "bottom top", 
      scrub: 2, // Increase scrub for smoother animation
      ease: "power1.inOut",
    },
  });
