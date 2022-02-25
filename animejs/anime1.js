anime({
  targets: '.square-forward',
  translateX: 400,
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: '.square-backward',
  translateX: 400,
  direction: 'reverse',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: '.square-forward1',
  width: '100%',
  easing: 'easeInOutQuad',
  backgroundColor: '#0000FF',
  direction: 'alternate',
  loop: true,
  duration: 2500,
});

anime({
  targets: '.square-backward1',
  width: '100%',
  easing: 'easeInOutQuad',
  backgroundColor: '#0000FF',
  direction: 'reverse',
  loop: true,
  duration: 2500,
});

anime({
  targets: '.circle1',
  keyframes: [
    { translateY: -40 },
    { translateX: 250 },
    { translateY: 40 },
    { translateX: 0 },
    { translateY: 0 },
  ],
  duration: 2000,
  easing: 'easeOutElastic(1, .2)',
  loop: true,
});

anime({
  targets: '.circle2',
  keyframes: [
    { translateY: -40 },
    { translateX: 250 },
    { translateY: 40 },
    { translateX: 0 },
    { translateY: 0 },
  ],
  duration: 2000,
  easing: 'easeOutElastic(1, 1)',
  direction: 'reverse',
  loop: true,
});

anime({
  targets: '.circle3',
  keyframes: [
    { translateX: 200 },
    { translateY: 50 },
    { translateY: 100 },
    { translateX: 0 },
    { translateY: 0 },
  ],
  duration: 2000,
  easing: 'easeOutElastic(1, .5)',
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.circle4',
  keyframes: [
    { translateY: -100 },
    { translateX: 400 },
    { translateY: 50 },
    { translateX: 100 },
    { translateY: -20 },
    { translateX: -10 },
  ],
  duration: 2000,
  easing: 'easeOutElastic(1, .2)',
  loop: true,
});
