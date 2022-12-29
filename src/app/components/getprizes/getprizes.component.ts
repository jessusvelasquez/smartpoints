import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CallBakEndService } from '../../services/call-bak-end.service';
import { Data } from '../../models/dataModels';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getprizes',
  templateUrl: './getprizes.component.html',
  styleUrls: ['./getprizes.component.scss'],
  providers: [CallBakEndService],
})
export class GetprizesComponent implements OnInit {
  @ViewChild('modalU', { static: false }) contentModalU: any;

  products = {
    angel: {
      points: 1000,
    },
    box: {
      points: 500,
    },
    vase: {
      points: 2000,
    },
  };

  clientPonts = 0;
  clientID: number;
  data: Data;
  constructor(
    private modalService: NgbModal,
    private _serviceBack: CallBakEndService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('init compo');
  }
  ngAfterViewInit() {
    this.openModalU();
  }

  openModalU() {
    this.modalService.open(this.contentModalU, { size: 'sm', centered: true });
  }
  closeModalU() {
    this.modalService.dismissAll();
  }

  getPrizes(points: number) {
    console.log(
      'getPrizes: ',
      'puntos: ',
      points,
      ' id cliente: ',
      this.clientID
    );
    if (this.clientPonts < points) {
      Swal.fire(
        'Lo siento!',
        `Tus puntos no alcanza para obtener este premio`,
        'warning'
      );
    } else {
      this.data = new Data();
      this.data.clientId = this.clientID;
      this.data.puntos = points;

      this._serviceBack.restPoints(this.data).subscribe((result) => {
        Swal.fire(
          'Excelente!',
          `Tu premio esta disponible para entrega`,
          'success'
        );
        this.router.navigate([''])
      });
    }
  }

  getPointsToPrize() {
    console.log('Consultando: ', this.clientID);

    this._serviceBack.getPoints(this.clientID).subscribe(
      (result) => {
        console.log(result);

        let r = JSON.stringify(result);
        let j = JSON.parse(r);
        this.clientPonts = j.message;
        this.closeModalU();
      },
      (error) => {
        console.log(error);
        if (error.status == 404) {
          this.clientPonts = 0;
        }
      }
    );
  }
}
