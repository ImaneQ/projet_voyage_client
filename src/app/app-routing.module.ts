import { RouterModule, Routes } from '@angular/router';

import { AddBookmarkComponent } from './modal/add-bookmark/add-bookmark.component';
import { AuthGuard } from './guards/auth.guards';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './components/overview/overview.component';
import { RegisterComponent } from './components/register/register.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] },
  { path: 'bookmarks', component: BookmarksComponent, canActivate: [AuthGuard] },
  { path: 'bookmarks/add', component: AddBookmarkComponent, canActivate: [AuthGuard] }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
