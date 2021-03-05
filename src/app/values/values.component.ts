import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IUserDetails } from '../models/IUserDetails';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  public values: string[] = [];
  public userDetails: IUserDetails | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  public showPublicValues(): void {
    this.values = [];

    this.apiService.getPublicValues().subscribe(values => this.values = values);
  }

  public showSignedInValues(): void {
    this.values = [];

    this.apiService.getSignedInValues().subscribe(values => this.values = values);
  }
  
  public showAdminValues(): void {
    this.values = [];

    this.apiService.getAdminValues().subscribe(values => this.values = values);
  }
  
  public showUserGroups(): void {
    this.userDetails = null;

    this.apiService.getUserDetails().subscribe(userDetails => this.userDetails = userDetails);
  }
}
