import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  products = [
    { name: 'ByeWind', date: 'Jun 24, 2022', amount: '$942.00', status: 'In Progress', statusColor: 'purple' },
    { name: 'Natali Craig', date: 'Mar 10, 2022', amount: '$881.00', status: 'Complete', statusColor: 'green' },
    { name: 'Drew Cano', date: 'Nov 10, 2022', amount: '$409.00', status: 'Pending', statusColor: 'blue' },
    { name: 'Orlando Diggs', date: 'Dec 20, 2022', amount: '$953.00', status: 'Approved', statusColor: 'orange' },
    { name: 'Andi Lane', date: 'Jul 25, 2022', amount: '$907.00', status: 'Rejected', statusColor: 'gray' }
  ];
}
