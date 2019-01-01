import target from './imageDescriptionUpdateAction';

import { IMAGE_DESCRIPTION_UPDATED } from '../../store/actionTypes';
import { updateImageDescription } from '../../api/imagesApi';
jest.mock('../../api/imagesApi');

test('imageDescriptionUpdateAction, when called, returns IMAGE_DESCRIPTION_UPDATE action type with new description and update the server from', () => {

	const result = target(1, "new description");

	expect(result.type).toEqual(IMAGE_DESCRIPTION_UPDATED);
	expect(result.imageId).toEqual(1);
	expect(result.newDescription).toEqual("new description");

	expect(updateImageDescription).toBeCalledWith(1, "new description");
});