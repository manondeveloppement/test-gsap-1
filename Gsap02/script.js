const cercle = document.querySelector(".cercle");
const imgs = document.querySelectorAll("img");

const TL = gsap.timeline({ paused: true });

TL.to(imgs, { scale: 1, duration: 0.4, stagger: 0.1 });

cercle.addEventListener("mouseenter", () => {
  TL.play();
});

cercle.addEventListener("mouseout", () => {
  TL.reverse();
});
