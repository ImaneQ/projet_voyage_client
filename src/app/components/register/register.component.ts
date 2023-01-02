import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BackendService } from './../../services/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../modal/modal.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User();
  registerForm!: FormGroup;

  constructor(private _fb: FormBuilder,
    private _backendService: BackendService,
    private _matDialog: MatDialog) { }

  ngOnInit(): void {

    this.registerForm = this._fb.group({

      nom: [this.user.nom, Validators.required],
      prenom: [this.user.prenom, Validators.required],
      utilisateur_mail: [this.user.utilisateur_mail, [Validators.required, Validators.email]],
      utilisateur_mdp: [this.user.utilisateur_mdp, Validators.required],
      conf_utilisateur_mdp: ['', Validators.required]

    })
  }



  onSubmit() {

    const form = this.registerForm.value;

    const utilisateur_mdp = form.utilisateur_mdp;
    const confirmPassword = form.confPassword;

    // if (utilisateur_mdp !== conf_utilisateur_mdp) {
    //   alert('mots de passes non identiques')
    //   return;
    // }

    this.user = Object.assign(this.user, form)

    // token ds register ds projet digilab
    this._backendService.postUser(this.user).subscribe((postDatas: any) => {

      console.warn('postDatas', postDatas);

      this._matDialog.open(ModalComponent,
        {
          width: '25vw',
          height: '60vh',
          data: postDatas
          // enterAnimationDuration: '800ms',
          // exitAnimationDuration: '800ms',
        })

    })
  }
}
