namespace StrategyPattern {
    export class Floating implements BallBehaviour {
        performUpdate(ball : Ball) {
            if (ball.Y < 0 || ball.Y > ball.MaxHeight) {
                ball.SpeedY *= -1
            }
            if (ball.X > ball.MaxWidth || ball.X < ball.MinWidth) {
                ball.SpeedX *= -1
            }

            ball.X += ball.SpeedX
            ball.Y += ball.SpeedY

            ball.draw();
        }
    }
}