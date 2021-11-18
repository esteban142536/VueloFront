import { Component, OnInit } from '@angular/core';
import { TiqueteService } from 'src/app/services/tiquete.service';
import { tiquete } from 'src/app/models/tiquete.model';

@Component({
  selector: 'app-create-tiquete',
  templateUrl: './create-tiquete.component.html',
  styleUrls: ['./create-tiquete.component.css'],
})
export class CreateTiqueteComponent implements OnInit {
  tiquete: tiquete = {
    _id: null,
    ID_Avion: '',
    codigo_Fila: '',
    codigo_Columna: '',
  };
  constructor(private TiqueteService: TiqueteService) {}

  ngOnInit(): void {}

  createTiquete(): void {
    const data: tiquete = {
      ID_Avion: this.tiquete.ID_Avion,
      codigo_Fila: this.tiquete.codigo_Fila,
      codigo_Columna: this.tiquete.codigo_Columna,
    };

    this.TiqueteService.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error en agregar tiquete \n', error);
      }
    );
  }
}
