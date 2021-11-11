import { Component, OnInit } from '@angular/core';
import { ruta } from 'src/app/models/ruta.model';
import { rutaServise } from 'src/app/services/ruta.service';

@Component({
  selector: 'app-editar-ruta',
  templateUrl: './editar-ruta.component.html',
  styleUrls: ['./editar-ruta.component.css'],
})
export class EditarRutaComponent implements OnInit {
  constructor(private rutaService: rutaServise) {}

  rutaVieja: ruta = {};

  rutaNueva: ruta = {
    _id: null,
    destino: '',
    duracion: 0,
    origen: '',
    precio: 0,
  };

  ngOnInit(): void {}

  updateRuta(): void {
    this.rutaService.getRutaID(this.rutaNueva._id).subscribe(
      (response) => {
        this.rutaVieja = response;
      },
      (error) => {
        console.log('Error en bucar el id de ruta \n', error);
      }
    );

    const data: ruta = {
      _id: this.rutaNueva._id,
      destino: this.rutaNueva.destino || this.rutaVieja.destino,
      duracion: this.rutaNueva.duracion || this.rutaVieja.duracion,
      origen: this.rutaNueva.origen || this.rutaVieja.origen,
      precio: this.rutaNueva.precio || this.rutaVieja.precio,
    };

    this.rutaService.updateRuta(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error en actualizar ruta \n', error);
      }
    );
  }
}
