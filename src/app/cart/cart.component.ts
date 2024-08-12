import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  arr: any[] = [
    {
      id: 1,
      name: 'Classic Margherita Pizza',
      ingredients: [
        'Pizza dough',
        'Tomato sauce',
        'Fresh mozzarella cheese',
        'Fresh basil leaves',
        'Olive oil',
        'Salt and pepper to taste',
      ],
      tags: ['Pizza', 'Italian'],
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
      rating: 4.6,
      published: new Date(),
    },
    {
      id: 2,
      name: 'Vegetarian Stir-Fry',
      ingredients: [
        'Tofu, cubed',
        'Broccoli florets',
        'Carrots, sliced',
        'Bell peppers, sliced',
        'Soy sauce',
        'Ginger, minced',
        'Garlic, minced',
        'Sesame oil',
        'Cooked rice for serving',
      ],
      tags: ['Vegetarian', 'Stir-fry', 'Asian'],
      image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
      rating: 4.7,
      published: new Date(),
    },
    {
      id: 3,
      name: 'Chocolate Chip Cookies',
      ingredients: [
        'All-purpose flour',
        'Butter, softened',
        'Brown sugar',
        'White sugar',
        'Eggs',
        'Vanilla extract',
        'Baking soda',
        'Salt',
        'Chocolate chips',
      ],
      tags: ['Cookies', 'Dessert', 'Baking'],
      image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
      rating: 4.9,
      published: new Date(),
    },
    {
      id: 4,
      name: 'Chicken Alfredo Pasta',
      ingredients: [
        'Fettuccine pasta',
        'Chicken breast, sliced',
        'Heavy cream',
        'Parmesan cheese, grated',
        'Garlic, minced',
        'Butter',
        'Salt and pepper to taste',
        'Fresh parsley for garnish',
      ],
      tags: ['Pasta', 'Chicken'],
      image: 'https://cdn.dummyjson.com/recipe-images/4.webp',
      rating: 4.9,
    },
  ]

  
}
