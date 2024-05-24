from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, World. you are at Home Now Page ")

def about(request):
    return HttpResponse("Hello, World. you are at about Page ")

def contact(request):
    return HttpResponse("Hello, World. you are at contact Page ")