import { TodoItemService } from './../../services/todo-item.service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  newDescription!: any[];
  descriptionArray!: any[];
  listId!: any;
  newObj!: any;
  id!: any;
  editList!: FormGroup;
  description = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public listDatas: any,
    private _dialogRef: MatDialogRef<any>,
    private _todoService: TodoService,
    private _fb: FormBuilder,
    private _todoItemService: TodoItemService) { }

  ngOnInit(): void {

    console.warn('les données recues par la modale', this.listDatas);


    this.listId = this.listDatas.todo_list_id

    this._todoItemService.getAllDetails(this.listId).subscribe((response: any) => {
      console.log('responseOnInit', response);
      this.descriptionArray = response

    })
  }


  onClose() {

    this._dialogRef.close();

  }


  onClick(todo: any) {

    const inputDescription = this.description.value
    console.log('inputDescription', inputDescription);


    this._todoItemService.postDetail(inputDescription, this.listId).subscribe((response: any) => {
      this.newDescription = response
      // this.newObj = { titre: this.listDatas, detail: this.newDescription }
      console.log(this.newDescription);


      this._todoItemService.getAllDetails(this.listId).subscribe((getDatas: any) => {
        console.log('ici  get datas', getDatas);

        this.descriptionArray = getDatas;
        console.log('description envoyée au back', this.descriptionArray);
      })


      //! reset pour supprimer la valeur de l'input une fois envoyée
      this.description.reset()
      console.warn('response', response);

    })
  }

  // ! on passe en param un id qd on veut faire une action sur qqch
  // ! de spécifique (id ou autre param)

  onDelete(id: any) {
    this._todoItemService.deleteDetail(id).subscribe((response: any) => {
      console.log(response);

      this._todoItemService.getAllDetails(this.listId).subscribe((datas: any) => {
        console.log(datas);
        this.descriptionArray = datas
      })
    })

  }


  onCancel() {
    this._dialogRef.close()
  }
}
