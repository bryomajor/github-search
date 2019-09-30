import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientId = environment.githubClientId;
  private clientSecret = environment.githubClientSecret;

  constructor(private _http: HttpClient) {
    console.log("Service is now ready!");
    this.username = 'bryomajor';
   }

   getProfileInfo() {
    return this._http.get<any>("https://api.github.com/users/" + this.username + "?client_id" + this.clientId
    + "&client_secret" + this.clientSecret).pipe(
      map(response => response))
   }

   getRepos() {
    return this._http.get<any>("https://api.github.com/users/" + this.username + "/repos?client_id" + this.clientId
    + "&client_secret" + this.clientSecret).pipe(
      map(response => response))
   }

   updateProfile(visitorUsername: string){
     this.username = visitorUsername;

   }
}
