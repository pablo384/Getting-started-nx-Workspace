import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CardComponent } from './components/card/card.component';

const ROUTES = [
  {
    path: '',
    component: PerfilComponent
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
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' })
  ],
  declarations: [AppComponent, PerfilComponent, CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
