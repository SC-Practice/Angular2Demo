import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [SearchComponent]
})
export class SearchComponent implements OnInit {

  keyword: string;

  constructor(private searchsvc: SearchService) { }

  ngOnInit() {
  }

  doSearch() {
    this.searchsvc.doSearch(this.keyword);
    // this.search.emit(this.keyword);
  }
}
