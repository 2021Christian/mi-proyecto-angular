import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes:string[] = [];
  client:string = '';

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

  agregarCliente(client:string){
    this.clienteService.agregarCliente(client);
  }

}
