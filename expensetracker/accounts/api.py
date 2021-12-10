from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from knox.auth import TokenAuthentication
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer

# Register api
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response({
      "user": UserSerializer(user).data,
      "token": AuthToken.objects.create(user)[1]
    })

# login api
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    _, token = AuthToken.objects.create(user)
    return Response({
      "user": UserSerializer(user).data,
      "token": token
    })

# Get User API
class UserAPI(generics.RetrieveAPIView):
  permission_classes = (permissions.IsAuthenticated,)
  authentication_classes = (TokenAuthentication, )
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user