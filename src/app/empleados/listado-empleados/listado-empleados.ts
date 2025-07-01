import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EmpleadosService } from '../empleados';
import { Empleado }          from '../interfaces/empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.html',
  standalone: false,
  styleUrls: ['./listado-empleados.css']
})
export class ListadoEmpleadosComponent implements OnInit {

  empleados$!: Observable<Empleado[]>;   

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.empleados$ = this.empleadosService.getEmpleados();
  }

  eliminar(id: number): void {
    this.empleadosService.deleteEmpleado(id);
  }
}
