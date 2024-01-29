import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ItemThreeDViewerComponent } from './components/item-three-d-viewer/item-three-d-viewer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
		CommonModule, 
		RouterOutlet, 
		NavbarComponent,
		BreadcrumbsComponent,
		OrderDetailsComponent,
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'FurniGo';
}
