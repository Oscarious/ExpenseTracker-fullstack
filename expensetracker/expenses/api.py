from expenses.models import Transaction
from .serializers import TransactionSerializer

from rest_framework import viewsets, generics
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from rest_framework.serializers import Serializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework.response import Response
from knox.auth import TokenAuthentication
from itertools import groupby

class TransactionViewSet(viewsets.ModelViewSet):
  authentication_classes = (TokenAuthentication, )
  permission_classes = (IsAuthenticated,)
  serializer_class = TransactionSerializer

  def get_queryset(self):
    return self.request.user.transactions.all()

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)

class TransactionViewAPI(APIView):
  authentication_classes = (TokenAuthentication, )
  permission_classes = (IsAuthenticated,)

  def get(self, request):
    queried_data = request.user.transactions.all().order_by('-created_at').values()
    groups = groupby(queried_data, key=lambda item : item['created_at'])
    result = {str(key): list(group) for key, group in groups}
    return Response(result)