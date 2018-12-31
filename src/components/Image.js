import React from 'react';
import PropTypes from 'prop-types';
import { Image as CloudinaryImage } from 'cloudinary-react';

const Image = (props) => {
	return (
		<CloudinaryImage type="fetch" cloudName="ysa23" width={props.width} height={props.height} publicId={props.url} crop="fill" alt={props.alt} />
	);
};

Image.propTypes = {
	url: PropTypes.string,
	alt: PropTypes.string.optional,
	width: PropTypes.number.optional,
	height: PropTypes.number.optional
};

export default Image;