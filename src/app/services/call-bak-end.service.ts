import { Injectable } from '@angular/core';
import { Data } from "../models/dataModels";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CallBakEndService {

  url:string
 
  constructor(private _http:HttpClient) {
    this.url="https://mp2hc87ai5.execute-api.us-east-2.amazonaws.com/dev"
   }

   //Actualiza los puntos del cliente (suma o acumula)
  sumPoints(requestData: Data){
    console.log("savedData: ",requestData);
    return this._http.put(this.url+'/updatepoints ',requestData);
  }

  //Resta puntos por redención de premios
  restPoints(requestData: Data){
    console.log("savedData: ",requestData);
    return this._http.put(this.url+'/restpoints ',requestData);
  }

  //Registra un nuevo cliente con nuevos puntos(primer ingreso)
  addClient(requestData: Data){
    console.log("savedData: ",requestData);
    return this._http.post(this.url+'/setpoints',requestData);
  }
  
  // Obtiene los puntos del cliente
  getPoints(clienId:number){
    console.log("consultando: ",clienId);
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",clienId.toString());
    return this._http.get(this.url+'/getpoints',{params: queryParams});
    
  }
}
