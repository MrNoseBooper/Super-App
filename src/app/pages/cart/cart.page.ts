import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonIcon, IonLabel, IonItem, IonText, IonItemGroup,
  IonListHeader, IonList, IonRow, IonCol, IonImg, IonThumbnail, IonCard, IonFooter
 } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBackButton, IonButtons, IonIcon, IonLabel, IonItem,
    NgFor, IonText, IonItemGroup, IonListHeader, IonList, IonRow, IonCol, IonImg, IonThumbnail, IonCard, IonFooter
  ]
})
export class CartPage implements OnInit, OnDestroy {

  previous!: string;
  cartSub!: Subscription;
  model: any = null;
  private router = inject(Router);
  public cartService = inject(CartService);

  constructor() { }

  ngOnInit() {
    this.checkUrl();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
      },
    });
  }

  checkUrl() {
      const route_url = this.router.url;
      const urlParts = route_url.split('/');
      urlParts.pop(); // Remove the last segment
      console.log(urlParts);
      this.previous = urlParts.join('/');
      console.log('url: ', this.previous);
    }
  
  addQuantity(item: any) {
    this.cartService.addQuantity(item);
  }

  subtractQuantity(item: any) {
    this.cartService.subtractQuantity(item);
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }

}
