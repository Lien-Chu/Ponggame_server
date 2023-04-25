using Microsoft.AspNetCore.SignalR;

namespace PongGameServer.Hubs
{
	public class GameHub : Hub
	{	
		public async Task SendMessage(string user)
		{
			await Clients.All.SendAsync("NewPlayerJoinedCommand", user);

		}

		public async Task StartGame()
		{
			await Clients.All.SendAsync("GameStarted");
		}

		
		public async Task MovePaddle(int playerId, int newY)
		{
			await Clients.All.SendAsync("PaddleMoved", playerId, newY);
		}

		public async Task MoveBall(int newX, int newY)
		{
			await Clients.All.SendAsync("BallMoved", newX, newY);
		}

	}
}