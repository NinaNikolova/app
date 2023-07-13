import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
