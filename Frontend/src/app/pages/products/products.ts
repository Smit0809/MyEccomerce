import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-products',
  imports:[CommonModule],
  templateUrl: './products.html'
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProducts().subscribe((res: any) => {
      this.products = res;
      console.log(this.products)
    });
  }
}