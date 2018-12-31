const images = [
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
];


const getImages = (page) => {
	return {
		// Create a copy of the original array to simulate server deserialization
		images: images.map(x => Object.assign({}, x))
	};
};

const getImage = (imageId) => {
	const imageIndex = findImageIndexById(imageId);
	if (imageIndex === -1) {
		return null;
	}

	// Create a copy of the original array to simulate server deserialization
	return Object.assign({}, images[imageIndex]);
};

const updateImage = (image) => {
	const sourceImageIndex = findImageIndexById(image.id);
	if (sourceImageIndex === -1) {
		return null;
	}

	images[sourceImageIndex] = image;
};

const findImageIndexById = (imageId) => {
	return images.findIndex(x => x.id === imageId);
};

export default {
	getImages: getImages,
	updateImage: updateImage,
	getImage: getImage
}