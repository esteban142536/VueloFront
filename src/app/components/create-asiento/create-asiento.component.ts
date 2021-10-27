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
    ID_Asiento: '',
    ID_Fila: '',
    ID_Tiquete: '',
    ID_Vuelo: '',
  };

  constructor(private asientoServise: asientoServise) {}

  ngOnInit(): void {}

saveAsiento():void{
  
}

}
