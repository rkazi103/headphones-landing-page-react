export default function animateScroll(sr: scrollReveal.ScrollRevealObject) {
  sr.reveal(`.home__header, .section__title`, { delay: 600 });
  sr.reveal(`.home__footer`, { delay: 700 });
  sr.reveal(`.home__img`, { delay: 900, origin: "top" });

  sr.reveal(
    `.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,
    { origin: "top", interval: 100 }
  );
  sr.reveal(`.specs__data, .discount__animate`, {
    origin: "left",
    interval: 100,
  });
  sr.reveal(`.specs__img, .discount__img`, { origin: "right" });
  sr.reveal(`.case__img`, { origin: "top" });
  sr.reveal(`.case__data`);
}
