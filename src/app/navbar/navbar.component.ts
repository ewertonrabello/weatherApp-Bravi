import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

	@Output() onSearch = new EventEmitter<string>()

	search(city) {
		this.onSearch.emit(city.value)
		city.value = null
	}
}
