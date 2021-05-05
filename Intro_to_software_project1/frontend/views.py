from django.shortcuts import render
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from frontend.models import *
# from django.contrib.auth.models import User
# from django.core.exceptions import ObjectDoesNotExist
# from backend.forms import *

# Create your views here.


def index(request):
    return render(request, 'frontend/index.html')

def home (request):
    return render(request, 'frontend/home.html')