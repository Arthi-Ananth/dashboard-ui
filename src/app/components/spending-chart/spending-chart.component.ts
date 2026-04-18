import { Component, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-spending-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spending-chart.component.html',
  styleUrl: './spending-chart.component.css'
})
export class SpendingChartComponent implements AfterViewInit {
  @ViewChild('donutChart') donutChartRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initChart();
    }
  }

  initChart() {
    const ctx = this.donutChartRef.nativeElement.getContext('2d');
    
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Server', 'Hosting', 'Services', 'Others'],
        datasets: [{
          data: [20, 45, 17, 18], // Sums to 100, visually approximate
          backgroundColor: ['#1C75FF', '#00D1B2', '#FF9F00', '#EBF1FF'],
          borderWidth: 0,
          hoverOffset: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
        rotation: -90,
        circumference: 360
      }
    });
  }
}
