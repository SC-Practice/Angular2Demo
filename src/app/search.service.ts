import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) {
    // this.posts = data;
    this.http.get('/api/articles.json')
      .map( (res) => res.json() )
      .subscribe( (value) => {
        this.posts = this.default_data = value;
      });
  }

  posts: any;
  default_data: any;

  doSearch(keyword) {
    this.posts = this.default_data.filter((value) => {
      return value.title.toLowerCase().indexOf(keyword) > -1;
    });
  }
}
