import { Component, OnInit } from '@angular/core';
import { tipoAvion } from '../../models/tipoAvion.model';
import { tipoAvionServise } from 'src/app/services/tipoAvion.service';

@Component({
  selector: 'app-add-tipo-avion',
  templateUrl: './add-tipo-avion.component.html',
  styleUrls: ['./add-tipo-avion.component.css'],
})
export class AddTipoAvionComponent implements OnInit {
  tipoAvion: tipoAvion = {
    cantidadAsientos: 0,
    cantidadFila: 0,
    nombre: '',
  };

  constructor(private tipoAvionServise: tipoAvionServise) {}

  ngOnInit(): void {}

  saveTipoAvion(): void {
    const data: tipoAvion = {
      cantidadAsientos: this.tipoAvion.cantidadAsientos,
      cantidadFila: this.tipoAvion.cantidadFila,
      nombre: this.tipoAvion.nombre,
    };

    this.tipoAvionServise.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error Creando tipo avion\n', error);
      }
    );
  }
}
