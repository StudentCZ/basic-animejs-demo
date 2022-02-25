var path = anime.path('.drawing');

anime({
  targets: '.drawing',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true,
});
