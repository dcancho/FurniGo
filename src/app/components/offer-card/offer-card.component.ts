import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [
		MatCardModule,
		MatButtonModule
	],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.sass'
})
export class OfferCardComponent {

}
