import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { DashborahComponent } from './dashborah.component';
import { SharedModule } from '../shared/shared.module';

import { MantenimientoAvionComponent } from '../mantenimiento-avion/mantenimiento-avion.component';
import { MantenimientoFacturaComponent } from '../mantenimiento-factura/mantenimiento-factura.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';

import { ReportesComponent } from 'src/app/components/reportes/reportes.component';

@NgModule({
  declarations: [
    DashborahComponent,
    HomeComponent,
    NavbarComponent,
    MantenimientoFacturaComponent,
    ReportesComponent,
    MantenimientoAvionComponent,
  ],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    SharedModule
  ]
})
export class DashboradModule { }