from django.urls import path
from django.conf.urls import url 
from backend import views

app_name = 'backend'

urlpatterns = [
    path('', views.login_view, name='login_view'),
    path('home/', views.dash, name='dash'),
    path('register-page/', views.register_form, name='register_form'),
]