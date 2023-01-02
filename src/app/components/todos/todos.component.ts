import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BackendService } from '../../services/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from './../modal/modal.component';
import { PrintModalComponent } from 'src/app/modal/print-modal/print-modal/print-modal.component';
import { TitleModalComponent } from '../../modal/title-modal/title-modal.component';
import { TodoItemComponent } from './../todo-item/todo-item.component';
import { TodoItemService } from './../../services/todo-item.service';
import { TodoModel } from './../../models/todo.model';
import { TodoService } from './../../services/todo.service';
import { UpdateTitleComponent } from '../../modal/update-title/update-title/update-title.component';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import { response } from 'express';

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
  todos!: any;
  arrayTodosList!: any[];
  todoForm!: FormGroup;
  getDatas!: any;
  dataUser: any[] = [];
  panelOpenState = false;
  dataUserId!: any; // Pour récupérer l'id de l'utilisateur (pour les services).
  listsArray!: any[];
  userId!: any;
  listID!: any;
  arrayModif!: any[];
  constructor(private _userService: UserService,
    private _backendService: BackendService,
    private _todoService: TodoService,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _matDialog: MatDialog,
    private _todoItemService: TodoItemService) { }

  ngOnInit(): void {


    this._userService.getUserLogged().subscribe((response: any) => {
      console.log('current user logged:', response);
      this.datas = response[0];
      this.userId = response[0].utilisateur_id;


      this._todoService.readAllLists(this.userId).subscribe((lists: any) => {
        console.log('all lists', lists);
        this.listsArray = lists;
        console.log(' this.listsArray', this.listsArray);


        // this.listsArray.forEach((data: any) => {
        //   this.listID = data.todo_list_id
        //   console.log('this.listID',this.listID);

        // })
        this._todoItemService.getOneDetail(this.listID).subscribe((response: any) => {
          console.log('response detail', response);

          // this.listsArray.push(response)
          console.log('test test', this.listsArray);

        })
      })
    })


    this.todoForm = this._fb.group({
      list_title: ['', Validators.required],
      todo_list_id: [this.todosModel.todo_list_id],
      utilisateur_id: [JSON.stringify(this.datas)]
    })




    // this._todoService.readAllLists().subscribe((allTodos: any) => {
    //   console.log('allTodos', allTodos)
    //   this.arrayTodosList = allTodos
    //   //   if (this.datas[0].utilisateur_id == this.arrayTodosList[0].utilisateur_id) {

    //   //     this.arrayTodosList.push(allTodos)
    //   console.warn('arrayTodosList', this.arrayTodosList);
    // })







  }


  // addList() {
  //   console.log('test');

  //   const listValue = this.todoForm.value;
  //   console.log(listValue);

  //   this.todosModel = Object.assign(this.todosModel, listValue)
  //   this._todoService.createList(listValue).subscribe((todoObject: any) => {
  //     console.log(todoObject);
  //     this.todosModel = todoObject;
  //     this.arrayTodosList.push(this.todosModel)

  //   })
  //   // console.warn('todosModel', this.todosModel);
  //   this.todoForm.reset()

  // }


  // deleteList(id: any) {

  //   this._todoService.deleteList(id).subscribe((datasDeleted: any) => {
  //     this._todoItemService.deleteAllDetails(id).subscribe()

  //   });

  //   this._snackBar.open('To do has been deleted !', 'Close', {
  //     duration: 3000
  //   });

  //   this.arrayTodosList = this.arrayTodosList.filter((todo: any) => todo.todo_id != id)
  // }


  onOpenModal(): void {

    const modalRef = this._matDialog.open(TitleModalComponent, {
      width: '40vw', //sets width of dialog
      height: '40vh',
      data: this.datas
    })
    console.log(this.datas);


    modalRef.afterClosed().subscribe((responseFromModal: any) => {


      console.log('responseFromModal', responseFromModal);
      // let data = responseFromModal
      this.sendDatas = responseFromModal

      console.log('this.sendDatas', this.sendDatas);




      this._snackBar.open('La liste a été ajoutée !', 'Fermer', {
        duration: 3000
      });
    })
  }





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


      console.log('responseFromModal', responseFromModal);
      this.arrayModif = responseFromModal


      console.log('this.listsArray', this.listsArray);

      this._snackBar.open('La liste a été modifée !', 'Fermer', {
        duration: 3000
      });
    })
  }

  onDelete(id: number) {
    console.log(id);

    this._todoItemService.deleteAllDetails(id).subscribe((listDelete: any) => {
      console.log('liste supprimée !');

      this._todoService.deleteList(id).subscribe((listDelete: any) => {
        console.log('liste supprimée !', listDelete);
        window.location.href = "/todos";
      })

    })


  }


  onPrint(list: any) {

    const modalRef = this._matDialog.open(PrintModalComponent,
      {
        minWidth: "300px",
        data: list
      }
    )

    modalRef.afterClosed().subscribe((responseFromModal: any) => {


      // console.log('responseFromModal', responseFromModal);
      // this.listsArray = responseFromModal


      // console.log('this.listsArray', this.listsArray);

      this._snackBar.open('Le pdf a été généré !', 'Fermer', {
        duration: 3000
      });
    })
  }

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
