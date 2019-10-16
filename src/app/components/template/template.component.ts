import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario: any = {
    nombre: "Jose Luis",
    apellido: "Feregrino",
    email: ""
  };

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
