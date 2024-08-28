from rest_framework import serializers

from .models import *

from .utils import get_serializer_class_for_model


class StudentSerializer(serializers.ModelSerializer):
      
      
      class Meta:
            model = Student
            fields = ['id','first_name','last_name','password','phone_number','username','email']
      
     

      def create(self, validated_data):
        student = Student.objects.create_user(**validated_data)
        return student


class TeacherSerializer(serializers.ModelSerializer):

      class Meta:
            model = Teacher
            fields = ['first_name','last_name','password','phone_number','username','email']
      

      def create(self, validated_data):
        specs = validated_data.pop('specs',[])
        teacher = Teacher.objects.create_user(**validated_data)
        if specs:
            teacher.specs.set(specs)
        return teacher
      
      
class CourseSerializer(serializers.ModelSerializer):
      modules = serializers.StringRelatedField(many=True)
      to_learn = serializers.StringRelatedField(many=True)

      class Meta:
            model = Course
            fields = ['id','title','desc','start_date','duration','isOnline','isLive','cover','level','teachers','modules','to_learn','nbr_sessions', 'location']

            #added average rating and total subscribers



class LiveSessionSerializer(serializers.ModelSerializer):
      
      class Meta:
            model = LiveSession
            fields = ['id','live_link','datetime','duration','isDone','record_link','sub_chapter','teacher','group']


class SubscriptionSerializer(serializers.ModelSerializer):
      course = CourseSerializer()
      
      class Meta:
            model = Subscribtion
            fields = ['id','student','course','isPaid' , 'status','diplome','subscription_date']


      
