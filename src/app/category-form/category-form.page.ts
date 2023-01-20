import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories-form',
  templateUrl: './category-form.page.html',
  styleUrls: ['./category-form.page.scss'],
})
export class CategoryFormPage implements OnInit {

  constructor(private http: HttpClient) { }

  addCategories(form: NgForm){

    this.http.post('http://localhost:8888/marmiton/src/categories.php?action=add', JSON.stringify(form.value)).toPromise().then((response:any)=>{console.log(response) })

    this.ngOnInit();

  }

  ngOnInit() {
  
  }


}
