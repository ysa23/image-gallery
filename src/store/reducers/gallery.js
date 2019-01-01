import {APP_INIT, IMAGE_DESCRIPTION_UPDATED, IMAGE_DELETED, IMAGE_PAGE_INIT, IMAGE_PAGE_EXIT} from "../actionTypes";


const initialState = {
	images: [],
	currentImage: null
};

const reducers = {};
reducers[APP_INIT] = appInit;
reducers[IMAGE_PAGE_INIT] = imagePageInit;
reducers[IMAGE_DESCRIPTION_UPDATED] = imageDescriptionUpdated;
reducers[IMAGE_DELETED] = imageDeleted;
reducers[IMAGE_PAGE_EXIT] = imagePageExit;

export default function(state = initialState, action) {
	const reducer = reducers[action.type];
	if (reducer === undefined)
		return state;

	return reducer(state, action);
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