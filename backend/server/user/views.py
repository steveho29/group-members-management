from rest_framework import serializers
from rest_framework import viewsets, status
from .models import User
from email.policy import default
from rest_framework import permissions

from .models import User
from rest_framework.decorators import action
from rest_framework.response import Response

from user.mail import send_verify_email
from django.contrib.auth.base_user import BaseUserManager

import logging


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password']

class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password', 'is_admin', 'email_verified']
    
    def to_representation(self, instance):
        return UserSerializer(instance=instance).data

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'is_admin': {'read_only': True}, 'is_active': {'read_only': True}, 'last_login': {'read_only': True}, 'email_verified': {'read_only': True}, 'password': {'write_only': True},}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def to_representation(self, instance):
        return UserSerializer(instance=instance).data

class ResetPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password']



class IsAdminOrIsSelf(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        return obj.id == request.user.id or request.user.is_admin


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    http_method_names = ['get', 'post', 'put']
    
    def get_permissions(self):
        match self.action:
            case 'create':
                permission_classes = []
            case 'delete':
                permission_classes = [permissions.IsAdminUser]
            case 'update':
                permission_classes = [IsAdminOrIsSelf]
            case 'reset_password':
                permission_classes = [IsAdminOrIsSelf]
            case 'send_verify_email':
                permission_classes = [IsAdminOrIsSelf]
            case 'verify_email':
                permission_classes = []
            case _:
                permission_classes = []
        return [permission() for permission in permission_classes]

    def get_serializer_class(self):
            match self.action:
                case 'create':
                    return CreateUserSerializer
                case 'update':
                    return UpdateUserSerializer
                case 'reset_password':
                    return ResetPasswordSerializer
                case 'verify_email':
                    return None
                case 'send_verify_email':
                    return None
                case _:
                    return UserSerializer

    @action(methods=['post'], detail=True, url_path='reset-password')
    def reset_password(self, request, pk):
        password = request.data.pop('password')
        user = self.get_object()
        user.set_password(password)
        user.save()
        return Response({'status': True})

    
    @action(methods=['post'], detail=False, url_path='send-verify-email')
    def send_verify_email(self, request):
        user = request.user
        user.email_code = BaseUserManager().make_random_password()
        user.save()
        link = 'http://' + request.get_host() + '/api/user/' + f'{user.id}/verify-email/?email_code={user.email_code}'
        logging.getLogger().error(link)
        send_verify_email(request.user, link)
        return Response({'msg': f'Verification Email has been sent to {user.email}'})

    
    @action(methods=['get'], detail=True, url_path='verify-email')
    def verify_email(self, request, pk):
        user = self.get_object()
        code = request.GET.get('email_code')
        user.email_verified = True
        user.email_code = None
        user.save()
        logging.getLogger().error(user.email)
        return Response({'email_verified': user.email_verified})


