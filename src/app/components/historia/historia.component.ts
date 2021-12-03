import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dreamOut-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  
  longText =  
      `La empresa DreamOut nace legalmente constituida en el año 2006, 
      luego de un sinnúmero de experiencias en ventas de tiquetes de avión y la necesidad de ser un 
      ente constituido y respaldado por entidades que garanticen la funcionalidad y la imagen de empresa.

      Siendo una empresa  constituida como persona natural, tuvo importantes alianzas con empresas de 
      gran reconocimiento, donde se inicio como vendedor de tiques con familiares y amigos.

      Posteriormente se trabajo en compañías aérea INTERCONTINENTAL DE AVIACION, 
      la cual se pude aprender y tener más experiancia.
  
      Con las experiencias adquiridas, se empezo a conformar lod propios planes de tiques, creando un gran 
      mercado. Hoy con la ayuda de todos se llevo a expandir la empresa con más de 20 años 
      manteniendo una imagen de responsabilidad, cumplimento y calidad.`;

  constructor() { }

  ngOnInit(): void {
  }

}
