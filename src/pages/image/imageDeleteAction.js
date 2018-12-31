import imagesApi from '../../api/imagesApi';
import { IMAGE_DELETED } from '../../store/actionTypes';

export default (imageId) => {
	imagesApi.deleteImage(imageId);

	return {
		type: IMAGE_DELETED,
		imageId: imageId
	};
}