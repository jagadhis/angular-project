import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodosComponent } from './todos/todos.component';
import { RoutingComponent } from './routing/routing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
   
    TodosComponent,
         RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'app-todos',component:TodosComponent},
        {path: 'app-routing',component:RoutingComponent},
        {path:'',redirectTo: '/app-todos',pathMatch:'full'}

    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
