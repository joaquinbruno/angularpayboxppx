import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


declare var iniciarDatos:any;
declare var reload:any;



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, AfterViewInit  {

  formularioContacto: FormGroup;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  identificacion: string = '';
  precio: string = '';

  constructor( private form: FormBuilder ){
    this.formularioContacto = this.form.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      identificacion: [''],
      precio: [''],
    })
  }
  
  data = {
   
    PayboxRemail: "equipopagoplux@gmail.com",
    
    PayboxSendmail: "",
    
    PayboxRename: "UsuarioNombre",
    
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
        console.log(this.formularioContacto)
    }

    ngAfterViewInit() {
        reload(this.data);
    }

    onChangePrice(event: any){
      const valueInput = event.target.value;
      this.data.PayboxBase0 = valueInput;
    }

    

    onPayButtonClick(event: Event){
      event.preventDefault();
      const nombre  = this.formularioContacto.get('nombre')?.value;
      const apellido = this.formularioContacto.get('apellido')?.value;
      this.data.PayboxSendname = `${nombre} ${apellido}`;
      this.data.PayboxSendmail = this.formularioContacto.get('email')?.value;
      this.data.PayBoxClientIdentification = this.formularioContacto.get('identificacion')?.value;
      this.data.PayboxBase0 = this.formularioContacto.get('precio')?.value;
      console.log(this.data.PayboxSendname)
    }

    }
