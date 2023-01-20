import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {AppModule} from "../app.module";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.page.html',
  styleUrls: ['./edit-categories.page.scss'],
})
export class EditCategoriesPage implements OnInit {

 
  p:any;
  categories:any;
  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute, private cm: AppModule) {

    this.p= this.http.post('http://localhost:8888/marmiton/src/categories.php?action=getone', JSON.stringify({'id':this.route.snapshot.paramMap.get('id')})).toPromise().then((response: any)=>{console.log(this.categories=response); });
    this.categories=this.cm.waitFor(this.p);
  }



  editCategories(f: NgForm)
  {
    this.http.post('http://localhost:8888/marmiton/src/categories.php?action=edit', JSON.stringify(f.value)).toPromise().then((response: any)=>{console.log(response); });

    this.router.navigate(['categories-list'])
    this.ngOnInit();
  }


  ngOnInit() {
  }

}