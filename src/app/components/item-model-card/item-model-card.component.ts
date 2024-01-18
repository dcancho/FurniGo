import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-item-model-card',
  standalone: true,
  imports: [
		MatCardModule,
		MatButtonModule
	],
  templateUrl: './item-model-card.component.html',
  styleUrl: './item-model-card.component.sass'
})
export class ItemModelCardComponent {

}
