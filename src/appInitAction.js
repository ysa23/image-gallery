import { APP_INIT } from './store/actionTypes';
import { getImages } from './api/imagesApi';

export default (page) => {
	const images = getImages(page);

	return {
		type: APP_INIT,
		images: images.images
	};
}