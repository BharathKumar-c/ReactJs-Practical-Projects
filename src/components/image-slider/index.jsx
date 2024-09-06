import React, {useCallback, useEffect, useState} from 'react';
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs';
import './style.css';

const ImageSlider = ({url, limit = 5, page = 1}) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchImages = useCallback(
    async (getUrl) => {
      setLoading(true);
      try {
        const request = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const response = await request.json();
        if (response) setImages(response);
        setLoading(false);
      } catch (error) {
        setErrorMsg(error);
        setLoading(false);
      }
    },
    [limit, page]
  );

  useEffect(() => {
    if (url) fetchImages(url);
  }, [fetchImages, url]);

  const handlePrevious = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };
  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  if (errorMsg) {
    return <div>{`Some error occures ${errorMsg.message}`}</div>;
  }

  if (loading) {
    return <div>Loading images! please wait.</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircle
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images &&
        images.length &&
        images.map((image, index) => (
          <img
            className={
              currentImage === index
                ? 'slide-image'
                : 'slide-image hide-img'
            }
            key={image.id}
            alt={image.download_url}
            src={image.download_url}
          />
        ))}
      <BsArrowRightCircle className="arrow arrow-right" onClick={handleNext} />
      <span className="indicator-container">
        {images &&
          images.length &&
          images.map((_, index) => (
            <div
              key={index}
              className={
                currentImage === index
                  ? 'circle-indicator active-indicator'
                  : 'circle-indicator inactive-indicator'
              }
            />
          ))}
      </span>
    </div>
  );
};

export default ImageSlider;
