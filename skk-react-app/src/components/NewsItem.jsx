import React from 'react';

const NewsItem = ({ title, image, description, url }) => {
  return (
    <div className="news-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

export default NewsItem;
