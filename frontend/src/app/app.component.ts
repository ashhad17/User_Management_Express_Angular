import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserCreateComponent } from "./components/user-create/user-create.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
}
