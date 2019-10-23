import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'

@Injectable()
export class SearchResultService {

  constructor(private http: HttpClient) { }

	api = 'https://api.openweathermap.org/data/2.5/find?type=like&cnt=30&sort=population&appId=76d1b43ba3695cfae59aa9f7dc9b4877&units=metric&q='

	getSearch = (city) => this.http.get(this.api + city)
}
