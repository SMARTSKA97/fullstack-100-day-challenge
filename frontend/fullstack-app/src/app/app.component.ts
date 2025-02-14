import { Component } from '@angular/core';
import { ImportsModule } from '../imports';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ImportsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fullstack-app';
  message = '';
  private apiUrl = `http://localhost:5244/weatherforecast/`;
  constructor (private http: HttpClient) {}
  
  ngOnInit() {
    
    this.http.get(this.apiUrl,{ responseType: 'text' }).subscribe((data) => {
      this.message = data;
    });
  }
}
