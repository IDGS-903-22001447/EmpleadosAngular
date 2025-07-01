import { Routes } from '@angular/router';

export const routes: Routes = [{ path: '', redirectTo: 'empleados', pathMatch: 'full' },
  {
    path: 'empleados',
    loadChildren: () =>
      import('./empleados/empleados-module').then(m => m.EmpleadosModule)
  },
  { path: '**', redirectTo: 'empleados' }
];
