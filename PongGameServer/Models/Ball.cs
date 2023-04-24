namespace PongGameServer.Models
{
	public class Ball
	{
		public int Ball_X { get; set; }
		public int Ball_Y { get; set; }
		//MOVE BALL

		public Ball(int x, int y)
		{
			Ball_X = x;
			Ball_Y = y;
		}
	}
}
