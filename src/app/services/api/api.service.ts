import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any [] = [
    { 
      id: '1',
      name: 'Box of Chocolates',
      price: 15,
      status: true,
      rating: 4.5,
      cover: 'assets/icon/favicon.png',
      description:'Homemade box of chocolates'
    }
  ]

  constructor() { }
}
