import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  // model
  title = '<strong>保哥的title</strong>';
  num = 1;
  titlelink = 'http://news.google.com';
  editTitleText = this.title;

  constructor() { }

  ngOnInit() {
  }

  PlusOne() {
    this.num = this.num + 1;
  }

  MyKeyDown(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.title = this.editTitleText;
    }
  }
}
