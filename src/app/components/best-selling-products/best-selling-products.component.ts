import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-selling-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-selling-products.component.html',
  styleUrl: './best-selling-products.component.css'
})
export class BestSellingProductsComponent {
  products = [
    {
      name: 'Stylish Cricket & Walking Light Weight Shoes',
      oldPrice: '$280',
      newPrice: '$140.00',
      rating: 4,
      onSale: true,
      image: 'https://placehold.co/200x200?text=Shoes'
    },
    {
      name: 'Combo Pack of 2 Sports Shoes Running Shoes',
      oldPrice: '$320',
      newPrice: '$280.00',
      rating: 4,
      onSale: false,
      image: 'https://placehold.co/200x200?text=Running+Shoes'
    },
    {
      name: 'Combo Pack of 2 Sports Shoes Running Shoes',
      oldPrice: '$320',
      newPrice: '$280.00',
      rating: 4,
      onSale: false,
      image: 'https://placehold.co/200x200?text=Running+Shoes'
    }
  ];
}
