from rest_framework import routers
from .views import GroupViewSet, MemberViewSet


router = routers.DefaultRouter()
router.register('', GroupViewSet)
# router.register('member', MemberViewSet)