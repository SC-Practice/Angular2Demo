import { Component } from '@angular/core';
import { HeaderComponent } from './header'; // 預設載入 index.ts
import { ArticleComponent } from './article';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ArticleComponent]
})
export class AppComponent {

}
