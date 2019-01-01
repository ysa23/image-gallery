import GalleryPage from './GalleryPage';
import connect from "react-redux/es/connect/connect";

function mapStateToProps(state) {
	return {
		images: state.gallery.images
	};
}

export default connect(mapStateToProps, null)(GalleryPage);