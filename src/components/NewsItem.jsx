import React from 'react';

const NewsItem = ({news}) => {
  return (
   news.urlToImage ?(
    <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{ maxWidth:"345px" }}>
      <img src={news.urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{news.title.slice(0,50)}</h5>
      <p className="card-text">{news.description? `${news.description.slice(0,100)} ...`:""}</p>
        <a href={news.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
      </div>
    </div>):(
    <div className='d-none'></div>
    )
  );
};

export default NewsItem;
