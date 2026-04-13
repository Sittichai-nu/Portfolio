#!/bin/bash

# Azure App Service startup script

# Run database migrations
python manage.py migrate --noinput

# Collect static files
python manage.py collectstatic --noinput

# Start Gunicorn
gunicorn server.wsgi --bind 0.0.0.0:$PORT --workers 2 --timeout 120
