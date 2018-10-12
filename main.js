const sun = document.getElementById('sun');
const sunSpin = sun.animate(
  [
    {
      transform: 'rotate(0)'
    },
    {
      transform: 'rotate(359deg)'
    }
  ],
  {
    duration: 1000,
    iterations: Infinity
  }
);
