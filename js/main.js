let galaxy = document.getElementById('slidingcontainer');

function createPlanets(height, width, color) {
  let planet = document.createElement('div');
  planet.style.height = height;
  planet.style.width = width;
  planet.style.backgroundColor = color || 'white';
  planet.style.border = `1px solid ${color || 'white'}`;
  planet.style.borderRadius = '50%';
  return planet;
}

let earth = createPlanets('20px', '20px');

galaxy.appendChild(earth);
