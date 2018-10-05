import { Injectable , Inject } from '@angular/core';
import { Jsonp, URLSearchParams ,Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

	private petsUrl = 'http://localhost:8000/';
	private _url = "http://192.168.1.38/midaster/adduser.php";

		http: any;

  constructor(private jsonp: Jsonp,@Inject(Http) http) {  this.http = http; }

  cars = [
    'Ford','Chevrolet','Buick'
  ];


  getMidasterPost()
  {
		// End point for list of pets:
		// http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas

		const endPoint = 'serv'

		let params = new URLSearchParams();
		params.set('tag', 'displaypost');
		params.set('user_id', '80');    
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');

		return this.jsonp
		.get(this.petsUrl + endPoint, { search: params })
		.map(response =>    response.json().ip);
  }

  //http://localhost/midaster/adduser.php

  addUser(data) {

		let headers = new Headers({"Content-Type": "application/json"});
		let options = new RequestOptions({ headers: headers });

		let params = new URLSearchParams();
		params.set('username', 'admin');
		params.set('password', '80');    
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');

		return this.jsonp
		.get('http://localhost/midaster/adduser.php', { search: params })
		.map(response =>    response.json());

		//return this.http.post('http://localhost/midaster/adduser.php', JSON.stringify(data), options)
		//	.map(res => res.json());
  }

  getExample()
  {
		const headers: Headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Origin', '*');

		const options = new RequestOptions({
		headers: headers
		});

		this.http.get('http://localhost:9000/api/v1/users', options)
		.map((res: Response) => res.json())
		.subscribe(users => console.log(users));
  }

  userRegister(data)
  {
  		const endPoint = 'adduser';
		
  		const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return  this.http.post(this.petsUrl + endPoint, JSON.stringify(data), {headers})
        .map(res => res.json());
  }

  myData()
  {  
   		return 'This is my data, man!';
  }  

}
