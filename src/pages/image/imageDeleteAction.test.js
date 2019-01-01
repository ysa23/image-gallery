import target from './imageDeleteAction';

import {IMAGE_DELETED, IMAGE_PAGE_INIT} from '../../store/actionTypes';
import { deleteImage } from '../../api/imagesApi';
jest.mock('../../api/imagesApi');

test('imageDeleteAction, when called, returns IMAGE_DELETE action type with deleted image id and deletes the image from the server', async () => {
	const dispatch = jest.fn();

	await target(1)(dispatch);

	expect(dispatch).toBeCalledWith( {
		type: IMAGE_DELETED,
		imageId: 1
	});

	expect(deleteImage).toBeCalledWith(1);
});