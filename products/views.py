# products/views.py
from django.shortcuts import render
from .models import Product

def product_list(request):
    products = Product.objects.all()
    return render(request, 'products/product_list.html', {'products': products})

def home(request):
    products = Product.objects.all()  # Obtén todos los productos
    return render(request, 'products/home.html', {'products': products})