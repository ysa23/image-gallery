import { getImage } from '../../api/imagesApi';
import { IMAGE_PAGE_INIT } from '../../store/actionTypes';

export default (imageId) => {
	const image = getImage(imageId);

	return {
		type: IMAGE_PAGE_INIT,
		image: image
	};
}