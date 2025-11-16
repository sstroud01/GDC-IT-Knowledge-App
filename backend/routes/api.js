const express = require('express');
const router = express.Router();

// GET all knowledge articles
router.get('/articles', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, title: 'Getting Started', category: 'Tutorial' },
      { id: 2, title: 'API Documentation', category: 'Reference' }
    ]
  });
});

// GET single article by ID
router.get('/articles/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    success: true,
    data: { id, title: 'Sample Article', content: 'Article content here' }
  });
});

// POST create new article
router.post('/articles', (req, res) => {
  const { title, content, category } = req.body;
  res.status(201).json({
    success: true,
    message: 'Article created successfully',
    data: { id: Date.now(), title, content, category }
  });
});

// PUT update article
router.put('/articles/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  res.json({
    success: true,
    message: 'Article updated successfully',
    data: { id, title, content }
  });
});

// DELETE article
router.delete('/articles/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    success: true,
    message: `Article ${id} deleted successfully`
  });
});

module.exports = router;
