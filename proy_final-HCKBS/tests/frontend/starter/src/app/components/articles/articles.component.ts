import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'bg-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles$;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articles$ = this.articleService
      .getArticles()
      .pipe(catchError(error => error));
  }

  goToArticle(id: string) {
    this.router.navigate(['/article', id]);
  }
}
