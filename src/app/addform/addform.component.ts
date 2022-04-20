import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  worktodo = ''
  arrayTodoList = [
    { id: 1, todo: 'Learn', done: true },
  ]
  romoveid(id: number) {    
    const index = this.arrayTodoList.findIndex((elm) => elm.id === id);
    this.arrayTodoList.splice(index, 1);
  }
  toggel(id: number) {  
    this.arrayTodoList[id].done = !this.arrayTodoList[id].done
  }
  getID(){
    const idRanDom = Math.floor(Math.random() * 100)
    const newArr = this.arrayTodoList.map(elm=>elm.id);
    const dupID = newArr.indexOf(idRanDom)
    if(dupID > 0){
      this.getID()
    }else{
      return idRanDom
    }
  }
  addnew() {
    if (this.worktodo !== '') {
      const newId = this.getID();
      const newElm = {
        id: newId as number,
        todo: this.worktodo,
        done: false
      }
      this.arrayTodoList.push(newElm);
      this.worktodo = ''
    }
  }

}
