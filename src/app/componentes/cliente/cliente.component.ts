import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes:string[] = [];
  client:string = '';
  id:string = '';
  cat:string = '';

  constructor(private clienteService:ClienteService, activatedRoute:ActivatedRoute) { 
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.cat = params['cat'];
    })
  }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

  agregarCliente(client:string){
    this.clienteService.agregarCliente(client);
  }

}
