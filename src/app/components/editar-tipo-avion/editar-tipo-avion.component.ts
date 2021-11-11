import { Component, OnInit } from '@angular/core';
import { tipoAvion } from '../../models/tipoAvion.model';
import { tipoAvionServise } from 'src/app/services/tipoAvion.service';

@Component({
  selector: 'app-editar-tipo-avion',
  templateUrl: './editar-tipo-avion.component.html',
  styleUrls: ['./editar-tipo-avion.component.css'],
})
export class EditarTipoAvionComponent implements OnInit {
  tipoAvionNuevo: tipoAvion = {
    cantidadAsientos: 0,
    cantidadFila: 0,
    nombre: '',
    _id: null,
  };
  tipoAvionViejo: tipoAvion = {};

  constructor(private tipoAvionServise: tipoAvionServise) {}

  ngOnInit(): void {}

  updateTipoAvion(): void {
    this.tipoAvionServise.getById(this.tipoAvionNuevo._id).subscribe(
      (response) => {
        this.tipoAvionViejo = response;
      },
      (error) => {
        console.log('Error en bucar el id de ruta \n', error);
        return;
      }
    );

    const data: tipoAvion = {
      _id: this.tipoAvionNuevo._id,
      cantidadAsientos:
        this.tipoAvionNuevo.cantidadAsientos ||
        this.tipoAvionViejo.cantidadAsientos,
      cantidadFila:
        this.tipoAvionNuevo.cantidadFila || this.tipoAvionViejo.cantidadFila,
      nombre: this.tipoAvionNuevo.nombre || this.tipoAvionViejo.nombre,
    };

    this.tipoAvionServise.update(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error en actualizar tipo avion \n', error);
        return;
      }
    );
  }
}
