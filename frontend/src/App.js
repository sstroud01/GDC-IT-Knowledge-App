import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Mock data - in production, this would fetch from backend API
    setArticles([
      { id: 1, title: 'Getting Started with React', category: 'Tutorial' },
      { id: 2, title: 'API Documentation Guide', category: 'Reference' },
      { id: 3, title: 'Troubleshooting Common Issues', category: 'Support' },
      { id: 4, title: 'Best Practices for Development', category: 'Guide' }
    ]);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <ArticleList articles={articles} />
      </main>
    </div>
  );
}

export default App;
