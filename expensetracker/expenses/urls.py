from rest_framework import routers, urlpatterns
from django.urls import path
from .api import TransactionViewSet

router = routers.DefaultRouter()
router.register('api/v1/transactions', TransactionViewSet, 'transactions')

urlpatterns = router.urls