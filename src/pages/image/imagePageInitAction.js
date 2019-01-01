import { getImage } from '../../api/imagesApi';
import { IMAGE_PAGE_INIT } from '../../store/actionTypes';

export default (imageId) => {
	return async dispatch => {
		const image = await getImage(imageId);

		dispatch({
			type: IMAGE_PAGE_INIT,
			image: image
		});
	};
}