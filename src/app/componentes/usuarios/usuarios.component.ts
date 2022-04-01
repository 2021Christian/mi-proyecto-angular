import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:IUsuario[] = [];

  constructor(private usuarioService:UsuariosService) { }

  ngOnInit(): void {
  }

  formatFyH(fyh:any) {
    return new Date(fyh).toLocaleString();
  }

  obtener() {
    return this.usuarioService.get()
      .subscribe( (usuarios:IUsuario[]) => {
        console.log(usuarios)
        this.usuarios = usuarios
      } )
  }

  enviar() {
    let usuario:IUsuario = {
      "nombre": "Juan Perez",
      "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-512.png",
      "descripcion": "Nuevo usuario creado!!!",
      "coordenadas": [
        "-33.6699",
        "44.5511"
      ],
      "comentarios": "Este usuario lo estoy creando desde el boton de creación, Y sus datos son estáticos en mi código",
      "direccion": "Calle La Carretera 113",
    };

    this.usuarioService.post(usuario)
      .subscribe( (usuario:IUsuario) => {
        console.log(usuario)

        /** Actualizacion Local */
        // this.usuarios.push(usuario);
        this.obtener();
      })
  }

  actualizar(id:string|undefined) {
    console.log('actualizar', id);

    let usuario:IUsuario = {
      "nombre": "Ana Garcia",
      "foto": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-512.png",
      "descripcion": "Usuario modificado!!!",
      "coordenadas": [
        "-22.3388",
        "55.7799"
      ],
      "comentarios": "Este usuario se ha modificado desde el boton de actualizacion. Sus datos son estáticos de mi código",
      "direccion": "Calle La Carretera 331",
    };

    this.usuarioService.put(id, usuario)
      .subscribe( (usuario:IUsuario) => {
        console.log(usuario)

        /** Actualizacion Local */
        // const index = this.usuarios.findIndex( user => user.id == usuario.id )
        // this.usuarios.splice(index, 1, usuario)
        this.obtener();
      })

  }

  borrar(id:string|undefined) {
    console.log('borrar', id);

    this.usuarioService.delete(id)
      .subscribe( (usuario:IUsuario) => {
        console.log(usuario)

        /** Actualizacion Local */
        // const index = this.usuarios.findIndex( user => user.id == usuario.id )
        // this.usuarios.splice(index, 1)
        this.obtener();
      })
    
  }
}
