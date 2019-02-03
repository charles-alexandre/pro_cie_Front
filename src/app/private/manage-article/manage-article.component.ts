import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';
import { articleResponse } from '../model/articleResponse';

@Component({
  selector: 'app-manage-article',
  templateUrl: './manage-article.component.html',
  styleUrls: ['./manage-article.component.scss']
})
export class ManageArticleComponent implements OnInit {

  articles: articleResponse;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      articles => {
        this.articles = articles;
      }
    );
  }

}
