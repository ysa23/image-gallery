import target from './imageDeleteAction';

import { IMAGE_DELETED } from '../../store/actionTypes';
import { deleteImage } from '../../api/imagesApi';
jest.mock('../../api/imagesApi');

test('imageDeleteAction, when called, returns IMAGE_DELETE action type with deleted image id and deletes the image from the server', () => {
	const result = target(1,);

	expect(result.type).toEqual(IMAGE_DELETED);
	expect(result.imageId).toEqual(1);

	expect(deleteImage).toBeCalledWith(1);
});