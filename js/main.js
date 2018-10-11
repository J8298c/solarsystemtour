let galaxy = document.getElementById('slidingcontainer');

function createPlanets(height, width) {
  let planet = document.createElement('div');
  planet.style.height = height;
  planet.style.width = width;
  return planet;
}

let earth = createPlanets('20px', '20px');

galaxy.appendChild(earth);
