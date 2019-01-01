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
	},
	{
		id: "4",
		url: "https://pmcfootwearnews.files.wordpress.com/2017/02/michael-jordan-valentines-day-number-12.jpg",
		description: "Free throw"
	},
	{
		id: "5",
		url: "https://athlonsports.com/sites/athlonsports.com/files/styles/article_top_img/public/Michael_Jordan_1.jpg?itok=VOzOm9pb",
		description: "Slam dunk!"
	},
	{
		id: "6",
		url: "https://cdn-s3.si.com/s3fs-public/images/1988-0505-Michael-Jordan-Brad-Daugherty-079086515.jpg",
		description: "Air Jordan"
	},
	{
		id: "7",
		url: "https://bloximages.chicago2.vip.townnews.com/eagletribune.com/content/tncms/assets/v3/editorial/6/47/6472d63e-d838-5b8f-99dd-e04a056f1e5a/5a822714ef48e.image.jpg",
		description: "Reverse dunk"
	},
	{
		id: "8",
		url: "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
		description: "In your face Patrick!!"
	},
	{
		id: "9",
		url: "https://blueprintnewsonline.com/wp-content/uploads/2017/11/Michael-Jordan.jpg",
		description: "Michael driving to the basket"
	},
	{
		id: "10",
		url: "https://41z6h24c86pu1h3m6x151ecm-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/michaeljordan-11-e1455220298938-568x730.jpg",
		description: "Over the horizon"
	},
	{
		id: "11",
		url: "https://sneakerbardetroit.com/wp-content/uploads/2018/05/Authentic-Michael-Jordan-Icon-Edition-Bulls-Jersey.jpg",
		description: "23 ways to make them pay"
	},
	{
		id: "12",
		url: "https://wallimpex.com/data/out/106/jordan-wallpapers-download-4981068.jpg",
		description: "MJ"
	}
];


export async function getImages(page) {
	return new Promise(resolve =>
		resolve({
			// Create a copy of the original array to simulate server deserialization
			images: images.map(x => Object.assign({}, x))
		}));
}

export async function getImage(imageId) {
	return new Promise(resolve => {
		const imageIndex = findImageIndexById(imageId);
		if (imageIndex === -1) {
			resolve(null);
			return;
		}

		// Create a copy of the original array to simulate server deserialization
		resolve(Object.assign({}, images[imageIndex]));
	});
}

export async function updateImageDescription(imageId, imageDescription) {
	return new Promise(resolve => {
		const sourceImageIndex = findImageIndexById(imageId);
		if (sourceImageIndex === -1) {
			return null;
		}

		images[sourceImageIndex].description = imageDescription;
		resolve();
	});
}

export function deleteImage(imageId) {
	const imageIndex = findImageIndexById(imageId);
	if (imageIndex === -1)
		return;

	images.splice(imageIndex, 1);
}

const findImageIndexById = (imageId) => {
	return images.findIndex(x => x.id === imageId);
};