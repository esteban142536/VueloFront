import { Component, OnInit } from '@angular/core';
import { TiqueteService } from 'src/app/services/tiquete.service';
import { tiquete } from 'src/app/models/tiquete.model';

@Component({
  selector: 'app-editar-tiquete',
  templateUrl: './editar-tiquete.component.html',
  styleUrls: ['./editar-tiquete.component.css'],
})
export class EditarTiqueteComponent implements OnInit {
  tiqueteNuevo: tiquete = {
    _id: null,
    ID_Avion: '',
    codigo_Fila: '',
    codigo_Columna: '',
  };
  tiqueteViejo: tiquete = {};

  constructor(private TiqueteService: TiqueteService) {}

  ngOnInit(): void {}

  updateTiquete(): void {
    this.TiqueteService.getById(this.tiqueteNuevo._id).subscribe(
      (response) => {
        this.tiqueteViejo = response;
      },
      (error) => {
        console.log('Error en bucar el id de tiquete \n', error);
        return;
      }
    );

    const data: tiquete = {
      _id: this.tiqueteNuevo._id,
      ID_Avion: this.tiqueteNuevo.ID_Avion || this.tiqueteViejo.ID_Avion,
      codigo_Fila:
        this.tiqueteNuevo.codigo_Fila || this.tiqueteViejo.codigo_Fila,
      codigo_Columna:
        this.tiqueteNuevo.codigo_Columna || this.tiqueteViejo.codigo_Columna,
    };

    //this.TiqueteService.update(data).subscribe(
      //(response) => {
        //console.log(response);
      //},
      //(error) => {
        //console.log('Error en actualizar el tiquete \n', error);
        //return;
      //}
    //);
  }
}
