import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddformComponent } from './addform/addform.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { NotesComponent } from './notes/notes.component';
import { GlowtextComponent } from './glowtext/glowtext.component';


@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    ListTodoComponent,
    ButtonComponent,
    NotesComponent,
    GlowtextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
