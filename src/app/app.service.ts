import { Injectable } from '@angular/core';  
import { Http,  Response ,RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class appService {
	

    postResponse:any ;
    constructor(private http:Http) { }
 
   insertData(conemail,skypeid,conmessage) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://www.maxosys.com/developers/index.php/services/saverequestquoat',JSON.stringify({conemail:conemail,skypeid:skypeid,conmessage:conmessage}),{headers:headers})
    .map((res: Response) => res.json())
    .subscribe((res:'') => this.postResponse = res);
   }



   getSingleBlog(blogid)
   {
      var url = 'https://conduit.productionready.io/api/profiles/eric';
      var url = 'http://www.maxosys.com/developers/admin/api?tag=get_single_post&post_id=8';
   		


   	  return this.http.get(url).map(this.extractData);
   }

   private extractData(res: Response) {
		let body = res.json();

        return body;
    }

}