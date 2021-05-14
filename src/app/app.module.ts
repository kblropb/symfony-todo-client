import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgbdModalComponent} from './modal/modal.component';
import {NgbdModalComponentModule} from "./modal/modal.module";

const routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'todos', component: TodosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    RouterModule.forRoot(routes),
    NgbdModalComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
