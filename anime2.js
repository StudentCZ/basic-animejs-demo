//first grid box to spread
anime({
  targets: '.grid',
  rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center' }),
  backgroundColor: '#FFC0CB',
  direction: 'alternate',
  delay: 1000,
  loop: true,
});

anime({
  targets: '.grid2',
  translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
  rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
  delay: anime.stagger(350, { grid: [14, 5], from: 'center' }),
  easing: 'easeInOutQuad',
  backgroundColor: '#A020F0',
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.grid2-blue',
  translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
  rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'y' }),
  delay: anime.stagger(350, { grid: [14, 5], from: 'center' }),
  easing: 'easeInOutQuad',
  backgroundColor: '#FF0000',
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.grid2-yellow',
  translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
  rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
  delay: anime.stagger(350, { grid: [14, 5], from: 'center' }),
  easing: 'easeInOutQuad',
  backgroundColor: '#FFA500',
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.grid2-orange',
  translateX: anime.stagger(10, { grid: [14, 5], from: 'last', axis: 'y' }),
  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
  rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'y' }),
  delay: anime.stagger(350, { grid: [14, 5], from: 'center' }),
  easing: 'easeInOutQuad',
  backgroundColor: '#FFC0CB',
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.grid2-red',
  translateX: anime.stagger(10, { grid: [14, 5], from: 'last', axis: 'x' }),
  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
  rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
  delay: anime.stagger(350, { grid: [14, 5], from: 'center' }),
  easing: 'easeInOutQuad',
  backgroundColor: '#FFC0CB',
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '.grid2-purple',
  translateX: anime.stagger(10, { grid: [14, 5], from: 'last', axis: 'y' }),
  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
  rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'y' }),
  delay: anime.stagger(350, { grid: [14, 5], from: 'center' }),
  easing: 'easeInOutQuad',
  backgroundColor: '#FFC0CB',
  direction: 'alternate',
  loop: true,
});
