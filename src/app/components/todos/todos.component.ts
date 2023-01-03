import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BackendService } from '../../services/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from './../modal/modal.component';
import { PrintModalComponent } from 'src/app/modal/print-modal/print-modal/print-modal.component';
import { TitleModalComponent } from '../../modal/title-modal/title-modal.component';
import { TodoItemService } from './../../services/todo-item.service';
import { TodoModel } from './../../models/todo.model';
import { TodoService } from './../../services/todo.service';
import { UpdateTitleComponent } from '../../modal/update-title/update-title/update-title.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  datas!: any;
  sendDatas!: any;
  datasFromModal!: any[];
  sendList!: any;
  todosModel = new TodoModel();
  todoForm!: FormGroup;
  panelOpenState = false;
  listsArray!: any[];
  userId!: any;
  listID!: any;
  arrayModif!: any[];

  constructor(private _userService: UserService,
    private _todoService: TodoService,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _matDialog: MatDialog,
    private _todoItemService: TodoItemService) { }

  ngOnInit(): void {

    // on récupère les données du user connecté grâce à notre service
    this._userService.getUserLogged().subscribe((response: any) => {
      console.log('current user logged:', response);
      this.datas = response[0];
      // on récupère l'id du user
      this.userId = response[0].utilisateur_id;

      // on récupère toutes les todo list du user grâce au service '_todoService'
      this._todoService.readAllLists(this.userId).subscribe((lists: any) => {
        console.log('all lists', lists);
        // on affecte un tableau à nos listes
        this.listsArray = lists;
        console.log(' this.listsArray', this.listsArray);

        // on récupère les descriptions liées à chaque liste
        this._todoItemService.getOneDetail(this.listID).subscribe((response: any) => {
          console.log('response detail', response);

          console.log('test test', this.listsArray);

        })
      })
    })

    // on fait appel au formbuilder pour mettre en place le todoform
    this.todoForm = this._fb.group({
      list_title: ['', Validators.required],
      todo_list_id: [this.todosModel.todo_list_id],
      utilisateur_id: [JSON.stringify(this.datas)]
    })


  }

  //  ne retourne rien :void

  onOpenModal(): void {

    // on créer notre modale
    const modalRef = this._matDialog.open(TitleModalComponent, {
      width: '40vw', //sets width of dialog
      height: '40vh',
      data: this.datas
    })
    console.log(this.datas);


    modalRef.afterClosed().subscribe((responseFromModal: any) => {


      console.log('responseFromModal', responseFromModal);
      this.sendDatas = responseFromModal

      console.log('this.sendDatas', this.sendDatas);



      // on affiche une notification lorsque la modale est fermée
      this._snackBar.open('La liste a été ajoutée !', 'Fermer', {
        duration: 3000
      });
    })
  }




  //  méthode qui sert à éditer le titre de notre todo list
  onClickPlus() {
    this._matDialog.open(TitleModalComponent,
      {
        minWidth: "300px",
        data: this.datas
      }
    )
  }

  //  méthode qui sert à ajouter descriptions
  onClickCard(list: any) {
    const modalRef = this._matDialog.open(ModalComponent,
      {
        minWidth: "300px",
        data: list
      }
    )



    modalRef.afterClosed().subscribe((responseFromModal: any) => {

      // on affecte un tableau aux valeures qu'on recoit
      console.log('responseFromModal', responseFromModal);
      this.arrayModif = responseFromModal


      console.log('this.listsArray', this.listsArray);

      this._snackBar.open('La liste a été modifée !', 'Fermer', {
        duration: 3000
      });
    })
  }

  // méthode pour supprimer une liste
  onDelete(id: number) {
    console.log(id);

    this._todoItemService.deleteAllDetails(id).subscribe((listDelete: any) => {
      console.log('liste supprimée !');

      this._todoService.deleteList(id).subscribe((listDelete: any) => {
        console.log('liste supprimée !', listDelete);
        // on redirige le user vers le component todos pour refresh le component
        window.location.href = "/todos";
      })

    })


  }

  // méthode pour générer un pdf
  onPrint(list: any) {

    const modalRef = this._matDialog.open(PrintModalComponent,
      {
        minWidth: "300px",
        data: list
      }
    )


  }

  // méthode pour modifier un titre
  updateTitle(title: any) {
    console.log('title', title);

    const modalRef = this._matDialog.open(UpdateTitleComponent,
      {
        minWidth: "30vw",
        data: title
      }
    )

  }
}
