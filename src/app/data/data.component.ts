import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
      });
  }
}
