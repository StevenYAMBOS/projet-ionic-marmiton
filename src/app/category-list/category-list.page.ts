import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  categories: any
  constructor(private http: HttpClient) { }


  delete(id: any){

    this.http.post('http://localhost:8888/marmiton/src/category.php?action=delete', JSON.stringify({'id':id})).toPromise().then((response: any)=>{console.log(response)});

    this.ngOnInit();
  }


  ngOnInit() {

    this.http.get('http://localhost:8888/marmiton/src/category.php?action=getall').toPromise().then((response: any)=>{this.category=response});

  }

}