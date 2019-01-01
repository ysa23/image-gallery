import { deleteImage } from '../../api/imagesApi';
import { IMAGE_DELETED } from '../../store/actionTypes';

export default (imageId) => {
	return async dispatch => {
		await deleteImage(imageId);

		dispatch({
			type: IMAGE_DELETED,
			imageId: imageId
		});
	};
}