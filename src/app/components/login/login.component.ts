import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BackendService } from './../../services/backend.service';
import { LoginModalComponent } from 'src/app/login-modal/login-modal/login-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../modal/modal.component';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // hide password initialisé a true
  hide = true;
  currentUserLogged: boolean = true;
  // on nomme le formulaire
  // FormGroup car reactive forms
  loginForm!: FormGroup;
  // on fait appel a la class User
  user = new User();

  constructor(private _fb: FormBuilder,
    private _route: Router,
    private _backendService: BackendService,
    private _matDialog: MatDialog,
    private _userService: UserService) { }

  // on met le formulaire dans ngOnInit pour qu'il s'affiche directement
  ngOnInit(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogged')
    // on utilise le formbuilder pour cosntruire le formulaire
    this.loginForm = this._fb.group({
      utilisateur_mail: (['', Validators.required]),
      utilisateur_mdp: (['', Validators.required])
    })

  }

  onSubmit() {
    // on récupere les valeurs du formlaire
    const form = this.loginForm.value;
    // on assigne notre model à un nouveau model "user"
    this.user = Object.assign(this.user, form);

    this._backendService.postLogin(this.user).subscribe((data: any) => {
      console.warn('token', data.token);
      const token = data.token;
      console.log(data.token);
      const user = data.users
      // on stocke le token ds localstorage
      localStorage.setItem('token', token)
      localStorage.setItem('userLogged', JSON.stringify(user))
      // localStorage.setItem('user', user)
      // on redirige le user vers l'overview apres qu'il submit

      this._route.navigate(['/overview'])




      const modalRef = this._matDialog.open(LoginModalComponent, {
        data: data
      })

      modalRef.afterClosed().subscribe((responseFromModal: any) => {
        console.log(responseFromModal);

        if (responseFromModal) {

          this._userService.setCurrentUser(data)

        }
      })


      if (this.currentUserLogged == true) {
        this._userService.setCurrentUser(data)
      }
      this._userService.setCurrentUser(data)
    })




  }



  goToRegister() {

    this._route.navigate(['/register'])
  }




}
