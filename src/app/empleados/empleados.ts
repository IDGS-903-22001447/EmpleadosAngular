import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Empleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'          
})
export class EmpleadosService {

  private empleados: Empleado[] = [];


  private empleadosSubject = new BehaviorSubject<Empleado[]>(this.empleados);


  getEmpleados(): Observable<Empleado[]> {
    return this.empleadosSubject.asObservable();
  }

  addEmpleado(empleado: Empleado): void {
    empleado.id = this.generarId();                
    this.empleados.push(empleado);
    this.empleadosSubject.next([...this.empleados]); 
  }

  deleteEmpleado(id: number): void {
    this.empleados = this.empleados.filter(e => e.id !== id);
    this.empleadosSubject.next([...this.empleados]);
  }

  private generarId(): number {
    return this.empleados.length
      ? Math.max(...this.empleados.map(e => e.id)) + 1
      : 1;
  }
}
