using Microsoft.AspNetCore.SignalR;

namespace PongGameServer.Hubs
{
	public class GameHub : Hub
	{
		
		 /* This is also dead code; either fix the code or remove it
		 */
		public async Task ConnectedAsync(int user_count)
		{

			await Clients.All.SendAsync("UpdatePlayerCount", user_count);
		}

		public async Task SendMessage(string user)
		{
			await Clients.Others.SendAsync("ReceiveMessage", user);
		}

		/*
		 * This is also dead code; either fix the code or remove it
		 */
		public async Task StartGame()
		{
			await Clients.All.SendAsync("GameStarted");
		}

		/*
		 * This is also dead code; either fix the code or remove it
		 */
		public async Task MovePaddle(int playerId, int newY)
		{
			await Clients.All.SendAsync("PaddleMoved", playerId, newY);
		}

		/*
		 * This is also dead code; either fix the code or remove it
		 */
		public async Task MoveBall(int newX, int newY)
		{
			await Clients.All.SendAsync("BallMoved", newX, newY);
		}

	}
}