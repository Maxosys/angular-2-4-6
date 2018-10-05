import { Component , OnInit} from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './blog.component.html',
  providers: [BlogserviceService]
 
})

export class BlogComponent implements OnInit   {
  
   allBlogVar: string;
   blogsdata: {};
   public href: string = "";
   
   constructor(private _blogService: BlogserviceService,private router: Router) {

  }

   myObject = {"tag":"get_all_post","status":"","msg":"","results":[{"id":"14","order_no":"0","media":"network-equipment-banner.png","file_ext":".png","title":"blog8","content":"Network Equipment Providers\r\n\r\nWe understand that business objectives of network equipment business traders revolve around customer experience, cost and efficiency of operations, revenue enablement and transformed networks.\r\n\r\nWe at Maxosys provides services, there is an increasing demand for new and cost-effective products that can optimize network operation and increase the level of automation. ","condition_title":"blog","status":"1","created_date":"2017-01-10 15:00:12","updated_date":"0000-00-00 00:00:00"},{"id":"13","order_no":"0","media":"proshow.org1.mp4","file_ext":".mp4","title":"Blog-7","content":"Offshore Software Testing\r\n\r\nMaxosys Offshore Software Testing services provides the software ensuring that the software is tested, has an acceptable defect rate, and high quality. It is an integral and critical phase of software development project.\r\nMaxosys provides you the following software testing services:\r\n\r\n Functional testing\r\n Web testing\r\n White-box testing\r\n Usability and accessibility testing\r\n Performance, stress, and load testing\r\n Security testing\r\n Network and distributed testing\r\n Volume testing\r\n\r\nWe employ a various processes of thorough investigation for offshore software testing. Maxosys engineers perform a number of mock tasks with the software and the software answers with its behavior in response to the probing of the testing engineer. Our engineers are well-equipped to handle both manual & automated testing based on test plans using state-of-the-art software testing tools. ","condition_title":"blog","status":"1","created_date":"2016-12-29 19:08:49","updated_date":"0000-00-00 00:00:00"}]};



  myArr = ['him','hers','yours','theirs'];

    blogDetailInfo()
    {
             this._blogService.getAllBlogs().subscribe(
    function(response) { this.blogsdata = response; console.log(JSON.stringify(response))},
    function(error) { console.log("Error happened" + error)},
    function() { console.log("the subscription is completed")}
);

    }
       

  ngOnInit() {        

        this.href = this.router.url;
        console.log(this.router.url);
    
this._blogService.getAllBlogs().subscribe(result => this.blogsdata =result);

         this.allBlogVar = "";
  }

  updateUrl(event)
  {
        console.log(event);
  }

}