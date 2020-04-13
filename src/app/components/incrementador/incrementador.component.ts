import { Component, OnInit, Input, Output, EventEmitter, ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  // Los inputs son para recibir parametros de un componente padre u otro componente
  // en este caso recibire los valores del progress.component
  //Nota: se puede especificar el nombre del parametro a recibir en el input
  //para asi mismo utilizar en el componente externo. No es una buena practica.
  @Input('name') leyenda:string='Leyenda';
  @Input() progreso:number = 50;

  //El Output() se utiliza junto con el EventEmitter de @angular/core
  //para retornar el valor al componente padre desde el cual recibimos el Input.
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  //El viewChild para hacer referencia a un elemento html del incrementador.component
  @ViewChild('txtProgress') txtProgress:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValor:number){

    //Vanilla JavaScript
    //let elemHTML:any = document.getElementsByName('progreso')[0];


    if(newValor >= 100){
      this.progreso=100;
    }else if(newValor <= 0){
      this.progreso=0;
    }else{
      this.progreso = newValor;
    }
    //elemHTML.value= this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    //establecer el focus en el elemento accionado
    this.txtProgress.nativeElement.focus;
  }

  cambiarValor(valor:number){

    if(this.progreso >= 100 && valor > 0){
      this.progreso=100;
      return;
    }

    if(this.progreso <= 0 && valor < 0){
      this.progreso=0;
      return;
    }

    this.progreso = this.progreso + valor;
    //emite el nuevo valor hacia el progress.component
    this.cambioValor.emit(this.progreso);
  }

}
