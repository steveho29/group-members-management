from django.contrib.auth.hashers import make_password
from rest_framework.utils import json
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from rest_framework_simplejwt.tokens import RefreshToken
from authjwt.urls import EmailTokenObtainSerializer
from user.models import SOCIAL_AUTH_PLATFORM, User
from user.views import CreateUserSerializer
from django.contrib.auth.base_user import BaseUserManager
import logging

class GoogleView(APIView):
    def post(self, request):
        logging.getLogger().error(request.data) 
        payload = {'id_token': request.data.get("credential")}
        data = requests.get('https://oauth2.googleapis.com/tokeninfo', params=payload).json()
        
        logging.getLogger().error(data)

        if 'error' in data:
            content = {'message': 'wrong google token / this google token is already expired.'}
            return Response(content)

        # Create user if not exist
        try:
            user = User.objects.get(email=data['email'])
        except User.DoesNotExist:
            user = User()
            user.set_password(BaseUserManager().make_random_password())
            user.email = data['email']
            user.social_auth = SOCIAL_AUTH_PLATFORM.GOOGLE
            user.first_name = data.get('given_name')
            user.last_name = data.get('family_name')
            user.avatar = data.get('picture')
            user.save()

        serializer = EmailTokenObtainSerializer()
        token = serializer.get_token(user)
        return Response({'access_token': str(token.access_token), 'refresh_token': str(token)})