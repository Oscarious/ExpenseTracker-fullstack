from django.db.models import fields
from rest_framework import serializers
from expenses.models import Transaction

# transaction serializer
class TransactionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Transaction
    fields = '__all__'