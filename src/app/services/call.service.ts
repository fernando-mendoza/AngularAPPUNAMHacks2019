import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CallService {

  URI: String = '';
  ciudad: String = 'ciudad';
  estado: String = 'estado';


  constructor(private http: HttpClient) { 
    this.URI =`https://test-hacks1.azurewebsites.net/api/HttpTrigger1?code=gmW5/Qgwj8SnDmlZAgv5zqBB8tmsjg9hdBOnAM2Oae5ZfBfndSajrg==&ciudad=`
  }


  getData(typeOption: String){
    return this.http.get(`${this.URI}${typeOption}`)
  }


}
