import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string;

  IsEdit = false;

  num = 1;

  constructor() { }

  ngOnInit() {

  }

  PlusOne() {
    this.num = this.num + 1;
  }

  MyKeyDown(event: KeyboardEvent, ele: HTMLInputElement) {
    // console.log(ele);
    if (event.keyCode === 13) {
      this.title = ele.value;
      this.IsEdit = false;
    }
  }

  EnterEdit(e: MouseEvent) {
    this.IsEdit = true;
    e.preventDefault();
  }
}
