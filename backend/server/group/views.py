from django.shortcuts import render
from rest_framework import serializers, viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action

from group.models import Group, Member
from user.views import UserSerializer
# Create your views here.
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model=Group
        fields= "__all__"


class MemberSerializer(serializers.ModelSerializer):
    info = UserSerializer()
    # group = GroupSerializer()
    class Meta:
        model=Member
        exclude = ['group', 'user']

class CreateMemberSerializer(serializers.ModelSerializer):
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
        return obj.owner == request.user.id or request.user.is_admin


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all().order_by('-created_at')
    serializer_class = GroupSerializer

    def get_serializer_class(self):
        match self.action:
            case 'list':
                return ListGroupSerializer
            case 'retrieve':
                return ListGroupSerializer
            case 'members':
                return CreateMemberSerializer
            case _:
                return GroupSerializer
    
    def get_permissions(self):
        match self.action:
            case 'update':
                return [IsOwnerOrAdmin()]
            case 'detele':
                return [IsOwnerOrAdmin()]
            case 'members':
                return [IsOwnerOrAdmin()]
        return []

    def list(self, request):
        userId = request.query_params.get('user_id')
        if userId:
            try:
                serializer = MemberSerializer(
                    instance=Member.objects.filter(user=userId), many=True)
                return Response(data=serializer.data)
            except Exception as e:
                return Response(data={'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return super().list(request)

    @action(methods=['POST', 'DELETE'], detail=True)
    def members(self, request, **kwargs):
        match request.method:
            case 'GET':
                return self.getContributors()
            case 'POST':
                return self.addMember(request)
            case 'DELETE':
                return self.kickMember(request)

    def addMember(self, request):
        group = self.get_object()
        member = request.data['user_id']
        result = Member.objects.get_or_create(user=member, group=group)
        isNew = result[1]
        if not isNew:
            return Response(data={'error': f'Already added to this group {group.name}'}, status=status.HTTP_400_BAD_REQUEST)
        body = {
            'to': member, 
            'title': f'Welcome to Project {group.name}', 
            'subtitle': f'You have been added to {group.name} project', 
            'type': 'Contributor Project', 
            'content': f'You have been added to {group.name} project'
        }
        # emailService.publish(body)
        return Response(data={'user_id': member, 'group': group.name, 'result': str(result)}, status=status.HTTP_200_OK)

    def kickMember(self, request):
        if not request.query_params.get('user_id'):
            return Response(data={'error': 'Missing param user_id'}, status=status.HTTP_400_BAD_REQUEST)

        project = self.get_object()
        user_id = request.query_params.get('user_id')
        try:
            Member.objects.get(user_id=user_id, project=project).delete()
            body = {
                'to': user_id, 
                'title': f'Remove from Project {project.name}', 
                'subtitle': f'You have been removed from {project.name} project', 
                'type': 'Contributor Project', 
                'content': f'You have been removed from {project.name} project'
            }
            # emailService.publish(body)
        except Exception as e:
            return Response(data={'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)





class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all().order_by('group')
    serializer_class = CreateMemberSerializer

    