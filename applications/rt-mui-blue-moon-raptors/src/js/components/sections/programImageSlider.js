import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import * as _images from '../../../../data/imageGallery.json';
import * as _config from '../../../../data/config.json';

const programImageSlider = () => {
  const autoPlay = true;
  const images = _images.gallery;

  // update image URL
  for (let count = 0; count < images.length; count++) {
    if (images[count].original.indexOf(_config.assetBucket) <= -1) {
      images[count].original = _config.assetBucket + images[count].original;
    }
  }

  return <ImageGallery items={images} autoPlay={autoPlay} />;
};

export default programImageSlider;
