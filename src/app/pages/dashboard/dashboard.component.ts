import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { DashboardCardsComponent } from '../../components/dashboard-cards/dashboard-cards.component';
import { ChartsComponent } from '../../components/charts/charts.component';
import { TablesComponent } from '../../components/tables/tables.component';
import { SpendingChartComponent } from '../../components/spending-chart/spending-chart.component';
import { CustomerReviewsComponent } from '../../components/customer-reviews/customer-reviews.component';
import { RecentConversationsComponent } from '../../components/recent-conversations/recent-conversations.component';
import { BestSellingProductsComponent } from '../../components/best-selling-products/best-selling-products.component';
import { TasksComponent } from '../../components/tasks/tasks.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent, 
    DashboardCardsComponent, 
    ChartsComponent, 
    TablesComponent,
    SpendingChartComponent,
    CustomerReviewsComponent,
    RecentConversationsComponent,
    BestSellingProductsComponent,
    TasksComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {}
