import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearfacturaComponent } from '../mantenimiento-factura/crear-factura/crearfactura.component';
import { MantenimientoFacturaComponent } from '../mantenimiento-factura/mantenimiento-factura.component';
import { HomeComponent } from '../home/home.component';
import { ReportesComponent } from 'src/app/components/reportes/reportes.component';
import { DashborahComponent } from './dashborah.component';

const routes: Routes = [
  { 
    path: '', component: DashborahComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'facturas', component: MantenimientoFacturaComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'detalleFactura', component: CrearfacturaComponent },
    { path: 'detalleFactura/:id', component: CrearfacturaComponent }
  ]
}  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }