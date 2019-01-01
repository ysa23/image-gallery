import { updateImageDescription } from '../../api/imagesApi';
import { IMAGE_DESCRIPTION_UPDATED } from '../../store/actionTypes';

export default (imageId, description) => {
	return async dispatch => {
		await updateImageDescription(imageId, description);

		dispatch({
			type: IMAGE_DESCRIPTION_UPDATED,
			imageId: imageId,
			newDescription: description
		});
	}
}