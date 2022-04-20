import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  @Input() arrayTodoList: any

  @Output() myClick = new EventEmitter<number>();

  @Output() ChangeDoneUnDone = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  toggelDoneUnDone(record: number) {    
    this.ChangeDoneUnDone.emit(record-1)
  }
  DeleteToDo(id: number) {
    this.myClick.emit(id)
  }
}
