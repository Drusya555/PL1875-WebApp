import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userName?:any;

  constructor() { }

  ngOnInit(): void {
    this.userName=localStorage.getItem("username");
  }

  logout(){
    

  }

}