import target from './imagePageInitAction';

import { IMAGE_PAGE_INIT } from '../../store/actionTypes';
import storage from '../../api/imagesApi';
jest.mock('../../api/imagesApi');

test('imagePageInitAction, when called, returns IMAGE_PAGE_INIT action type with images from server', () => {
	const image = { id: '1' };
	setImage(image);

	const result = target(0);

	expect(result.type).toEqual(IMAGE_PAGE_INIT);
	expect(result.image).toEqual(image);
});

function setImage(image) {
	storage.getImage.mockImplementationOnce(id => image);
}