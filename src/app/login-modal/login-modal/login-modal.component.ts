import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    console.warn('les données recues par la modale', this.data);

  }

  onClick() {

    this._dialogRef.close(this.data);
    console.log(this.data);

  }
  onCancel() {
    this._dialogRef.close()
  }

}
