import { GALLERY_INIT, IMAGE_UPDATED } from "../actionTypes";


const initialState = {
	images: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GALLERY_INIT:
			console.log(`GALLERY INIT triggered. ${JSON.stringify(action)}`);
			return {
				...state,
				images: action.images
			};
		case IMAGE_UPDATED:
			console.log('IMAGE UPDATED triggered');
			return state;

		default:
			console.warn(`Non existing action triggered: ${JSON.stringify(action)}`);
			return state;
	}
}