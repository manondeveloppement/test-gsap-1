let selection = Splitting();

gsap.registerPlugin(ScrollTrigger);

gsap.from(selection[0].chars, {
  y: 100,
  scaleY: 0,
  rotation: 90,
  opacity: 0,
  color: "rgb(13,13,13)",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".text-reveal",
    start: "top 50%",
    end: "bottom 50%",
    scrub: true,
  },
});

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 600);
});

gsap.ticker.lagSmoothing(0);
