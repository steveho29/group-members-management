"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework import viewsets
from drf_spectacular.views import (
    SpectacularSwaggerView,
    SpectacularAPIView,
)

from authjwt.google_auth import GoogleView
from user.urls import router as UserRouter
from django.conf import settings 
from django.conf.urls.static import static  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='api-schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='api-schema'),
         name='api-docs'),

    path('api/auth/', include('authjwt.urls')),

    path('api/oauth/google', GoogleView.as_view(), name='google'),  # add path for google authentication

    path('api/user/', include(UserRouter.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
