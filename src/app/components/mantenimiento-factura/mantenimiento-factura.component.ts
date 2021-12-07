import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { factura } from 'src/app/models/factura.model';
import { facturaServise } from 'src/app/services/factura.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'; 

@Component({
  selector: 'dreamOut-mantenimiento-factura',
  templateUrl: './mantenimiento-factura.component.html',
  styleUrls: ['./mantenimiento-factura.component.css'],
})

export class MantenimientoFacturaComponent implements OnInit {
  //Lista de facturas
  listaFacturas : factura[] = [];

  //Configuración de la tabla
  displayedColumns: string[] = ['_id', 'ID_Tiquete', 'ID_Usuario', 'fecha', 'Total',  'acciones'];
  dataSource!:  MatTableDataSource<any>;


  //Para la paginación
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private facturaService: facturaServise, private _snackbar: MatSnackBar, private router: Router ) { }

  ngOnInit(): void {
    this.consultarFacturas();
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  consultarFacturas():void{
    this.facturaService.getAll()
      .subscribe({
         next: (data) => {
           this.listaFacturas = data;
           this.dataSource = new MatTableDataSource(this.listaFacturas);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
           console.log(data);
         },
         error: (e: any) => console.error(e)
      });
  }

  eliminarFactura(element:any){
    swal.fire({
      title: `¿Desea eliminar la factura #${element.numFactura} la a nombre de ${element.nomCliente}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log(element._id);
        this.facturaService.delete(element._id)
          .subscribe({
             next: (data) => {
               this.consultarFacturas();
               console.log(data);
              
               this._snackbar.open('La factura eliminada correctamente', '',{
                  duration: 5000,
                  horizontalPosition: 'center',
                  verticalPosition: 'bottom'
                });
             },
             error: (e: any) => console.error(e)
          });
      } 
    });
    
  } // fin del médoto de eliminar

  modificarFactura(element:any){
    swal.fire({
      title: `¿Desea modificar la factura #${element.numFactura} la a nombre de ${element.nomCliente}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(element._id);
        this.router.navigateByUrl(`dashboard/detalleFactura/${element._id}`);
      } 
    });
  }// fin del método modificar
}
