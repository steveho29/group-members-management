import logging
from django.shortcuts import render
from rest_framework import serializers, viewsets, status, permissions
from rest_framework.response import Response
from django.http import HttpResponseRedirect
from rest_framework.decorators import action
from django.db import models
from group.models import Group, Member
from user.models import User
from user.views import UserSerializer
from django.contrib.auth.base_user import BaseUserManager
# Create your views here.
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model=Group
        fields= "__all__"


class CreateGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model=Group
        fields= "__all__"
        extra_kwargs = {'co_owner': {'read_only': True}}


class MemberSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    # group = GroupSerializer()
    class Meta:
        model=Member
        exclude = ['group']



class InviteMemberSerializer(serializers.Serializer):
    email = serializers.EmailField()

class KickMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model=Member
        fields = ['user']

class ListGroupSerializer(serializers.ModelSerializer):
    owner = UserSerializer()
    co_owner = UserSerializer()
    members = MemberSerializer(many=True)
    class Meta:
        model=Group
        fields= "__all__"


class RetrieveGroupSerializer(serializers.ModelSerializer):
    owner = UserSerializer()
    co_owner = UserSerializer()
    members = MemberSerializer(many=True)
    class Meta:
        model=Group
        fields= "__all__"

class IsOwnerOrAdmin(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        logging.getLogger().error(obj.owner)
        return obj.owner.id == request.user.id or request.user.is_admin


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all().order_by('-created_at')
    serializer_class = GroupSerializer

    def get_serializer_class(self):
        match self.action:
            case 'create':
                return CreateGroupSerializer
            case 'list':
                return ListGroupSerializer
            case 'retrieve':
                return ListGroupSerializer
            case 'invite':
                return InviteMemberSerializer
            case 'join':
                return None
            case 'kick':
                return KickMemberSerializer
            case _:
                return GroupSerializer
    
    def get_permissions(self):
        match self.action:
            case 'update':
                return [IsOwnerOrAdmin()]
            case 'detele':
                return [IsOwnerOrAdmin()]
            case 'invite':
                return [IsOwnerOrAdmin()]
            case 'join':
                return []
            case 'kick':
                return [IsOwnerOrAdmin()]
            
        return [permissions.IsAuthenticated()]

    def list(self, request):
        userId = request.query_params.get('user')
        if userId:
            try:
                serializer = MemberSerializer(
                    instance=Member.objects.filter(user=userId), many=True)
                return Response(data=serializer.data)
            except Exception as e:
                return Response(data={'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return super().list(request)

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)

    # def create(self, request, *args, **kwargs):
    #     res = super().create(request, *args, **kwargs)
    #     group = Group(res.data.get('id'))
    #     owner = Member()
    #     owner.user = request.user
    #     owner.group = group
    #     owner.save()

    #     if request.data.get('co_owner'):
    #         co_owner = Member()
    #         co_owner.user = User(request.data.get('co_owner'))
    #         co_owner.group = group 
    #         co_owner.save()

    #     return res 

    @action(methods=['POST'], detail=True)
    def invite(self, request, **kwargs):
        group = self.get_object()
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(data={'error': f'User with email {email} does not exists!'}, status=status.HTTP_400_BAD_REQUEST)
        member, isNew = Member.objects.get_or_create(user=user, group=group)
        if member.is_active:
            return Response(data={'error': f'Already in {group.name}'}, status=status.HTTP_400_BAD_REQUEST)
        if not isNew:
            return Response(data={'error': f'Already invited to {group.name}'}, status=status.HTTP_400_BAD_REQUEST)
        member.invite_code = BaseUserManager().make_random_password(length=50)
        member.save()

        link = 'https://' if request.is_secure() else 'http://'
        link += request.get_host() + '/api/group/' + f'{group.id}/join?user_id={user.id}&invite_code={member.invite_code}'
        logging.getLogger().error(link)
        return Response(data={'msg': f'Email Invitation has been sent to {email}'}, status=status.HTTP_200_OK)


    @action(methods=['GET'], detail=True)
    def join(self, request, pk):
        invite_code = request.GET.get('invite_code')
        user_id = request.GET.get('user_id')
        try:
            member = Member.objects.get(user=user_id, group=pk)
            if member.invite_code != invite_code:
                raise Member.DoesNotExist()
        except Member.DoesNotExist:
            return Response({'error': 'Oops! Invalid Invitation'}, status=status.HTTP_400_BAD_REQUEST)
        member.is_active = True
        member.invite_code = None
        member.save()
        return Response({'code': invite_code, 'groupId': pk})
        return HttpResponseRedirect(redirect_to='https://google.com')
        
    @action(methods=['POST'], detail=True)
    def kick(self, request, **kwargs):
        group = self.get_object()
        user = request.data.get('user')
        try:
            Member.objects.get(user=user, group=group).delete()
        except Member.DoesNotExist:
            return Response(data={'error': 'Member does not in this group'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'error': f'Member kicked!'}, status=status.HTTP_204_NO_CONTENT)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        request.data.owner = request.user
        return super().create(request, *args, **kwargs)