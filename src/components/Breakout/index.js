import { useRef, useEffect } from 'react';
import Board from '../../components/CanvasBoard';
import { BallMovement } from './BallMovement';
import WallCollision from './WallCollision';
import { ballObj, paddleProps, brickObj, player } from './data';
import PaddleMovemenet from './Paddle';

const Breakout = ({ children }) => {
  const canvasRef = useRef(null);

  const paddleMovementHandler = (e) => {
    paddleProps.x = e.clientX - paddleProps.width / 2 - 10;
  };

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      BallMovement(ctx, ballObj);
      WallCollision(ballObj, canvas);
      PaddleMovemenet(ctx, canvas, paddleProps);

      requestAnimationFrame(render);
    };
    render();
  }, []);

  return (
    <Board
      onMouseMove={paddleMovementHandler}
      innerRef={canvasRef}
      width={800}
      height={500}
    />
  );
};

export default Breakout;
