import { Component, OnInit } from '@angular/core';
import { asiento } from 'src/app/models/asiento.model';
import { asientoServise } from 'src/app/services/asiento.service';

@Component({
  selector: 'app-create-asiento',
  templateUrl: './create-asiento.component.html',
  styleUrls: ['./create-asiento.component.css'],
})
export class CreateAsientoComponent implements OnInit {
  asiento: asiento = {
    Fila: '',
    ID_Tiquete: '',
    ID_Vuelo: '',
  };

  constructor(private asientoServise: asientoServise) {}

  ngOnInit(): void {} //nota: fallara porque no existe llaves foraneas a que asociar

  saveAsiento(): void {
    const data: asiento = {
      Fila: this.asiento.Fila,
      ID_Tiquete: this.asiento.ID_Tiquete||'',
      ID_Vuelo: this.asiento.ID_Vuelo||'',
    };

    this.asientoServise.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error en agregar ruta \n', error);
      }
    );
  }
}
