import {APP_INIT, IMAGE_DESCRIPTION_UPDATED, IMAGE_DELETED, IMAGE_PAGE_INIT, IMAGE_PAGE_EXIT} from "../actionTypes";


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
			return {
				...state,
				currentImage: Object.assign(state.currentImage, { description: action.newDescription }),
				images: state.images.map(x => {
					if (x.id === action.imageId)
						return Object.assign({}, x, { description: action.newDescription})
					return x;
				})
			};

		case IMAGE_DELETED:
			return {
				...state,
				currentImage: null,
				images: state.images.filter(x => x.id != action.imageId)
			};

		case IMAGE_PAGE_EXIT:
			return {
				...state,
				currentImage: null
			};

		default:
			console.warn(`Non existing action triggered: ${JSON.stringify(action)}`);
			return state;
	}
}