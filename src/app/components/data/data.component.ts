import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  usuario: any = {
    nombreCompleto: {
      nombre: 'Luis',
      apellido: 'Feregrino'
    },
    correo: 'djlaf2008@hotmail.com',
    pasatiempos:['Correr', 'Dormir', 'Comer']
  };

  constructor() {
    console.log(this.usuario);
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl(null, [Validators.required, this.noFeregrino]),
      }),
      correo: new FormControl(null, [Validators.required,
                                  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      pasatiempos: new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      username: new FormControl(null, Validators.required, this.existeUsuario),
      password1: new FormControl(null, Validators.required),
      password2: new FormControl()
    });

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    /*this.forma.valueChanges.subscribe(data => {
      console.log(data);
    });*/

    this.forma.controls['username'].valueChanges.subscribe(data => {
      console.log(data);
    });

    this.forma.controls['username'].statusChanges.subscribe(data => {
      console.log(data);
    });


    //this.forma.setValue(this.usuario);
  }

  agregarPasatiempo() {
    (this.forma.controls['pasatiempos'] as FormArray).push(
      new FormControl('Dormir', Validators.required)
    );
  }

  noFeregrino(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'feregrino') {
      return {
        noferegrino: true
      }
    }
    return null;
  }

  noIgual(control: FormControl): {[s: string]: boolean} {
    let forma: any = this;
    if(control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      }
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === "fere") {
          resolve({existe: true})
        }else{
          resolve( null )
        }
      }, 3000);
    });
    return promesa;
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma.valid);

    //this.forma.reset(this.usuario);
  }

}
