from django.urls import path
from django.conf.urls import url 
from frontend import views

app_name = 'frontend'

urlpatterns = [
    path('backend/', views.home, name='home'),
]