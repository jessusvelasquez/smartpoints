import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CallBakEndService } from "../../services/call-bak-end.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pointsconsult',
  templateUrl: './pointsconsult.component.html',
  styleUrls: ['./pointsconsult.component.scss'],
  providers: [NgbModalConfig, NgbModal, CallBakEndService],
})
export class PointsconsultComponent implements OnInit {


  withPoints:boolean
  clientPoints:number
  clientId:number
  constructor(config: NgbModalConfig, private modalService: NgbModal, private _serviceBack: CallBakEndService) {
    config.backdrop = 'static';
    config.keyboard = false; 
   }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content);
  }
  close(form: NgForm){
    this.resetForm(form)
    this.withPoints=false;
    this.clientPoints=1;
    this.modalService.dismissAll();
  }
  getPoints(){
    console.log("Consultando: ",this.clientId);
    this._serviceBack.getPoints(this.clientId).subscribe(
      (result)=>{
        let r = JSON.stringify(result)
        let j = JSON.parse(r)        
        
        this.withPoints = true;
        this.clientPoints=j.message;
    }, error=>{
      console.log(error);
      if(error.status == 404){
        this.withPoints = false;
        this.clientPoints=0
      }
    });
  }

  resetForm(form: NgForm){
    form.resetForm();
  }

}
