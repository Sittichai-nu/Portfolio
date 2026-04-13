#!/bin/bash

# Build script for Azure deployment

# Install Python dependencies
pip install -r requirements.txt

# Build React frontend
cd client
npm install
npm run build
cd ..

# Collect Django static files
python manage.py collectstatic --noinput

# Run database migrations
python manage.py migrate --noinput
