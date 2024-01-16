import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [
		NgIf,
		NgFor
	],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.sass'
})
export class BreadcrumbsComponent {
	breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Product 1', url: '/products/1' },
  ];
}
