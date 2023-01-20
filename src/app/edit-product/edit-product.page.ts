import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {AppModule} from "../app.module";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  p:any;
  product: any;
  categories: any;
  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute, private cm: AppModule) {

    this.p= this.http.post('http://localhost:8888/marmiton/src/product.php?action=getone', JSON.stringify({'id':this.route.snapshot.paramMap.get('id')})).toPromise().then((response: any)=>{this.product=response; });
    this.product = this.cm.waitFor(this.p);

    this.http.get('http://localhost:8888/marmiton/src/category.php?action=getall').toPromise().then((response: any)=>{this.category=response; });
  }



  editProduct(f: NgForm)
  {
    this.http.post('http://localhost:8888/marmiton/src/product.php?action=edit', JSON.stringify(f.value)).toPromise().then((response: any)=>{console.log(response); });

    this.router.navigate(['product-list'])
    this.ngOnInit();


  }


  ngOnInit() {
  }

}