import {APP_INIT, IMAGE_DESCRIPTION_UPDATED, IMAGE_DELETED, IMAGE_PAGE_INIT} from "../actionTypes";


const initialState = {
	images: [],
	currentImage: null
}

export default function(state = initialState, action) {
	switch (action.type) {
		case APP_INIT:
			return {
				...state,
				images: action.images
			};

		case IMAGE_PAGE_INIT:
			return {
				...state,
				currentImage: action.image
			};

		case IMAGE_DESCRIPTION_UPDATED:
			console.log('IMAGE DESCRIPTION UPDATED triggered');
			return state;

		case IMAGE_DELETED:
			console.log('IMAGE DELETED triggered');
			return state;

		default:
			console.warn(`Non existing action triggered: ${JSON.stringify(action)}`);
			return state;
	}
}