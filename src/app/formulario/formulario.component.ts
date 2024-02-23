import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PAYBOX_CONFIG } from '../data/data';
declare var iniciarDatos:any;
declare var reload:any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, AfterViewInit  {

  @Input() productFromDetail?: any;

  formularioContacto: FormGroup;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  identificacion: string = '';
  precio: string = '';
  data = PAYBOX_CONFIG
  
  constructor( private form: FormBuilder ){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)] ],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email] ],
      identificacion: ['', [Validators.required, Validators.minLength(3)]],
    })
  }
  
    ngOnInit(): void {
        iniciarDatos(this.data);
        this.data.PayboxBase0 = this.productFromDetail?.price;
        this.data.PayboxDescription = this.productFromDetail?.title; 
    }

    ngAfterViewInit() {
        reload(this.data);
    }

    onPayButtonClick(event: Event){
      event.preventDefault();
      const nombre  = this.formularioContacto.get('nombre')?.value;
      const apellido = this.formularioContacto.get('apellido')?.value;
      this.data.PayboxSendname = `${nombre} ${apellido}`;
      this.data.PayboxSendmail = this.formularioContacto.get('email')?.value;
      this.data.PayBoxClientIdentification = this.formularioContacto.get('identificacion')?.value;
      

    }

    hasErrors(controlName:string, errortype: string){
      return this.formularioContacto.get(controlName)?.hasError(errortype) && this.formularioContacto.get(controlName)?.touched;
    }

    }
