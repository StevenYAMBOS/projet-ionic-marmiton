import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AppModule} from "../app.module";

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.page.html',
  styleUrls: ['./one-product.page.scss'],
})
export class OneProductPage implements OnInit {

  p: any;
  product: any;
  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute, private cm: AppModule) {

    this.p= this.http.post('http://localhost:8888/marmiton/src/product.php?action=getone', JSON.stringify({'id':this.route.snapshot.paramMap.get('id')})).toPromise().then((response: any)=>{this.product=response; });
    this.product = this.cm.waitFor(this.p);
  }


  ngOnInit() {
  }

}