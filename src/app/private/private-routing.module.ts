import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'manage-articles', component: ManageArticleComponent },
    { path: 'new-article', component: ArticleComponent },
    { path: 'article/:id', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
