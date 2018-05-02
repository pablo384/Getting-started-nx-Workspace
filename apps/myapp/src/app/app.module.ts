import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CardComponent } from './components/card/card.component';
import {counterReducer} from "./reducers/counter";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import { HomeCardComponent } from './components/home-card/home-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PushNotificationModule} from "ng-push-notification";

const ROUTES = [
  {
    path: '',
    component: HomeCardComponent
  },
  {
    path: 'card',
    component: CardComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    StoreModule.forRoot({ count: counterReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' }),
    PushNotificationModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [AppComponent, PerfilComponent, CardComponent, HomeCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
