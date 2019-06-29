import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Spring Demo';
  description = 'angular 8.0.3 + spring boot 2.1.4';
  users = '';

  constructor(private httpclient: HttpClient) {}

  getUsers(): void {
    this.httpclient.get<string>('/api/users').subscribe(
      result => {
        this.users = JSON.stringify(result);
      },
      error => {
        alert('error: ' + error.message);
      }
    );
  }
}
