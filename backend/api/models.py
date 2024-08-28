from django.db import models
from django.contrib.auth.models import AbstractUser , UserManager
import uuid
from enum import Enum
from django.utils import timezone
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

# Create your models here.

class Level(Enum):
    BEGINNER = "beginner"
    INTERMEDIATE = "intermediate"
    ADVANCED = "advanced"

class Status(Enum):
    PENDING = "PENDING"
    DONE = "DONE"
    PAID = "PAID"

class Profile(AbstractUser):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False)
    first_name = models.CharField(max_length=50 , null=True , blank=True)
    last_name = models.CharField(max_length=50 , null=True , blank=True)
    phone_number = models.CharField(max_length=12,null=True,blank=True)
    email = models.EmailField(max_length=80,null=True,blank=True)
    active = models.BooleanField(default=True)


    PASSWORD_FIELD = "password"
    REQUIRED_FIELDS = []    
    
    objects = UserManager()


class Student(Profile):
    courses = models.ManyToManyField('Course',related_name="students")

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name} Student'
    
    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "Students"


class Course(models.Model):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False)
    title = models.CharField(max_length=60 , null=True , blank=True)
    desc = models.TextField()
    start_date = models.DateField()
    duration = models.PositiveIntegerField() # the unite is days   
    isOnline = models.BooleanField(default=False)
    isLive = models.BooleanField(default=False)
    cover = models.ImageField(upload_to='covers/',null=True,blank=True)
    level = models.CharField(max_length=20,choices=[(tag.name,tag.value) for tag in Level],default=Level.BEGINNER)
    nbr_sessions = models.PositiveSmallIntegerField(default=0)
    location = models.CharField(max_length=60,null=True,blank=True)

    

    def __str__(self) -> str:
        return f'{self.title} {self.level}'


class Module(models.Model):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False)
    title = models.CharField(max_length=60 , null=True , blank=True)
    course = models.ForeignKey(Course,on_delete=models.CASCADE,related_name="modules")

    def __str__(self) -> str:
        return f'{self.title}'
    

class ToLearn(models.Model):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False)
    title = models.CharField(max_length=60 , null=True , blank=True)
    course = models.ForeignKey(Course,on_delete=models.CASCADE,related_name="to_learn")

    def __str__(self) -> str:
        return f'{self.title}'
    

class Subscribtion(models.Model):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False)
    course = models.ForeignKey(Course,on_delete=models.CASCADE)
    student = models.ForeignKey(Student,on_delete=models.CASCADE)
    isPaid = models.BooleanField(default=False)
    diplome = models.FileField(upload_to='diplomes/',null=True,blank=True)
    subscription_date = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=20,choices=[(tag.value,tag.name) for tag in Status],default=Status.PENDING)

    

    def __str__(self) -> str:
        return f'{self.student} subscribed to {self.course}'


class Teacher(Profile):
    courses = models.ManyToManyField(Course,related_name="teachers")
    

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name} Teacher'
    
    class Meta:
        verbose_name = "Teacher"
        verbose_name_plural = "Teachers"

 
    
class LiveSession(models.Model):
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False)
    live_link = models.URLField(null=False, blank=False)
    datetime = models.DateTimeField(null=False, blank= False)
    duration = models.PositiveSmallIntegerField() # unite is minutes
    isDone = models.BooleanField(default=False)
    record_link = models.URLField(null=False , blank=True)
    module = models.ForeignKey(Module,on_delete=models.CASCADE,related_name="live_sessions")

    def __str__(self) -> str:
        return f'{self.teacher} {self.sub_chapter} : {self.group}'
    






