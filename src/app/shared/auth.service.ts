import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,
    private router:Router
    ) { }
    public logOut(){
      sessionStorage.removeItem('username');
      localStorage.removeItem('username');
      localStorage.removeItem('ACCESS_ROLE');
      //token based authentication - JWT

    }

}
