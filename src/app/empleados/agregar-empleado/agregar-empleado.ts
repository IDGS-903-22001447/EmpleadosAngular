import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmpleadosService } from '../empleados';
import { Empleado }          from '../interfaces/empleado';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.html',
  standalone: false,  
  styleUrls: ['./agregar-empleado.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  empleadoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    this.empleadoForm = this.fb.group({
      nombre:           ['', [Validators.required, Validators.minLength(3)]],
      correo:           ['', [Validators.required, Validators.email]],
      telefono:         ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
      fechaNacimiento:  ['', [Validators.required]],
      sexo:             ['Masculino', Validators.required]       
    });
  }

  onSubmit(): void {
    if (this.empleadoForm.invalid) {
      this.empleadoForm.markAllAsTouched();
      return;
    }

    const nuevoEmpleado: Empleado = {
      id:         0,
      ...this.empleadoForm.value
    };

    this.empleadosService.addEmpleado(nuevoEmpleado);
    this.empleadoForm.reset({
      sexo: 'Masculino'          
    });
  }

  get f() {
    return this.empleadoForm.controls;
  }
}
