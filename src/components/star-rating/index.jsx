import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';
import './style.css';

const StarRating = ({noOfStars = 5}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleHoverEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleLeave = () => {
    setHover(rating);
  };

  return [...Array(noOfStars)].map((_, index) => {
    index++;
    return (
      <FaStar
        key={index}
        onClick={() => handleClick(index)}
        onMouseEnter={() => handleHoverEnter(index)}
        onMouseLeave={() => handleLeave(index)}
        className={index <= (hover || rating) ? 'active' : 'inactive'}
        size={40}
      />
    );
  });
};

export default StarRating;
