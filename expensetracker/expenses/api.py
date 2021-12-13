from expenses.models import Transaction
from .serializers import TransactionSerializer

from rest_framework import viewsets, generics
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from rest_framework.serializers import Serializer
from rest_framework.permissions import IsAuthenticated
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