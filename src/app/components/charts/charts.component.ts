import { Component, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChartRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initChart();
    }
  }

  initChart() {
    const ctx = this.lineChartRef.nativeElement.getContext('2d');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'This year',
            data: [10, 15, 8, 20, 18, 25, 22],
            borderColor: '#1C1C1C',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0
          },
          {
            label: 'Last year',
            data: [12, 10, 15, 12, 22, 18, 20],
            borderColor: '#A1A1A1',
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.4,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10,
              callback: function(value) {
                return value + 'k';
              }
            },
            grid: {
              color: '#F1F3F5'
            }
          }
        }
      }
    });
  }
}
