import { Component, AfterViewInit, PLATFORM_ID, Inject, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-cards.component.html',
  styleUrl: './dashboard-cards.component.css'
})
export class DashboardCardsComponent implements AfterViewInit {
  @ViewChildren('miniChart') miniCharts!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initMiniCharts(), 0);
    }
  }

  initMiniCharts() {
    const charts = this.miniCharts.toArray();
    
    // Total Profit: Stacked Multi-color Bars
    if (charts[0]) {
      new Chart(charts[0].nativeElement, {
        type: 'bar',
        data: {
          labels: ['1', '2', '3', '4', '5'],
          datasets: [
            {
              // Dark top segments
              data: [15, 10, 20, 12, 18],
              backgroundColor: '#4B4B5F', // Dark grey/purple
              borderRadius: 2,
              barThickness: 6
            },
            {
              // Red bottom segments
              data: [10, 8, 12, 8, 10],
              backgroundColor: '#FF5A5A', // Red
              borderRadius: 2,
              barThickness: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { 
            x: { stacked: true, display: false }, 
            y: { stacked: true, display: false } 
          }
        }
      });
    }

    // Total Growth: 3-Segment Donut Chart
    if (charts[1]) {
      new Chart(charts[1].nativeElement, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [40, 35, 25],
            backgroundColor: ['#6D728E', '#7B61FF', '#00DF6D'], // Dark, Purple, Green
            borderWidth: 0,
            hoverOffset: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '75%',
          plugins: { 
            legend: { display: false },
            tooltip: { enabled: false }
          }
        }
      });
    }
  }
}
