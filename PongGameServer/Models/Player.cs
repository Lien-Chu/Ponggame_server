namespace PongGameServer.Models
{
	public class Player
	{
		public int Id { get; set; }
		public string Name { get; set; }

		// paddle height
		public int Player_y { get; set; }
        public Player(string name, int y)
		{
			Name = name;
			Player_y = y;
		}

	}
}
