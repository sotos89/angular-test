import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'angular-project';
  constructor(private svc: TestService, private http: HttpClient){
    this.svc.printToConsole("Go to console")
  }
  
  ngOnInit(){

  }
}
