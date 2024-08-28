
import django_filters
from .models import *

class CourseFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive search # GET /api/courses/?title=python
    teachers = django_filters.ModelMultipleChoiceFilter(queryset=Teacher.objects.all(), field_name='teachers') # GET /api/courses/?teachers=1,2,3
    isOnline = django_filters.BooleanFilter(field_name='isOnline') # GET /api/courses/?isOnline=True
    isLive = django_filters.BooleanFilter(field_name='isLive') # GET /api/courses/?isLive=True
    level = django_filters.ChoiceFilter(choices=[(tag,tag.value) for tag in Level], field_name='level') # GET /api/courses/?
    

    class Meta:
        model = Course
        fields = ['title', 'level' ,'isLive', 'isOnline' , 'teachers']



class LiveSessionFilter(django_filters.FilterSet):
    teacher = django_filters.ModelChoiceFilter(queryset=Teacher.objects.all())
    course = django_filters.ModelChoiceFilter(queryset=Course.objects.all())

    class Meta:
        model = LiveSession
        fields = ['teacher']

#return all questions with wrong answers || 