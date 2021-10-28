import { Component, OnInit } from '@angular/core';
import { asiento } from 'src/app/models/asiento.model';
import { asientoServise } from 'src/app/services/asiento.service';

@Component({
  selector: 'app-buscar-asiento-id',
  templateUrl: './buscar-asiento-id.component.html',
  styleUrls: ['./buscar-asiento-id.component.css'],
})
export class BuscarAsientoIDComponent implements OnInit {
  asiento: asiento = {
    ID_Fila: '',
    ID_Tiquete: '',
    ID_Vuelo: '',
  };

  constructor(private asientoServise: asientoServise) {}

  ngOnInit(): void {}

  seachAsientoid(): void {
    const data: asiento = {
      _id: this.asiento._id,
    };

    this.asientoServise.getAsientoID(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error al buscar asiento por id \n', error);
      }
    );
  }
}
