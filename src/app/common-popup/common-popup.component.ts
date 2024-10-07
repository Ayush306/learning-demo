import { Component, Inject, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../common-service';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-common-popup',
  standalone: true,
  imports: [MatButtonModule, MatLabel,
    MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent
  ],
  templateUrl: './common-popup.component.html',
  styleUrl: './common-popup.component.css'
})
export class CommonPopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public requestData: any
  ) { }
  confirmMsg: any;
  ngOnInit(): void {
     this.confirmMsg = this.requestData.message;
  }
  no(){
    this.requestData.f("User Click No");
    
  }
  ok(){
    this.requestData.s("User Click OK");
  }
}


