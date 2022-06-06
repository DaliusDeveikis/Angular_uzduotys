import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './componenets/products-list/products-list.component';
import { TasksListComponent } from './componenets/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
