from rest_framework import permissions
from rest_framework.permissions import BasePermission


class PostUserWritePermissions(BasePermission):
    message = 'editing posts is restricted for author only'

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.author == request.user