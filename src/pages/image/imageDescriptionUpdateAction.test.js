import target from './imageDescriptionUpdateAction';

import {IMAGE_DESCRIPTION_UPDATED} from '../../store/actionTypes';
import { updateImageDescription } from '../../api/imagesApi';
jest.mock('../../api/imagesApi');

test('imageDescriptionUpdateAction, when called, returns IMAGE_DESCRIPTION_UPDATE action type with new description and update the server from', async () => {
	const dispatch = jest.fn();

	await target(1, "new description")(dispatch);

	expect(dispatch).toBeCalledWith( {
		type: IMAGE_DESCRIPTION_UPDATED,
		imageId: 1,
		newDescription: "new description"
	});
	expect(updateImageDescription).toBeCalledWith(1, "new description");
});