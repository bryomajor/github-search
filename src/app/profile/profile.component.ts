import { ProfileService } from './../profile-service/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) {
   }

  ngOnInit() {
    this.profileService.getProfileInfo();
  }

}
