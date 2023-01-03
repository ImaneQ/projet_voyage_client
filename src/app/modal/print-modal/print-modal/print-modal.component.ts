import { Component, Inject, OnInit } from '@angular/core';
import { TodoItemService } from './../../../services/todo-item.service';
import { TodoService } from 'src/app/services/todo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as html2pdf from 'html2pdf.js'
@Component({
  selector: 'app-print-modal',
  templateUrl: './print-modal.component.html',
  styleUrls: ['./print-modal.component.scss']
})
export class PrintModalComponent implements OnInit {
  descArray!: any[];
  titleInfos!: any[];
  constructor(private _todoItemService: TodoItemService,
    private _todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public datas: any,
    private _dialogRef: MatDialogRef<any>,) { }

  ngOnInit(): void {

    console.log('datas for modal', this.datas);
    this.titleInfos = this.datas;
    console.log('this.titleInfos', this.titleInfos);

    this._todoItemService.getAllDetails(this.datas.todo_list_id).subscribe((response: any) => {
      console.log(response);
      this.descArray = response
    })
  }



  download() {
    var element = document.getElementById('table');
    var opt = {
      margin: 1,
      filename: 'output.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
  }

  closeModal() {
    this._dialogRef.close()
  }
}
