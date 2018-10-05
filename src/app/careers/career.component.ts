import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Title }     from '@angular/platform-browser';
import {Http, Response} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './career.component.html'
  
})


export class CareerComponent {  
  name: string = '';
  
 public constructor(private titleService: Title , private http: Http) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  onSubmit(f: NgForm,event) {
    	
    	document.getElementById("displaycareenresp").innerHTML = "";

    	let name 	=  f.value.name;
    	let city 	=  f.value.city;
    	let email 	=  f.value.name;
    	let phone 	=  f.value.phone;
    	let message =  f.value.message;
    	let jobcategory =  f.value.jobcategory;
     	
     	 let fileList: FileList = event.target[6].files; 

     	  if(fileList.length > 0) {  
     let file: File = fileList[0];   
     let fileSize:number=fileList[0].size;  
     
     	let formData:FormData = new FormData();  
     
	     formData.append('Document',file);       
	     formData.append('name',name);    
	     formData.append('city',city);    
	     formData.append('email',email);    
	     formData.append('phone',phone);    
	     formData.append('message',message);    
	     formData.append('jobcategory',jobcategory);    
    

			this.UploadClientContractDoc(formData).subscribe(val => { 
	   
     document.getElementById("displaycareenresp").innerHTML = "Successfully Submitted";
			if(val.json().status=='success')  
			{    
				console.log(val.json());
				var respdata =  val.json();
				
				console.log(respdata.message);

				document.getElementById("displaycareenresp").innerHTML = "Successfully Submitted";

			}
	
			});         
   }
   else
   {
   		document.getElementById("displaycareenresp").innerHTML = "Please Upload Your CV";
   }		
       	 
     
  }

  UploadClientContractDoc(formData:FormData)  
  {     
     return this.http.post("http://www.maxosys.com/developers/services/careerrequest",formData)  
            .map((response: Response) => {  
              return response;                 
            });             
  }

  fileChange(event) {   

  	console.log(event.target);

     let fileList: FileList = event.target.files;  
     if(fileList.length > 0) {  
     let file: File = fileList[0];   
     let fileSize:number=fileList[0].size;  
     
     let formData:FormData = new FormData();  
     formData.append('Document',file);       
     formData.append('DocumentType','ClientContractDoc');    

     console.log(formData); 
     console.log(file); 

			this.UploadClientContractDoc(formData).subscribe(val => { 
	
			if(val.json().status=='success')  
			{    
				console.log(val.json());
			}
	
			}); 
        
   }
   else  
   {  
     console.log("Something went Wrong.");  
   }  
}  
  
  
}
