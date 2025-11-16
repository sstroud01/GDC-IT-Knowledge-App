# GDC IT Knowledge Base Application# GDC IT Knowledge Base & Ticket Assistant



## 📋 Project OverviewA full-stack IT support platform designed for GDC employees and IT staff. The system provides a searchable knowledge base, ticketing system, and AI-powered troubleshooting assistant.

The **GDC IT Knowledge Base** is a full-stack web application designed to centralize IT documentation, troubleshooting guides, and technical resources for Georgia Dixie College. This application provides a user-friendly interface for accessing and managing institutional IT knowledge.

## 🚀 Features

## 👥 Team Information- User authentication (JWT)

- **Developer**: Shane Stroud (sstroud01)- Knowledge base articles with search & filtering

- **Institution**: Georgia Dixie College- Ticket submission + IT dashboard

- **Course**: ITSC 3155 - Software Engineering- AI troubleshooting (OpenAI API)

- **Semester**: Fall 2025- Dockerized services (frontend, backend, database)

- CI/CD pipeline with GitHub Actions

## 🏗️ Architecture- Cloud deployment (Render or AWS)



### Technology Stack## 🧰 Tech Stack

- **Frontend**: React 18.2.0, React Router, Axios- Frontend: React

- **Backend**: Node.js, Express.js 4.18.2- Backend: Node.js + Express

- **Containerization**: Docker & Docker Compose- Database: MongoDB

- **Version Control**: Git & GitHub- AI Integration: OpenAI API

- **Cloud Deployment**: Render.com- Deployment: Render / AWS

- **Project Management**: Jira- DevOps: Docker, GitHub Actions

- **Documentation**: Confluence

## 📌 Setup Instructions

### System Architecture```bash

```git clone <repo>

┌─────────────────┐      ┌─────────────────┐cd project

│  React Frontend │─────▶│  Express Backend│docker-compose up --build

│   (Port 3000)   │      │   (Port 5000)   │
└─────────────────┘      └─────────────────┘
         │                        │
         └────────────────────────┘
              Docker Compose
```

## 📁 Project Structure
```
GDC-IT-Knowledge-App/
├── backend/
│   ├── routes/
│   │   └── api.js          # API route handlers
│   ├── Dockerfile          # Backend container config
│   ├── package.json        # Backend dependencies
│   ├── server.js           # Express server entry point
│   └── .env.example        # Environment variables template
├── frontend/
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── ArticleList.jsx
│   │   │   └── ArticleList.css
│   │   ├── App.js          # Main React component
│   │   ├── App.css
│   │   ├── index.js        # React entry point
│   │   └── index.css
│   ├── Dockerfile          # Frontend container config
│   └── package.json        # Frontend dependencies
├── docker-compose.yml      # Multi-container orchestration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Docker Desktop (for containerized deployment)
- Git

### Local Development Setup

#### Backend Setup
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:5000
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
# Application runs on http://localhost:3000
```

### Docker Deployment

#### Build and Run with Docker Compose
```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop all services
docker-compose down
```

#### Individual Container Commands
```bash
# Build backend
docker build -t gdc-backend ./backend

# Build frontend
docker build -t gdc-frontend ./frontend

# Run backend container
docker run -p 5000:5000 gdc-backend

# Run frontend container
docker run -p 3000:3000 gdc-frontend
```

## 🌐 API Documentation

### Base URL
- **Local**: `http://localhost:5000/api`
- **Production**: `https://[your-render-backend-url]/api`

### Endpoints

#### Health Check
```
GET /health
Response: { "status": "OK", "message": "Server is running" }
```

#### Articles

**Get All Articles**
```
GET /api/articles
Response: {
  "success": true,
  "data": [
    { "id": 1, "title": "Getting Started", "category": "Tutorial" },
    { "id": 2, "title": "API Documentation", "category": "Reference" }
  ]
}
```

**Get Single Article**
```
GET /api/articles/:id
Response: {
  "success": true,
  "data": { "id": 1, "title": "Sample Article", "content": "Article content here" }
}
```

**Create Article**
```
POST /api/articles
Body: { "title": "New Article", "content": "Content", "category": "Tutorial" }
Response: {
  "success": true,
  "message": "Article created successfully",
  "data": { "id": 1234567890, "title": "New Article", ... }
}
```

**Update Article**
```
PUT /api/articles/:id
Body: { "title": "Updated Title", "content": "Updated content" }
Response: {
  "success": true,
  "message": "Article updated successfully",
  "data": { "id": 1, "title": "Updated Title", ... }
}
```

**Delete Article**
```
DELETE /api/articles/:id
Response: {
  "success": true,
  "message": "Article 1 deleted successfully"
}
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

#### Frontend
React environment variables can be added to `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🌍 Cloud Deployment

### Render.com Deployment

#### Backend Deployment
1. Go to https://render.com
2. Click **New → Web Service**
3. Connect GitHub repository: `sstroud01/GDC-IT-Knowledge-App`
4. Configure:
   - **Name**: gdc-backend
   - **Root Directory**: backend
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: Add PORT=5000
5. Click **Create Web Service**
6. **Backend URL**: `https://[your-backend-url].onrender.com`

#### Frontend Deployment
1. Click **New → Static Site**
2. Connect same repository
3. Configure:
   - **Name**: gdc-frontend
   - **Root Directory**: frontend
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build`
4. Click **Create Static Site**
5. **Frontend URL**: `https://[your-frontend-url].onrender.com`

**Note**: Free tier deployments may spin down after inactivity and take 30-50 seconds to restart.

## 📊 Project Management

### Git Workflow
This project follows a feature branch workflow:

1. **Main Branch**: Production-ready code
2. **Feature Branches**:
   - `feature/backend` - Backend API development
   - `feature/frontend` - React UI development
   - `feature/docker` - Docker containerization

### Branch Commands
```bash
# Create feature branch
git checkout -b feature/branch-name

# Push to remote
git push -u origin feature/branch-name

# Merge via Pull Request on GitHub
```

### Commit Convention
- `feat:` New features
- `fix:` Bug fixes
- `chore:` Maintenance tasks
- `docs:` Documentation updates
- `style:` Code formatting
- `refactor:` Code restructuring

### Pull Requests
All feature branches require Pull Request approval before merging to main:
- ✅ `feature/backend` → `main`
- ✅ `feature/frontend` → `main`
- ✅ `feature/docker` → `main`

## 📚 Documentation

### Confluence Pages
Complete project documentation available on Confluence:
1. **Project Overview & Architecture**
2. **API Documentation & Endpoints**
3. **Docker Deployment Guide**
4. **Development Setup & Guidelines**

### Jira Project Management
- **Project**: GDC IT Knowledge Base
- **Board**: Scrum Board
- **Sprint 1**: Initial MVP Development
  - Backend API Implementation
  - Frontend UI Components
  - Docker Containerization
  - Cloud Deployment

## 🧪 Testing

### Manual Testing
```bash
# Test backend API
curl http://localhost:5000/health
curl http://localhost:5000/api/articles

# Test frontend
# Open browser: http://localhost:3000
```

### Docker Testing
```bash
# Verify containers are running
docker ps

# Check container logs
docker-compose logs backend
docker-compose logs frontend

# Test backend from frontend container
docker exec -it [frontend-container-id] curl backend:5000/health
```

## 🔐 Security Notes
- No sensitive data is committed to repository
- Environment variables stored in `.env` (gitignored)
- API currently has no authentication (future enhancement)
- CORS enabled for development purposes

## 📈 Future Enhancements
- [ ] User authentication & authorization
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Full CRUD UI implementation
- [ ] Search functionality
- [ ] Category filtering
- [ ] File upload support
- [ ] Admin dashboard
- [ ] API rate limiting
- [ ] Unit & integration tests
- [ ] CI/CD pipeline

## 🐛 Known Issues
- Frontend currently uses mock data
- No persistent database (data resets on restart)
- No error handling middleware
- No input validation
- Free tier Render deployments may have cold start delays

## 📞 Support & Contact
- **Developer**: Shane Stroud
- **Email**: sstroud01@georgiadixie.edu
- **GitHub**: https://github.com/sstroud01
- **Repository**: https://github.com/sstroud01/GDC-IT-Knowledge-App

## 📄 License
This project is developed for educational purposes as part of ITSC 3155 coursework at Georgia Dixie College.

## 🙏 Acknowledgments
- Georgia Dixie College IT Department
- ITSC 3155 Software Engineering Course
- React & Node.js Communities
- Docker Documentation
- Render.com Platform

---

**Last Updated**: November 16, 2025  
**Version**: 1.0.0 (MVP)  
**Status**: ✅ Active Development
