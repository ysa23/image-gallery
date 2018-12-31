import { APP_INIT } from './store/actionTypes';
import storage from './api/imagesApi';

export default (page) => {
	const images = storage.getImages(page);

	return {
		type: APP_INIT,
		images: images.images
	};
}