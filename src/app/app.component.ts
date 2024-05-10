import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star, homeOutline, appsOutline, heartOutline, personOutline, bagHandleOutline, bagHandle, trashOutline, remove, add } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      star, homeOutline, appsOutline, heartOutline, personOutline, bagHandleOutline, bagHandle, trashOutline,
      remove, add,
    })
  }
}
