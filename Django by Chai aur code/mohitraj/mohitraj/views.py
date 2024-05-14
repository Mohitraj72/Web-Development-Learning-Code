from django.http import HttpResponse
from django.shortcuts import render

def home (request):
    # return HttpResponse("Hello, World. You are Now Here Home Page")
    return render(request, 'website/index.html' )


def about (request):
    return HttpResponse("Hello, World. You are Now Here about Page")


def contact (request):
    return HttpResponse("Hello, World. You are Now Here Contact Page")