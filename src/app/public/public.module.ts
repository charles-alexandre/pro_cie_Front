import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicRoutingModule } from './public-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FlexLayoutModule
  ]
})
export class PublicModule { }
