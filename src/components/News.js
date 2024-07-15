import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

const News = ({ category, pageSize, country }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);


  const fetchNews = useCallback(async (pageNo = 1) => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=0410744bb8704251823c4fd7492f86f8&page=${pageNo}&pageSize=${pageSize}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }, [category, country, pageSize]);

  useEffect(() => {
    fetchNews(page);
    
  }, [page, fetchNews]);

  useEffect(() => {
    document.title = category;
}, [category]);

  const handleNextClick = () => {
    setPage(page + 1);
    console.log("next");
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log("prev");
    }
  };

  return (
    <div className='container my-3'>
      <h2>NewsMonkey - Top {document.title = category}  Headlines</h2>
      <div className='row'>
        {articles.map((article, index) => (
          <div className='col-md-4' key={index}>
            <NewsItem 
              title={article.title}
              description={article.description} 
              imageurl={article.urlToImage || 'https://via.placeholder.com/150'}
              url={article.url}
              author={article.author}

              date={article.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-between'>
        <button type="button" className="btn btn-dark" onClick={handlePrevClick} disabled={page === 1}>
          Previous
        </button>
        <button type="button" className="btn btn-dark" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

export default News;
