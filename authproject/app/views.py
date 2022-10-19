from django.shortcuts import render

def view_name(request):
    return render(request, 'app.html', {})

# Create your views here.
