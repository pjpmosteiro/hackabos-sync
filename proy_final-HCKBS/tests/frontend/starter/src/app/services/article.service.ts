import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  baseUrl = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getArticle(id: string) {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }
}
