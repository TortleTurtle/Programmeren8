namespace StrategyPattern {
    export class Bouncing implements BallBehaviour {
        performUpdate(ball : Ball){
            //ball out of bounds on left side
            if (ball.X < ball.MinWidth) {
                ball.X = ball.MinWidth
                ball.SpeedX *= -1;
                ball.SpeedX *= ball.friction;
            }
            //ball out of bounds on right side
            if (ball.X > ball.MaxWidth) {
                ball.X = ball.MaxWidth
                ball.SpeedX *= -1
                ball.SpeedX *= ball.friction
            }
            //y-axis movement
            if (ball.Y + ball.SpeedY > ball.MaxHeight) {
                ball.Y = ball.MaxHeight;
                ball.SpeedY *= -1

                ball.SpeedY *= ball.friction
                ball.SpeedX *= ball.friction
            } else {
                ball.SpeedY += ball.gravity
            }

            //move the ball
            ball.X += ball.SpeedX
            ball.Y += ball.SpeedY

            ball.draw();
        }
    }
}