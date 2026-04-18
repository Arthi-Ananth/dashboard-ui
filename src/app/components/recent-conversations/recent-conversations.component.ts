import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-conversations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-conversations.component.html',
  styleUrl: './recent-conversations.component.css'
})
export class RecentConversationsComponent {
  chats = [
    { name: 'Geneva', message: 'Hello!', time: '10:00', type: 'incoming' },
    { name: 'Dominic', message: 'Hi, How are you? What about our next meeting?', time: '10:01', type: 'outgoing' },
    { name: 'Geneva', message: 'Yeah everything is fine', time: '10:01', type: 'incoming' },
    { name: 'Dominic', message: "Wow that's great", time: '10:02', type: 'outgoing' }
  ];
}
