from django.db import models

class Transaction(models.Model):
  text = models.CharField(max_length=100)
  amount = models.FloatField(null = False)
  created_at = models.DateTimeField(auto_now_add=True)
