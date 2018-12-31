import target from './exitImagePageAction';

import { IMAGE_PAGE_EXIT } from '../../store/actionTypes';

test('exitImagePage, when called, returns IMAGE_PAGE_EXIT', () => {
	const result = target();

	expect(result.type).toEqual(IMAGE_PAGE_EXIT);
});
