import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Data } from '../../models/dataModels';
import { CallBakEndService } from "../../services/call-bak-end.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pointregistry',
  templateUrl: './pointregistry.component.html',
  styleUrls: ['./pointregistry.component.scss'],
  providers: [NgbModalConfig, NgbModal, CallBakEndService],
})
export class PointregistryComponent implements OnInit {
  data:Data;
  name: string;
  puntosDeCompra:number;
  constructor(config: NgbModalConfig, private modalService: NgbModal, private _serviceBack: CallBakEndService) {
    config.backdrop = 'static';
    config.keyboard = false;    
  }

  ngOnInit(): void { } 
  open(content: any) {
    this.data = new Data();
    this.modalService.open(content);
  }
  savedata() {
    console.log('save data from modal: ', this.data);
    // Cada $500 equivale a 1 punto
    this.puntosDeCompra = Math.round(this.data.vlrfactura / 500);
    this.data.puntos = this.puntosDeCompra;
    console.log("puntosDeCompra: ",this.puntosDeCompra);
    

    this._serviceBack.sumPoints(this.data).subscribe(
      result=>{
        console.log("result-api",result);
        //if(result.)
        Swal.fire(
          'Excelente!',
          `Acumulaste ${this.puntosDeCompra} puntos`,
          'success'
        ).then((result)=>{
          this.puntosDeCompra=0;          
        })
      },error=>{
        console.log(error.status);
        if(error.status == 404){
          Swal.fire({
            title: 'Cliente no registrado',
            text: "Deseas realizar el registro?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText:"Cancelar",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Registar cliente!'
          }).then((result) => {
            if (result.isConfirmed) {
              this._serviceBack.addClient(this.data).subscribe(
                resp =>{
                  console.log(resp);
                  
                  Swal.fire(
                    'Excelente!',
                    `Acumulaste ${this.puntosDeCompra} puntos`,
                    'success'
                  ).then((result)=>{
                    this.puntosDeCompra=0;          
                  })
                },error=>{
                  Swal.fire(
                    'Lo sentimos!',
                    'Ocurrió un error al registrar el cliente',
                    'error'
                  )
                }
              )
            }
          })
        }else{
          Swal.fire(
            'Lo sentimos!',
            'Ocurrió un error al registrar tu factura',
            'error'
          )
        }
      }
    );
    this.closeModal()
  }
  
  closeModal(){
    this.modalService.dismissAll();
  }

}
