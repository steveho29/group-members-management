from django.db import models
from user.models import User
# Create your models here.

class Group(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    avatar = models.ImageField(upload_to='images', null=True)
    owner = models.ForeignKey(to=User, related_name='owned_groups', null=False, on_delete=models.DO_NOTHING)
    co_owner = models.ForeignKey(to=User, related_name='co_owned_groups', null=True, on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True)

class Member(models.Model):
    user = models.ForeignKey(to=User, related_name='joined_groups', on_delete=models.CASCADE)
    group = models.ForeignKey(
        to=Group, related_name='members', on_delete=models.CASCADE)
    joined_at = models.DateTimeField( null=True)
    is_active = models.BooleanField(default=False)
    invite_code = models.CharField(max_length=100, null=True) 
    class Meta:
        unique_together = (('user', 'group'))
