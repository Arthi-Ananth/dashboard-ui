import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.css'
})
export class CustomerReviewsComponent {
  reviews = [
    { name: 'Sally D.', time: '20m ago', text: 'It is over qualified and easy to use, thank you.', rating: 5 },
    { name: 'Michael K.', time: '1 day ago', text: 'An improvement is needed asap.', rating: 2 },
    { name: 'Deniz T.', time: '1 day ago', text: 'Works well!', rating: 5 }
  ];
}
