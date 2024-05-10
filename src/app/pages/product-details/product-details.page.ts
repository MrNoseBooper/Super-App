import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonNav, IonIcon, IonLabel, IonItem, IonText, IonFooter,
  IonBadge, IonButtons
 } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular/standalone'
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonNav, IonIcon, IonLabel, IonItem,
    UpperCasePipe, IonText, IonFooter, IonBadge, RouterLink, IonButtons
  ]
})
export class ProductDetailsPage implements OnInit, OnDestroy {

  id!: string;
  item: any;
  addToBag!: any;
  totalItems= 0;
  cartSub!: Subscription;
  private route = inject(ActivatedRoute);
  private navCtrl = inject(NavController);
  private api = inject(ApiService);
  public cartService = inject(CartService)

  constructor() { }

  ngOnInit() {
    this.getItem();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        console.log(cart);
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }

  getItem() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
    if (!id || id == '0') {
      this.navCtrl.back();
      return;
    }
    this.id = id;

    this.item = this.api.items.find((record: any) => record.id == id);
    console.log(this.item);
  }

  addItem() {
    const result = this.cartService.addQuantity(this.item);
    this.addedText();
  }  

  addedText() {
    this.addToBag = 'Added to Bag';
    setTimeout(() => {
      this.addToBag = null;
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }
}