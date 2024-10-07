import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './common-service';
import { CommonPopupComponent } from "./common-popup/common-popup.component";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonPopupComponent,
    FormsModule, MatTableModule,
    MatIconModule, MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  constructor(public dialog: MatDialog, private commonSerivce: CommonService) { }
  title = 'myapp';
  dataSource: any;
  displayedColumns: any;
  confirmMsg = { message: '', s: () => { }, f: () => { } };
  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.commonSerivce.getComments().subscribe({
      next: (res: any) => {
        this.dataSource = res;
        this.displayedColumns = ['id', 'actions'];
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }
  deleteRecord(row:any) {
    console.log(row);
    
    this.commonSerivce.confirmbox({
      message: "Are you sure want to delete this record ?",
       s: (UserResponce: any) => { 
        console.log(UserResponce);
        this.commonSerivce.deleteComment(row.id).subscribe({
          next: (res: any) => {
            if (res) {
              alert('Comment Deleted Successfully');
            } else {
              alert('Something went wrong');
            }
          },
          error: (err: any) => {
            console.error('Error occurred:', err);
            alert('Failed to delete the comment. Please try again.');
          }
      })
      },
       f: (failedResponce: any) => {
        console.log(failedResponce);

      }
    })
  }
}