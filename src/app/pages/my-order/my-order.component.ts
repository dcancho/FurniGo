import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsComponent } from '../../components/order-details/order-details.component';
import { ItemThreeDViewerComponent } from '../../components/item-three-d-viewer/item-three-d-viewer.component';

@Component({
	selector: 'app-my-order',
	standalone: true,
	imports: [
		OrderDetailsComponent,
		ItemThreeDViewerComponent
	],
	templateUrl: './my-order.component.html',
	styleUrl: './my-order.component.sass'
})
export class MyOrderComponent implements OnInit {
	id!: string;

	constructor(private route: ActivatedRoute) {
	}
	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id') || '';
	}
}
