import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { articleResponse } from '../model/articleResponse';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  isNew = false;
  currentId: number;
  articleForm: FormGroup;
  marqueControl: AbstractControl;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // create formulary
    this.articleForm = this.fb.group({
      'marque': ['', Validators.required]
    });
    this.marqueControl = this.articleForm.controls['marque'];

    this.isNew = this.route.snapshot.routeConfig.path === 'new-article';

    if (!this.isNew) {
      this.currentId = JSON.parse(this.route.snapshot.params.id);
      this.articleService.getArticleId(this.currentId).subscribe(
        article => {
          console.log(article);
          this.marqueControl.setValue(article.marque);
        },
        errArticle => {
          console.log(errArticle);
        }
      )
    }
  }

  onSubmit(form: articleResponse) {
    console.log(form);
    if (this.isNew) {
      this.articleService.createArticle(form).subscribe(
        article => {
          console.log(article);
          // success
        },
        errArticle => {
          console.log(errArticle);
          // error
        }
      );
    } else {
      this.articleService.updateArticleId(form, this.currentId).subscribe(
        article => {
          console.log(article);
          // success
        },
        errArticle => {
          console.log(errArticle);
          // error
        }
      );
    }
  }

}
