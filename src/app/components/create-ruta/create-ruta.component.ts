import { Component, OnInit } from '@angular/core';
import { ruta } from 'src/app/models/ruta.model';
import { rutaServise } from 'src/app/services/ruta.service';

@Component({
  selector: 'app-create-ruta',
  templateUrl: './create-ruta.component.html',
  styleUrls: ['./create-ruta.component.css'],
})
export class CreateRutaComponent implements OnInit {
  ruta: ruta = {
    destino: '',
    duracion: 0,
    origen: '',
    precio: 0,
  };

  constructor(private rutaService: rutaServise) {}

  ngOnInit(): void {}

  saveRuta(): void {
    const data: ruta = {
      destino: this.ruta.destino,
      duracion: this.ruta.duracion,
      origen: this.ruta.origen,
      precio: this.ruta.precio,
     _id:null,
    };

    this.rutaService.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error en agregar ruta \n', error);
      }
    );
  }
}
