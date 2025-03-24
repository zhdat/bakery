from django.shortcuts import render
from rest_framework import generics

from .models import Product, Order, OrderItem
from .serializer import ProductSerializer, OrderSerializer, OrderItemSerializer


# Create your views here.

# Liste des produits
class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Détail d'un produit
class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Liste des commandes
class OrderListView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

# Détail d'une commande
class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
