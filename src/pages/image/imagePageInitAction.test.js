import target from './imagePageInitAction';

import { IMAGE_PAGE_INIT } from '../../store/actionTypes';
import { getImage } from '../../api/imagesApi';
jest.mock('../../api/imagesApi');

test('imagePageInitAction, when called, returns IMAGE_PAGE_INIT action type with image from server', () => {
	const image = { id: '1' };
	setImage(image);

	const result = target(0);

	expect(result.type).toEqual(IMAGE_PAGE_INIT);
	expect(result.image).toEqual(image);
});

function setImage(image) {
	getImage.mockImplementationOnce(id => image);
}