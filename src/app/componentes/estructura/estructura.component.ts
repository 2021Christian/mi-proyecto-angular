import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  mostrar:boolean = true;

  // personas:string[] = [
  personas:Array<string> = [
    "Pedro",
    "Cecilia",
    "Maria",
    "Tomás"
  ];

  // alumnos:any[] = [
  alumnos:Array<any> = [
    {nombre: 'Juan',    apellido: 'Perez',    edad: 23, curso: false,   foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-256.png'},
    {nombre: 'Carlos',  apellido: 'Gomez',    edad: 34, curso: true,    foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'},
    {nombre: 'Augusto', apellido: 'Suarez',   edad: 37, curso: false,   foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png'},
    {nombre: 'Lucía',   apellido: 'Blanco',   edad: 31, curso: true,    foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-256.png'}
  ];

  // https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png

  // ---- Cliente Service --------
  clientes:Array<string> = [];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

  borrarCliente(){
    this.clienteService.borrarCliente();
  }
  // ---- Cliente Service --------


  borrarAlumno(index:number) {
    this.alumnos.splice(index,1);
  }

  agregarAlumno() {
    let alumno = {
      nombre: 'Maria',
      apellido: 'Lopez',
      edad: 35,
      curso: false,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'
    }

    this.alumnos.push(alumno);

  }




}
