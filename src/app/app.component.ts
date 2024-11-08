import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './common-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  constructor(private commonSerivce: CommonService) { }
  title = 'myapp';

  ngOnInit() {

  }
  genrateQrCode() {
    this.commonSerivce.genrateQrCode().subscribe({
      next(value) {
        console.log(value);

      },
    })

  }
}