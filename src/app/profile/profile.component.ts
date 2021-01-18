import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../../services/data-storage.service';

import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser = this.dataStorageService.getUser();
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

}