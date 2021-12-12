from rest_framework import routers, urlpatterns
from django.urls import path
from .api import TransactionViewSet, TransactionViewAPI

router = routers.DefaultRouter()
router.register('api/v1/transactions', TransactionViewSet, 'transactions')

urlpatterns = router.urls

urlpatterns.append(path('api/v1/transactions-by-date', TransactionViewAPI.as_view()))