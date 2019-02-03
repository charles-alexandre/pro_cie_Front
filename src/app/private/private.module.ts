import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrivateRoutingModule } from './private-routing.module';
import { MatFormFieldModule, MatInputModule, MatRadioModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountService } from './shared/account.service';
import { ArticleComponent } from './article/article.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';

@NgModule({
  declarations: [
    LoginComponent,
    ArticleComponent,
    ManageArticleComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [
    AccountService
  ]
})
export class PrivateModule { }
