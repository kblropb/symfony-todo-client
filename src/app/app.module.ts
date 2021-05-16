import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormsModule, FormGroup} from "@angular/forms";

const routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'tasks', component: TasksComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
