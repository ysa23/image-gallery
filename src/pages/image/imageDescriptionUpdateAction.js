import imagesApi from '../../api/imagesApi';
import { IMAGE_DESCRIPTION_UPDATED } from '../../store/actionTypes';

export default (imageId, description) => {
	imagesApi.updateImageDescription(imageId, description);

	return {
		type: IMAGE_DESCRIPTION_UPDATED,
		imageId: imageId,
		newDescription: description
	};
}