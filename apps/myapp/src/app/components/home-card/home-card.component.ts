import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PushNotificationService} from "ng-push-notification";
import {Subject} from "rxjs/Subject";
import {delay} from "rxjs/operator/delay";

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
  click$ = new Subject<{event: any, notification: Notification}>();
  // TODO: TODO[];
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

  constructor(private fb:FormBuilder,
              private pushNotification: PushNotificationService) {
    this.createForm();
    pushNotification.click$.subscribe(value => {
      // value.preventDefault();
      window.open('http://localhost:4200/card','_blank');
    })

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
  showPush() {
    Notification.requestPermission((result) =>{

      if (result === 'denied'){
        // alert(result);
      } else if (result==='default'){
        // alert(result);
      }
      if (result==='granted'){
        // alert(result);
        // this.pushNotification.show(
        //   'Show me that message!',
        //   {requireInteraction:true},
        //    // close delay.
        // );
        // Or simply this:
        setTimeout(()=>{this.pushNotification.show('And that too!');}, 5000);

      }
    });
  }

  ploplo(){
    alert('esto fue por cic');
  }

  async showAnotherPush() {
    const notification = await this.pushNotification.show('Returns promise with Notification object.');
    setTimeout(() => notification.close(), 1000);
  }

}




