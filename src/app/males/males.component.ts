import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TestService } from '../test.service';
import { Males } from '../models/males'
import { RelatedTopics } from '../models/relatedTopics';



@Component({
  selector: 'app-males',
  templateUrl: './males.component.html',
  styleUrls: ['./males.component.css']
})

export class MalesComponent implements OnInit {
  males : Males[];
  relatedTopics : RelatedTopics[];
  user: any;  
  name: any;
  response: any;

  getName(Males) {
    this.user = this.http.get('https://api.duckduckgo.com/?q='+Males+'&format=json&pretty=1')
    .subscribe((relatedTopics)=> {
      this.response = relatedTopics.RelatedTopics[0];
      console.log('RelatedTopics', this.relatedTopics);
    });
  }

  constructor(private svc: TestService, private http: HttpClient){
    this.svc.printToConsole("Go to console")
  }
  
  ngOnInit() {
    this.user = this.http.get('http://uinames.com/api/?amount=10?gender=male')
    .subscribe((males)=> {
      this.response = males;
      console.log(males)
    })
  }
}
