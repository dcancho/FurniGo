import { OrderStatus } from "./OrderStatus";

export default class Order {
	id!: number;
	title: string;
	clientId: number;
	budget: number;
	status: OrderStatus;
	dueDate: Date;
	details: string;

	constructor(title: string, client Id: number, budget: number, dueDate: Date, details: string) {
		this.title = title;
		this.clientId = clientId;
		this.budget = budget;
		this.status = OrderStatus.INLINE;
		this.dueDate = dueDate;
		this.details = details;
	}

	static fromJson(json: any): Order {
		const order = new Order(json.title, json.clientId, json.budget, new Date(json.dueDate), json.details);
		order.id = json.id;
		order.status = json.status;
		return order;
	}
}