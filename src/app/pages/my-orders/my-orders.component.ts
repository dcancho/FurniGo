import { Component } from '@angular/core';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import Order from '../../domain/models/Order';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [
		ItemCardComponent
	],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.sass'
})
export class MyOrdersComponent {
	// Mock variable for the items
	items = [
		{
			"id": 1,
			"title": "Order 1",
			"clientId": 101,
			"budget": 5000,
			"status": "INLINE",
			"dueDate": "2022-12-31T00:00:00.000Z",
			"details": "Details for Order 1"
		},
		{
			"id": 2,
			"title": "Order 2",
			"clientId": 102,
			"budget": 6000,
			"status": "BUILDING",
			"dueDate": "2023-01-31T00:00:00.000Z",
			"details": "Details for Order 2"
		},
		{
			"id": 3,
			"title": "Order 3",
			"clientId": 103,
			"budget": 7000,
			"status": "FINISHED",
			"dueDate": "2023-02-28T00:00:00.000Z",
			"details": "Details for Order 3"
		}
	].map(order => Order.fromJson(order));
}
