import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormGroupDirective,
  FormGroupName
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInput, MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DetailComponent } from './components/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoginModalComponent } from './login-modal/login-modal/login-modal.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ModalComponent } from './components/modal/modal.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PrintModalComponent } from './modal/print-modal/print-modal/print-modal.component';
import { RegisterComponent } from './components/register/register.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { TitleModalComponent } from './modal/title-modal/title-modal.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoModel } from 'src/app/models/todo.model';
import { TodosComponent } from './components/todos/todos.component';
import { UpdateTitleComponent } from './modal/update-title/update-title/update-title.component';
import { httpInterceptorProviders } from './interceptors/index';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OverviewComponent,
    ModalComponent,
    TodosComponent,
    DetailComponent,
    TodoItemComponent,
    TabsComponent,
    LoginModalComponent,
    TitleModalComponent,
    PrintModalComponent,
    UpdateTitleComponent,
    BookmarksComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    TextFieldModule,
    MatToolbarModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    HttpClientModule,
    CdkAccordionModule,
    MatDialogModule,
    MatExpansionModule

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
