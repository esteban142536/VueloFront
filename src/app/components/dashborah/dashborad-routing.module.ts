import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ReportesComponent } from 'src/app/components/reportes/reportes.component';
import { DashborahComponent } from './dashborah.component';

import { CrearAvionComponent } from '../mantenimiento-avion/crear-avion/crear-avion.component';
import { MantenimientoAvionComponent } from '../mantenimiento-avion/mantenimiento-avion.component';
import { CrearfacturaComponent } from '../mantenimiento-factura/crear-factura/crearfactura.component';
import { MantenimientoFacturaComponent } from '../mantenimiento-factura/mantenimiento-factura.component';
import { MantenimientoTiqueteComponent } from '../mantenimiento-tiquete/mantenimiento-tiquete.component';
import { CreateTiqueteComponent } from '../mantenimiento-tiquete/create-tiquete/create-tiquete.component';
const routes: Routes = [
  { 
    path: '', component: DashborahComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'facturas', component: MantenimientoFacturaComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'detalleFactura', component: CrearfacturaComponent },
    { path: 'detalleFactura/:id', component: CrearfacturaComponent },

    { path: 'mantenimientoAvion', component: MantenimientoAvionComponent },
    { path: 'detalleAvion', component: CrearAvionComponent },
    { path: 'detalleAvion/:id', component: CrearAvionComponent },

    { path: 'mantenimientoTiqueteComponent', component: MantenimientoTiqueteComponent },
    { path: 'detalleTiquete', component: CreateTiqueteComponent },
    { path: 'detalleTiquete/:id', component: CreateTiqueteComponent }
  ]
}  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }