from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
    path('api/contact/', include('contact.urls')),
    path('api/chat/', include('chat.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# In production, serve React frontend for all non-API/admin routes
if not settings.DEBUG:
    urlpatterns += [
        re_path(r'^(?!api/|admin/|static/|media/).*$',
                TemplateView.as_view(template_name='index.html'),
                name='frontend'),
    ]
