const box = document.querySelector(".main");
const tabs = document.querySelectorAll(".main span");

gsap.from(tabs, {
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out",
});

function createEqualizerAnimation() {
  gsap.set(tabs, {
    height: 50,
    backgroundColor: "#f7f5f5",
  });

  const equalizerTl = gsap.timeline({ paused: true, repeat: -1 });
  equalizerTl.to(box, { scale: 1.1, ease: "power1.out" });

  box.addEventListener("mouseenter", () => {
    equalizerTl.play();
  });

  box.addEventListener("mouseleave", () => {
    equalizerTl.pause();
  });

  equalizerTl
    .to(tabs, {
      height: gsap.utils.wrap([
        30, 80, 120, 60, 90, 40, 150, 70, 100, 50, 110, 35, 85, 65, 95, 45,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),

      duration: 0.5,
      stagger: {
        each: 0.05,
        from: "random",
      },
      ease: "power2.inOut",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        60, 40, 100, 80, 30, 120, 50, 90, 70, 110, 35, 85, 65, 95, 45, 75,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),
      duration: 0.5,
      stagger: {
        each: 0.03,
        from: "random",
      },
      ease: "power2.inOut",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        90, 20, 140, 70, 50, 110, 30, 100, 60, 80, 40, 120, 55, 85, 35, 65,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),
      duration: 0.5,
      stagger: {
        each: 0.04,
        from: "random",
      },
      ease: "power2.inOut",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        40, 20, 120, 90, 70, 100, 30, 80, 60, 120, 55, 85, 35, 65,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),
      duration: 0.5,
      stagger: {
        each: 0.04,
        from: "random",
      },
      ease: "power2.inOut",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        80, 100, 120, 90, 100, 100, 30, 100, 60, 120, 105, 85, 35, 65,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),
      duration: 0.5,
      stagger: {
        each: 0.04,
        from: "random",
      },
      ease: "power2.inOut",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
      ]),
      backgroundColor: "#f7f5f5",
      duration: 0.3,
      stagger: 0.02,
      ease: "power2.out",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        25, 75, 45, 95, 35, 85, 55, 65, 40, 90, 30, 80, 50, 70, 45, 60,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),
      duration: 0.6,
      stagger: {
        each: 0.03,
        from: "random",
      },
      ease: "power2.inOut",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        110, 20, 130, 40, 90, 60, 150, 30, 70, 100, 25, 120, 50, 80, 35, 95,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),
      duration: 0.7,
      stagger: {
        each: 0.04,
        from: "random",
      },
      ease: "power2.inOut",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        65, 35, 85, 55, 45, 75, 25, 95, 40, 80, 30, 90, 50, 70, 35, 60,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),
      duration: 0.5,
      stagger: {
        each: 0.02,
        from: "random",
      },
      ease: "power2.inOut",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        140, 10, 120, 30, 120, 50, 120, 20, 100, 130, 15, 120, 40, 90, 25, 110,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),
      duration: 0.8,
      stagger: {
        each: 0.05,
        from: "random",
      },
      ease: "power2.inOut",
    })
    .to(tabs, {
      height: gsap.utils.wrap([
        15, 25, 35, 45, 55, 65, 75, 85, 95, 50, 30, 100, 72, 100, 100, 90,
      ]),
      backgroundColor: gsap.utils.wrap([
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
        "#f7f5f5",
        "#ffffff",
      ]),
      duration: 0.4,
      stagger: {
        each: 0.01,
        from: "start",
      },
      ease: "power2.inOut",
    });

  return equalizerTl;
}

const equalizerAnimation = createEqualizerAnimation();

// Add GSDevTools for debugging
// GSDevTools.create({ animation: equalizerAnimation });
