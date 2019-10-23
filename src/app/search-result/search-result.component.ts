import { Component, OnChanges, Input } from '@angular/core';
import { SearchResultService } from '../search-result.service'
import { Weather } from '../models/weather.model'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.css'],
	providers: [SearchResultService]
})
export class SearchResultComponent implements OnChanges {

	items
	@Input() city

	constructor(
		private searchResultService: SearchResultService
	) { }

  ngOnChanges() {
		this.searchResultService.getSearch(this.city)
			.subscribe((response: any) => {
				this.items = response.list.map((weather) => new Weather(weather))
			})
  }
}
