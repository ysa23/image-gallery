import {APP_INIT, IMAGE_DESCRIPTION_UPDATED, IMAGE_DELETED, IMAGE_PAGE_INIT, IMAGE_PAGE_EXIT} from "../actionTypes";


const initialState = {
	images: [],
	currentImage: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case APP_INIT:
			return appInit(state, action);

		case IMAGE_PAGE_INIT:
			return imagePageInit(state, action);

		case IMAGE_DESCRIPTION_UPDATED:
			return imageDescriptionUpdated(state, action);

		case IMAGE_DELETED:
			return imageDeleted(state, action);

		case IMAGE_PAGE_EXIT:
			return imagePageExit(state);

		default:
			console.warn(`Non existing action triggered: ${JSON.stringify(action)}`);
			return state;
	}
}

function appInit(state, action) {
	return {
		...state,
		images: action.images
	};
}

function imagePageInit(state, action) {
	return {
		...state,
		currentImage: action.image
	};
}

function imageDescriptionUpdated(state, action) {
	return {
		...state,
		currentImage: Object.assign(state.currentImage, {description: action.newDescription}),
		images: state.images.map(x => {
			if (x.id === action.imageId)
				return Object.assign({}, x, {description: action.newDescription})
			return x;
		})
	};
}

function imageDeleted(state, action) {
	return {
		...state,
		currentImage: null,
		images: state.images.filter(x => x.id !== action.imageId)
	};
}

function imagePageExit(state) {
	return {
		...state,
		currentImage: null
	};
}