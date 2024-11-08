import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient,) { }

  url = 'https://localhost:7275/api'
  genrateQrCode(){
   return this.http.get(`${this.url}/auth/generate-qrcode`)
  }


}
