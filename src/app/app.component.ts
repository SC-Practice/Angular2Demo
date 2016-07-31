import { Component } from '@angular/core';
import { HeaderComponent } from './header'; // 預設載入 index.ts

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent]
})
export class AppComponent {

}
