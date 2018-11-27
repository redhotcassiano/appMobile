import { AlertProvider } from './../alert/alert';
import { HttpResultModel } from './../../app/models/HttpResultModel';
import { NetworkProvider } from './../network/network';
import { SpinnerProvider } from './../spinner/spinner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {

  constructor(
      private http: HttpClient,
      private spinnerSvc: SpinnerProvider,
      private alertSvc: AlertProvider,
      private networkSvc: NetworkProvider
    ) {

  }

  public get(url: string): Promise<HttpResultModel> {
    this.spinnerSvc.Show('Carregando...');

    return new Promise ((resolve)=>{

      if(this.networkSvc.IsOnline){
        this.http.get(url).subscribe(_res =>{

          this.spinnerSvc.Hide()

          resolve({
            success: true,
            data: _res,
            err: null
          })

        }, err =>{
          this.spinnerSvc.Hide()
          this.alertSvc.Toast('Não Foi Possivel Consultar os Dados!', 'bottom')

          resolve({
            success: false,
            data: [],
            err: err
          })
        })
      }else{
        this.spinnerSvc.Hide()
        this.alertSvc.Toast('Erro com sua Conexão com a Internet!', 'bottom')

        resolve({
          success: true,
          data: [],
          err: 'Erro Conexão Internet'
        })
      }

    })
  }

}
