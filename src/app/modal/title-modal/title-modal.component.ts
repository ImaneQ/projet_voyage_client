import { DetailModel } from './../../models/detail-model';
import { TodoItemService } from './../../services/todo-item.service';
import { TodoService } from './../../services/todo.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoModel } from 'src/app/models/todo.model';
import { Router } from '@angular/router';
// import { DetailModel } from '../../models/detail-model';


@Component({
  selector: 'app-title-modal',
  templateUrl: './title-modal.component.html',
  styleUrls: ['./title-modal.component.scss']
})
export class TitleModalComponent implements OnInit {
  newTodo = new TodoModel();
  newDetailTodo = new DetailModel();
  // title = new FormControl;
  // todosAdded: any[] = [];
  // editForm!: FormGroup;
  // // formElements = new FormArray([]);
  // items!: any;
  // myValue!: any;

  title!: string;
  isChecked = false;
  titleControl = new FormControl();
  descControl = new FormControl();
  valuesModal!: any;

  constructor(@Inject(MAT_DIALOG_DATA) public editTitle: any,
    private _fb: FormBuilder,
    private _todoService: TodoService,
    private _dialogRef: MatDialogRef<any>,
    private _snackBar: MatSnackBar,
    private _todoItemService: TodoItemService,
    private _route: Router) { }

  ngOnInit(): void {
    console.warn('datas for modal', this.editTitle);
    console.log(this.editTitle.utilisateur_id);

    // this.editForm = this._fb.group({

    //   utilisateur_id: [this.editTitle.utilisateur_id],
    //   todo_list_id: [this.newTodo.todo_list_id],
    //   list_title: new FormControl('', Validators.required),
    //   allTodos: new FormArray([])
    // })



    // this.addNewRow();
    // this.title.setValue(this.editTitle.description)


  }

  // onSubmit() {

  //   // console.log('TEST',this.editForm.get("allTodos"))


  //   const list_title = this.editForm.value.list_title;
  //   const utilisateur_id = this.editTitle.utilisateur_id;
  //   // const edit = this.editForm.value;

  //   const newObj = { list_title: list_title, utilisateur_id: utilisateur_id }
  //   console.log('list_title', list_title);

  //   this.newTodo = Object.assign(this.newTodo, list_title)

  //   //  on appelle service on recupere datas du formulaire et on envoie
  //   this._todoService.createList(newObj).subscribe((response: any) => {
  //     // quand on ferme modale, (response) ce qu'on veut envoyer au component parent
  //     // this._dialogRef.close(response)
  //     this.newTodo = response;
  //     this.editForm.value.todo_list_id = response.todo_list_id
  //     // response = { response: utilisateur_id, list_title }
  //     console.log('response', response);
  //     // console.log('values editForm', this.editForm.value);

  //     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //     // console.log(this.items.value.forEach((element: any) => {
  //     //   console.log('items ici', element.todo);

  //     // }));


  //     // const todoValue = this.editForm.controls['allTodos'].value.todo;
  //     // const todoValue = this.editForm.get('allTodos')?.valueChanges
  //     // const todoValue = this.editForm.value.allTodos;
  //     // const todoValue = this.items.value.forEach((element: any) => {
  //     //   this.myValue = element.todo;
  //     // })
  //     // const todoValue = this.editForm.get("allTodos")?.value;
  //     // console.log('todoValue test', todoValue);
  //     // // console.log('TEST', this.editForm.controls['allTodos'].value.forEach((element: any) => {
  //     // //   console.log('ici element', element);

  //     // // }));

  //     // const valueOfTodo = this.editForm.controls['allTodos'].value.forEach((element: any) => {
  //     //   this.myValue = element.todo
  //     // });
  //     // // console.log('TEST', this.editForm.get("allTodos")?.value);
  //     // console.log('this.myValue',this.myValue);


  //     // const todo_list_id = this.editForm.value.todo_list_id;
  //     // // console.log('todo_list_id', todo_list_id);

  //     // const objTodo = { description: this.myValue, todo_list_id: todo_list_id }


  //     // // console.log('this.myValue', this.myValue);

  //     // this._todoItemService.postDetail(objTodo).subscribe((todoObj: any) => {
  //     //   this.newDetailTodo = todoObj;
  //     //   // let objTodo = { description: todoValue, todo_list_id: todo_list_id }
  //     //   // objTodo = todoObj
  //     //   console.log('todoObj', todoObj);
  //     //   // console.log('mon obj test', objTodo);
  //     //   // console.log('this.items', this.items);


  //     //   this.items.push(this.newDetailTodo);
  //     // })

  //   })





  //   // ::::::::::::::::::::::::::::::::::::::::::::

  //   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //   // const detail_id = this.newDetailTodo.detail_id;
  //   const todoValue = this.editForm.controls['allTodos'].value;
  //   // const todoValue = this.editForm.value;
  //   console.log('todoValue test', todoValue);
  //   console.log('TEST', this.editForm.controls['allTodos']);


  //   const todo_list_id = this.editForm.value.todo_list_id;
  //   // const edit = this.editForm.allTodos;
  //   // const todoDescription = this.editForm.allTodos
  //   // console.log('editForm', this.editForm);
  //   // console.log('todo_list_id', todo_list_id);

  //   const objTodo = { description: todoValue, todo_list_id: todo_list_id }

  //   // this.newDetailTodo = Object.assign(this.newTodo, objTodo)


  //   this._todoItemService.postDetail(objTodo).subscribe((todoObj: any) => {
  //     this.newDetailTodo = todoObj;
  //     console.log('todoObj', todoObj);

  //     this.items.push(this.newDetailTodo);
  //     // console.log('items après push', this.items);
  //   })

  //   // this.postTodoDetail();

  //   // this._todoService.updateList(title.editTitle.todo_list_id, title.editForm.value.description).subscribe((response: any) => {
  //   //   // todo_id: this.todo.todo_id,
  //   //   // description: this.description.value
  //   //   console.log(this);

  //   //   this._dialogRef.close(
  //   //     {
  //   //       utilisateur_id: this.editTitle.utilisateur_id,
  //   //       todo_list_id: this.editTitle.todo_list_id,
  //   //       description: title.editForm.value.description
  //   //     }
  //   //   )
  //   //   console.warn('response', response);
  //   // })

  //   // let now = new Date();
  //   // let heure = now.getHours();
  // }


  // addNewRow() {
  //   this.items = this.editForm.get("allTodos") as FormArray;
  //   this.items.push(this.genRow())
  // }

  // genRow(): FormGroup {
  //   return new FormGroup({
  //     todo: new FormControl('', Validators.required)
  //     // detailId: new FormControl(this.newDetailTodo.detail_id)
  //   })

  // }

  // get allTodos() {

  //   return this.items = this.editForm.get("allTodos") as FormArray;

  // }


  // removeList(index: any) {

  //   this.items = this.editForm.get("allTodos") as FormArray;
  //   this.items.removeAt(index)

  //   this._todoService.deleteList
  //   this._snackBar.open('La liste a été supprimée !', 'Fermer', {
  //     duration: 3000
  //   });
  // }
  // onCancel() {
  //   this._dialogRef.close()
  // }



  // deleteTodo(id: any) {
  //   this._todoItemService.deleteDetail(id).subscribe();

  //   this._snackBar.open('Todo supprimé !', 'Fermer', {
  //     duration: 3000
  //   });
  //   const todoValue = this.editForm.controls['allTodos'].value[id];
  //   this.items.removeAt(todoValue)

  // }

  // https://www.youtube.com/watch?v=QfGMT0eoBrk


  onAddTitle() {
    // On récupère le titre de la liste
    const titleForm = this.titleControl.value;
    console.log('log de la value de l\'input title : ', titleForm);




    const utilisateur_id = this.editTitle.utilisateur_id;

    const newListTitle = { list_title: titleForm, utilisateur_id: utilisateur_id }
    this.newTodo = Object.assign(newListTitle)



    // Puis, on les envoie à la BDD
    this._todoService.createList(newListTitle).subscribe((titleList: any) => {
      this.valuesModal = titleList;
      console.log('envoyé à la BDD : ', this.valuesModal)
    })

  }

  /** Cette méthode sert à valider avec la touche entrée (accessibilité)
   * @param  {KeyboardEvent} event
   */
  onSendTitle(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.onAddTitle()
    }
  }

  /** Cette méthode sert à valider la modale
   */
  onValidateList() {
    this._dialogRef.close()
    window.location.href = "/todos";
  }
}
