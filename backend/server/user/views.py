from rest_framework import serializers
from rest_framework import viewsets, status
from .models import User
from email.policy import default
from rest_framework import permissions

from .models import User
from rest_framework.decorators import action
from rest_framework.response import Response
import logging


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password']

class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password', 'is_admin', 'is_verified']
    
    def to_representation(self, instance):
        return UserSerializer(instance=instance).data

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'is_admin': {'read_only': True}, 'is_active': {'read_only': True}, 'last_login': {'read_only': True}, 'is_verified': {'read_only': True}, 'password': {'write_only': True},}

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
            case _:
                permission_classes = []
        return [permission() for permission in permission_classes]

    @action(methods=['post'], detail=True, url_path='reset-password')
    def reset_password(self, request):
        password = request.data.pop('password')
        user = self.get_object()
        user.set_password(password)
        user.save()
        return Response({'status': True})

    def get_serializer_class(self):
        match self.action:
            case 'create':
                return CreateUserSerializer
            case 'update':
                return UpdateUserSerializer
            case 'reset_password':
                return ResetPasswordSerializer
            case _:
                return UserSerializer