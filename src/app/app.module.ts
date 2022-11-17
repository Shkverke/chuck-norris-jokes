import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategorysComponent } from './categorys/categorys.component';
import { HttpClientModule } from '@angular/common/http';
import { StyleDirective } from './style.directive';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [AppComponent, CategorysComponent, StyleDirective, PipePipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
