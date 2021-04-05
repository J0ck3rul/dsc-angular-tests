import { DialogComponent } from './components/dialog/dialog.component';
import { IUser } from './../../first-page.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  penIcon = faPen;
  deleteIcon = faTrash;
  addIcon = faPlus;

  users: IUser[] = [];
  isEditable = true;
  isEditing = false;
  title = "";

  constructor(public dialog: MatDialog) {
    this.users = JSON.parse(localStorage.getItem("list") || '[]');
  }

  ngOnInit(): void {
  }

  onEdit(user: IUser): void {

  }

  onDelete(user: IUser): void {
    let answer = false;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { answer: answer }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let userIndex = this.users.indexOf(user);
        this.users.splice(userIndex, 1);
        localStorage.setItem("list", JSON.stringify(this.users));
      }
    });

  }

}
