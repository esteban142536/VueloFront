import { Component, OnInit } from '@angular/core';
import { vuelo } from 'src/app/models/vuelo.model';
import { vueloServise } from 'src/app/services/vuelo.service';

@Component({
  selector: 'app-editar-vuelo',
  templateUrl: './editar-vuelo.component.html',
  styleUrls: ['./editar-vuelo.component.css'],
})
export class EditarVueloComponent implements OnInit {
  vueloViejo: vuelo = {};
  vueloNuevo: vuelo = {
    _id: null,
    ID_Ruta: null,
    ID_TipoAvion: null,
    marca: '',
    numeroVuelo: '',
  };

  constructor(private vueloServise: vueloServise) {}

  ngOnInit(): void {}

  updateVuelo(): void {
    this.vueloServise.getById(this.vueloNuevo._id).subscribe(
      (response) => {
        this.vueloViejo = response;
      },
      (error) => {
        console.log('Error en bucar el id de vuelo \n', error);
      }
    );

    const data: vuelo = {
      _id: this.vueloNuevo._id,
      ID_Ruta: this.vueloNuevo.ID_Ruta || this.vueloViejo.ID_Ruta,
      marca: this.vueloNuevo.marca || this.vueloViejo.marca,
      ID_TipoAvion:
        this.vueloNuevo.ID_TipoAvion || this.vueloViejo.ID_TipoAvion,
      fechaIda: this.vueloNuevo.fechaIda || this.vueloViejo.fechaIda,
      numeroVuelo: this.vueloNuevo.numeroVuelo || this.vueloViejo.numeroVuelo,
    };

    this.vueloServise.update(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error en actualizar vuelo \n', error);
      }
    );
  }
}
