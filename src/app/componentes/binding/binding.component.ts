import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  mensaje:string = "Soy mensaje";
  valor1:number = 123;
  valor2:number = 456;
  contador:number = 0;
  valor3:number = 789;
  valor4:number = 321;
  timer:number = 0;
  refTimer:any;

  constructor() {
    console.log('Binding -> constructor');
   }

  /*------------------------------------------------------- */
  /*                LIFE CYCLE HOOKS                        */
  /*------------------------------------------------------- */
  ngOnInit(): void {
    console.log('Binding -> ngOnInit');
    this.refTimer =  setInterval( () => {
      this.timer++
      console.log(this.timer);
    }, 1000);
  };

  ngDoCheck():void{
    // console.log('Binding -> ngDoCheck');
  }

  ngOnDestroy():void{
    console.log('Binding -> ngOnDestry');
    clearInterval(this.refTimer);
  }
/*---------------------------------------------------------- */

  modificar(e:any) {
    // console.log(e);
    let valor = e.target.value;
    // console.log(valor);
    this.valor3 = valor;

  }

}
