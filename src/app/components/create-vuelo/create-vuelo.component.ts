import { Component, OnInit } from '@angular/core';
import { vuelo } from 'src/app/models/vuelo.model';
import { vueloServise } from 'src/app/services/vuelo.service';

@Component({
  selector: 'app-create-vuelo',
  templateUrl: './create-vuelo.component.html',
  styleUrls: ['./create-vuelo.component.css'],
})
export class CreateVueloComponent implements OnInit {
  vuelo: vuelo = {
    ID_Ruta: null,
    ID_TipoAvion: null,
    Marca: '',
    numeroVuelo: '',
  };

  constructor(private vueloServise: vueloServise) {}

  ngOnInit(): void {}

  saveAvion(): void {
    const data: vuelo = {
      ID_Ruta: this.vuelo.ID_Ruta,
      ID_TipoAvion: this.vuelo.ID_TipoAvion,
      Marca: this.vuelo.Marca,
      numeroVuelo: this.vuelo.numeroVuelo,
    };

    this.vueloServise.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error en agregar vuelo \n', error);
      }
    );
  }
}
