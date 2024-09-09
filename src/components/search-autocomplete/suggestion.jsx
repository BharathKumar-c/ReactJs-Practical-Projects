import React from 'react';

const Suggestion = ({data, handleSuggestionClick}) => {
  return (
    <div className="suggestion-container">
      <ul>
        {data?.length > 0 &&
          data.map((item, index) => (
            <li onClick={handleSuggestionClick} key={index}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Suggestion;
