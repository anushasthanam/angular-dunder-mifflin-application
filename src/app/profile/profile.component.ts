import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../../services/data-storage.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = this.dataStorageService.getUser();
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

}