import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PaginaInicio }      from './pagina-inicio/pagina-inicio';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado';
import { ListadoEmpleadosComponent }  from './listado-empleados/listado-empleados';

@NgModule({
  declarations: [
    PaginaInicio,
    AgregarEmpleadoComponent,
    ListadoEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PaginaInicio]
})
export class EmpleadosModule { }
