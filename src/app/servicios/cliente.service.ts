import { Injectable } from '@angular/core';

/*------------------------------------------------------------------*/
/*----------- Configuracion del Servicio con UseExisting -----------*/
/*------------------------------------------------------------------*/
@Injectable({
  providedIn: 'root'
})
export class ClienteServiceUseExisting {

  private clientes : string[] = [
    'Juan_UseExisting',
    'Jose_UseExisting',
    'Maria_UseExisting',
    'Ana_UseExisting'
  ];

  constructor() { }

  getClientes() { 
    return this.clientes;
  }

  agregarCliente(cliente:string) { 
    this.clientes.push(cliente);
  }

  borrarCliente() {
    this.clientes.shift();
  }

}

/*------------------------------------------------------------------*/
/*------------- Configuracion del Servicio con UseClass ------------*/
/*------------------------------------------------------------------*/

export class ClienteServiceUseClass {

  private clientes : string[] = [
    'Juan_UseClass',
    'Jose_UseClass',
    'Maria_UseClass',
    'Ana_UseClass'
  ];

  constructor() { }

  getClientes() { 
    return this.clientes;
  }

  agregarCliente(cliente:string) { 
    this.clientes.unshift(cliente);
  }

  borrarCliente() {
    this.clientes.pop();
  }

}


/*------------------------------------------------------------------*/
/*--------------- Configuracion Original del Servicio --------------*/
/*------------------------------------------------------------------*/

@Injectable(/* {
  providedIn: 'root'
} */)
export class ClienteService {

  private clientes : string[] = [
    'Juan',
    'Jose',
    'Maria',
    'Ana'
  ];

  constructor() { }

  getClientes() { 
    return this.clientes;
  }

  agregarCliente(cliente:string) { 
    this.clientes.push(cliente);
  }

  borrarCliente() {
    this.clientes.pop();
  }

}
