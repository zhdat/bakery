import os

import django
from faker import Faker
from django.conf import settings
from django.core.files import File


# Configuration de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bakery.settings')

django.setup()

from shop.models import Product, Order, OrderItem, Category
from decimal import Decimal


# Initialisation de Faker
fake = Faker()

image_folder = os.path.join(settings.BASE_DIR, 'media')

def create_fake_categories():
    """Créer des catégories fictives"""
    categories = []
    for _ in range(3):
        category = Category.objects.create(
            name = fake.word(),
        )
        categories.append(category)
    return categories

def create_fake_products(categories):
    """Créer des produits fictifs"""
    products = []
    for _ in range(10):  # Crée 10 produits fictifs
        product = Product.objects.create(
            name=fake.word(),
            price=Decimal(fake.random_number(digits=2)),
            category=categories[fake.random_int(min=0, max=len(categories) - 1)],
        )
        image_filename = fake.random_element(elements=os.listdir(image_folder))
        image_path = os.path.join(image_folder, image_filename)
        with open(image_path, 'rb') as image_file:
            product.image_url.save(image_filename, File(image_file), save=True)
        products.append(product)
    return products

def create_fake_orders(products):
    """Créer des commandes fictives"""
    for _ in range(5):  # Crée 5 commandes fictives
        order = Order.objects.create(
            client_name=fake.name(),
            email=fake.email(),
            total_price=Decimal(fake.random_number(digits=3)),
        )
        for _ in range(3):  # Chaque commande a 3 produits
            OrderItem.objects.create(
                order=order,
                product=products[fake.random_int(min=0, max=len(products) - 1)],
                quantity=fake.random_int(min=1, max=3),
                subtotal=Decimal(fake.random_number(digits=2)),
            )

def main():
    """Fonction principale pour générer et insérer les données"""
    print("Création de fausses données...")
    categories = create_fake_categories()
    products = create_fake_products(categories)  # Crée des produits fictifs
    create_fake_orders(products)      # Crée des commandes fictives
    print("Données fictives créées avec succès !")

if __name__ == '__main__':
    main()
