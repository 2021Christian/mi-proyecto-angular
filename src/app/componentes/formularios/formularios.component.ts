import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { verificarEspacios } from 'src/app/validaciones/espacios.validator';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu = {
    nombre : '',
    apellido : '',
    edad : '',
    email : '',
    password : ''
  }

  f : FormGroup //reactive forms

  minCantChrNombre:number = 3;
  maxCantChrNombre:number = 10;

  constructor(private fb : FormBuilder) {//reactive forms
    //reactive forms
    this.f = fb.group({
      nombre : ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minCantChrNombre),
        Validators.maxLength(this.maxCantChrNombre),
        verificarEspacios
      ])],
      apellido : [''],
      edad : '',
      contacto : fb.group({
        email : '',
        telefono : '',
      }),
      password : ''
    })
  }

  ngOnInit(): void {
  }

  enviar(loginform:any) {
    console.log({...this.formu});//clono el objeto para que no se borren los valores en la consola cuando reseteo el form
    loginform.form.reset();
  }

  //reactive forms
  enviarRf() {
    console.log(this.f.value);
    this.f.reset();
  }
}
