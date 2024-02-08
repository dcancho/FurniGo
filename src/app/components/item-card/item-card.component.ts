import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Component, Input } from '@angular/core';
import IOrder from '../../domain/models/Order'; 
import { Router } from '@angular/router';
import { OrderStatus } from '../../domain/models/OrderStatus';
import { DatePipe } from '@angular/common';

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
	@Input() order!: IOrder;

	constructor(private router: Router, private datePipe: DatePipe) {
	}

	getOrderStatus(status: string): string {
		return OrderStatus[status as keyof typeof OrderStatus];
	}
	
	formatDueDate(date: string | Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || "";
  }

	navigateToDetails() {
		this.router.navigate([`/my-order/${this.order.id}`]);
	}
}
