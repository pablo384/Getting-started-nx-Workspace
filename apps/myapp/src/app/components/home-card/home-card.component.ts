import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

interface TODO {
  title: string,
  description: string,
  complete: boolean
}
@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  formTodo: FormGroup;

  TODO: TODO[];
  TODO = [
    {
      "title": "titulo 1",
      "description": "esto es una breve descripcion",
      "complete":false
    },{
      "title": "titulo 1",
      "description": "esto es una breve descripcion",
      "complete":true
    },{
      "title": "titulo 1",
      "description": "esto es una breve descripcion",
      "complete":false
    }
  ];

  constructor(private fb:FormBuilder) {
    this.createForm();
  }
  createForm(){
    this.formTodo = this.fb.group({
      title: '',
      description: '',
      complete: false
    })
  }

  ngOnInit() {
  }

  addTODO(todo){
    this.TODO = [...this.TODO, todo];
  }
  completeTODO(index){
    this.TODO = this.TODO.map((val, i) => {
      if (i === index) val.complete = true;
      return val;
    })
  }

  removeTODO(index){
    this.TODO = this.TODO.filter((val, i)=>{
      return i !== index;
    })
  }

}




