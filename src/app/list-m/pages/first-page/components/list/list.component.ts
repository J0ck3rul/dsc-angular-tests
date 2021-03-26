import { DialogComponent } from './components/dialog/dialog.component';
import { IUser } from './../../first-page.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;

  @Input() users = [];
  @Input() isEditable = false;
  @Input() isEditing = false;
  @Input() title = "";

  @Output() onEditUser = new EventEmitter<IUser>();
  @Output() onDeleteUser = new EventEmitter<IUser>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onEdit(user: IUser): void {
    this.onEditUser.emit(user);

  }

  onDelete(user: IUser): void {
    let answer = false;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { answer: answer }
    });

    dialogRef.afterClosed().subscribe(result => {
      result ?
        this.onDeleteUser.emit(user) : null;
    });

  }

}
