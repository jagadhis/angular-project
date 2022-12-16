import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  {
    path: 'app-todos',component:TodosComponent},
    {path: 'app-routing',component:RoutingComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
exports:[RouterModule]
