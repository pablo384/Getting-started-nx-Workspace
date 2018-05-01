import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {select, Store} from "@ngrx/store";
import {DECREMENT, INCREMENT, RESET} from "../../reducers/counter";
interface AppState {
  count: number;
}
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
    console.log(this.store);
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

}
