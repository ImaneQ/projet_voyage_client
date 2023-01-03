import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { BackendService } from './../../services/backend.service';
import { User } from './../../models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  // isLoginSubject!: true = boolean
  datas!: any;
  user = new User();
  datasU: any[] = [];
  constructor(private _userService: UserService,
    private _backendService: BackendService) { }

  ngOnInit(): void {

    this._userService.getUserLogged().subscribe((response: any) => {
      console.log('current user logged:', response);
      this.datas = response

    })

    let dateTime = new Date()
    console.log(dateTime);

  }

  //  logout() : void {
  //   localStorage.removeItem('token');
  //   this.isLoginSubject.next(false);
  // }



}
