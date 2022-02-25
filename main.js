anime({
  targets: '.square',
  translateX: 1000,
  duration: 5000,
  delay: 1000,
  loop: true,
});

anime({
  targets: '.circle',
  translateX: 1000,
  duration: 5000,
  backgroundColor: '#00FF00',
  delay: 2000,
  loop: true,
});

anime({
  targets: '#triangle',
  translateX: 1000,
  rotate: '5turn',
  scaleX: 3,
  duration: 5000,
  endDelay: 100,
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.square1',
  translateX: {
    value: 500,
    duration: 1000,
  },
  rotate: {
    value: 1000,
    duration: 2000,
    easing: 'easeInOutSine',
  },
  scale: {
    value: 4,
    duration: 2000,
    delay: 500,
    easing: 'easeInOutQuart',
  },
  delay: 300,
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.triangle-down',
  translateY: 200,
  delay: 500,
  direction: 'alternate',
  loop: true,
});
