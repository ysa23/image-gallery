const getImages = function (page) {
	return {
		images: [
			{
				id: "1",
				url: "https://statics.sportskeeda.com/editor/2018/03/a4a7b-1520474015-800.jpg",
				description: "Michael Jordan dribble"
			},
			{
				id: "2",
				url: "https://cdn.nba.net/nba-drupal-prod/styles/landscape/http/i2.cdn.turner.com/nba/nba/dam/assets/130828123801-michael-jordan-iso-1998-all-star-game.video-player.jpg?itok=6H7vzj5I",
				description: "Michael Jordan posing"
			},
			{
				id: "3",
				url: "https://i.ytimg.com/vi/cuLprHh_BRg/maxresdefault.jpg",
				description: "Jordan & Pippen"
			}
		]
	}
};

export default {
	getImages: getImages
}