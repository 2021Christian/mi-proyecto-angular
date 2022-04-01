import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IUsuario } from '../modelos/usuario';

//Pequeño servicio creado a traves de InjectionToken
export const URL_USUARIOS = new InjectionToken<string>('');

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // private url:string = 'https://623e63b2e8fbc4f1626eb58d.mockapi.io/usuarios/';//esta url se reemplaza por el servicio de URL_USUARIOS 

  // inyecto la dependencia de HttpClient
  // inyecto el servicio de URL_USUARIOS
  constructor(private httpClient:HttpClient, @Inject(URL_USUARIOS) private url:string) { }

  // Manejo de errores de la comunicacion Http (lo llamo desde el pipe del observable)
  handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.warn('Error HTTP FrontEnd', error.error.message)
    }
    else{
      console.warn(`Error HTTP BackEnd: ${error.status} - Error: ${error.message}`)
    }
    return throwError( () => '*-__-* Error de comunicación Http *-__-*' )
  };

  // Manejo de Headers (lo llamo desde los args de los metodos http)
  private getHttpOptions() {
    return {
      headers : new HttpHeaders({
        'content-type' : 'application/json'
      })
    }
  }

  // creo los metodos del servicio de Usuarios que usara el componente Usuarios
  get() {
    return this.httpClient.get<IUsuario[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  post(usuario:IUsuario) {
    return this.httpClient.post<IUsuario>(this.url, usuario, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  put(id:string|undefined, usuario:IUsuario) {
    return this.httpClient.put<IUsuario>(this.url+id, usuario, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  delete(id:string|undefined) {
    return this.httpClient.delete<IUsuario>(this.url+id)
      .pipe(catchError(this.handleError));
  }

}
