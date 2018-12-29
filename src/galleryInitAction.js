import { GALLERY_INIT } from './store/actionTypes';
import storage from './imageStorage';

export default (page) => {
	const images = storage.getImages(page);

	return {
		type: GALLERY_INIT,
		images: images.images
	};
}