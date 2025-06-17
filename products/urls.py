from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Ruta para la página principal
    path('productos/', views.product_list, name='product_list'),  # Ruta para los productos
    # Otras rutas...
]
