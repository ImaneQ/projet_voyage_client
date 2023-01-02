import { Component, OnInit } from '@angular/core';

import { BackendService } from './../../services/backend.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  user = new User();

  constructor(private _backendService: BackendService) { }

  ngOnInit(): void {

    // this._backendService.postLogin(this.user).subscribe((data: any) => {
    //   console.warn('data', data);
    // })
  }

}
