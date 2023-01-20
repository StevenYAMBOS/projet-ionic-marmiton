import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  products: any
  constructor(private http: HttpClient) { }


  delete(id: any){

    this.http.post('http://localhost:8888/marmiton/src/product.php?action=delete', JSON.stringify({'id':id})).toPromise().then((response: any)=>{console.log(response)});

    this.ngOnInit();
  }


  ngOnInit() {

    this.http.get('http://localhost:8888/marmiton/src/product.php?action=getall').toPromise().then((response: any)=>{this.products=response});

  }

}