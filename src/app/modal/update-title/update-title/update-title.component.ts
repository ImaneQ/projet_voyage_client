import { TodoService } from './../../../services/todo.service';
import { FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-title',
  templateUrl: './update-title.component.html',
  styleUrls: ['./update-title.component.scss']
})
export class UpdateTitleComponent implements OnInit {

  updateTitle = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public titleDatas: any,
    private _dialogRef: MatDialogRef<any>,
    private _todoService: TodoService) { }

  ngOnInit(): void {

    console.warn('titledatas', this.titleDatas);

    this.updateTitle.setValue(this.titleDatas.list_title)
  }


  onClick(titre: any) {

    console.log(titre);
    console.log('this.titleDatas.todo_list_id', this.titleDatas.todo_list_id);
    console.log('titre.updateTitle.value', titre.updateTitle.value);

    this._todoService.updateList(this.titleDatas.todo_list_id, titre.updateTitle.value).subscribe((response: any) => {

      console.warn('response', response);
      this._dialogRef.close(
        {
          todo_list_id: this.titleDatas.todo_list_id,
          list_title: titre.updateTitle.value
        }
      )

      window.location.href = "/todos";
    })
  }

  onCancel() {
    this._dialogRef.close()
  }


}
