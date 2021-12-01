from rest_framework.decorators import permission_classes
from rest_framework.serializers import Serializer
from expenses.models import Transaction
from rest_framework import viewsets, generics
from .serializer import TransactionSerializer

class TransactionViewSet(viewsets.ModelViewSet):
  serializer_class = TransactionSerializer
  queryset = Transaction.objects.all()


