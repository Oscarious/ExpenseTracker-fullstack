from rest_framework import routers, urlpatterns
from .api import TransactionViewSet

router = routers.DefaultRouter()
router.register('api/v1/transactions', TransactionViewSet, 'transactions')

urlpatterns = router.urls