import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { CommonPopupComponent } from './common-popup/common-popup.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  openPopupSub: Subject<any> = new Subject<any>();
  public confirMsg: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  public confirmbox(requestData: any) {
    this.openPopup(requestData);
  }
  openPopup(requestData: any): void {
    this.confirMsg.next({ requestData });
    this.dialog.open(CommonPopupComponent,{ data: requestData });
  }
 
  public getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  public deleteComment(id:any) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
 
}
