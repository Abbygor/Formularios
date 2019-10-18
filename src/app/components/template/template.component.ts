import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario: any = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  };

  paises:any = [
    {
      codigo: "MEX",
      pais: "Mexico"
    },
    {
      codigo: "CRI",
      pais: "Costa Rica"
    },
    {
      codigo: "ESP",
      pais: "España"
    }
  ];

  sexos: string[] = ["Hombre", "Mujer"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm",forma);
    console.log("valor",forma.value);
    console.log("usuario",this.usuario);
  }

}
