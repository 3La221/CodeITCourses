from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

router = DefaultRouter()
router.register(r"student",StudentViewSet,basename="student")
router.register(r"teacher",TeacherViewSet,basename="teacher")
router.register(r"course",CourseViewSet,basename="course")
router.register(r"subscribtion",SubscriptionViewSet,basename="subscribtion")

urlpatterns = router.urls