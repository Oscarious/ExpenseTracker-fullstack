from django.urls import path, URLPattern
from . import views

urlpatterns = [
  path('', views.index),
  path('login/', views.index),
  path('register/', views.index)
]