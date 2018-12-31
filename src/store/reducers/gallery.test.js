import target from './gallery';
import { IMAGE_DELETED, IMAGE_DESCRIPTION_UPDATED, APP_INIT, IMAGE_PAGE_INIT } from '../actionTypes';

describe('Gallery reducer tests', () => {
	test('APP_INIT, when APP_INIT action is called, set images property according to given images', () => {
		const currentState = {
			images: [],
			test: '123'
		};
		const images = [ {id: '1'} ];
		const action = {
			type: APP_INIT,
			images: images
		};

		const result = target(currentState, action);

		expect(result.images).toEqual(images);
		expect(result.test).toEqual('123');
	});

	test('IMAGE_PAGE_INIT, when IMAGE_PAGE_INIT action is called, set current property according to given image', () => {
		const currentState = {
			images: [],
			currentImage: null,
			test: '123'
		};
		const image = {id: '1'};
		const action = {
			type: IMAGE_PAGE_INIT,
			image: image
		};

		const result = target(currentState, action);

		expect(result.images).toEqual([]);
		expect(result.currentImage).toEqual(image);
		expect(result.test).toEqual('123');
	});

	test('IMAGE_DESCRIPTION_UPDATED, when IMAGE_DESCRIPTION_UPDATED action is called, set description in current image and in the related item in the images array', () => {
		const currentState = {
			images: [
				{id: 1, description: 'description'},
				{id: 2, description: 'desc2', url: 'http://some.url'}
				],
			currentImage: { id: 2, description: 'description' },
			test: '123'
		};
		const action = {
			type: IMAGE_DESCRIPTION_UPDATED,
			imageId: 2,
			newDescription: 'new description'
		};

		const result = target(currentState, action);

		expect(result.images[0]).toEqual({ id: 1, description: 'description' });
		expect(result.images[1]).toEqual({ id: 2, description: 'new description', url: 'http://some.url' });
		expect(result.currentImage).toEqual({ id: 2, description: 'new description' });
		expect(result.test).toEqual('123');
	});

	test('IMAGE_DELETE, when IMAGE_DELETE action is called, delete image from images array', () => {
		const currentState = {
			images: [
				{id: 1, description: 'description'},
				{id: 2, description: 'desc2', url: 'http://some.url'}
				],
			currentImage: { id: 2, description: 'description' },
			test: '123'
		};
		const action = {
			type: IMAGE_DELETED,
			imageId: 2
		};

		const result = target(currentState, action);

		expect(result.images).toEqual([ { id: 1, description: 'description' } ]);
		expect(result.currentImage).toEqual(null);
		expect(result.test).toEqual('123');
	});

	test('No matching action, return current state', () => {
		const currentState = {
			images: [
				{id: 1, description: 'description'},
				{id: 2, description: 'desc2', url: 'http://some.url'}
			],
			currentImage: { id: 2, description: 'description' },
			test: '123'
		};

		const action = {
			type: 'SOME_ACTION'
		};

		const result = target(currentState, action);

		expect(result).toEqual(currentState);
	})
});