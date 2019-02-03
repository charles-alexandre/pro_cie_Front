import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';
import { UtilsModule } from './utils/utils.module';
import { UtilsService } from './shared/utils.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/interceptor.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrivateModule,
    PublicModule,
    HttpClientModule,
    UtilsModule
  ],
  providers: [
    UtilsService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
