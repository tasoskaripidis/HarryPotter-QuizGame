import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-entrance-page',
  imports: [],
  templateUrl: './entrance-page.component.html',
  styleUrl: './entrance-page.component.css',
})
export class EntrancePageComponent {
  constructor(private ser: ServiceService) {}

  PlayGame() {
    this.ser.joinGame();
  }
}
