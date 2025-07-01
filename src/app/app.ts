import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosModule } from './empleados/empleados-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmpleadosModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'basesangular';
}
