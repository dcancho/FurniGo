import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { UserTagComponent } from '../user-tag/user-tag.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
		MatToolbarModule,
		MatButtonModule,
		UserTagComponent
	],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

}
