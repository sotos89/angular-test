import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TestService } from '../test.service';
import { Female } from '../models/females';
import { RelatedTopics } from '../models/relatedTopics';

@Component({
  selector: 'app-females',
  templateUrl: './females.component.html',
  styleUrls: ['./females.component.css']
})
export class FemalesComponent implements OnInit {
  females : Female[];
  relatedTopics : RelatedTopics[];
  user: any;  
  name: any
  response: any;

  showDetails : boolean = false;

  getName(Female) {
    this.user = this.http.get('https://api.duckduckgo.com/?q='+Female+'&format=json&pretty=1')
    .subscribe((relatedTopics)=> {
      this.relatedTopics = relatedTopics.RelatedTopics[0];
      console.log('RelatedTopics', this.user);
    });
  }

  constructor(private svc: TestService, private http: HttpClient){
    this.svc.printToConsole("Go to console")
  }

  ngOnInit() {
    this.user = this.http.get('http://uinames.com/api/?amount=10?gender=male')
    .subscribe((females)=> {
      this.response = females;
    })
  }
}
