import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonItem, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCard,
  IonIcon, IonTabButton, IonTabBar, IonTabs, IonThumbnail, IonCol, IonRow, IonImg, IonText, IonLabel, IonSearchbar
 } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [NgFor, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent, IonItem, IonInput, IonButton, IonCardHeader,
    IonCardTitle, IonCard, IonIcon, IonTabButton, IonTabBar, IonTabs, IonThumbnail, IonCol, IonRow, IonImg, IonText, IonLabel, IonSearchbar]
})
export class MainPage implements OnInit {

  items: any [] = [];
  allItems: any [] = [];
  query!: string;
  private api = inject(ApiService);

  constructor() { }

  ngOnInit() {
    console.log('ngoninit mainpage');
    this.getItems();
  }
  
  getItems() {
    this.allItems = this.api.items; 
    this.items = [...this.allItems];
  } 

  onSearchChange(event: any) {
    console.log(event.detail.value);

    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  } 

  querySearch() {
    this.items = [];
    if (this.query.length > 0) {    
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    } 
  }

  searchItems() {
    this.items = this.api.items.filter((item) => 
      item.name.toLowerCase().includes(this.query));
  }
}
