import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-item-three-d-viewer',
  standalone: true,
  imports: [
		MatButtonModule,
		MatCardModule
	],
  templateUrl: './item-three-d-viewer.component.html',
  styleUrl: './item-three-d-viewer.component.sass'
})
export class ItemThreeDViewerComponent {

}
