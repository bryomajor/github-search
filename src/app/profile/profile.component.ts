import { Profile } from './../profile';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  repos: Repos;
  visitorUsername: string;

  constructor(private _profileService: ProfileService) {
    this._profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this._profileService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
   }

   findProfile() {
     this._profileService.updateProfile(this.visitorUsername);
     this._profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this._profileService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit() {
  }

}
