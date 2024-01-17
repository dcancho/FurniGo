import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
		MatCardModule,
		MatButtonModule,
		MatIconModule
	],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.sass'
})
export class ItemCardComponent {

}
