import { Injectable , Inject } from '@angular/core';
import { Jsonp, URLSearchParams ,Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogserviceService {  

  private serviceUrl = "http://www.maxosys.com/developers/";

	postResponse:any ;
	constructor(private http:Http) { }

  	getAllBlogs() {

  		let headers = new Headers({  'Access-Control-Allow-Origin': 'http://www.maxosys.com' });
    	let options = new RequestOptions({ headers: headers });

  		var url = this.serviceUrl+'services/api?tag=get_all_post';     		  		

   	  	return this.http.get(url).map(this.extractData);
    }

    getSingleBlog(blogid) {

      	var url = this.serviceUrl+'services/api?tag=get_single_post&post_id='+blogid;   	

   		  return this.http.get(url).map(this.extractData);
   	}

   private extractData(res: Response) {
		let body = res.json();
		
        return body;
    }

}
