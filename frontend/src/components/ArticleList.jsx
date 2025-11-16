import React from 'react';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      <h2>Knowledge Base Articles</h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h3>{article.title}</h3>
            <span className="category">{article.category}</span>
            <button className="btn-read">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
