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
  constructor(private commonService: CommonService,
    private dialogRef: MatDialogRef<CommonPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public requestData: any
  ) { }
  confirmMsg: any;
  ngOnInit(): void {

    if (this.requestData) {
      this.confirmMsg = this.requestData.message;  // Load the message from the injected requestData
      console.log(this.confirmMsg);
    }
  }
  no(){

    this.requestData.f("you don not  have permission to delete this record");

  }
  ok(){
    this.requestData.s("Record Deleted successfully");
  }
}


