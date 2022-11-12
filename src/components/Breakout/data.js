export const ballObj = {
  x: 20,
  y: 200,
  dx: 3,
  dy: 3,
  rad: 10,
  speed: 10,
  color: ['pink', 'purple'],
};

export const brickObj = {
  x: 50,
  y: 50,
  width: 800 / 10 - 1,
  height: 20,
  density: 2,
  color: ['purple', 'purple'],
};

export const player = {
  name: 'Miluś',
  lives: 5,
  score: 0,
  level: 1,
};

export const paddleProps = {
  x: 100,
  height: 20,
  width: 100,
  color: ['orange', 'cyan'],
};

// eslint-disable-next-line
export default { ballObj, paddleProps, brickObj, player };
