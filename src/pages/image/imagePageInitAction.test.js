import target from './imagePageInitAction';

import {IMAGE_PAGE_INIT} from '../../store/actionTypes';
import { getImage } from '../../api/imagesApi';
jest.mock('../../api/imagesApi');

test('imagePageInitAction, when called, returns IMAGE_PAGE_INIT action type with image from server', async () => {
	const image = { id: '1' };
	setImage(image);
	const dispatch = jest.fn();

	await target(1)(dispatch);

	expect(dispatch).toBeCalledWith( {
		type: IMAGE_PAGE_INIT,
		image: image
	});
});

function setImage(image) {
	getImage.mockImplementationOnce(id => image);
}