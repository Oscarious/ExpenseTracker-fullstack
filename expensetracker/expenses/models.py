from django.db import models
from django.contrib.auth.models import User

class Transaction(models.Model):
  subject = models.CharField(max_length=100)
  amount = models.FloatField(null = False)
  comment = models.TextField(max_length=500, null=True)
  created_at = models.DateField(null=False)
  owner = models.ForeignKey(User, related_name="transactions", on_delete=models.CASCADE, null=True)
