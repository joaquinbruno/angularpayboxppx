import { Component, OnInit, AfterViewInit } from '@angular/core';
// @ts-ignore

declare var iniciarDatos:any;
declare var reload:any;



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, AfterViewInit  {

  constructor(){}
  
  data = {
   
    PayboxRemail: "equipopagoplux@gmail.com",
    
    PayboxSendmail: "",
    
    PayboxRename: "UsuarioNombre ",
    
    PayboxSendname: "UsuarioApellido",
    
    PayboxBase0: "10",
   
    PayboxBase12: "",
   
    PayboxDescription: "Descripción de prueba",
    
    PayboxProduction: false,
  
    PayboxEnvironment: "sandbox",
    
    PayboxLanguage: "es",
   
    PayboxPagoPlux: true,
    
    PayboxDirection: "string",
   
    PayBoxClientPhone: "número telefónico del tarjetahabiente",
    
    PayBoxClientName: 'string',

    PayBoxClientIdentification: 'Identificacion de cliente',
  
    PayboxRecurrent: false,
    
    planId: true,
   
    PayboxPermitirCalendarizar: false,
   
    PayboxPagoInmediato: true,
   
    PayboxCobroPrueba: false,
   
    consumptionCode: 'string'
    };

    ngOnInit(): void {
        iniciarDatos(this.data);
    }

    ngAfterViewInit() {
        reload(this.data);
    }
    

}
