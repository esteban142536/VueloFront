import { Component, OnInit } from '@angular/core';
import { ruta } from 'src/app/models/ruta.model';
import { rutaServise } from 'src/app/services/ruta.service';

@Component({
  selector: 'app-find-ruta-id',
  templateUrl: './find-ruta-id.component.html',
  styleUrls: ['./find-ruta-id.component.css'],
})
export class FindRutaIDComponent implements OnInit {
  ruta: ruta = {
    _id: '',
    destino: '',
    duracion: 0,
    origen: '',
    precio: 0,
  };

  constructor(private rutaService: rutaServise) {}

  ngOnInit(): void {}

  seachRutaId(): void {
    const data = {
      _id: this.ruta._id,
    };

    this.rutaService.getRutaID(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error al buscar ruta por id \n', error);
      }
    );
  }
}
