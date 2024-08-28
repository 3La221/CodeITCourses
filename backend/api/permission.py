from rest_framework.permissions import BasePermission

class SameStudentRequest(BasePermission):
    def has_permission(self, request, view):
        student_id = request.data.get('student_id')
        if request.user.is_authenticated:
            return str(request.user.id)==student_id
        return False