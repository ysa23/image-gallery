import ImagePage from './ImagePage';
import imagePageInitAction from "./imagePageInitAction";
import imageDescriptionUpdateAction from "./imageDescriptionUpdateAction";
import imageDeleteAction from "./imageDeleteAction";
import exitImagePageAction from "./exitImagePageAction";
import { connect } from "react-redux";

function mapStateToProps(state) {
	return {
		image: state.gallery.currentImage
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onInit: (imageId) => dispatch(imagePageInitAction(imageId)),
		onImageDescriptionUpdate: (imageId, description) => dispatch(imageDescriptionUpdateAction(imageId, description)),
		onImageDelete: (imageId) => dispatch(imageDeleteAction(imageId)),
		onExit: () => dispatch(exitImagePageAction())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);