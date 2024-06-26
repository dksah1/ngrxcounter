import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { CommonModule } from '@angular/common';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BookstoreComponent } from './bookstore/bookstore.component';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, BookstoreComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,

    StoreModule.forRoot({ count: counterReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
