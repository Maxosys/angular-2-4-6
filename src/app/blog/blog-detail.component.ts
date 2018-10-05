import { Component , OnInit} from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './blog-detail.component.html',
   providers: [BlogserviceService]
 
})

export class BlogDetailComponent implements OnInit {
  

      private id;
  private sub: any;
   allBlogVar: string;
   blogsdata: {};
   public base_url: string = "";
   
   constructor(private _blogService: BlogserviceService,private router: Router,private route: ActivatedRoute) {

  }



   ngOnInit() {        

        this.base_url = this.router.url;
        console.log(this.router.url);
          this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      
      this._blogService.getSingleBlog(this.id).subscribe(result => this.blogsdata =result);

    });

    


         this.allBlogVar = "";
  }
 
}