import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientId = '';
  private clientSecret = '';

  constructor(private http: HttpClient) {
    console.log("Service is now ready!");
    this.username = 'bryomajor';
   }

   getProfileInfo() {
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
     .pipe(map(data => {})).subscribe(result => {})
   }
}
