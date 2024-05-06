import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonItem, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCard,
  IonIcon, IonTabButton, IonTabBar, IonTabs, IonThumbnail, IonCol, IonRow, IonImg, IonText, IonLabel
 } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [NgFor, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent, IonItem, IonInput, IonButton, IonCardHeader,
    IonCardTitle, IonCard, IonIcon, IonTabButton, IonTabBar, IonTabs, IonThumbnail, IonCol, IonRow, IonImg, IonText, IonLabel]
})
export class MainPage implements OnInit {

  items: any [] = [];
  allItems: any [] = [];
  private api = inject(ApiService);

  constructor() { }

  getItems() {
    this.allItems = this.api.items; 
    this.items = [...this.allItems];
  } 

  ngOnInit() {
    this.getItems();
  }
  
}
