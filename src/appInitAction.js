import { APP_INIT } from './store/actionTypes';
import { getImages } from './api/imagesApi';

export default (page) => {
	return async dispatch => {
		const images = await getImages(page);

		dispatch({
			type: APP_INIT,
			images: images.images
		});
	}
};
