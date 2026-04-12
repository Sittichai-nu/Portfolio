# Portfolio

A professional full-stack portfolio web application built with Django and React.

## Tech Stack

- **Backend:** Django 5.1, Django REST Framework, SQLite
- **Frontend:** React 18, Vite, Tailwind CSS, React Router
- **Features:** Contact form with email auto-reply, AI chat assistant, admin content management

## Setup

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm

### Backend

```bash
# Create and activate virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Create .env file with required variables
cp .env.example .env  # then edit with your values

# Run migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start server
python manage.py runserver
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the project root:

```
SECRET_KEY=your-django-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
AI_API_KEY=your-ai-api-key
AI_MODEL=your-ai-model
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your@email.com
EMAIL_HOST_PASSWORD=your-app-password
EMAIL_USE_TLS=True
```

## Usage

1. Start the backend: `python manage.py runserver`
2. Start the frontend: `cd client && npm run dev`
3. Open `http://localhost:5173` to view the site
4. Open `http://127.0.0.1:8000/admin/` to manage content

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/profile/ | Get profile info |
| GET | /api/skills/ | List all skills |
| GET | /api/projects/ | List all projects |
| GET | /api/experience/ | List work experience |
| GET | /api/education/ | List education |
| POST | /api/contact/ | Submit contact form |
| POST | /api/chat/ | Send chat message |
