import target from './appInitAction';

import { APP_INIT } from './store/actionTypes';
import { getImages } from './api/imagesApi';
jest.mock('./api/imagesApi');

test('appInitAction, when called, returns APP_INIT action type with images from server', async () => {
	const dispatch = jest.fn();
	const images = setImages();

	await target(0)(dispatch);

	expect(dispatch).toBeCalledWith( {
		type: APP_INIT,
		images: images
	});
});

function setImages() {
	const images = [
		{ id: '1' },
		{ id: '2' },
		{ id: '3' }
	];

	getImages.mockImplementationOnce(page => {
		return { images: images }
	});

	return images;
}