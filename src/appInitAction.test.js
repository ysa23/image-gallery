import target from './appInitAction';

import { APP_INIT } from './store/actionTypes';
import storage from './api/imagesApi';
jest.mock('./api/imagesApi');

test('appInitAction, when called, returns APP_INIT action type with images from server', () => {
	const images = setImages();

	const result = target(0);

	expect(result.type).toEqual(APP_INIT);
	expect(result.images).toEqual(images);
});

function setImages() {
	const images = [
		{ id: '1' },
		{ id: '2' },
		{ id: '3' }
	]

	storage.getImages.mockImplementationOnce(page => images);
}