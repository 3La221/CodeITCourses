from rest_framework.decorators import action
from rest_framework import viewsets , status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .models import *
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken
from .paginations import CustomPagination
from .filters import *
from django.db.models import Count,Avg
from rest_framework.permissions import IsAuthenticated,IsAdminUser,IsAuthenticatedOrReadOnly,AllowAny
from .permission import SameStudentRequest
from rest_framework.decorators import api_view

# Create your views here.




class StudentViewSet(viewsets.ModelViewSet):
      permission_classes_by_action = {
            "subscribe":[IsAuthenticated],
            "pay":[IsAuthenticated],
            "subscribtions":[IsAuthenticated],
            "login":[AllowAny]
      }

      def get_permissions(self):
            return [permission() for permission in self.permission_classes_by_action.get(self.action,[AllowAny])] #.get function if given an incorrect argument it return none without rasing any exception
      
      queryset = Student.objects.all()
      serializer_class = StudentSerializer

      def create(self, request, *args, **kwargs):
        # Call the default `create` method to create the user
        response = super().create(request, *args, **kwargs)
        
        # Authenticate the user immediately after creation
        user = authenticate(email=request.data.get("email"), password=request.data.get("password"))
        if user:
            tokens = RefreshToken.for_user(user)
            return Response(
                {
                    "refresh": str(tokens),
                    "access": str(tokens.access_token),
                    "user": StudentSerializer(user).data,
                },
                status=status.HTTP_201_CREATED
            )
        else:
            return Response({"message": "User created, but authentication failed."}, status=status.HTTP_400_BAD_REQUEST)

      

      @action(detail=False , methods=['POST'])
      def login(self,request):
            try:
                  email = request.data["email"]
                  password = request.data["password"]

                  user = authenticate(email=email,password=password)
                  if user :
                        tokens = RefreshToken.for_user(user)
                        return Response(
                              {
                                    "refresh": str(tokens),
                                    "access": str(tokens.access_token),
                                    "user": StudentSerializer(user).data
                              }
                        )
                  else:
                        return Response({"message":"Invalid credentials"},status=status.HTTP_401_UNAUTHORIZED)
            except KeyError:
                  return Response({"message":"You have to provide email and password"},status=status.HTTP_400_BAD_REQUEST)


      @action(detail=False, methods=['post'], url_path='subscribe/(?P<course_id>[^/.]+)')
      def subscribe(self,request,course_id=None):
            try:
                  course = Course.objects.get(id=course_id)
                  student = request.user.student
                  print("Student",student)
                  subscription , created = Subscribtion.objects.get_or_create(course=course,student=student)
                  if not created:
                        return Response({"message":"You are already subscribed to this course"},status=status.HTTP_400_BAD_REQUEST)
                  
                  subscription.save()
                  return Response({"message":"Subscribed successfully"},status=status.HTTP_200_OK)
            except Course.DoesNotExist:
                  return Response({"message":"Course not found"},status=status.HTTP_404_NOT_FOUND)
            
      
      @action(detail=False , methods=['POST'],url_path='pay/(?P<course_id>[^/.]+)')
      def pay(self,request,course_id=None):
            try:
                  student = request.user.student
                  subscription = Subscribtion.objects.get(course_id=course_id,student=student)
                  subscription.isPaid = True
                  subscription.save()
                  return Response({"message":"Payment done successfully"},status=status.HTTP_200_OK)
            except Subscribtion.DoesNotExist:
                  return Response({"message":"Subscription not found"},status=status.HTTP_404_NOT_FOUND)
            except:
                  return Response({"message":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)
      
      @action(detail=False , methods=['GET'])
      def subscribtions(self,request):
            is_paid = request.query_params.get('isPaid', None)
            
            student = request.user.student
            subscriptions = Subscribtion.objects.filter(student=student)
            if is_paid:
                  is_paid = is_paid.lower() in ['true', '1', 't', 'y', 'yes']
                  subscriptions = subscriptions.filter(isPaid=is_paid)


            serializer = SubscriptionSerializer(subscriptions,many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
            
      

class SubscriptionViewSet(viewsets.ModelViewSet):
      queryset = Subscribtion.objects.all()
      serializer_class = SubscriptionSerializer
      pagination_class = CustomPagination

      #this function returns all the subscriptions he have payed for (all the course he is subscribed to)
      
            


class TeacherViewSet(viewsets.ModelViewSet):
      queryset = Teacher.objects.all()
      serializer_class = TeacherSerializer

      @action(detail=False , methods=['POST'])
      def login(self,request):
            try:
                  username = request.data["username"]
                  password = request.data["password"]
                  
                  user = authenticate(username=username,password=password)
                  if user :
                        tokens = RefreshToken.for_user(user)
                        return Response(
                              {
                                    "refresh": str(tokens),
                                    "access": str(tokens.access_token),
                                    "user": TeacherSerializer(user).data,
                                    "isTeacher":True
                              },status=status.HTTP_202_ACCEPTED
                        )
                  else:
                        return Response({"message":"Invalid credentials"},status=status.HTTP_401_UNAUTHORIZED)
            except KeyError:
                  return Response({"message":"You have to provide username and password"},status=status.HTTP_400_BAD_REQUEST)
      
      



class CourseViewSet(viewsets.ModelViewSet):
      queryset = Course.objects.all() # it's the same as objects.all this just adds additional fields to each instance 
      serializer_class = CourseSerializer
      pagination_class = CustomPagination #api/courses/?page=1&page_size=20
      filterset_class = CourseFilter


class LiveSessionViewSet(viewsets.ModelViewSet):
      queryset = LiveSession.objects.all()
      serializer_class = LiveSessionSerializer
      filterset_class = LiveSessionFilter # filter by teacher,group,spec




@api_view(['GET'])
def get_fb_pixel(request):
      try:
            admin = AdminInfo.objects.first()
            return Response({"facebook_pixel":admin.facebook_pixel},status=status.HTTP_200_OK)
      except:
            return Response({"message":"Something went wrong"},status=status.HTTP_400_BAD_REQUEST)
            