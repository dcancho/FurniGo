import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
		CommonModule, 
		RouterOutlet, 
		NavbarComponent,
		BreadcrumbsComponent,
		ItemCardComponent
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'FurniGo';
}
