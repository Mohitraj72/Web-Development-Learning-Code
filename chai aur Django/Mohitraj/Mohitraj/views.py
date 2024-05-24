from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("Hello, World. you are at Home Now Page ")
    return render(request, 'website/index.html')


def about(request):
    return HttpResponse("Hello, World. you are at about Page ")

def contact(request):
    return HttpResponse("Hello, World. you are at contact Page ")