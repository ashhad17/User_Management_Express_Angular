import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CalculatorComponent } from './calculator/calculator.component';

 const routes: Routes = [

  { path: '', component: UserListComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'create', component: UserCreateComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
export { routes }; 

